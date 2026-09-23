const SCENES = {
  harry: {
    title: "When Harry Met Sally (1989)",
    base: "videos/demo_scenes/harry",
  },
  moonrise: {
    title: "Moonrise Kingdom (2012)",
    base: "videos/demo_scenes/moonrise",
  },
  sunshine: {
    title: "Eternal Sunshine (2004)",
    base: "videos/demo_scenes/sunshine",
  },
  verdict: {
    title: "The Verdict (1982)",
    base: "videos/demo_scenes/verdict",
  },
};

const SHOTS = {
  "two-shot": { label: "Source" },
  "ots-a": { label: "OTS A" },
  "ots-b": { label: "OTS B" },
  "cu-a": { label: "CU A" },
  "cu-b": { label: "CU B" },
};

const videoEl = document.getElementById("monitor-video");
const stillEl = document.getElementById("monitor-still");
const hudCode = document.getElementById("hud-code");

let currentScene = "harry";
let currentShot = "two-shot";
let wantPlay = true;
let holdTime = 0;
let loadToken = 0;

function sceneBase() {
  return SCENES[currentScene].base;
}

function shotVideo(id) {
  return `${sceneBase()}/${id}.mp4?v=4s`;
}

function shotStill(id) {
  if (id === "two-shot") return `${sceneBase()}/source.jpg`;
  return `${sceneBase()}/${id}.png`;
}

function syncPaused() {
  const screen = document.getElementById("monitor-screen");
  const paused = !videoEl || videoEl.paused;
  screen?.classList.toggle("is-paused", paused);
}

function showStill(token) {
  if (!stillEl) return;
  stillEl.hidden = false;
  stillEl.src = shotStill(currentShot);
}

function loadMedia() {
  const token = ++loadToken;
  const shot = SHOTS[currentShot];
  if (hudCode) hudCode.textContent = shot.label;
  document.querySelectorAll(".cam").forEach((cam) => {
    cam.classList.toggle("active", cam.dataset.shot === currentShot);
  });
  document.querySelectorAll(".cone").forEach((cone) => {
    cone.classList.toggle("show", cone.dataset.shot === currentShot);
  });
  showStill(token);
  if (!videoEl) return;
  const src = shotVideo(currentShot);
  videoEl.hidden = false;
  videoEl.poster = shotStill(currentShot);
  videoEl.muted = true;
  const onReady = () => {
    if (token !== loadToken) return;
    try {
      if (holdTime) videoEl.currentTime = Math.min(holdTime, videoEl.duration || holdTime);
    } catch (_) {}
    if (wantPlay) videoEl.play().catch(() => { wantPlay = false; }).finally(syncPaused);
    else syncPaused();
  };
  videoEl.onloadeddata = onReady;
  videoEl.onerror = () => {
    if (token !== loadToken) return;
    wantPlay = false;
    syncPaused();
  };
  if (videoEl.getAttribute("src") !== src) {
    videoEl.src = src;
    videoEl.load();
  } else if (videoEl.readyState >= 2) {
    onReady();
  }
}

function setShot(id) {
  if (videoEl && Number.isFinite(videoEl.currentTime)) holdTime = videoEl.currentTime;
  currentShot = id;
  loadMedia();
}

function setScene(id) {
  if (!SCENES[id]) return;
  currentScene = id;
  holdTime = 0;
  document.querySelectorAll(".scene-tab").forEach((tab) => {
    const on = tab.dataset.scene === id;
    tab.classList.toggle("on", on);
    tab.setAttribute("aria-selected", on ? "true" : "false");
  });
  setShot(currentShot);
}

document.querySelectorAll(".cam").forEach((cam) => {
  const activate = () => setShot(cam.dataset.shot);
  cam.addEventListener("click", activate);
  cam.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  });
});

document.querySelectorAll(".scene-tab").forEach((tab) => {
  tab.addEventListener("click", () => setScene(tab.dataset.scene));
});

document.getElementById("monitor-screen")?.addEventListener("click", () => {
  if (!videoEl) return;
  if (videoEl.paused) {
    wantPlay = true;
    videoEl.muted = false;
    videoEl.play().catch(() => {
      videoEl.muted = true;
      videoEl.play().catch(() => { wantPlay = false; });
    }).finally(syncPaused);
  } else {
    wantPlay = false;
    videoEl.pause();
    syncPaused();
  }
});

if (videoEl) {
  videoEl.addEventListener("play", syncPaused);
  videoEl.addEventListener("pause", syncPaused);
  videoEl.addEventListener("playing", syncPaused);
}

setScene("harry");

const shotIds = Object.keys(SHOTS);
document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA", "BUTTON"].includes(document.activeElement?.tagName)) return;
  const i = shotIds.indexOf(currentShot);
  if (e.key === "ArrowRight") setShot(shotIds[(i + 1) % shotIds.length]);
  if (e.key === "ArrowLeft") setShot(shotIds[(i - 1 + shotIds.length) % shotIds.length]);
});

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cell(src, caption, kind) {
  const poster = src.replace(/\.mp4$/i, ".jpg");
  const mute = kind === "source" ? "" : "muted ";
  return `<figure class="compare-cell ${kind}">
    <div class="frame">
      <video data-src="${src}" poster="${poster}" ${mute}playsinline preload="none"></video>
    </div>
    <figcaption>${caption}</figcaption>
  </figure>`;
}

function bindRow(row) {
  const videos = [...row.querySelectorAll("video")];
  const btn = row.querySelector(".play-row");
  const setPressed = (on) => btn?.setAttribute("aria-pressed", on ? "true" : "false");
  if (btn) btn.textContent = "Play";

  const arm = (v) => {
    if (!v.dataset.src || v.getAttribute("src")) return;
    v.src = v.dataset.src;
    v.preload = "auto";
  };

  const playAll = () => {
    videos.forEach((v) => {
      arm(v);
      v.currentTime = 0;
      const start = () => v.play().catch(() => {});
      if (v.readyState >= 2) start();
      else v.addEventListener("canplay", start, { once: true });
    });
    setPressed(true);
    if (btn) btn.textContent = "Pause";
  };

  const pauseAll = () => {
    videos.forEach((v) => v.pause());
    setPressed(false);
    if (btn) btn.textContent = "Play";
  };

  btn?.addEventListener("click", () => {
    const playing = videos.some((v) => !v.paused && v.readyState > 0 && v.getAttribute("src"));
    if (playing) pauseAll();
    else playAll();
  });
  videos.forEach((v) => {
    v.addEventListener("play", () => {
      videos.forEach((o) => {
        if (o !== v) {
          arm(o);
          if (o.paused) o.play().catch(() => {});
        }
      });
      setPressed(true);
      if (btn) btn.textContent = "Pause";
    });
    v.addEventListener("pause", () => {
      if (videos.every((o) => o.paused)) {
        setPressed(false);
        if (btn) btn.textContent = "Play";
      }
    });
  });
}

fetch("js/compare.json?v=yt")
  .then((r) => r.json())
  .then((clips) => {
    const host = document.getElementById("compare-list");
    if (!host) return;
    host.innerHTML = clips
      .map(
        (c) => `<article class="compare-row">
      <div class="compare-head">
        <div class="compare-meta">
          <h3>${escapeHtml(c.label)}</h3>
          <a class="compare-credit" href="${escapeHtml(c.youtube_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.youtube_title)}</a>
        </div>
        <button type="button" class="play-row" aria-pressed="false">Play</button>
      </div>
      <div class="compare-grid">
        ${cell(c.source, "Source", "source")}
        ${cell(c.ours, "Ours", "ours")}
        ${cell(c.wan3, "WAN3", "wan3")}
        ${cell(c.h3, "H3", "h3")}
      </div>
    </article>`
      )
      .join("");
    host.querySelectorAll(".compare-row").forEach(bindRow);
  })
  .catch(() => {});

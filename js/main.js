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
    title: "Eternal Sunshine of the Spotless Mind (2004)",
    base: "videos/demo_scenes/sunshine",
  },
  verdict: {
    title: "The Verdict (1982)",
    base: "videos/demo_scenes/verdict",
  },
  lalaland: {
    title: "La La Land (2016)",
    base: "videos/demo_scenes/lalaland",
  },
  hsm: {
    title: "High School Musical 2 (2007)",
    base: "videos/demo_scenes/hsm",
  },
  panda: {
    title: "Kung Fu Panda (2008)",
    base: "videos/demo_scenes/panda",
  },
  sound: {
    title: "The Sound of Music — Lesson (1965)",
    base: "videos/demo_scenes/sound",
    plot: "mfs",
  },
  stagebw: {
    title: "West Side Story (1961)",
    base: "videos/demo_scenes/stagebw",
  },
  singin1: {
    title: "Singin' in the Rain — Mic (1952)",
    base: "videos/demo_scenes/singin1",
  },
  singin2: {
    title: "Singin' in the Rain — Duet (1952)",
    base: "videos/demo_scenes/singin2",
    plot: "aerial",
    shots: ["two-shot", "ots-a", "ots-b"],
  },
  singin3: {
    title: "Singin' in the Rain — Piano (1952)",
    base: "videos/demo_scenes/singin3",
  },
  up1: {
    title: "Up (2009)",
    base: "videos/demo_scenes/up1",
  },
  twinpeaks: {
    title: "Twin Peaks (1990)",
    base: "videos/demo_scenes/twinpeaks",
  },
  couch1: {
    title: "Singin' in the Rain — Good Morning (1952)",
    base: "videos/demo_scenes/couch1",
    plot: "aerial",
    shots: ["two-shot", "ots-a", "ots-b"],
  },
  couch2: {
    title: "Breakfast at Tiffany's (1961)",
    base: "videos/demo_scenes/couch2",
  },
  soundgroup: {
    title: "The Sound of Music — Group (1965)",
    base: "videos/demo_scenes/soundgroup",
    plot: "mfs",
  },
  hills1: {
    title: "The Sound of Music — Hills Stream (1965)",
    base: "videos/demo_scenes/hills1",
    plot: "stream",
    shots: ["two-shot", "ots-a", "ots-b", "cu-a"],
  },
  hills2: {
    title: "The Sound of Music — Hills Ridge (1965)",
    base: "videos/demo_scenes/hills2",
    plot: "ridge",
    shots: ["two-shot", "ots-a", "ots-b", "cu-a"],
  },
  favorite: {
    title: "The Sound of Music — My Favorite Things (1965)",
    base: "videos/demo_scenes/favorite",
    plot: "cu",
    shots: ["two-shot", "cu-a", "cu-b"],
  },
  edelweiss: {
    title: "The Sound of Music — Edelweiss (1965)",
    base: "videos/demo_scenes/edelweiss",
    plot: "mcu",
    shots: ["two-shot", "cu-a", "cu-b"],
  },
};

const SHOTS = {
  "two-shot": { label: "Source" },
  "ots-a": { label: "OTS A" },
  "ots-b": { label: "OTS B" },
  "cu-a": { label: "CU A" },
  "cu-b": { label: "CU B" },
};

const PLOT_LAYOUTS = {
  default: {
    legend: "<strong>OTS</strong> over-the-shoulder &nbsp;·&nbsp; <strong>CU</strong> close-up",
    labels: { "two-shot": "Source", "ots-a": "OTS A", "ots-b": "OTS B", "cu-a": "CU A", "cu-b": "CU B" },
    subjects: { a: [168, 170], b: [232, 170], showB: true },
    cams: {
      "two-shot": { cx: 200, cy: 292, tx: 216, ty: 296, anchor: "start", rot: -90, scale: 1.12 },
      "ots-b": { cx: 88, cy: 236, tx: 74, ty: 240, anchor: "end", rot: -24.6 },
      "cu-b": { cx: 128, cy: 208, tx: 114, ty: 212, anchor: "end", rot: -20.1 },
      "ots-a": { cx: 312, cy: 236, tx: 326, ty: 240, anchor: "start", rot: -155.4 },
      "cu-a": { cx: 272, cy: 208, tx: 286, ty: 212, anchor: "start", rot: -159.9 },
    },
    cones: {
      "two-shot": "M125 129 L200 292 L275 129",
      "ots-b": "M186 148 L88 236 L230 192",
      "cu-b": "M263 124 L128 208 L285 186",
      "ots-a": "M214 148 L312 236 L170 192",
      "cu-a": "M115 186 L272 208 L137 124",
    },
  },
  mcu: {
    legend: "<strong>MCU</strong> medium close-up",
    labels: { "two-shot": "Source", "cu-a": "MCU A", "cu-b": "MCU B" },
    subjects: { a: [168, 170], b: [232, 170], showB: true },
    cams: {
      "two-shot": { cx: 200, cy: 292, tx: 216, ty: 296, anchor: "start", rot: -90, scale: 1.12 },
      "cu-b": { cx: 128, cy: 208, tx: 114, ty: 212, anchor: "end", rot: -20.1 },
      "cu-a": { cx: 272, cy: 208, tx: 286, ty: 212, anchor: "start", rot: -159.9 },
    },
    cones: {
      "two-shot": "M125 129 L200 292 L275 129",
      "cu-b": "M263 124 L128 208 L285 186",
      "cu-a": "M115 186 L272 208 L137 124",
    },
  },
  cu: {
    legend: "<strong>CU</strong> close-up",
    labels: { "two-shot": "Source", "cu-a": "CU A", "cu-b": "CU B" },
    subjects: { a: [168, 170], b: [232, 170], showB: true },
    cams: {
      "two-shot": { cx: 200, cy: 292, tx: 216, ty: 296, anchor: "start", rot: -90, scale: 1.12 },
      "cu-b": { cx: 128, cy: 208, tx: 114, ty: 212, anchor: "end", rot: -20.1 },
      "cu-a": { cx: 272, cy: 208, tx: 286, ty: 212, anchor: "start", rot: -159.9 },
    },
    cones: {
      "two-shot": "M125 129 L200 292 L275 129",
      "cu-b": "M263 124 L128 208 L285 186",
      "cu-a": "M115 186 L272 208 L137 124",
    },
  },
  mfs: {
    legend: "<strong>OTS</strong> over-the-shoulder &nbsp;·&nbsp; <strong>MFS</strong> medium-full",
    labels: { "two-shot": "Source", "ots-a": "OTS A", "ots-b": "OTS B", "cu-a": "MFS A", "cu-b": "MFS B" },
    subjects: { a: [168, 170], b: [232, 170], showB: true },
    cams: {
      "two-shot": { cx: 200, cy: 292, tx: 216, ty: 296, anchor: "start", rot: -90, scale: 1.12 },
      "ots-b": { cx: 88, cy: 236, tx: 74, ty: 240, anchor: "end", rot: -24.6 },
      "cu-b": { cx: 128, cy: 208, tx: 114, ty: 212, anchor: "end", rot: -20.1 },
      "ots-a": { cx: 312, cy: 236, tx: 326, ty: 240, anchor: "start", rot: -155.4 },
      "cu-a": { cx: 272, cy: 208, tx: 286, ty: 212, anchor: "start", rot: -159.9 },
    },
    cones: {
      "two-shot": "M125 129 L200 292 L275 129",
      "ots-b": "M186 148 L88 236 L230 192",
      "cu-b": "M263 124 L128 208 L285 186",
      "ots-a": "M214 148 L312 236 L170 192",
      "cu-a": "M115 186 L272 208 L137 124",
    },
  },
  aerial: {
    legend: "<strong>Bird's-eye</strong> from above &nbsp;·&nbsp; <strong>Profile</strong> side view &nbsp;·&nbsp; <strong>CU</strong> close-up",
    labels: { "two-shot": "Source", "ots-a": "Bird's-eye", "ots-b": "Profile", "cu-a": "CU A", "cu-b": "CU B" },
    subjects: { a: [168, 170], b: [232, 170], showB: true },
    cams: {
      "two-shot": { cx: 200, cy: 292, tx: 216, ty: 296, anchor: "start", rot: -90, scale: 1.12 },
      "ots-a": { cx: 200, cy: 102, tx: 214, ty: 96, anchor: "start", rot: 90 },
      "ots-b": { cx: 42, cy: 170, tx: 42, ty: 154, anchor: "middle", rot: 0 },
      "cu-b": { cx: 128, cy: 208, tx: 114, ty: 212, anchor: "end", rot: -20.1 },
      "cu-a": { cx: 272, cy: 208, tx: 286, ty: 212, anchor: "start", rot: -159.9 },
    },
    cones: {
      "two-shot": "M125 129 L200 292 L275 129",
      "ots-a": "M150 195 L200 102 L250 195",
      "ots-b": "M210 130 L42 170 L210 210",
      "cu-b": "M263 124 L128 208 L285 186",
      "cu-a": "M115 186 L272 208 L137 124",
    },
  },
  bev_cu: {
    legend: "<strong>Bird's-eye</strong> from above &nbsp;·&nbsp; <strong>CU</strong> close-up",
    labels: { "two-shot": "Source", "ots-a": "Bird's-eye", "ots-b": "Profile", "cu-a": "Close-up", "cu-b": "CU B" },
    subjects: { a: [200, 170], b: [232, 170], showB: false },
    cams: {
      "two-shot": { cx: 200, cy: 292, tx: 216, ty: 296, anchor: "start", rot: -90, scale: 1.12 },
      "ots-a": { cx: 200, cy: 102, tx: 214, ty: 96, anchor: "start", rot: 90 },
      "cu-a": { cx: 272, cy: 208, tx: 286, ty: 212, anchor: "start", rot: -159.9 },
    },
    cones: {
      "two-shot": "M125 129 L200 292 L275 129",
      "ots-a": "M150 195 L200 102 L250 195",
      "cu-a": "M115 186 L272 208 L137 124",
    },
  },
  stream: {
    legend: "<strong>Bird's-eye</strong> from above &nbsp;·&nbsp; <strong>Profile MFS</strong> side view &nbsp;·&nbsp; <strong>CU</strong> close-up",
    labels: { "two-shot": "Source", "ots-a": "Bird's-eye", "ots-b": "Profile MFS", "cu-a": "Close-up" },
    subjects: { a: [200, 170], b: [232, 170], showB: false },
    cams: {
      "two-shot": { cx: 200, cy: 292, tx: 216, ty: 296, anchor: "start", rot: -90, scale: 1.12 },
      "ots-a": { cx: 200, cy: 102, tx: 214, ty: 96, anchor: "start", rot: 90 },
      "ots-b": { cx: 42, cy: 170, tx: 42, ty: 154, anchor: "middle", rot: 0 },
      "cu-a": { cx: 272, cy: 208, tx: 286, ty: 212, anchor: "start", rot: -159.9 },
    },
    cones: {
      "two-shot": "M125 129 L200 292 L275 129",
      "ots-a": "M150 195 L200 102 L250 195",
      "ots-b": "M210 130 L42 170 L210 210",
      "cu-a": "M115 186 L272 208 L137 124",
    },
  },
  ridge: {
    legend: "<strong>Bird's-eye</strong> from above &nbsp;·&nbsp; <strong>Profile</strong> side view &nbsp;·&nbsp; <strong>CU</strong> close-up",
    labels: { "two-shot": "Source", "ots-a": "Bird's-eye", "ots-b": "Profile", "cu-a": "Close-up" },
    subjects: { a: [200, 170], b: [232, 170], showB: false },
    cams: {
      "two-shot": { cx: 200, cy: 292, tx: 216, ty: 296, anchor: "start", rot: -90, scale: 1.12 },
      "ots-a": { cx: 200, cy: 102, tx: 214, ty: 96, anchor: "start", rot: 90 },
      "ots-b": { cx: 42, cy: 170, tx: 42, ty: 154, anchor: "middle", rot: 0 },
      "cu-a": { cx: 108, cy: 170, tx: 108, ty: 154, anchor: "middle", rot: 0 },
    },
    cones: {
      "two-shot": "M125 129 L200 292 L275 129",
      "ots-a": "M150 195 L200 102 L250 195",
      "ots-b": "M210 130 L42 170 L210 210",
      "cu-a": "M210 140 L108 170 L210 200",
    },
  },
};

function currentLabels() {
  const key = SCENES[currentScene]?.plot || "default";
  return PLOT_LAYOUTS[key]?.labels || PLOT_LAYOUTS.default.labels;
}

function applyPlotLayout() {
  const key = SCENES[currentScene]?.plot || "default";
  const layout = PLOT_LAYOUTS[key] || PLOT_LAYOUTS.default;
  const legend = document.getElementById("demo-legend");
  if (legend) legend.innerHTML = layout.legend;
  const allowed = SCENES[currentScene]?.shots || Object.keys(SHOTS);
  document.querySelectorAll(".cam, .cone").forEach((el) => {
    el.style.display = allowed.includes(el.dataset.shot) ? "" : "none";
  });

  const subjA = document.getElementById("plot-subj-a");
  const subjAl = document.getElementById("plot-subj-a-label");
  const subjB = document.getElementById("plot-subj-b");
  const subjBl = document.getElementById("plot-subj-b-label");
  if (subjA && layout.subjects) {
    subjA.setAttribute("cx", layout.subjects.a[0]);
    subjA.setAttribute("cy", layout.subjects.a[1]);
    subjAl?.setAttribute("x", layout.subjects.a[0]);
    subjAl?.setAttribute("y", layout.subjects.a[1] + 4);
  }
  if (subjB && layout.subjects) {
    const show = layout.subjects.showB !== false;
    subjB.style.display = show ? "" : "none";
    if (subjBl) subjBl.style.display = show ? "" : "none";
    if (show) {
      subjB.setAttribute("cx", layout.subjects.b[0]);
      subjB.setAttribute("cy", layout.subjects.b[1]);
      subjBl?.setAttribute("x", layout.subjects.b[0]);
      subjBl?.setAttribute("y", layout.subjects.b[1] + 4);
    }
  }

  document.querySelectorAll(".cam").forEach((cam) => {
    const id = cam.dataset.shot;
    const pos = layout.cams[id];
    if (!pos) return;
    const icon = cam.querySelector(".cam-icon");
    const hit = cam.querySelector(".cam-hit");
    const text = cam.querySelector("text.cam-label");
    if (icon) {
      const rot = pos.rot ?? 0;
      const sc = pos.scale ?? 1;
      icon.setAttribute("transform", `translate(${pos.cx},${pos.cy}) rotate(${rot}) scale(${sc})`);
    }
    if (hit) {
      const hitR = window.matchMedia("(max-width: 800px)").matches ? 28 : 16;
      hit.setAttribute("cx", pos.cx);
      hit.setAttribute("cy", pos.cy);
      hit.setAttribute("r", hitR);
    }
    if (text) {
      text.setAttribute("x", pos.tx);
      text.setAttribute("y", pos.ty);
      text.setAttribute("text-anchor", pos.anchor);
      text.textContent = layout.labels[id] || id;
    }
    cam.setAttribute("aria-label", layout.labels[id] || id);
  });
  document.querySelectorAll(".cone").forEach((cone) => {
    const shot = cone.dataset.shot;
    const d = layout.cones[shot];
    if (d) cone.setAttribute("d", d);
    const grad = document.getElementById(`cone-grad-${shot}`);
    if (grad && d) {
      const m = d.match(/M(-?[\d.]+) (-?[\d.]+) L(-?[\d.]+) (-?[\d.]+) L(-?[\d.]+) (-?[\d.]+)/);
      if (m) {
        const x1 = +m[1], y1 = +m[2], cx = +m[3], cy = +m[4], x2 = +m[5], y2 = +m[6];
        grad.setAttribute("x1", cx);
        grad.setAttribute("y1", cy);
        grad.setAttribute("x2", (x1 + x2) / 2);
        grad.setAttribute("y2", (y1 + y2) / 2);
      }
    }
  });
}

const videoEl = document.getElementById("monitor-video");
const stillEl = document.getElementById("monitor-still");
const hudCode = document.getElementById("hud-code");

let currentScene = "harry";
let currentShot = "two-shot";
let wantPlay = false;
let holdTime = 0;
let loadToken = 0;
const DEMO_FPS = 25;

function frameCount(v) {
  if (!v || !Number.isFinite(v.duration) || v.duration <= 0) return 0;
  return Math.max(1, Math.round(v.duration * DEMO_FPS));
}

function timeToFrame(v) {
  const n = frameCount(v);
  if (!n) return 0;
  return Math.max(0, Math.min(n - 1, Math.round((v.currentTime || 0) * DEMO_FPS)));
}

function frameToTime(v, frame) {
  const t = Math.max(0, frame / DEMO_FPS);
  if (!v || !Number.isFinite(v.duration) || v.duration <= 0) return t;
  return Math.min(Math.max(v.duration - 1 / DEMO_FPS, 0), t);
}

function sceneBase() {
  return SCENES[currentScene].base;
}

const ASSET = "v=fix113";
const DEMO_CONFIG = window.DEMO_CONFIG || null;

function shotVideo(id) {
  return `${sceneBase()}/${id}.mp4?${ASSET}`;
}

function shotStill(id) {
  if (id === "two-shot") return `${sceneBase()}/source.jpg?${ASSET}`;
  return `${sceneBase()}/${id}.png?${ASSET}`;
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
  if (hudCode) hudCode.textContent = currentLabels()[currentShot] || shot.label;
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
  videoEl.muted = !wantPlay;
  const onReady = () => {
    if (token !== loadToken) return;
    try {
      videoEl.currentTime = Math.min(holdTime, videoEl.duration || holdTime);
    } catch (_) {}
    if (wantPlay) {
      videoEl.muted = false;
      videoEl.play().catch(() => {}).finally(syncPaused);
    } else {
      videoEl.pause();
      syncPaused();
    }
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
  syncMobileShotBar();
}

let mobileShotBar = null;

function syncMobileShotBar() {
  const monitor = document.querySelector(".monitor");
  if (!monitor) return;
  const mobile = window.matchMedia("(max-width: 800px)").matches;
  if (!mobile) {
    mobileShotBar?.remove();
    mobileShotBar = null;
    return;
  }
  if (!mobileShotBar) {
    mobileShotBar = document.createElement("div");
    mobileShotBar.className = "mobile-shot-bar";
    mobileShotBar.setAttribute("role", "tablist");
    mobileShotBar.setAttribute("aria-label", "Camera view");
    const stack = monitor.querySelector(".monitor-stack");
    const caption = monitor.querySelector("#monitor-caption");
    if (stack && caption) stack.insertBefore(mobileShotBar, caption);
    else monitor.appendChild(mobileShotBar);
  }
  const allowed = SCENES[currentScene]?.shots || Object.keys(SHOTS);
  const labels = currentLabels();
  mobileShotBar.innerHTML = allowed
    .map(
      (id) =>
        `<button type="button" class="mobile-shot${id === currentShot ? " on" : ""}" role="tab" aria-selected="${
          id === currentShot ? "true" : "false"
        }" data-shot="${id}">${labels[id] || SHOTS[id]?.label || id}</button>`
    )
    .join("");
  mobileShotBar.querySelectorAll(".mobile-shot").forEach((btn) => {
    btn.addEventListener("click", () => setShot(btn.dataset.shot));
  });
}

function setShot(id) {
  const allowed = SCENES[currentScene]?.shots || Object.keys(SHOTS);
  if (!allowed.includes(id)) id = allowed[0];
  if (videoEl && Number.isFinite(videoEl.currentTime)) holdTime = videoEl.currentTime;
  currentShot = id;
  loadMedia();
}

function setScene(id) {
  if (!SCENES[id]) return;
  currentScene = id;
  holdTime = 0;
  wantPlay = false;
  if (videoEl) {
    videoEl.pause();
    videoEl.muted = true;
  }
  document.querySelectorAll(".scene-tab").forEach((tab) => {
    const on = tab.dataset.scene === id;
    tab.classList.toggle("on", on);
    tab.setAttribute("aria-selected", on ? "true" : "false");
  });
  applyPlotLayout();
  updateMonitorCaption();
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

function updateMonitorCaption() {
  const caption = document.getElementById("monitor-caption");
  if (!caption) return;
  caption.textContent = SCENES[currentScene]?.title || "";
}

function initSceneTabThumbs() {
  document.querySelectorAll(".scene-tab[data-scene]").forEach((tab) => {
    const scene = SCENES[tab.dataset.scene];
    if (!scene || tab.querySelector(".scene-tab-thumb")) return;
    const label = tab.textContent.trim();
    tab.textContent = "";
    tab.classList.add("has-thumb");
    tab.setAttribute("aria-label", label);
    tab.setAttribute("title", label);
    const img = document.createElement("img");
    img.className = "scene-tab-thumb";
    img.alt = "";
    img.src = `${scene.base}/source.jpg?${ASSET}`;
    img.loading = "lazy";
    img.decoding = "async";
    tab.appendChild(img);
    const span = document.createElement("span");
    span.className = "scene-tab-label-text";
    span.textContent = label;
    tab.appendChild(span);
  });
}

initSceneTabThumbs();

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

const defaultScene =
  DEMO_CONFIG?.defaultScene && SCENES[DEMO_CONFIG.defaultScene]
    ? DEMO_CONFIG.defaultScene
    : "harry";
setScene(defaultScene);

window.addEventListener("resize", () => {
  applyPlotLayout();
  syncMobileShotBar();
});

const shotIds = Object.keys(SHOTS);
document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA", "BUTTON"].includes(document.activeElement?.tagName)) return;
  const allowed = SCENES[currentScene]?.shots || shotIds;
  const i = allowed.indexOf(currentShot);
  if (e.key === "ArrowRight") setShot(allowed[(i + 1) % allowed.length]);
  if (e.key === "ArrowLeft") setShot(allowed[(i - 1 + allowed.length) % allowed.length]);
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
  const media = `${src}?${ASSET}`;
  const strip = `${src.replace(/\/([^/]+)\.mp4$/i, "/scrub/$1.jpg")}?${ASSET}`;
  const frames = `${src.replace(/\/([^/]+)\.mp4$/i, "/scrub/$1/")}`;
  const mute = kind === "source" ? "" : "muted ";
  return `<figure class="compare-cell ${kind}">
    <div class="frame">
      <canvas aria-hidden="true"></canvas>
      <img class="scrub-hi" alt="" draggable="false" />
      <video data-src="${media}" data-strip="${strip}" data-frames="${frames}" poster="${poster}" ${mute}playsinline preload="none"></video>
    </div>
    <figcaption>${caption}</figcaption>
  </figure>`;
}

function bindRow(row) {
  const cells = [...row.querySelectorAll(".compare-cell")];
  const videos = [...row.querySelectorAll("video")];
  const btn = row.querySelector(".play-row");
  const slider = row.querySelector(".row-scrub");
  const fill = slider?.querySelector(".scrub-bar-fill");
  const thumb = slider?.querySelector(".scrub-bar-thumb");
  const label = row.querySelector(".row-frame");
  let dragging = false;
  let pendingFrame = 0;
  let wantPlay = false;
  let nFrames = 97;
  let tickRaf = 0;
  let loading = false;
  let loadPoll = 0;
  let loadTimeout = 0;
  const LOAD_TIMEOUT_MS = 30000;
  const setPressed = (on) => btn?.setAttribute("aria-pressed", on ? "true" : "false");
  if (btn) btn.textContent = "Play";

  const arm = (v) => {
    if (!v.dataset.src || v.getAttribute("src")) return;
    v.src = v.dataset.src;
    v.preload = "auto";
  };

  const inferFrames = (img) => {
    const h = img?.naturalHeight || 0;
    if (!h) return 97;
    let best = 97;
    let bestAbs = 1e9;
    for (let n = 50; n <= 200; n++) {
      if (h % n === 0 && Math.abs(n - 97) < bestAbs) {
        best = n;
        bestAbs = Math.abs(n - 97);
      }
    }
    return best;
  };

  const clampFrame = (frame) => Math.max(0, Math.min(Math.max(nFrames - 1, 0), frame | 0));

  const setBar = (frame) => {
    const max = Math.max(nFrames - 1, 1);
    const t = clampFrame(frame) / max;
    if (fill) fill.style.width = `calc((100% - 16px) * ${t})`;
    if (thumb) thumb.style.left = `calc(8px + (100% - 16px) * ${t})`;
    slider?.setAttribute("aria-valuenow", String(clampFrame(frame)));
    slider?.setAttribute("aria-valuemax", String(Math.max(nFrames - 1, 0)));
  };

  const showFrame = (frame) => {
    frame = clampFrame(frame);
    if (label) label.textContent = `${frame + 1} / ${nFrames}`;
    setBar(frame);
  };

  const drawCell = (cell, frame) => {
    const img = cell._strip;
    const cvs = cell._cvs;
    if (!img || !img.complete || !img.naturalHeight || !cvs) return;
    const n = cell._n || nFrames || 97;
    const i = Math.max(0, Math.min(n - 1, frame | 0));
    const ch = img.naturalHeight / n;
    const cw = img.naturalWidth;
    const ih = Math.max(1, Math.round(ch));
    if (cvs.width !== cw || cvs.height !== ih) {
      cvs.width = cw;
      cvs.height = ih;
    }
    const ctx = cell._ctx || (cell._ctx = cvs.getContext("2d"));
    ctx.drawImage(img, 0, i * ch, cw, ch, 0, 0, cw, ih);
  };

  const drawAll = (frame) => {
    cells.forEach((cell) => {
      drawCell(cell, frame);
      setHi(cell, frame);
    });
  };

  const setHi = (cell, frame) => {
    const img = cell._hi;
    const v = cell.querySelector("video");
    const base = v?.dataset.frames;
    if (!img || !base) return;
    const n = cell._n || nFrames || 97;
    const i = Math.max(0, Math.min(n - 1, frame | 0));
    const url = `${base}${String(i).padStart(3, "0")}.jpg?${ASSET}`;
    if (img.dataset.i === String(i) && img.getAttribute("src")) return;
    img.dataset.i = String(i);
    img.src = url;
  };

  const setPlayingUI = (on) => {
    cells.forEach((cell) => cell.classList.toggle("is-playing", on));
  };

  const applyFrame = (frame) => {
    pendingFrame = clampFrame(frame);
    showFrame(pendingFrame);
    if (!wantPlay) drawAll(pendingFrame);
  };

  const frameFromClientX = (clientX) => {
    if (!slider) return 0;
    const r = slider.getBoundingClientRect();
    const max = Math.max(nFrames - 1, 0);
    if (!r.width) return 0;
    const t = (clientX - r.left) / r.width;
    return Math.max(0, Math.min(max, Math.round(t * max)));
  };

  const stopTick = () => {
    if (tickRaf) cancelAnimationFrame(tickRaf);
    tickRaf = 0;
  };

  const tickPlay = () => {
    tickRaf = 0;
    if (!wantPlay) return;
    const v = videos.find((x) => !x.paused) || videos[0];
    const frame = Math.max(0, Math.min(nFrames - 1, Math.round((v?.currentTime || 0) * DEMO_FPS)));
    pendingFrame = frame;
    showFrame(frame);
    if (videos.every((x) => x.paused || x.ended)) {
      pauseAll();
      return;
    }
    tickRaf = requestAnimationFrame(tickPlay);
  };

  const setLoading = (on) => {
    loading = on;
    if (!btn) return;
    btn.classList.toggle("is-loading", on);
    btn.setAttribute("aria-busy", on ? "true" : "false");
    if (on) btn.textContent = "Loading…";
  };

  const stopLoadWatch = () => {
    clearInterval(loadPoll);
    clearTimeout(loadTimeout);
    loadPoll = 0;
    loadTimeout = 0;
  };

  const isReady = (v) => v.readyState >= 3 && !v.seeking;

  const startPlayback = () => {
    stopLoadWatch();
    setLoading(false);
    setPlayingUI(true);
    videos.forEach((v) => v.play().catch(() => {}));
    setPressed(true);
    if (btn) btn.textContent = "Pause";
    stopTick();
    tickRaf = requestAnimationFrame(tickPlay);
  };

  const playAll = () => {
    wantPlay = true;
    stopLoadWatch();
    videos.forEach((v) => {
      arm(v);
      const t = Math.min((v.duration || 1e9) - 1 / DEMO_FPS, pendingFrame / DEMO_FPS);
      try {
        v.currentTime = Math.max(0, t);
      } catch (_) {}
    });
    if (videos.every(isReady)) {
      startPlayback();
      return;
    }
    setLoading(true);
    loadPoll = setInterval(() => {
      if (!wantPlay) return;
      if (videos.some((v) => v.error)) pauseAll();
      else if (videos.every(isReady)) startPlayback();
    }, 100);
    loadTimeout = setTimeout(() => {
      if (loading) pauseAll();
    }, LOAD_TIMEOUT_MS);
  };

  const pauseAll = () => {
    wantPlay = false;
    stopLoadWatch();
    setLoading(false);
    stopTick();
    setPlayingUI(false);
    videos.forEach((v) => v.pause());
    drawAll(pendingFrame);
    setPressed(false);
    if (btn) btn.textContent = "Play";
  };

  btn?.addEventListener("click", () => {
    const playing = wantPlay && videos.some((v) => !v.paused && v.getAttribute("src"));
    if (playing || loading) pauseAll();
    else playAll();
  });
  slider?.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragging = true;
    slider.classList.add("is-dragging");
    pauseAll();
    try {
      slider.setPointerCapture(e.pointerId);
    } catch (_) {}
    applyFrame(frameFromClientX(e.clientX));
  });
  slider?.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    applyFrame(frameFromClientX(e.clientX));
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    slider?.classList.remove("is-dragging");
    applyFrame(pendingFrame);
  };
  slider?.addEventListener("pointerup", endDrag);
  slider?.addEventListener("pointercancel", endDrag);
  slider?.addEventListener("lostpointercapture", endDrag);
  slider?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      pauseAll();
      applyFrame(pendingFrame - 1);
    }
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      pauseAll();
      applyFrame(pendingFrame + 1);
    }
  });
  row.addEventListener("pointerenter", () => videos.forEach(arm), { once: true });
  videos.forEach((v) => {
    v.addEventListener("ended", () => {
      if (wantPlay && videos.every((o) => o.paused || o.ended)) pauseAll();
    });
  });

  cells.forEach((cell) => {
    const v = cell.querySelector("video");
    const cvs = cell.querySelector("canvas");
    const img = new Image();
    img.decoding = "async";
    cell._n = 97;
    cell._cvs = cvs;
    cell._hi = cell.querySelector(".scrub-hi");
    cell._ctx = cvs?.getContext("2d") || null;
    cell._strip = img;
    img.onload = () => {
      if (!cell._fromMeta) cell._n = inferFrames(img);
      nFrames = Math.max(nFrames, cell._n || 97);
      cell.classList.add("has-strip");
      drawCell(cell, pendingFrame);
      setHi(cell, pendingFrame);
      showFrame(pendingFrame);
    };
    if (v?.dataset.strip) img.src = v.dataset.strip;
    setHi(cell, pendingFrame);
  });

  const firstSrc = videos[0]?.dataset.src || "";
  const metaUrl = firstSrc.replace(/\/[^/]+\.mp4(?:\?.*)?$/i, `/scrub/meta.json?${ASSET}`);
  if (metaUrl && metaUrl !== firstSrc) {
    fetch(metaUrl)
      .then((r) => r.json())
      .then((meta) => {
        const ns = cells.map((cell) => {
          const src = cell.querySelector("video")?.dataset.src || "";
          const shot = (src.match(/\/([^/]+)\.mp4/) || [])[1];
          const raw = meta[shot];
          const n = Number(raw && typeof raw === "object" ? raw.n : raw) || cell._n || 97;
          cell._n = n;
          cell._fromMeta = true;
          return n;
        });
        nFrames = Math.max(1, ...ns);
        applyFrame(pendingFrame);
      })
      .catch(() => applyFrame(0));
  } else {
    showFrame(0);
  }
}

if (DEMO_CONFIG?.comparisons === false) {
  document.getElementById("results")?.remove();
} else {
fetch(`js/compare.json?${ASSET}`)
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
}

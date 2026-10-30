(() => {
  const P = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  // Motion plays unless the visitor paused it here, or their device asks for
  // reduced motion and they have not chosen to play it.
  const MOTION_KEY = "portfolio-motion";
  let saved = (() => { try { return localStorage.getItem(MOTION_KEY); } catch { return null; } })();
  let motionOn = saved ? saved === "on" : !reduceQuery.matches;
  const pad2 = (n) => String(n).padStart(2, "0");

  // ---- Fill text from content.js ----
  const binds = {
    wordmark0: P.wordmark[0], wordmark1: P.wordmark[1], eyebrow: P.eyebrow, statement: P.statement,
    role: `${P.artist}, ${P.role}`, latest: P.latest, selectedIntro: P.selectedIntro,
  };
  document.querySelectorAll("[data-bind]").forEach((el) => {
    if (el.dataset.bind in binds) el.textContent = binds[el.dataset.bind];
  });
  document.title = `${P.artist}, ${P.role}`;
  const newTab = '<span class="visually-hidden"> (opens in a new tab)</span>';

  // The footer's contact column appears only once an email or Instagram is filled in.
  const contact = [];
  if (P.email) contact.push(`<p><a href="mailto:${P.email}">${P.email}</a></p>`);
  if (P.instagram) contact.push(`<p><a href="${P.instagram}" target="_blank" rel="noopener">Instagram${newTab}</a></p>`);
  if (contact.length) {
    $("#contactLinks").innerHTML = contact.join("");
    $("#contactBlock").hidden = false;
  }

  // ---- Selected work grid ----
  const metaFor = (w) => [w.medium, w.year].filter(Boolean).join(", ");
  const works = $("#works");
  P.works.forEach((w, i) => {
    const li = document.createElement("li");
    li.className = "work reveal";
    li.innerHTML = `<button class="work__btn" type="button" data-i="${i}">
      <div class="work__frame"><img src="assets/img/${w.img}" width="${w.w}" height="${w.h}" alt="${w.alt || w.title}" loading="lazy"></div>
      <span class="work__cap"><span class="work__num">${pad2(i + 1)}</span><span class="work__title">${w.title}</span><span class="work__meta">${metaFor(w)}</span></span>
    </button>`;
    works.appendChild(li);
  });

  // ---- About + exhibitions ----
  $("#aboutText").innerHTML = P.about.map((p) => `<p>${p}</p>`).join("");
  if (P.education.length) {
    $("#education").innerHTML = P.education.map((e) => `<div><dt>${e.label}</dt><dd>${e.detail}</dd><dd>${e.year}</dd></div>`).join("");
  } else {
    $("#educationHead").remove();
    $("#education").remove();
  }
  $("#exhibitionsBody").innerHTML = P.exhibitions.map((e) => {
    const link = e.link ? `<p class="ex__link"><a href="${e.link.href}" target="_blank" rel="noopener">${e.link.text}${newTab}</a></p>` : "";
    const statement = e.statement
      ? `<details class="ex__statement"><summary>Read the artist statement</summary>${e.statement.map((p) => `<p>${p}</p>`).join("")}</details>`
      : "";
    return `<tr class="reveal" role="row">
      <td role="cell"><span class="ex__name">${e.name}</span><span class="ex__kind">${e.kind}</span></td>
      <td role="cell"><p>${e.description}</p>${link}${statement}</td><td class="ex__year" role="cell">${e.year}</td></tr>`;
  }).join("");

  // ---- Reveal on scroll ----
  if ("IntersectionObserver" in window && motionOn) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  // ---- Painting viewer ----
  const viewer = $("#viewer");
  let current = 0;
  const show = (i) => {
    current = (i + P.works.length) % P.works.length;
    const w = P.works[current];
    $("#viewerImg").src = `assets/img/${w.img}`;
    $("#viewerImg").alt = w.alt || w.title;
    $("#viewerNum").textContent = `${pad2(current + 1)} / ${pad2(P.works.length)}`;
    $("#viewerTitle").textContent = w.title;
    const meta = [w.year, w.medium, w.size].filter(Boolean).join(". ");
    $("#viewerMeta").textContent = meta ? `${meta}.` : "";
  };
  works.addEventListener("click", (e) => {
    const b = e.target.closest(".work__btn");
    if (!b) return;
    show(Number(b.dataset.i));
    viewer.showModal();
  });
  $("#viewerClose").addEventListener("click", () => viewer.close());
  $("#viewerPrev").addEventListener("click", () => show(current - 1));
  $("#viewerNext").addEventListener("click", () => show(current + 1));
  viewer.addEventListener("click", (e) => { if (e.target === viewer) viewer.close(); });
  viewer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // ---- Moving 3D strip of paintings ----
  // Cards sit edge to edge on a plane turned away from the viewer, so the ones
  // further right look smaller. The plane drifts left on its own; scrolling
  // adds speed (in either direction) and flattens the tilt as the hero leaves.
  const track = $("#ribbon");
  const ribbon = $(".ribbon");
  const hero = $(".hero");
  const pool = [...P.works, ...(P.stripExtras || [])];
  let cards = [];
  let loopLen = 0;

  const build = () => {
    const h = Math.round(ribbon.clientHeight * 0.72);
    track.style.left = `${$(".wrap").getBoundingClientRect().left + parseFloat(getComputedStyle($(".wrap")).paddingLeft)}px`;
    track.innerHTML = "";
    cards = [];
    const setW = pool.reduce((s, w) => s + h * (w.w / w.h), 0);
    const copies = Math.max(2, Math.ceil((window.innerWidth * 3.4) / setW));
    let x = 0;
    for (let c = 0; c < copies; c++) {
      pool.forEach((w) => {
        const cw = h * (w.w / w.h);
        const el = document.createElement("div");
        el.className = "ribbon__card";
        el.style.setProperty("--ch", `${h}px`);
        el.style.width = `${cw}px`;
        el.style.marginTop = `${-h / 2}px`;
        el.innerHTML = `<img src="assets/img/${w.img}" alt="" decoding="async">`;
        track.appendChild(el);
        cards.push({ el, base: x, w: cw });
        x += cw;
      });
    }
    loopLen = x;
  };

  let offset = 0;
  let speed = 0;
  let lastY = window.scrollY;
  let lastT = 0;
  let rafId = 0;
  const BASE = 38; // px per second when idle

  const render = () => {
    // When motion is off the strip holds still and ignores scrolling.
    const y = motionOn ? window.scrollY : 0;
    const p = Math.min(1, Math.max(0, y / hero.offsetHeight));
    const maxTilt = window.innerWidth < 700 ? 16 : 30;
    const tilt = maxTilt * (1 - 0.55 * p);
    track.style.transform = `rotateY(${tilt}deg) translateZ(${p * -80}px)`;
    for (const c of cards) {
      let x = c.base - offset;
      if (x < -c.w * 1.2) x += loopLen;
      // A card leaving at the left swings toward the viewer and fades out.
      const out = Math.min(1, Math.max(0, -x / c.w));
      c.el.style.transform = `translate3d(${x}px,0,${out * 60}px) rotateY(${out * -50}deg)`;
      c.el.style.opacity = String(1 - out * 0.85);
    }
  };

  const frame = (t) => {
    const dt = lastT ? Math.min(0.05, (t - lastT) / 1000) : 0;
    lastT = t;
    const y = window.scrollY;
    const scrollV = (y - lastY) / Math.max(dt, 0.001);
    lastY = y;
    // Ease the extra speed toward whatever the scroll is doing, like a spring.
    const target = BASE + (dt ? Math.abs(scrollV) * 0.4 : 0);
    speed += (target - speed) * Math.min(1, dt * (target > speed ? 9 : 2.2));
    offset = (offset + speed * dt) % loopLen;
    render();
    rafId = requestAnimationFrame(frame);
  };

  // ---- Pause / play for every moving part ----
  const toggles = document.querySelectorAll("[data-motion-toggle]");
  const applyMotion = () => {
    document.documentElement.classList.toggle("motion-off", !motionOn);
    toggles.forEach((b) => {
      b.querySelector(".motion-toggle__text").textContent = motionOn ? "Pause motion" : "Play motion";
      b.classList.toggle("is-paused", !motionOn);
    });
    cancelAnimationFrame(rafId);
    if (motionOn) {
      lastT = 0;
      lastY = window.scrollY;
      speed = BASE;
      rafId = requestAnimationFrame(frame);
    } else {
      render();
    }
  };
  toggles.forEach((b) => b.addEventListener("click", () => {
    motionOn = !motionOn;
    saved = motionOn ? "on" : "off";
    try { localStorage.setItem(MOTION_KEY, saved); } catch { /* private mode */ }
    applyMotion();
  }));
  reduceQuery.addEventListener("change", () => {
    if (saved) return;
    motionOn = !reduceQuery.matches;
    applyMotion();
  });

  build();
  applyMotion();
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { build(); render(); }, 150);
  });
})();

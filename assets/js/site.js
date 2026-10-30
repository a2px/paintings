(() => {
  const P = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pad2 = (n) => String(n).padStart(2, "0");

  // ---- Fill text from content.js ----
  const binds = {
    eyebrow: P.eyebrow, statement: P.statement, latest: P.latest, selectedIntro: P.selectedIntro,
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
  const metaFor = (w) => [w.medium, w.size, w.year].filter(Boolean).join(", ");
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

  // ---- Gentle fade-in on scroll (skipped when the device asks for reduced motion) ----
  if ("IntersectionObserver" in window && !reduceMotion) {
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
})();

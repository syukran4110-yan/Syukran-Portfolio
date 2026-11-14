(function () {
  const S = window.SITE;
  const $ = (q) => document.querySelector(q);
  const get = (path) => path.split(".").reduce((o, k) => o && o[k], S);

  const ICON = {
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4 0-3.2-1.95-3.2S12.8 13.5 12.8 15.1V21H9z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3 0-4.1.1C4.3 2.2 2.2 4.3 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.1 3.6 2.2 5.7 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c3.6-.1 5.7-2.2 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.1-3.6-2.2-5.7-5.8-5.8C15 2 14.7 2 12 2z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9l5.8 3.1z"/></svg>',
    behance: '<svg viewBox="0 0 24 24"><path d="M8.2 11.4c.9-.4 1.5-1.2 1.5-2.4 0-2.3-1.7-2.9-3.7-2.9H0v12h6.2c2.3 0 4.5-1.1 4.5-3.7 0-1.6-.8-2.7-2.5-3zM2.7 8.2h2.6c1 0 1.9.3 1.9 1.4 0 1.1-.7 1.5-1.7 1.5H2.7zm3 7.7h-3v-3.3h3c1.2 0 2 .5 2 1.7 0 1.3-.9 1.6-2 1.6zM15.5 6.9h5.4v1.3h-5.4zM23.9 14c0-2.6-1.5-4.7-4.2-4.7-2.6 0-4.4 2-4.4 4.6 0 2.7 1.7 4.6 4.4 4.6 2.1 0 3.4-.9 4-2.9h-2.1c-.2.7-1.1 1.1-1.8 1.1-1.3 0-2-.8-2-2.1h6.1V14zm-6.1-1c.1-1.1.8-1.8 1.9-1.8 1.2 0 1.7.7 1.8 1.8z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.3V17h16V7.3z"/></svg>',
  };

  // ---------- TEXT ----------
  document.querySelectorAll("[data-bind]").forEach((el) => (el.textContent = get(el.dataset.bind) || ""));
  document.title = S.name + " | Portfolio";
  $("#cv-btn").href = S.cvFile;
  $("#copy").textContent = `Copyright © ${new Date().getFullYear()} ${S.name}. ${S.footer}`;

  const socials = ["instagram", "youtube", "behance", "linkedin", "github"].filter((k) => S[k]);
  $("#hero-socials").innerHTML = socials
    .map((k) => `<a href="${S[k]}" target="_blank" rel="noopener" aria-label="${k}">${ICON[k]}</a>`).join("");

  $("#about-cards").innerHTML = S.about.cards
    .map((c) => `<div class="card"><div class="icon">${c.icon}</div><h3>${c.title}</h3>${c.lines.map((l) => `<p>${l}</p>`).join("")}</div>`).join("");

  $("#skills").innerHTML = S.skills
    .map((g) => `<div class="skill-box"><h3>${g.title}</h3><div class="skill-list">${g.items
      .map((s) => `<div class="skill"><span class="check">✓</span><div><h4>${s.name}</h4><p>${s.level}</p></div></div>`).join("")}</div></div>`).join("");

  // gallery filter buttons
  const types = [...new Set(S.gallery.map((g) => g.type).filter(Boolean))];
  const LABEL = { photo: "Photography", video: "Videography", design: "Design" };
  $("#filters").innerHTML = types.length > 1
    ? ["all", ...types].map((t) => `<button class="${t === "all" ? "active" : ""}" data-f="${t}">${t === "all" ? "All" : LABEL[t] || t}</button>`).join("")
    : "";
  $("#filters").onclick = (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $("#filters").querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
    document.querySelectorAll(".tile").forEach((t) => (t.hidden = b.dataset.f !== "all" && t.dataset.type !== b.dataset.f));
  };

  $("#grid").innerHTML = S.gallery
    .map((g, i) => {
      const isVideo = g.type === "video";
      const play = isVideo ? `<span class="play">▶</span>` : "";
      const tag = g.type ? `<span class="tag">${LABEL[g.type] || g.type}</span>` : "";
      const btn = g.link ? `<a class="btn btn-outline view" href="${g.link}" target="_blank" rel="noopener">${isVideo ? "▶ Watch" : "View"}</a>` : "";
      return `<div class="tile" data-type="${g.type || ""}"><div class="photo" data-photo="gallery.${i}">${play}</div>${tag}<h3>${g.title}</h3><p>${g.caption}</p>${btn}</div>`;
    }).join("");

  const LINKNAME = { instagram: "Instagram", youtube: "YouTube", behance: "Behance", linkedin: "LinkedIn", github: "GitHub" };
  $("#contact-box").innerHTML =
    `<a href="mailto:${S.email}">${ICON.email}<span>${S.email}</span></a>` +
    socials.map((k) => `<a href="${S[k]}" target="_blank" rel="noopener">${ICON[k]}<span>${LINKNAME[k]}</span></a>`).join("");

  // ---------- PHOTOS ----------
  const KEY = "syukran-portfolio-photos";
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}

  function srcFor(key) {
    if (saved[key]) return saved[key];
    if (key.startsWith("gallery.")) return (S.gallery[+key.split(".")[1]] || {}).image;
    return S.photos[key];
  }
  function paint(el) {
    const src = srcFor(el.dataset.photo);
    el.classList.add("empty");
    el.style.backgroundImage = "";
    if (!src) return;
    const img = new Image();
    img.onload = () => { el.classList.remove("empty"); el.style.backgroundImage = `url("${src}")`; };
    img.src = src;
  }
  document.querySelectorAll(".photo").forEach(paint);

  // ---------- PHOTO EDITOR (local preview) ----------
  let target = null;
  const pick = $("#file-pick");
  $("#edit-toggle").onclick = () => {
    const on = document.body.classList.toggle("editing");
    $("#edit-toggle").textContent = on ? "✓ Done" : "✎ Edit photos";
  };
  document.addEventListener("click", (e) => {
    const el = e.target.closest(".photo");
    if (!el || !document.body.classList.contains("editing")) return;
    e.preventDefault(); target = el; pick.click();
  });
  pick.onchange = () => {
    const f = pick.files[0]; if (!f || !target) return;
    shrink(f, (data) => {
      saved[target.dataset.photo] = data;
      try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) { alert("Photo too big to save. It shows until refresh."); }
      paint(target); pick.value = "";
    });
  };
  // resize big photos so they fit in browser storage
  function shrink(file, cb) {
    const r = new FileReader();
    r.onload = () => {
      const img = new Image();
      img.onload = () => {
        const max = 1000, k = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement("canvas");
        c.width = img.width * k; c.height = img.height * k;
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        cb(c.toDataURL("image/jpeg", 0.85));
      };
      img.src = r.result;
    };
    r.readAsDataURL(file);
  }

  // ---------- NAV + ANIMATION ----------
  const burger = $(".hamburger"), menu = $(".mobile-menu");
  burger.onclick = () => { burger.classList.toggle("open"); menu.classList.toggle("open"); };
  menu.querySelectorAll("a").forEach((a) => (a.onclick = () => { burger.classList.remove("open"); menu.classList.remove("open"); }));

  const io = new IntersectionObserver((es) => es.forEach((x) => x.isIntersecting && x.target.classList.add("show")), { threshold: 0.12 });
  document.querySelectorAll("section, .tile, .skill-box, .card").forEach((el) => { el.classList.add("reveal"); io.observe(el); });
})();

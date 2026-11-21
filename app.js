(function () {
  "use strict";

  const STORAGE_KEY = "mate-lang";
  const DEFAULT_LANG = "en";
  const PAGES = ["home", "install", "tutorial", "donate", "credits"];
  // Section di dalam halaman yang punya anchor sendiri
  const SECTION_PAGE = { features: "home", download: "home" };

  const dict = {
    en: {
      docTitle: "Mate.ai | Free Stockfish 18 Overlay for Chess.com",
      metaDesc: "Free Stockfish 18 analysis overlay for Chess.com. Early access. No $80 paywall. Built by BagasValzz.",
      navHome: "Home",
      navInstall: "Install",
      navTutorial: "Tutorial",
      navDonate: "Donate",
      navCredits: "Credits",
      navDownload: "Download",
      kicker: "Stockfish 18 \u00b7 Chess.com overlay",
      title: "Free engine.<br>No <em>$80</em> paywall.",
      lead: "Mate.ai is an early-access Chrome extension that runs Stockfish 18 in your browser on Chess.com. Built as a free alternative to paid overlays.",
      downloadBtn: "Download ZIP",
      guideBtn: "Install guide",
      shotCap: "Live board. Candidate lines stay on the squares.",
      fischerLine: "Be the best one.",
      featKicker: "On the board",
      featTitle: "Analysis that stays where you look.",
      featLead: "Candidate moves and evaluation appear right on the board. No separate analysis window.",
      f1t: "Stockfish 18",
      f1d: "Full WASM engine running in a web worker, so the page stays responsive.",
      f2t: "Multi-line analysis",
      f2d: "See several candidate moves at once, drawn as arrows on the board.",
      f3t: "Evaluation",
      f3d: "Each candidate shows its evaluation so you can compare lines at a glance.",
      f4t: "Adjustable depth",
      f4d: "Choose how deep the engine searches, trading speed for accuracy.",
      f5t: "For study and review",
      f5d: "Built for analyzing positions and reviewing finished games. Not for use during rated games.",
      f6t: "Accurate positions",
      f6d: "Castling rights are tracked correctly, so analyzed positions stay accurate.",
      bandTitle: "Ready when you are.",
      bandLead: "Early access ZIP. Unzip, load unpacked, play. Free.",
      installKicker: "Install",
      installTitle: "Load unpacked. Start a game.",
      installLead: "Two paths. Desktop first, mobile if you are on Android with Lemur.",
      tabPc: "Desktop",
      tabMob: "Mobile",
      pc1t: "Download the ZIP",
      pc1d: "Use the button above or in the nav. Unzip so you can see manifest.json.",
      pc2t: "Open extensions",
      pc2d: "Go to <code>chrome://extensions</code> (Chrome / Brave) or <code>edge://extensions</code> (Edge).",
      pc3t: "Developer mode",
      pc3d: "Toggle Developer mode on (top right). Click Load unpacked and select the unzipped folder.",
      pc4t: "Open Chess.com",
      pc4d: "Start a game or puzzle. The Mate.ai widget sits on the board.",
      mob1t: "Install Lemur Browser",
      mob1d: "From the Play Store. Lemur can load Chrome-style extensions on Android.",
      mob2t: "Download and unzip",
      mob2d: "Save the ZIP on the phone and extract it with Files or any zip tool.",
      mob3t: "Load unpacked",
      mob3d: "In Lemur open Extensions (menu, or try <code>chrome://extensions</code>). Enable Developer mode, Load unpacked, point at the folder.",
      mob4t: "Use it on Chess.com",
      mob4d: "Open Chess.com inside Lemur. iOS Safari cannot load this extension type.",
      mobNote: "Android only for mobile. Desktop path above is the reliable route.",
      tutKicker: "Tutorial",
      tutTitle: "How to use it.",
      tutLead: "Three steps from first open to first analysis.",
      use1t: "Open a position",
      use1d: "Start the analysis on a position you want to study. Choose the depth you need.",
      use2t: "Read the arrows",
      use2d: "Each arrow is a candidate move with its evaluation. Compare them to understand the position.",
      use3t: "Review after the game",
      use3d: "Use Mate.ai to study positions after a game ends. Keep it out of rated games, which must be played fairly.",
      donKicker: "Support",
      donTitle: "Keep it free.",
      donLead: "Mate.ai is free. If it helps you, a tip on Saweria keeps development going.",
      donBtn: "Support on Saweria",
      donNote: "Not required. Downloads stay free either way.",
      crKicker: "Credits",
      crTitle: "Who built this.",
      crBuilt: "Built by <strong>BagasValzz</strong>.",
      crEngine: "Engine: Stockfish 18 (WASM). UI: liquid glass overlay on Chess.com.",
      crOpen: "100% open source. Read it, change it, and build on it.",
      crContact: "Need me: Discord.",
      footerDesc: "Free Stockfish 18 overlay for Chess.com. Early access.",
      footerEngine: "Stockfish 18 WASM",
      footerCopy: "Mate.ai \u00b7 Early Access \u00b7 Free"
    },
    id: {
      docTitle: "Mate.ai | Overlay Stockfish 18 Gratis untuk Chess.com",
      metaDesc: "Overlay analisis Stockfish 18 gratis untuk Chess.com. Akses awal. Tanpa paywall $80. Dibuat oleh BagasValzz.",
      navHome: "Beranda",
      navInstall: "Pasang",
      navTutorial: "Tutorial",
      navDonate: "Donasi",
      navCredits: "Kredit",
      navDownload: "Unduh",
      kicker: "Stockfish 18 \u00b7 Overlay Chess.com",
      title: "Engine gratis.<br>Tanpa paywall <em>$80</em>.",
      lead: "Mate.ai adalah ekstensi Chrome versi akses awal yang menjalankan Stockfish 18 langsung di browser untuk Chess.com. Alternatif gratis untuk overlay berbayar.",
      downloadBtn: "Unduh ZIP",
      guideBtn: "Panduan pasang",
      shotCap: "Papan langsung. Garis kandidat tetap di kotak.",
      fischerLine: "Jadilah yang terbaik.",
      featKicker: "Di papan",
      featTitle: "Analisis tetap di tempat kamu melihat.",
      featLead: "Kandidat langkah dan evaluasi tampil langsung di papan. Tanpa jendela analisis terpisah.",
      f1t: "Stockfish 18",
      f1d: "Engine WASM penuh yang berjalan di web worker, jadi halaman tetap responsif.",
      f2t: "Analisis multi-garis",
      f2d: "Lihat beberapa kandidat langkah sekaligus, digambar sebagai panah di papan.",
      f3t: "Evaluasi",
      f3d: "Setiap kandidat menampilkan evaluasinya supaya kamu bisa membandingkan garis dengan cepat.",
      f4t: "Kedalaman bisa diatur",
      f4d: "Pilih seberapa dalam engine mencari, dengan menukar kecepatan dan ketepatan.",
      f5t: "Untuk belajar dan ulas",
      f5d: "Dibuat untuk menganalisis posisi dan mengulas game yang sudah selesai. Bukan untuk dipakai saat game rated.",
      f6t: "Posisi yang akurat",
      f6d: "Hak castling dilacak dengan benar, supaya posisi yang dianalisis tetap akurat.",
      bandTitle: "Siap kapan saja.",
      bandLead: "ZIP akses awal. Ekstrak, load unpacked, main. Gratis.",
      installKicker: "Pemasangan",
      installTitle: "Load unpacked. Mulai main.",
      installLead: "Dua jalur. Desktop dulu; mobile jika kamu pakai Android + Lemur.",
      tabPc: "Desktop",
      tabMob: "Mobile",
      pc1t: "Unduh ZIP",
      pc1d: "Pakai tombol di atas atau di navigasi. Ekstrak sampai terlihat manifest.json.",
      pc2t: "Buka halaman ekstensi",
      pc2d: "Buka <code>chrome://extensions</code> (Chrome / Brave) atau <code>edge://extensions</code> (Edge).",
      pc3t: "Mode pengembang",
      pc3d: "Aktifkan Developer mode di kanan atas. Klik Load unpacked, lalu pilih folder hasil ekstrak.",
      pc4t: "Buka Chess.com",
      pc4d: "Mulai game atau puzzle. Widget Mate.ai muncul di papan.",
      mob1t: "Pasang Lemur Browser",
      mob1d: "Dari Play Store. Lemur mendukung ekstensi bergaya Chrome di Android.",
      mob2t: "Unduh dan ekstrak",
      mob2d: "Simpan ZIP di ponsel, lalu ekstrak lewat Files atau aplikasi zip lain.",
      mob3t: "Load unpacked",
      mob3d: "Di Lemur buka Extensions (menu, atau coba <code>chrome://extensions</code>). Aktifkan Developer mode, Load unpacked, arahkan ke folder.",
      mob4t: "Pakai di Chess.com",
      mob4d: "Buka Chess.com di dalam Lemur. iOS Safari tidak mendukung tipe ekstensi ini.",
      mobNote: "Mobile hanya untuk Android. Jalur desktop di atas yang paling stabil.",
      tutKicker: "Tutorial",
      tutTitle: "Cara pakainya.",
      tutLead: "Tiga langkah dari buka pertama sampai analisis pertama.",
      use1t: "Buka sebuah posisi",
      use1d: "Mulai analisis dari posisi yang ingin kamu pelajari. Pilih kedalaman yang dibutuhkan.",
      use2t: "Baca panah",
      use2d: "Setiap panah adalah kandidat langkah beserta evaluasinya. Bandingkan untuk memahami posisi.",
      use3t: "Ulas setelah game",
      use3d: "Gunakan Mate.ai untuk mempelajari posisi setelah game selesai. Jangan dipakai di game rated, karena game rated harus dimainkan secara fair.",
      donKicker: "Dukung",
      donTitle: "Biar tetap gratis.",
      donLead: "Mate.ai gratis. Kalau membantu, dukungan lewat Saweria membantu pengembangan terus.",
      donBtn: "Dukung di Saweria",
      donNote: "Tidak wajib. Unduhan tetap gratis.",
      crKicker: "Kredit",
      crTitle: "Siapa yang membuat ini.",
      crBuilt: "Dibuat oleh <strong>BagasValzz</strong>.",
      crEngine: "Engine: Stockfish 18 (WASM). UI: overlay liquid glass di Chess.com.",
      crOpen: "100% open source. Baca, ubah, dan kembangkan.",
      crContact: "Butuh kontak: Discord.",
      footerDesc: "Overlay Stockfish 18 gratis untuk Chess.com. Akses awal.",
      footerEngine: "Stockfish 18 WASM",
      footerCopy: "Mate.ai \u00b7 Akses Awal \u00b7 Gratis"
    }
  };

  /* ---------- Penyimpanan aman ---------- */
  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage tidak tersedia */ }
  }

  let currentLang = dict[safeGet(STORAGE_KEY)] ? safeGet(STORAGE_KEY) : DEFAULT_LANG;

  /* ---------- Bahasa ---------- */
  function applyLang(lang) {
    if (!dict[lang]) return;
    currentLang = lang;
    safeSet(STORAGE_KEY, lang);

    const t = dict[lang];
    document.documentElement.lang = lang;
    document.title = t.docTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDesc);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const val = t[el.dataset.i18n];
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const val = t[el.dataset.i18nHtml];
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const on = btn.dataset.lang === lang;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  /* ---------- Menu titik tiga ---------- */
  const menuBtn = document.getElementById("menu-btn");
  const menuPanel = document.getElementById("menu-panel");

  function setMenu(open, returnFocus) {
    if (!menuBtn || !menuPanel) return;
    menuPanel.hidden = !open;
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    if (!open && returnFocus) menuBtn.focus();
  }

  function initMenu() {
    if (!menuBtn || !menuPanel) return;

    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      setMenu(menuPanel.hidden, false);
    });

    document.addEventListener("click", function (e) {
      if (!menuPanel.hidden && !e.target.closest(".menu")) setMenu(false, false);
    });

    menuPanel.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false, false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menuPanel.hidden) setMenu(false, true);
    });
  }

  /* ---------- Scroll reveal (diatur ulang setiap halaman tampil) ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const REVEAL_SELECTOR = [
    ".tc-hero-copy > *",
    ".tc-hero-visual > *",
    ".section-inner > :not(.feature-grid):not(.step-list)",
    ".feature",
    ".step",
    ".credits-card",
    ".donate-card",
    ".download-inner > *",
    ".footer-inner > *",
    ".footer-bottom"
  ].join(", ");

  let observer = null;
  if (!reduceMotion && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }

  function revealIn(root) {
    if (!root) return;
    const counts = new Map();

    root.querySelectorAll(REVEAL_SELECTOR).forEach(function (el) {
      if (el.dataset.rv) return;
      el.dataset.rv = "1";

      if (!observer) {
        el.classList.add("is-visible");
        return;
      }

      const parent = el.parentElement;
      const index = counts.get(parent) || 0;
      counts.set(parent, index + 1);
      el.style.setProperty("--reveal-delay", Math.min(index * 90, 360) + "ms");
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  /* ---------- Router hash ---------- */
  function resolveRoute(hash) {
    const id = (hash || "").replace("#", "");
    if (PAGES.indexOf(id) !== -1) return { page: id, scrollTo: null };
    if (SECTION_PAGE[id]) return { page: SECTION_PAGE[id], scrollTo: id };
    return { page: "home", scrollTo: null };
  }

  function showPage(route) {
    PAGES.forEach(function (p) {
      const el = document.getElementById("page-" + p);
      if (el) el.classList.toggle("is-active", p === route.page);
    });

    document.querySelectorAll("[data-route]").forEach(function (a) {
      const on = a.dataset.route === route.page;
      a.classList.toggle("is-current", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    setMenu(false, false);
    revealIn(document.getElementById("page-" + route.page));

    if (route.scrollTo) {
      const target = document.getElementById(route.scrollTo);
      if (target) target.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }

  function initRouter() {
    window.addEventListener("hashchange", function () {
      showPage(resolveRoute(location.hash));
    });
    showPage(resolveRoute(location.hash));
  }

  /* ---------- Tab install (Desktop / Mobile) ---------- */
  const tabButtons = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  const panels = {
    pc: document.getElementById("panel-pc"),
    mob: document.getElementById("panel-mob")
  };

  function setTab(id, moveFocus) {
    tabButtons.forEach(function (btn) {
      const on = btn.dataset.tab === id;
      btn.setAttribute("aria-selected", on ? "true" : "false");
      btn.tabIndex = on ? 0 : -1;
      if (on && moveFocus) btn.focus();
    });

    Object.keys(panels).forEach(function (key) {
      const panel = panels[key];
      if (!panel) return;
      const on = key === id;
      panel.classList.toggle("is-on", on);
      panel.hidden = !on;
    });
  }

  function initTabs() {
    tabButtons.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        setTab(btn.dataset.tab, false);
      });

      btn.addEventListener("keydown", function (e) {
        let next = -1;
        if (e.key === "ArrowRight") next = (i + 1) % tabButtons.length;
        else if (e.key === "ArrowLeft") next = (i - 1 + tabButtons.length) % tabButtons.length;
        else if (e.key === "Home") next = 0;
        else if (e.key === "End") next = tabButtons.length - 1;

        if (next >= 0) {
          e.preventDefault();
          setTab(tabButtons[next].dataset.tab, true);
        }
      });
    });

    setTab("pc", false);
  }

  /* ---------- Init ---------- */
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.dataset.lang);
    });
  });

  applyLang(currentLang);
  initMenu();
  initTabs();
  initRouter();
})();
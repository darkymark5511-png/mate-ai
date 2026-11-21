(function () {
  const dict = {
    en: {
      navGuide: "Guide",
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
      featLead: "Candidate moves, eval, and human-shaped delay live on Chess.com. No separate analysis window.",
      f1t: "Stockfish 18",
      f1d: "Full WASM engine in a worker. MultiPV lines, skill levels, combat depth table.",
      f2t: "Humanizer",
      f2d: "Time-control mistake matrices and delay curves so the line does not look perfect every move.",
      f3t: "Playstyles",
      f3d: "Magnus, Hikaru, Tal, Petrosian and more. Contempt and skill tuned per style.",
      f4t: "Combat mode",
      f4d: "Deeper search when you need it. Queue pre-analysis on the opponent's clock.",
      f5t: "Puzzle farm",
      f5d: "Auto-solve Chess.com puzzles with human delay. Toggle from the widget.",
      f6t: "Castling rights",
      f6d: "Tracks king and rook motion so FEN castling flags stay honest after pieces return.",
      installKicker: "Install",
      installTitle: "Load unpacked. Start a game.",
      installLead: "Two paths. Desktop first, mobile if you are on Android with Lemur.",
      tabPc: "Desktop",
      tabMob: "Mobile",
      tabUse: "Using it",
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
      mob4t: "Play on Chess.com",
      mob4d: "Use Chess.com inside Lemur. iOS Safari cannot load this extension type.",
      mobNote: "Android only for mobile. Desktop path above is the reliable route.",
      use1t: "Pick Elo or playstyle",
      use1d: "Open the widget. Choose a level or a named style (Tal, Petrosian, etc.).",
      use2t: "Read the arrows",
      use2d: "MultiPV candidates with softmax percentages. Combat mode digs deeper.",
      use3t: "Humanizer on",
      use3d: "Mistake rate and delay scale with time control so the session looks less engine-perfect.",
      bandTitle: "Ready when you are.",
      bandLead: "Early access ZIP. Unzip, load unpacked, play. Free.",
      crKicker: "Credits",
      crTitle: "Who built this.",
      crBuilt: "Built by <strong>BagasValzz</strong>.",
      crEngine: "Engine: Stockfish 18 (WASM). UI: liquid glass overlay on Chess.com.",
      crOpen: "100% open source. Copy it, change it, sell it, claim it. Free alternative to paid overlays.",
      crContact: "Need me: Discord.",
      crFischer: "Silhouette: Bobby Fischer. Still the sharpest mind to sit at a board.",
      footerDesc: "Free Stockfish 18 overlay for Chess.com. Early access.",
      footerEngine: "Stockfish 18 WASM",
      footerCopy: "Mate.ai \u00b7 Early Access \u00b7 Free"
    },
    id: {
      navGuide: "Panduan",
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
      featLead: "Kandidat langkah, evaluasi, dan jeda yang terasa manusiawi tampil di Chess.com. Tanpa jendela analisis terpisah.",
      f1t: "Stockfish 18",
      f1d: "Engine WASM penuh di worker. MultiPV, level skill, tabel kedalaman combat.",
      f2t: "Humanizer",
      f2d: "Matriks kesalahan per time control dan kurva jeda supaya garis tidak terlihat sempurna di setiap langkah.",
      f3t: "Gaya main",
      f3d: "Magnus, Hikaru, Tal, Petrosian, dan lainnya. Contempt dan skill disetel per gaya.",
      f4t: "Mode combat",
      f4d: "Pencarian lebih dalam saat dibutuhkan. Antrian pra-analisis di jam lawan.",
      f5t: "Puzzle farm",
      f5d: "Selesaikan puzzle Chess.com otomatis dengan jeda manusiawi. Aktifkan dari widget.",
      f6t: "Hak castling",
      f6d: "Melacak gerak raja dan benteng supaya flag castling di FEN tetap akurat.",
      installKicker: "Pemasangan",
      installTitle: "Load unpacked. Mulai main.",
      installLead: "Dua jalur. Desktop dulu; mobile jika kamu pakai Android + Lemur.",
      tabPc: "Desktop",
      tabMob: "Mobile",
      tabUse: "Cara pakai",
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
      mob4t: "Main di Chess.com",
      mob4d: "Buka Chess.com di dalam Lemur. iOS Safari tidak mendukung tipe ekstensi ini.",
      mobNote: "Mobile hanya untuk Android. Jalur desktop di atas yang paling stabil.",
      use1t: "Pilih Elo atau gaya",
      use1d: "Buka widget. Pilih level atau gaya bernama (Tal, Petrosian, dan seterusnya).",
      use2t: "Baca panah",
      use2d: "Kandidat MultiPV dengan persentase softmax. Mode combat menganalisis lebih dalam.",
      use3t: "Humanizer aktif",
      use3d: "Tingkat kesalahan dan jeda mengikuti time control supaya sesi tidak terlihat terlalu sempurna.",
      bandTitle: "Siap kapan saja.",
      bandLead: "ZIP akses awal. Ekstrak, load unpacked, main. Gratis.",
      crKicker: "Kredit",
      crTitle: "Siapa yang membuat ini.",
      crBuilt: "Dibuat oleh <strong>BagasValzz</strong>.",
      crEngine: "Engine: Stockfish 18 (WASM). UI: overlay liquid glass di Chess.com.",
      crOpen: "100% open source. Silakan salin, ubah, jual, atau klaim. Alternatif gratis untuk overlay berbayar.",
      crContact: "Butuh kontak: Discord.",
      crFischer: "Siluet: Bobby Fischer. Masih otak paling tajam yang pernah duduk di papan.",
      footerDesc: "Overlay Stockfish 18 gratis untuk Chess.com. Akses awal.",
      footerEngine: "Stockfish 18 WASM",
      footerCopy: "Mate.ai \u00b7 Akses Awal \u00b7 Gratis"
    }
  };

  let lang = localStorage.getItem("mate-lang") || "en";
  if (!dict[lang]) lang = "en";

  function applyLang(next) {
    lang = next;
    localStorage.setItem("mate-lang", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var val = dict[lang][key];
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var val = dict[lang][key];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var on = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  var tabs = document.querySelectorAll("[data-tab]");
  var panels = {
    pc: document.getElementById("panel-pc"),
    mob: document.getElementById("panel-mob"),
    use: document.getElementById("panel-use")
  };

  function setTab(id) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-tab") === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    Object.keys(panels).forEach(function (key) {
      var panel = panels[key];
      if (!panel) return;
      var on = key === id;
      panel.classList.toggle("is-on", on);
      if (on) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      setTab(t.getAttribute("data-tab"));
    });
  });

  applyLang(lang);
  setTab("pc");
})();

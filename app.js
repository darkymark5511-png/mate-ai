(function () {
  const dict = {
    en: {
      badge: "Early Access",
      kicker: "Stockfish 18 · Chess.com overlay",
      title: "Free engine. No $80 paywall.",
      lead: "Mate.ai is an early-access Chrome extension that runs Stockfish 18 in your browser on Chess.com. Built to replace paid overlays.",
      tabDownload: "Download",
      tabCredits: "Credits",
      downloadBtn: "Download ZIP",
      downloadHint: "Direct link. Unzip, then load as unpacked extension.",
      tutTitle: "Install",
      pcTitle: "Desktop (Chrome / Edge / Brave)",
      pcSteps: "<li>Download and unzip the file.</li><li>Open <code>chrome://extensions</code> (or <code>edge://extensions</code>).</li><li>Turn on <strong>Developer mode</strong> (top right).</li><li>Click <strong>Load unpacked</strong> and select the unzipped folder (the one with <code>manifest.json</code>).</li><li>Open Chess.com. The overlay should appear on the board.</li>",
      mobTitle: "Mobile (Android)",
      mobSteps: "<li>Install <strong>Lemur Browser</strong> from the Play Store (supports Chrome extensions).</li><li>Download the ZIP on your phone and unzip it (Files app or a zip tool).</li><li>In Lemur, open the extensions page (menu → Extensions, or try <code>chrome://extensions</code>).</li><li>Enable Developer mode, then <strong>Load unpacked</strong> and point at the unzipped folder.</li><li>Go to Chess.com in that browser and start a game.</li>",
      mobNote: "iOS Safari does not support this kind of extension. Use Android + Lemur (or another Chromium browser that allows unpacked extensions).",
      useTitle: "Using it",
      useSteps: "<li>Open a live game or puzzle on Chess.com.</li><li>Pick an Elo level or playstyle in the widget.</li><li>Arrows show candidate moves. Combat mode digs deeper.</li><li>Humanizer softens accuracy so the line looks less perfect.</li>",
      crBuilt: "Built by <strong>BagasValzz</strong>.",
      crEngine: "Engine: Stockfish 18 (WASM). UI: Liquid Glass.",
      crOpen: "100% open source. Copy it, change it, sell it. I made this to kill the $80 engine tax.",
      crSpite: "Fuck Titan Chess and their paywall.",
      crContact: "Need me: Discord.",
      footer: "Mate.ai · Early Access · Stockfish 18"
    },
    id: {
      badge: "Akses Awal",
      kicker: "Stockfish 18 · Overlay Chess.com",
      title: "Engine gratis. Tanpa bayar $80.",
      lead: "Mate.ai adalah ekstensi Chrome akses awal yang menjalankan Stockfish 18 di browser untuk Chess.com. Dibuat sebagai alternatif gratis dari overlay berbayar.",
      tabDownload: "Unduh",
      tabCredits: "Kredit",
      downloadBtn: "Unduh ZIP",
      downloadHint: "Link langsung. Ekstrak, lalu muat sebagai ekstensi unpacked.",
      tutTitle: "Cara pasang",
      pcTitle: "Desktop (Chrome / Edge / Brave)",
      pcSteps: "<li>Unduh dan ekstrak file ZIP.</li><li>Buka <code>chrome://extensions</code> (atau <code>edge://extensions</code>).</li><li>Aktifkan <strong>Developer mode</strong> (pojok kanan atas).</li><li>Klik <strong>Load unpacked</strong> dan pilih folder hasil ekstrak (yang berisi <code>manifest.json</code>).</li><li>Buka Chess.com. Overlay muncul di papan.</li>",
      mobTitle: "Mobile (Android)",
      mobSteps: "<li>Pasang <strong>Lemur Browser</strong> dari Play Store (mendukung ekstensi Chrome).</li><li>Unduh ZIP di HP lalu ekstrak (aplikasi File atau tools zip).</li><li>Di Lemur, buka halaman ekstensi (menu → Extensions, atau coba <code>chrome://extensions</code>).</li><li>Aktifkan Developer mode, lalu <strong>Load unpacked</strong> dan arahkan ke folder hasil ekstrak.</li><li>Buka Chess.com di browser itu dan mulai permainan.</li>",
      mobNote: "iOS Safari tidak mendukung ekstensi jenis ini. Pakai Android + Lemur (atau browser Chromium lain yang mengizinkan unpacked extension).",
      useTitle: "Cara pakai",
      useSteps: "<li>Buka game live atau puzzle di Chess.com.</li><li>Pilih level Elo atau playstyle di widget.</li><li>Panah menampilkan kandidat langkah. Mode combat menganalisis lebih dalam.</li><li>Humanizer meredam akurasi supaya garis tidak terlihat sempurna.</li>",
      crBuilt: "Dibuat oleh <strong>BagasValzz</strong>.",
      crEngine: "Engine: Stockfish 18 (WASM). UI: Liquid Glass.",
      crOpen: "100% open source. Silakan copy, ubah, jual. Saya buat ini untuk menghabisi pajak engine $80.",
      crSpite: "Fuck Titan Chess dan paywall-nya.",
      crContact: "Butuh kontak: Discord.",
      footer: "Mate.ai · Akses Awal · Stockfish 18"
    }
  };

  let lang = localStorage.getItem("mate-lang") || "en";
  if (!dict[lang]) lang = "en";

  function applyLang(next) {
    lang = next;
    localStorage.setItem("mate-lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[lang][key];
      if (val != null) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const val = dict[lang][key];
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const on = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });

  const tabs = document.querySelectorAll("[data-tab]");
  const panels = {
    dl: document.getElementById("panel-dl"),
    cr: document.getElementById("panel-cr")
  };

  function setTab(id) {
    tabs.forEach((t) => {
      const on = t.getAttribute("data-tab") === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    Object.keys(panels).forEach((key) => {
      const panel = panels[key];
      const on = key === id;
      panel.classList.toggle("is-on", on);
      if (on) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");
    });
  }

  tabs.forEach((t) => {
    t.addEventListener("click", () => setTab(t.getAttribute("data-tab")));
  });

  applyLang(lang);
  setTab("dl");
})();
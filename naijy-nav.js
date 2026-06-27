// ============================================================
//  NAIJY NETWORK NAV — naijy-nav.js
//  Load this file in every live platform HTML page.
//  Add one line in <head>: <script src="naijy-nav.js"></script>
//  When a new platform goes live, add it to LIVE_PLATFORMS below.
//  The nav updates everywhere automatically.
// ============================================================

(function() {

  // ── ADD NEW LIVE PLATFORMS HERE ──────────────────────────
  var LIVE_PLATFORMS = [
    { key: "gomentwatch", label: "GomentWatch",  emoji: "🏛️", file: "gomentwatch.html" },
    { key: "safenation",  label: "SafeNation",   emoji: "🚨", file: "safenation.html"  },
    { key: "flowstream",  label: "FlowStream",   emoji: "💭", file: "flowstream.html"  },
    { key: "wifeymet",    label: "WifeyMet",     emoji: "💍", file: "lovestories.html" },
    { key: "husbymet",    label: "HusbyMet",     emoji: "🤵", file: "lovestories.html" },
    { key: "agriconet",   label: "AgricoNet",    emoji: "🌾", file: "agriconet.html"   },
    { key: "iboprentice", label: "Iboprentice",  emoji: "🤝", file: "iboprentice.html" },
    { key: "medialane",   label: "MediaLane",    emoji: "📰", file: "medialane.html"   }
  ];

  // ── DETECT CURRENT PAGE ──────────────────────────────────
  var currentFile = window.location.pathname.split("/").pop() || "";
  var currentPlatform = LIVE_PLATFORMS.find(function(p) {
    return p.file === currentFile;
  });
  var currentLabel = currentPlatform ? currentPlatform.label : "Naijy Platform";

  // ── CSS ──────────────────────────────────────────────────
  var css = `
    .naijy-topnav {
      background: #0d2b1a;
      color: #fff;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      position: sticky;
      top: 0;
      z-index: 999;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      font-family: Arial, sans-serif;
    }
    .naijy-topnav .nav-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .naijy-topnav .nav-logo {
      font-size: 15px;
      font-weight: 900;
      color: #7fd9a8;
      text-decoration: none;
      letter-spacing: -0.01em;
    }
    .naijy-topnav .nav-logo span { color: #fff; }
    .naijy-topnav .nav-divider {
      color: rgba(255,255,255,0.2);
      font-size: 18px;
    }
    .naijy-topnav .nav-current {
      font-size: 13px;
      font-weight: 700;
      color: rgba(255,255,255,0.7);
    }
    .naijy-topnav .nav-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .naijy-topnav .nav-home {
      font-size: 12px;
      font-weight: 700;
      color: #7fd9a8;
      text-decoration: none;
      padding: 5px 12px;
      border: 1px solid rgba(127,217,168,0.4);
      border-radius: 20px;
      transition: all 0.15s;
    }
    .naijy-topnav .nav-home:hover {
      background: rgba(127,217,168,0.15);
    }
    .naijy-topnav .nav-explore {
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      background: #1f5e43;
      text-decoration: none;
      padding: 5px 12px;
      border-radius: 20px;
      transition: opacity 0.15s;
    }
    .naijy-topnav .nav-explore:hover { opacity: 0.85; }

    /* BOTTOM NAV */
    .naijy-footnav {
      background: #0d2b1a;
      color: #fff;
      padding: 28px 20px 20px;
      margin-top: 40px;
      font-family: Arial, sans-serif;
    }
    .naijy-footnav .fn-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 18px;
    }
    .naijy-footnav .fn-logo {
      font-size: 20px;
      font-weight: 900;
      color: #7fd9a8;
    }
    .naijy-footnav .fn-logo span { color: #fff; }
    .naijy-footnav .fn-tagline {
      font-size: 12px;
      color: rgba(255,255,255,0.5);
      margin-top: 3px;
    }
    .naijy-footnav .fn-platforms-label {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #7fd9a8;
      margin-bottom: 12px;
    }
    .naijy-footnav .fn-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }
    .naijy-footnav .fn-link {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 6px 12px;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      transition: all 0.15s;
    }
    .naijy-footnav .fn-link:hover {
      background: rgba(127,217,168,0.18);
      border-color: #7fd9a8;
      color: #7fd9a8;
    }
    .naijy-footnav .fn-link.current {
      background: #1f5e43;
      border-color: #2e7d5a;
      color: #7fd9a8;
    }
    .naijy-footnav .fn-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 11px;
      color: rgba(255,255,255,0.35);
    }
    .naijy-footnav .fn-bottom a {
      color: rgba(255,255,255,0.4);
      text-decoration: none;
    }
    .naijy-footnav .fn-bottom a:hover { color: #7fd9a8; }

    @media (max-width: 480px) {
      .naijy-topnav .nav-current { display: none; }
      .naijy-topnav .nav-divider { display: none; }
    }
  `;

  // ── INJECT CSS ───────────────────────────────────────────
  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // ── BUILD TOP NAV ────────────────────────────────────────
  function buildTopNav() {
    var nav = document.createElement("div");
    nav.className = "naijy-topnav";
    nav.innerHTML =
      '<div class="nav-left">' +
        '<a class="nav-logo" href="https://naijy.ng">Naijy<span>.ng</span></a>' +
        '<span class="nav-divider">/</span>' +
        '<span class="nav-current">' + currentLabel + '</span>' +
      '</div>' +
      '<div class="nav-right">' +
        '<a class="nav-home" href="https://naijy.ng">🏠 Naijy Home</a>' +
        '<a class="nav-explore" href="https://naijy.ng">🔍 All Platforms</a>' +
      '</div>';
    document.body.insertBefore(nav, document.body.firstChild);
  }

  // ── BUILD FOOTER NAV ─────────────────────────────────────
  function buildFootNav() {
    var links = LIVE_PLATFORMS.map(function(p) {
      var isCurrent = p.file === currentFile;
      return '<a class="fn-link' + (isCurrent ? " current" : "") + '" href="' + p.file + '">' +
        p.emoji + ' ' + p.label +
      '</a>';
    }).join("");

    var footer = document.createElement("div");
    footer.className = "naijy-footnav";
    footer.innerHTML =
      '<div class="fn-top">' +
        '<div>' +
          '<div class="fn-logo">Naijy<span>.ng</span></div>' +
          '<div class="fn-tagline">Nigeria\'s Digital Engine — 110 platforms, one nation</div>' +
        '</div>' +
        '<a href="https://naijy.ng" style="padding:10px 20px;background:#1f5e43;color:#fff;border-radius:8px;font-size:13px;font-weight:700;text-decoration:none;">🏠 Back to Naijy Home</a>' +
      '</div>' +
      '<div class="fn-platforms-label">🟢 Live Platforms</div>' +
      '<div class="fn-grid">' + links + '</div>' +
      '<div class="fn-bottom">' +
        '<span>© ' + new Date().getFullYear() + ' Naijy.ng — Nigeria\'s Digital Engine</span>' +
        '<div style="display:flex;gap:14px;">' +
          '<a href="https://naijy.ng">Home</a>' +
          '<a href="https://naijy.ng/platform.html?platform=gomentwatch">All Platforms</a>' +
        '</div>' +
      '</div>';

    document.body.appendChild(footer);
  }

  // ── RUN ──────────────────────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function() {
      buildTopNav();
      buildFootNav();
    });
  } else {
    buildTopNav();
    buildFootNav();
  }

})();

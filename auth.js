// ============================================================
//  auth.js — Naijy Complete Auth & Data System
//  Uses Supabase for EVERYTHING — login, signup, data storage
//  No Firebase. No credit card. Free forever.
//  Load on every page: <script src="auth.js"></script>
//  Load AFTER core.js and data.js
// ============================================================

var SUPABASE_URL = "https://klrbowhzkaojkqsbtoeu.supabase.co";
var SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtscmJvd2h6a2Fvamtxc2J0b2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwOTg2MDMsImV4cCI6MjA5MzY3NDYwM30.8ah8Sn6NXghZ9gRMYJzEo5uuSAAv-OHNpJkE2w_Fuiw";

var sb         = null;
var naijyUser  = null; // current signed-in user object

// ── LOAD SUPABASE CDN ────────────────────────────────────
(function() {
  var s = document.createElement("script");
  s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  s.onload = function() {
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log("✅ Supabase ready.");
    checkSession();
  };
  s.onerror = function() { console.error("Supabase CDN failed to load."); };
  document.head.appendChild(s);
})();

// ============================================================
//  SESSION — check if user already signed in
// ============================================================
function checkSession() {
  sb.auth.getSession().then(function(res) {
    var session = res.data && res.data.session;
    if (session && session.user) {
      naijyUser = session.user;
      onUserSignedIn(session.user);
    } else {
      onUserSignedOut();
    }
  });

  // Listen for auth changes
  sb.auth.onAuthStateChange(function(event, session) {
    if (session && session.user) {
      naijyUser = session.user;
      onUserSignedIn(session.user);
    } else {
      naijyUser = null;
      onUserSignedOut();
    }
  });
}

// ============================================================
//  SIGN UP
// ============================================================
function naijySignUp(email, password, displayName, callback) {
  if (!sb) { if (callback) callback({ error: "Not ready. Try again." }); return; }

  sb.auth.signUp({ email: email, password: password,
    options: { data: { full_name: displayName } }
  }).then(function(res) {
    if (res.error) { if (callback) callback({ error: res.error.message }); return; }
    var user = res.data.user;
    // Save profile to users table
    sb.from("users").upsert([{
      user_id:     user.id,
      name:        displayName,
      email:       email,
      trust_score: 50,
      joined_at:   new Date().toISOString()
    }], { onConflict: "user_id" }).then(function() {
      if (callback) callback({ success: true, user: user });
    });
  });
}

// ============================================================
//  SIGN IN
// ============================================================
function naijySignIn(email, password, callback) {
  if (!sb) { if (callback) callback({ error: "Not ready. Try again." }); return; }

  sb.auth.signInWithPassword({ email: email, password: password })
    .then(function(res) {
      if (res.error) { if (callback) callback({ error: res.error.message }); return; }
      if (callback) callback({ success: true, user: res.data.user });
    });
}

// ============================================================
//  SIGN OUT
// ============================================================
function naijySignOut(callback) {
  if (!sb) return;
  sb.auth.signOut().then(function() {
    naijyUser = null;
    if (callback) callback();
  });
}

// ============================================================
//  PASSWORD RESET
// ============================================================
function naijyResetPassword(email, callback) {
  if (!sb) return;
  sb.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + "/profile.html"
  }).then(function(res) {
    if (res.error) { if (callback) callback({ error: res.error.message }); return; }
    if (callback) callback({ success: true });
  });
}

// ============================================================
//  USER STATE HANDLERS
// ============================================================
function onUserSignedIn(user) {
  var name = (user.user_metadata && user.user_metadata.full_name) || user.email || "Naijy User";

  // Update core.js currentUser
  if (typeof currentUser !== "undefined") {
    currentUser.id       = user.id;
    currentUser.name     = name;
    currentUser.email    = user.email;
    currentUser.verified = !!user.email_confirmed_at;
  }

  updateAuthUI(true, name, user.email);
}

function onUserSignedOut() {
  if (typeof currentUser !== "undefined") {
    currentUser.id       = "user_001";
    currentUser.name     = "Guest User";
    currentUser.verified = false;
  }
  updateAuthUI(false, null, null);
}

// ============================================================
//  AUTH UI
// ============================================================
function updateAuthUI(signedIn, name, email) {
  var btn = document.getElementById("naijy-auth-btn");
  if (!btn) return;

  if (signedIn && name) {
    btn.innerText        = "👤 " + name.split(" ")[0];
    btn.onclick          = function() { window.location.href = "profile.html"; };
    btn.style.background = "#c8922a";
  } else {
    btn.innerText        = "Sign In";
    btn.onclick          = showAuthModal;
    btn.style.background = "#1f5e43";
  }
}

// ── MODAL ────────────────────────────────────────────────
function showAuthModal() {
  var existing = document.getElementById("naijy-auth-modal");
  if (existing) { existing.style.display = "flex"; return; }

  var modal = document.createElement("div");
  modal.id = "naijy-auth-modal";
  modal.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;";

  modal.innerHTML =
    '<div style="background:#fff;border-radius:14px;padding:28px 24px;max-width:380px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.25);">' +
      '<h3 style="font-size:19px;font-weight:800;color:#1f5e43;margin-bottom:4px;">Welcome to Naijy</h3>' +
      '<p style="font-size:13px;color:#888;margin-bottom:18px;">Sign in or create your free account</p>' +

      // Tabs
      '<div style="display:flex;gap:0;margin-bottom:18px;border:1.5px solid #d4e4da;border-radius:8px;overflow:hidden;">' +
        '<button id="tab-signin" onclick="switchAuthTab(\'signin\')" style="flex:1;padding:9px;border:none;background:#1f5e43;color:#fff;font-weight:700;font-size:14px;cursor:pointer;">Sign In</button>' +
        '<button id="tab-signup" onclick="switchAuthTab(\'signup\')" style="flex:1;padding:9px;border:none;background:#f4f7f5;color:#1f5e43;font-weight:700;font-size:14px;cursor:pointer;">Sign Up</button>' +
      '</div>' +

      // Sign In
      '<div id="form-signin">' +
        '<input id="auth-email" type="email" placeholder="Email address" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:10px;outline:none;font-family:inherit;">' +
        '<input id="auth-pass"  type="password" placeholder="Password" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:14px;outline:none;font-family:inherit;">' +
        '<button onclick="doSignIn()" style="width:100%;padding:12px;background:#1f5e43;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;margin-bottom:10px;font-family:inherit;">Sign In</button>' +
        '<p style="text-align:center;font-size:12px;"><a href="#" onclick="doResetPassword();return false;" style="color:#1f5e43;">Forgot password?</a></p>' +
      '</div>' +

      // Sign Up
      '<div id="form-signup" style="display:none;">' +
        '<input id="auth-name"   type="text"     placeholder="Your full name" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:10px;outline:none;font-family:inherit;">' +
        '<input id="auth-email2" type="email"    placeholder="Email address"  style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:10px;outline:none;font-family:inherit;">' +
        '<input id="auth-pass2"  type="password" placeholder="Password (min 6 characters)" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:14px;outline:none;font-family:inherit;">' +
        '<button onclick="doSignUp()" style="width:100%;padding:12px;background:#1f5e43;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;">Create Account</button>' +
      '</div>' +

      '<div id="auth-error" style="display:none;margin-top:12px;padding:10px;background:#f8d7da;border-radius:8px;color:#721c24;font-size:13px;"></div>' +
      '<button onclick="closeAuthModal()" style="width:100%;margin-top:14px;padding:9px;background:transparent;border:1px solid #ddd;border-radius:8px;color:#888;font-size:13px;cursor:pointer;font-family:inherit;">Cancel</button>' +
    '</div>';

  modal.addEventListener("click", function(e) {
    if (e.target === modal) closeAuthModal();
  });

  document.body.appendChild(modal);
}

function switchAuthTab(tab) {
  document.getElementById("form-signin").style.display = tab === "signin" ? "" : "none";
  document.getElementById("form-signup").style.display = tab === "signup" ? "" : "none";
  document.getElementById("tab-signin").style.cssText  = "flex:1;padding:9px;border:none;background:" + (tab==="signin"?"#1f5e43":"#f4f7f5") + ";color:" + (tab==="signin"?"#fff":"#1f5e43") + ";font-weight:700;font-size:14px;cursor:pointer;";
  document.getElementById("tab-signup").style.cssText  = "flex:1;padding:9px;border:none;background:" + (tab==="signup"?"#1f5e43":"#f4f7f5") + ";color:" + (tab==="signup"?"#fff":"#1f5e43") + ";font-weight:700;font-size:14px;cursor:pointer;";
  var e = document.getElementById("auth-error");
  if (e) e.style.display = "none";
}

function closeAuthModal() {
  var m = document.getElementById("naijy-auth-modal");
  if (m) m.style.display = "none";
}

function showAuthError(msg) {
  var e = document.getElementById("auth-error");
  if (e) { e.innerText = msg; e.style.display = "block"; }
}

function doSignIn() {
  var email = document.getElementById("auth-email").value.trim();
  var pass  = document.getElementById("auth-pass").value;
  if (!email || !pass) { showAuthError("Please enter email and password."); return; }
  naijySignIn(email, pass, function(res) {
    if (res.error) { showAuthError(res.error); }
    else { closeAuthModal(); }
  });
}

function doSignUp() {
  var name  = document.getElementById("auth-name").value.trim();
  var email = document.getElementById("auth-email2").value.trim();
  var pass  = document.getElementById("auth-pass2").value;
  if (!name)           { showAuthError("Please enter your name."); return; }
  if (!email)          { showAuthError("Please enter your email."); return; }
  if (pass.length < 6) { showAuthError("Password must be at least 6 characters."); return; }
  naijySignUp(email, pass, name, function(res) {
    if (res.error) { showAuthError(res.error); }
    else {
      closeAuthModal();
      alert("✅ Account created! Check your email to confirm, then sign in.");
    }
  });
}

function doResetPassword() {
  var email = document.getElementById("auth-email").value.trim();
  if (!email) { showAuthError("Enter your email address above first."); return; }
  naijyResetPassword(email, function(res) {
    if (res.error) { showAuthError(res.error); }
    else { showAuthError("✅ Reset link sent to your email."); }
  });
}

// ── INJECT SIGN IN BUTTON ────────────────────────────────
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("naijy-auth-btn")) return;
  var btn = document.createElement("button");
  btn.id            = "naijy-auth-btn";
  btn.innerText     = "Sign In";
  btn.onclick       = showAuthModal;
  btn.style.cssText =
    "position:fixed;top:12px;right:14px;z-index:9998;" +
    "padding:8px 18px;background:#1f5e43;color:#fff;" +
    "border:none;border-radius:20px;font-size:13px;" +
    "font-weight:700;cursor:pointer;" +
    "box-shadow:0 2px 8px rgba(0,0,0,0.18);" +
    "font-family:Arial,sans-serif;transition:opacity 0.15s;";
  btn.onmouseover = function(){ btn.style.opacity="0.88"; };
  btn.onmouseout  = function(){ btn.style.opacity="1"; };
  document.body.appendChild(btn);
});

// ============================================================
//  DATA — SAVE FORM SUBMISSIONS TO SUPABASE
// ============================================================

function saveReport(data, callback) {
  if (!sb)        { if (callback) callback({ error: "Database not ready. Try again in a moment." }); return; }
  if (!naijyUser) { if (callback) callback({ error: "Please sign in before submitting a report." }); return; }

  var name = (naijyUser.user_metadata && naijyUser.user_metadata.full_name) || naijyUser.email || "Anonymous";

  sb.from("reports").insert([{
    user_id:     naijyUser.id,
    user_name:   name,
    platform:    window.CURRENT_PLATFORM || "unknown",
    type:        data.type        || "",
    location:    data.location    || "",
    description: data.description || "",
    evidence:    data.evidence    || "",
    status:      "Submitted"
  }]).then(function(res) {
    if (res.error) { if (callback) callback({ error: res.error.message }); return; }
    updateTrustScore(naijyUser.id, 5);
    if (callback) callback({ success: true, ref: "NJY-" + Date.now() });
  });
}

function saveListing(data, callback) {
  if (!sb)        { if (callback) callback({ error: "Database not ready. Try again in a moment." }); return; }
  if (!naijyUser) { if (callback) callback({ error: "Please sign in before posting a listing." }); return; }

  var name = (naijyUser.user_metadata && naijyUser.user_metadata.full_name) || naijyUser.email || "Anonymous";

  sb.from("listings").insert([{
    user_id:     naijyUser.id,
    user_name:   name,
    platform:    window.CURRENT_PLATFORM || "unknown",
    title:       data.title       || "",
    category:    data.category    || "",
    price:       data.price       || "",
    location:    data.location    || "",
    contact:     data.contact     || "",
    description: data.description || "",
    status:      "Active"
  }]).then(function(res) {
    if (res.error) { if (callback) callback({ error: res.error.message }); return; }
    updateTrustScore(naijyUser.id, 5);
    if (callback) callback({ success: true, ref: "NJY-" + Date.now() });
  });
}

function saveBooking(data, callback) {
  if (!sb)        { if (callback) callback({ error: "Database not ready. Try again in a moment." }); return; }
  if (!naijyUser) { if (callback) callback({ error: "Please sign in before making a booking." }); return; }

  var name = (naijyUser.user_metadata && naijyUser.user_metadata.full_name) || naijyUser.email || "Anonymous";

  sb.from("bookings").insert([{
    user_id:   naijyUser.id,
    user_name: name,
    platform:  window.CURRENT_PLATFORM || "unknown",
    name:      data.name    || "",
    phone:     data.phone   || "",
    service:   data.service || "",
    date:      data.date    || "",
    time:      data.time    || "",
    notes:     data.notes   || "",
    status:    "Confirmed"
  }]).then(function(res) {
    if (res.error) { if (callback) callback({ error: res.error.message }); return; }
    updateTrustScore(naijyUser.id, 5);
    if (callback) callback({ success: true, ref: "NJY-" + Date.now() });
  });
}

function saveDirectoryEntry(data, callback) {
  if (!sb)        { if (callback) callback({ error: "Database not ready. Try again in a moment." }); return; }
  if (!naijyUser) { if (callback) callback({ error: "Please sign in to add your profile." }); return; }

  sb.from("directory").insert([{
    user_id:  naijyUser.id,
    platform: window.CURRENT_PLATFORM || "unknown",
    name:     data.name     || "",
    role:     data.role     || "",
    location: data.location || "",
    contact:  data.contact  || "",
    status:   "Pending Review"
  }]).then(function(res) {
    if (res.error) { if (callback) callback({ error: res.error.message }); return; }
    updateTrustScore(naijyUser.id, 5);
    if (callback) callback({ success: true });
  });
}

function saveUserProfile(data, callback) {
  if (!sb || !naijyUser) return;
  sb.from("users").upsert([{
    user_id:     naijyUser.id,
    name:        data.name  || "",
    email:       naijyUser.email || "",
    state:       data.state || "",
    phone:       data.phone || "",
    trust_score: data.trustScore || 50,
    updated_at:  new Date().toISOString()
  }], { onConflict: "user_id" }).then(function(res) {
    if (callback) {
      if (res.error) callback({ error: res.error.message });
      else callback({ success: true });
    }
  });
}

// ============================================================
//  FETCH — used by profile.html
// ============================================================

function getUserProfile(uid, callback) {
  waitForSb(function() {
    sb.from("users").select("*").eq("user_id", uid).maybeSingle()
      .then(function(res) { if (callback) callback(res.data || null); });
  });
}

function getUserReports(uid, callback) {
  waitForSb(function() {
    sb.from("reports").select("*").eq("user_id", uid)
      .order("created_at", { ascending: false }).limit(20)
      .then(function(res) { if (callback) callback(res.data || []); });
  });
}

function getUserListings(uid, callback) {
  waitForSb(function() {
    sb.from("listings").select("*").eq("user_id", uid)
      .order("created_at", { ascending: false }).limit(20)
      .then(function(res) { if (callback) callback(res.data || []); });
  });
}

function getUserBookings(uid, callback) {
  waitForSb(function() {
    sb.from("bookings").select("*").eq("user_id", uid)
      .order("created_at", { ascending: false }).limit(20)
      .then(function(res) { if (callback) callback(res.data || []); });
  });
}

function getAllReports(callback) {
  waitForSb(function() {
    sb.from("reports").select("*").order("created_at", { ascending: false }).limit(200)
      .then(function(res) { if (callback) callback(res.data || []); });
  });
}

function getAllListings(callback) {
  waitForSb(function() {
    sb.from("listings").select("*").order("created_at", { ascending: false }).limit(200)
      .then(function(res) { if (callback) callback(res.data || []); });
  });
}

function getAllUsers(callback) {
  waitForSb(function() {
    sb.from("users").select("*").order("updated_at", { ascending: false })
      .then(function(res) { if (callback) callback(res.data || []); });
  });
}

function getAllBookings(callback) {
  waitForSb(function() {
    sb.from("bookings").select("*").order("created_at", { ascending: false }).limit(200)
      .then(function(res) { if (callback) callback(res.data || []); });
  });
}

function deleteRecord(table, id, callback) {
  if (!sb) return;
  sb.from(table).delete().eq("id", id)
    .then(function(res) {
      if (callback) callback(res.error ? { error: res.error.message } : { success: true });
    });
}

// ── TRUST SCORE ──────────────────────────────────────────
function updateTrustScore(uid, points) {
  if (!sb || !uid) return;
  sb.from("users").select("trust_score").eq("user_id", uid).maybeSingle()
    .then(function(res) {
      var current  = (res.data && res.data.trust_score) ? res.data.trust_score : 50;
      var newScore = Math.min(100, current + points);
      sb.from("users").upsert([{
        user_id:     uid,
        trust_score: newScore,
        updated_at:  new Date().toISOString()
      }], { onConflict: "user_id" }).then(function() {});
    });
}

// ── WAIT FOR SUPABASE ────────────────────────────────────
function waitForSb(fn) {
  if (sb) { fn(); return; }
  var t = setInterval(function() {
    if (sb) { clearInterval(t); fn(); }
  }, 200);
}

// ── HELPER for profile.html ──────────────────────────────
function getCurrentNaijyUser() { return naijyUser; }

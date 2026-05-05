// ============================================================
//  firebase.js — Naijy Firebase System
//  Handles: Authentication, Database, Form Saving
//  Load this in EVERY page: <script src="firebase.js"></script>
//  Load AFTER core.js and data.js
// ============================================================

// ── FIREBASE CONFIG ──────────────────────────────────────
var FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCyfaDeUkXnE1sNJNH2intHLoBnrRyxwX0",
  authDomain:        "naijy-ebe45.firebaseapp.com",
  projectId:         "naijy-ebe45",
  storageBucket:     "naijy-ebe45.firebasestorage.app",
  messagingSenderId: "1083820145819",
  appId:             "1:1083820145819:web:24d9032d5a25fb13ed1a3e",
  measurementId:     "G-77CKXJDKKL"
};

// ── LOAD FIREBASE FROM CDN ───────────────────────────────
// We use the CDN version — no npm needed
(function loadFirebase() {
  var scripts = [
    "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js",
    "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js",
    "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"
  ];

  var loaded = 0;

  scripts.forEach(function(src) {
    var s = document.createElement("script");
    s.src = src;
    s.onload = function() {
      loaded++;
      if (loaded === scripts.length) {
        initFirebase();
      }
    };
    document.head.appendChild(s);
  });
})();

// ── GLOBAL REFERENCES ────────────────────────────────────
var db   = null;
var auth = null;
var naijyUser = null; // currently signed-in user

// ── INIT ─────────────────────────────────────────────────
function initFirebase() {
  if (typeof firebase === "undefined") {
    console.error("Firebase failed to load.");
    return;
  }

  firebase.initializeApp(FIREBASE_CONFIG);
  db   = firebase.firestore();
  auth = firebase.auth();

  // Listen for auth state changes
  auth.onAuthStateChanged(function(user) {
    if (user) {
      naijyUser = user;
      onUserSignedIn(user);
    } else {
      naijyUser = null;
      onUserSignedOut();
    }
  });

  console.log("✅ Naijy Firebase ready.");
}

// ============================================================
//  AUTH — SIGN IN / SIGN UP / SIGN OUT
// ============================================================

// Sign up with email and password
function naijySignUp(email, password, displayName, callback) {
  if (!auth) { callback({ error: "Firebase not ready" }); return; }

  auth.createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      var user = result.user;
      // Update display name
      return user.updateProfile({ displayName: displayName })
        .then(function() {
          // Save user profile to Firestore
          return db.collection("users").doc(user.uid).set({
            uid:         user.uid,
            name:        displayName,
            email:       email,
            trustScore:  50,
            badges:      [],
            joinedAt:    firebase.firestore.FieldValue.serverTimestamp(),
            platform:    window.CURRENT_PLATFORM || "index"
          });
        })
        .then(function() {
          if (callback) callback({ success: true, user: user });
        });
    })
    .catch(function(err) {
      if (callback) callback({ error: err.message });
    });
}

// Sign in with email and password
function naijySignIn(email, password, callback) {
  if (!auth) { callback({ error: "Firebase not ready" }); return; }

  auth.signInWithEmailAndPassword(email, password)
    .then(function(result) {
      if (callback) callback({ success: true, user: result.user });
    })
    .catch(function(err) {
      if (callback) callback({ error: err.message });
    });
}

// Sign in with Google
function naijyGoogleSignIn(callback) {
  if (!auth) { callback({ error: "Firebase not ready" }); return; }

  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(function(result) {
      var user = result.user;
      // Save to Firestore if new user
      db.collection("users").doc(user.uid).set({
        uid:        user.uid,
        name:       user.displayName,
        email:      user.email,
        photo:      user.photoURL,
        trustScore: 50,
        badges:     [],
        joinedAt:   firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      if (callback) callback({ success: true, user: user });
    })
    .catch(function(err) {
      if (callback) callback({ error: err.message });
    });
}

// Sign out
function naijySignOut(callback) {
  if (!auth) return;
  auth.signOut().then(function() {
    if (callback) callback();
  });
}

// Password reset
function naijyResetPassword(email, callback) {
  if (!auth) return;
  auth.sendPasswordResetEmail(email)
    .then(function() { if (callback) callback({ success: true }); })
    .catch(function(err) { if (callback) callback({ error: err.message }); });
}

// ============================================================
//  USER STATE HANDLERS
// ============================================================

function onUserSignedIn(user) {
  // Update core.js currentUser
  if (typeof currentUser !== "undefined") {
    currentUser.id       = user.uid;
    currentUser.name     = user.displayName || "Naijy User";
    currentUser.email    = user.email;
    currentUser.verified = user.emailVerified;
  }

  // Update UI
  updateAuthUI(true, user);

  // Load trust score from Firestore
  if (db) {
    db.collection("users").doc(user.uid).get().then(function(doc) {
      if (doc.exists) {
        var data = doc.data();
        if (typeof userTrust !== "undefined") {
          userTrust[user.uid] = {
            score:   data.trustScore || 50,
            reports: data.reports    || 0,
            badges:  data.badges     || []
          };
        }
      }
    });
  }
}

function onUserSignedOut() {
  if (typeof currentUser !== "undefined") {
    currentUser.id       = "user_001";
    currentUser.name     = "Guest User";
    currentUser.verified = false;
  }
  updateAuthUI(false, null);
}

// ============================================================
//  AUTH UI — Login / Signup Modal
// ============================================================

function updateAuthUI(signedIn, user) {
  var btn = document.getElementById("naijy-auth-btn");
  if (!btn) return;

  if (signedIn && user) {
    var name = user.displayName || user.email || "User";
    btn.innerText  = "👤 " + name.split(" ")[0];
    btn.onclick    = showUserMenu;
    btn.style.background = "#c8922a";
  } else {
    btn.innerText  = "Sign In";
    btn.onclick    = showAuthModal;
    btn.style.background = "#1f5e43";
  }
}

function showAuthModal() {
  var existing = document.getElementById("naijy-auth-modal");
  if (existing) { existing.style.display = "flex"; return; }

  var modal = document.createElement("div");
  modal.id = "naijy-auth-modal";
  modal.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;";
  modal.innerHTML =
    '<div style="background:#fff;border-radius:14px;padding:28px 24px;max-width:380px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.25);">' +
      '<h3 style="font-size:19px;font-weight:800;color:#1f5e43;margin-bottom:4px;">Welcome to Naijy</h3>' +
      '<p style="font-size:13px;color:#888;margin-bottom:18px;">Sign in or create your account</p>' +

      // Tabs
      '<div style="display:flex;gap:0;margin-bottom:18px;border:1.5px solid #d4e4da;border-radius:8px;overflow:hidden;">' +
        '<button id="tab-signin" onclick="switchTab(\'signin\')" style="flex:1;padding:9px;border:none;background:#1f5e43;color:#fff;font-weight:700;font-size:14px;cursor:pointer;">Sign In</button>' +
        '<button id="tab-signup" onclick="switchTab(\'signup\')" style="flex:1;padding:9px;border:none;background:#f4f7f5;color:#1f5e43;font-weight:700;font-size:14px;cursor:pointer;">Sign Up</button>' +
      '</div>' +

      // Sign In Form
      '<div id="form-signin">' +
        '<input id="auth-email" type="email" placeholder="Email address" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:10px;outline:none;">' +
        '<input id="auth-pass"  type="password" placeholder="Password" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:14px;outline:none;">' +
        '<button onclick="doSignIn()" style="width:100%;padding:12px;background:#1f5e43;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;margin-bottom:10px;">Sign In</button>' +
        '<button onclick="doGoogleSignIn()" style="width:100%;padding:11px;background:#fff;color:#444;border:1.5px solid #ddd;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;margin-bottom:10px;">🔵 Continue with Google</button>' +
        '<p style="text-align:center;font-size:12px;"><a href="#" onclick="doResetPassword()" style="color:#1f5e43;">Forgot password?</a></p>' +
      '</div>' +

      // Sign Up Form
      '<div id="form-signup" style="display:none;">' +
        '<input id="auth-name"  type="text"     placeholder="Your full name" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:10px;outline:none;">' +
        '<input id="auth-email2" type="email"   placeholder="Email address" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:10px;outline:none;">' +
        '<input id="auth-pass2"  type="password" placeholder="Create password (min 6 characters)" style="width:100%;padding:10px 13px;border:1.5px solid #d4e4da;border-radius:8px;font-size:14px;margin-bottom:14px;outline:none;">' +
        '<button onclick="doSignUp()" style="width:100%;padding:12px;background:#1f5e43;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;margin-bottom:10px;">Create Account</button>' +
        '<button onclick="doGoogleSignIn()" style="width:100%;padding:11px;background:#fff;color:#444;border:1.5px solid #ddd;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;">🔵 Continue with Google</button>' +
      '</div>' +

      '<div id="auth-error" style="display:none;margin-top:12px;padding:10px;background:#f8d7da;border-radius:8px;color:#721c24;font-size:13px;"></div>' +
      '<button onclick="closeAuthModal()" style="width:100%;margin-top:14px;padding:9px;background:transparent;border:1px solid #ddd;border-radius:8px;color:#888;font-size:13px;cursor:pointer;">Cancel</button>' +
    '</div>';

  document.body.appendChild(modal);
}

function switchTab(tab) {
  document.getElementById("form-signin").style.display = tab === "signin" ? "" : "none";
  document.getElementById("form-signup").style.display = tab === "signup" ? "" : "none";
  document.getElementById("tab-signin").style.background = tab === "signin" ? "#1f5e43" : "#f4f7f5";
  document.getElementById("tab-signin").style.color      = tab === "signin" ? "#fff"    : "#1f5e43";
  document.getElementById("tab-signup").style.background = tab === "signup" ? "#1f5e43" : "#f4f7f5";
  document.getElementById("tab-signup").style.color      = tab === "signup" ? "#fff"    : "#1f5e43";
  document.getElementById("auth-error").style.display = "none";
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
  if (!name)  { showAuthError("Please enter your name."); return; }
  if (!email) { showAuthError("Please enter your email."); return; }
  if (pass.length < 6) { showAuthError("Password must be at least 6 characters."); return; }
  naijySignUp(email, pass, name, function(res) {
    if (res.error) { showAuthError(res.error); }
    else { closeAuthModal(); }
  });
}

function doGoogleSignIn() {
  naijyGoogleSignIn(function(res) {
    if (res.error) { showAuthError(res.error); }
    else { closeAuthModal(); }
  });
}

function doResetPassword() {
  var email = document.getElementById("auth-email").value.trim();
  if (!email) { showAuthError("Enter your email address above first."); return; }
  naijyResetPassword(email, function(res) {
    if (res.error) { showAuthError(res.error); }
    else { showAuthError("✅ Reset email sent. Check your inbox."); }
  });
}

function showUserMenu() {
  var name = naijyUser ? (naijyUser.displayName || naijyUser.email) : "User";
  if (confirm("Signed in as: " + name + "\n\nClick OK to sign out.")) {
    naijySignOut(function() {
      alert("Signed out successfully.");
    });
  }
}

// ============================================================
//  DATABASE — SAVE FORM SUBMISSIONS
// ============================================================

function saveReport(data, callback) {
  if (!db || !naijyUser) {
    if (callback) callback({ error: "Please sign in to submit a report." });
    return;
  }
  db.collection("reports").add({
    userId:    naijyUser.uid,
    userName:  naijyUser.displayName || "Anonymous",
    platform:  window.CURRENT_PLATFORM || "unknown",
    type:      data.type,
    location:  data.location,
    description: data.description,
    evidence:  data.evidence || "",
    status:    "Submitted",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function(ref) {
    increaseTrustDB(naijyUser.uid, 5);
    if (callback) callback({ success: true, ref: ref.id });
  }).catch(function(err) {
    if (callback) callback({ error: err.message });
  });
}

function saveListing(data, callback) {
  if (!db || !naijyUser) {
    if (callback) callback({ error: "Please sign in to post a listing." });
    return;
  }
  db.collection("listings").add({
    userId:      naijyUser.uid,
    userName:    naijyUser.displayName || "Anonymous",
    platform:    window.CURRENT_PLATFORM || "unknown",
    title:       data.title,
    category:    data.category,
    price:       data.price,
    location:    data.location,
    contact:     data.contact,
    description: data.description,
    status:      "Active",
    createdAt:   firebase.firestore.FieldValue.serverTimestamp()
  }).then(function(ref) {
    increaseTrustDB(naijyUser.uid, 5);
    if (callback) callback({ success: true, ref: ref.id });
  }).catch(function(err) {
    if (callback) callback({ error: err.message });
  });
}

function saveBooking(data, callback) {
  if (!db || !naijyUser) {
    if (callback) callback({ error: "Please sign in to make a booking." });
    return;
  }
  db.collection("bookings").add({
    userId:    naijyUser.uid,
    userName:  naijyUser.displayName || "Anonymous",
    platform:  window.CURRENT_PLATFORM || "unknown",
    name:      data.name,
    phone:     data.phone,
    service:   data.service,
    date:      data.date,
    time:      data.time,
    notes:     data.notes || "",
    status:    "Confirmed",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function(ref) {
    increaseTrustDB(naijyUser.uid, 5);
    if (callback) callback({ success: true, ref: ref.id });
  }).catch(function(err) {
    if (callback) callback({ error: err.message });
  });
}

function saveDirectoryEntry(data, callback) {
  if (!db || !naijyUser) {
    if (callback) callback({ error: "Please sign in to add your profile." });
    return;
  }
  db.collection("directory").add({
    userId:    naijyUser.uid,
    platform:  window.CURRENT_PLATFORM || "unknown",
    name:      data.name,
    role:      data.role,
    location:  data.location,
    contact:   data.contact,
    status:    "Pending Review",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function(ref) {
    increaseTrustDB(naijyUser.uid, 5);
    if (callback) callback({ success: true, ref: ref.id });
  }).catch(function(err) {
    if (callback) callback({ error: err.message });
  });
}

// ── TRUST SCORE IN FIRESTORE ─────────────────────────────
function increaseTrustDB(uid, points) {
  if (!db || !uid) return;
  db.collection("users").doc(uid).update({
    trustScore: firebase.firestore.FieldValue.increment(points)
  }).catch(function() {});
}

// ============================================================
//  INJECT SIGN IN BUTTON INTO EVERY PAGE
//  Adds a floating Sign In button if not already present
// ============================================================
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("naijy-auth-btn")) return;

  var btn = document.createElement("button");
  btn.id = "naijy-auth-btn";
  btn.innerText = "Sign In";
  btn.onclick   = showAuthModal;
  btn.style.cssText =
    "position:fixed;top:12px;right:14px;z-index:999;" +
    "padding:8px 18px;background:#1f5e43;color:#fff;" +
    "border:none;border-radius:20px;font-size:13px;" +
    "font-weight:700;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.18);" +
    "font-family:Arial,sans-serif;transition:opacity 0.15s;";
  btn.onmouseover = function(){ btn.style.opacity = "0.88"; };
  btn.onmouseout  = function(){ btn.style.opacity = "1"; };
  document.body.appendChild(btn);
});

// ============================================================
//  core.js — Naijy Shared Core System
//  Load this BEFORE data.js and platform.html scripts
//  <script src="core.js"></script>
// ============================================================


// ============================================================
//  1. IDENTITY SYSTEM
//  One user object — same user across all 110 platforms
// ============================================================
var currentUser = {
  id:       "user_001",
  name:     "Guest User",
  phone:    "",
  state:    "",
  verified: false
};


// ============================================================
//  2. REPUTATION / TRUST SYSTEM
//  Simple trust score — shared across all platforms
//  Used by: SafeNation, JusticeNow, Marketplace platforms
// ============================================================
var userTrust = {
  user_001: {
    score:   50,       // 0–100
    reports: 0,        // number of actions taken
    badges:  []        // e.g. ["verified", "trusted_reporter"]
  }
};

function getTrustScore(userId) {
  return userTrust[userId] ? userTrust[userId].score : 0;
}

function increaseTrust(userId, points) {
  if (!userTrust[userId]) userTrust[userId] = { score: 50, reports: 0, badges: [] };
  userTrust[userId].score = Math.min(100, userTrust[userId].score + points);
}


// ============================================================
//  3. NOTIFICATION / ALERT SYSTEM
//  Real-time alerts across all platforms
//  Used by: SafeNation (emergency), JusticeNow (case update),
//           every platform that needs to reach the user
// ============================================================
var notificationLog = [];

function notify(message, type) {
  type = type || "info";   // "info" | "alert" | "emergency"
  var entry = {
    id:      Date.now(),
    message: message,
    type:    type,
    seen:    false,
    date:    new Date().toISOString()
  };
  notificationLog.push(entry);

  // Display to user
  if (type === "emergency") {
    alert("🚨 EMERGENCY ALERT\n\n" + message);
  } else if (type === "alert") {
    alert("⚠️ " + message);
  } else {
    alert("✅ " + message);
  }
}


// ============================================================
//  4. SHARED ACTION FORMAT
//  Every action on every platform uses this same structure
//  This allows platforms to read each other's data
//  SafeNation → JusticeNow → TrustSystem → Future API
// ============================================================
var actionLog = [];

function logAction(type, content, extra) {
  var action = {
    userId:   currentUser.id,
    userName: currentUser.name,
    platform: window.CURRENT_PLATFORM || "unknown",
    type:     type,       // e.g. "report", "complaint", "vote", "purchase"
    content:  content,    // what happened
    extra:    extra || {},// any platform-specific extra data
    date:     new Date().toISOString()
  };
  actionLog.push(action);

  // Increase trust score when user takes action
  increaseTrust(currentUser.id, 1);

  return action;
}

// Helper — get all actions for a specific platform
function getActionsForPlatform(platformKey) {
  return actionLog.filter(function(a) { return a.platform === platformKey; });
}

// Helper — get all actions by current user
function getMyActions() {
  return actionLog.filter(function(a) { return a.userId === currentUser.id; });
}

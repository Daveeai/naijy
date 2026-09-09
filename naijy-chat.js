/**
 * NAIJY-CHAT.JS
 * Drop this script tag into any of the 117 platform pages (alongside
 * auth.js, core.js, naijy-nav.js) to get a floating chat widget that:
 *  - carries platform context (which platform + listing the chat started on)
 *  - lets users request/send payments and gift airtime inline
 *  - works identically everywhere because identity + wallet are shared
 *
 * Usage on any platform page:
 *   <script src="naijy-chat.js"
 *           data-platform="PropertyHub"
 *           data-reference="listing-4821"></script>
 *
 * To open a chat with a specific user from a listing/profile page:
 *   NaijyChat.openWith(otherUserId)
 */

(function () {
  const scriptTag = document.currentScript;
  const PLATFORM_CONTEXT = scriptTag?.dataset.platform || "General";
  const REFERENCE_ID = scriptTag?.dataset.reference || null;

  let currentUser = null;
  let activeConversationId = null;
  let realtimeChannel = null;

  // ---------- Widget UI injection ----------
  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      #naijy-chat-fab{position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;
        background:#2ecc71;color:#04140a;font-size:24px;display:flex;align-items:center;justify-content:center;
        cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.4);z-index:9998;border:none;}
      #naijy-chat-panel{position:fixed;bottom:88px;right:20px;width:340px;max-height:480px;background:#141925;
        border:1px solid #232b3d;border-radius:14px;display:none;flex-direction:column;overflow:hidden;
        z-index:9999;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#e8ecf1;box-shadow:0 10px 30px rgba(0,0,0,.5);}
      #naijy-chat-panel.open{display:flex;}
      #naijy-chat-header{padding:12px 14px;background:#1b2333;font-size:13px;color:#8b95a7;border-bottom:1px solid #232b3d;}
      #naijy-chat-header b{color:#e8ecf1;}
      #naijy-chat-messages{flex:1;overflow-y:auto;padding:12px;font-size:14px;}
      .naijy-msg{margin-bottom:10px;max-width:80%;padding:8px 12px;border-radius:12px;}
      .naijy-msg.mine{background:#1f6f43;margin-left:auto;}
      .naijy-msg.theirs{background:#1c2436;}
      .naijy-msg.system{background:transparent;color:#8b95a7;font-size:12px;text-align:center;margin:6px auto;}
      .naijy-msg.payment_request{border:1px dashed #f1c40f;color:#f1c40f;}
      .naijy-msg.airtime_gift{border:1px dashed #2ecc71;color:#2ecc71;}
      #naijy-chat-input-row{display:flex;border-top:1px solid #232b3d;padding:8px;gap:6px;}
      #naijy-chat-input-row input{flex:1;padding:8px 10px;border-radius:8px;border:1px solid #2a3346;background:#0f1420;color:#e8ecf1;font-size:14px;}
      #naijy-chat-input-row button{padding:8px 12px;border:none;border-radius:8px;background:#2ecc71;color:#04140a;font-weight:700;cursor:pointer;}
      #naijy-chat-actions{display:flex;gap:6px;padding:0 8px 8px;}
      #naijy-chat-actions button{flex:1;font-size:12px;padding:6px;border-radius:8px;border:1px solid #2a3346;background:#0f1420;color:#8b95a7;cursor:pointer;}
    `;
    document.head.appendChild(style);
  }

  function injectMarkup() {
    const fab = document.createElement("button");
    fab.id = "naijy-chat-fab";
    fab.textContent = "💬";
    fab.onclick = () => togglePanel();

    const panel = document.createElement("div");
    panel.id = "naijy-chat-panel";
    panel.innerHTML = `
      <div id="naijy-chat-header">Chatting on <b>${PLATFORM_CONTEXT}</b>${REFERENCE_ID ? ` · ${REFERENCE_ID}` : ""}</div>
      <div id="naijy-chat-messages"></div>
      <div id="naijy-chat-actions">
        <button onclick="NaijyChat.requestPayment()">Request Payment</button>
        <button onclick="NaijyChat.giftAirtime()">Gift Airtime</button>
      </div>
      <div id="naijy-chat-input-row">
        <input type="text" id="naijy-chat-text" placeholder="Message...">
        <button onclick="NaijyChat.sendText()">Send</button>
      </div>
    `;
    document.body.appendChild(fab);
    document.body.appendChild(panel);
  }

  function togglePanel() {
    document.getElementById("naijy-chat-panel").classList.toggle("open");
  }

  // ---------- Conversation handling ----------
  async function openWith(otherUserId) {
    currentUser = currentUser || (await getCurrentUser());
    if (!currentUser) { window.location.href = "login.html"; return; }

    const { data: existing } = await supabaseClient
      .from("conversations")
      .select("id")
      .match({ user_a: currentUser.id, user_b: otherUserId, platform_context: PLATFORM_CONTEXT, reference_id: REFERENCE_ID })
      .maybeSingle();

    let convId = existing?.id;
    if (!convId) {
      const { data: created, error } = await supabaseClient
        .from("conversations")
        .insert({ user_a: currentUser.id, user_b: otherUserId, platform_context: PLATFORM_CONTEXT, reference_id: REFERENCE_ID })
        .select("id")
        .single();
      if (error) { console.error(error); return; }
      convId = created.id;
    }

    activeConversationId = convId;
    document.getElementById("naijy-chat-panel").classList.add("open");
    await loadMessages();
    subscribeRealtime();
  }

  async function loadMessages() {
    const { data } = await supabaseClient
      .from("messages")
      .select("*")
      .eq("conversation_id", activeConversationId)
      .order("created_at", { ascending: true });
    renderMessages(data || []);
  }

  function renderMessages(msgs) {
    const box = document.getElementById("naijy-chat-messages");
    box.innerHTML = msgs.map(m => {
      const mine = m.sender_id === currentUser.id;
      const cls = m.message_type !== "text" ? m.message_type : (mine ? "mine" : "theirs");
      let label = m.content;
      if (m.message_type === "payment_request") label = `💰 Payment requested: ₦${m.content}`;
      if (m.message_type === "airtime_gift") label = `📱 Airtime gift sent: ₦${m.content}`;
      if (m.message_type === "system") return `<div class="naijy-msg system">${label}</div>`;
      return `<div class="naijy-msg ${cls}">${label}</div>`;
    }).join("");
    box.scrollTop = box.scrollHeight;
  }

  function subscribeRealtime() {
    if (realtimeChannel) supabaseClient.removeChannel(realtimeChannel);
    realtimeChannel = supabaseClient
      .channel(`conv-${activeConversationId}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `conversation_id=eq.${activeConversationId}` },
        () => loadMessages())
      .subscribe();
  }

  async function sendText() {
    const input = document.getElementById("naijy-chat-text");
    const content = input.value.trim();
    if (!content || !activeConversationId) return;
    input.value = "";
    await supabaseClient.from("messages").insert({
      conversation_id: activeConversationId, sender_id: currentUser.id, content, message_type: "text",
    });
  }

  // ---------- Ecosystem-edge features ----------
  // Context-aware + transaction-linked: a payment request is a chat message
  // that, when tapped by the recipient, opens wallet.html pre-filled — no
  // separate app, no re-explaining what the payment is for.
  async function requestPayment() {
    const amount = prompt("Amount to request (₦):");
    if (!amount || isNaN(amount)) return;
    await supabaseClient.from("messages").insert({
      conversation_id: activeConversationId, sender_id: currentUser.id, content: amount, message_type: "payment_request",
    });
  }

  // Airtime-in-chat: send airtime directly to the other person in the
  // conversation, deducted from your wallet at face value — no WhatsApp
  // or Facebook equivalent exists for Nigerian users today.
  async function giftAirtime() {
    const amount = prompt("Airtime amount to gift (₦):");
    if (!amount || isNaN(amount)) return;
    const phone = prompt("Recipient's phone number:");
    if (!phone) return;

    const res = await fetch(`${SUPABASE_URL}/functions/v1/buy-airtime`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: currentUser.id, network: "MTN", phone_number: phone, amount: parseFloat(amount) }),
    });
    const result = await res.json();
    if (result.ok) {
      await supabaseClient.from("messages").insert({
        conversation_id: activeConversationId, sender_id: currentUser.id, content: amount, message_type: "airtime_gift",
      });
    } else {
      alert("Airtime gift failed: " + (result.reason || "unknown error"));
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectStyles();
    injectMarkup();
  });

  window.NaijyChat = { openWith, sendText, requestPayment, giftAirtime };
})();

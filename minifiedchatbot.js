!function(){
    // Create style element
    const n=document.createElement("style");n.textContent="\n      :root {\n          --primary-color: #2563EB;\n          --primary-light: #DBEAFE;\n          --secondary-color: #F3F4F6;\n          --error-color: #EF4444;\n          --success-color: #10B981;\n          --text-color: #1F2937;\n          --light-text: #6B7280;\n          --border-radius: 16px;\n          --message-radius: 20px;\n      }\n  \n      .chat-container {\n          position: fixed;\n          bottom: 24px;\n          right: 24px;\n          width: 420px;\n          height: 680px;\n          background: white;\n          z-index: 1000;\n          border-radius: var(--border-radius);\n          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);\n          display: none;\n          flex-direction: column;\n          overflow: hidden;\n          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n      }\n  \n      .chat-header {\n          background: var(--primary-color);\n          color: white;\n          padding: 20px;\n          font-weight: 600;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n      }\n  \n      .chat-header-title {\n          display: flex;\n          align-items: center;\n          gap: 10px;\n      }\n  \n      .chat-header-title svg {\n          width: 24px;\n          height: 24px;\n      }\n  \n      .chat-header-status {\n          font-size: 13px;\n          opacity: 0.9;\n          font-weight: normal;\n      }\n  \n      .chat-messages {\n          flex: 1;\n          overflow-y: auto;\n          padding: 24px;\n          background: #F9FAFB;\n          scroll-behavior: smooth;\n      }\n  \n      .chat-messages::-webkit-scrollbar {\n          width: 6px;\n      }\n  \n      .chat-messages::-webkit-scrollbar-track {\n          background: transparent;\n      }\n  \n      .chat-messages::-webkit-scrollbar-thumb {\n          background: #E5E7EB;\n          border-radius: 3px;\n      }\n  \n      .message {\n          margin-bottom: 16px;\n          max-width: 75%;\n          padding: 12px 16px;\n          border-radius: var(--message-radius);\n          word-wrap: break-word;\n          position: relative;\n          animation: messageSlide 0.3s ease;\n          line-height: 1.5;\n          font-size: 14px;\n      }\n  \n      .message-timestamp {\n          font-size: 11px;\n          color: var(--light-text);\n          margin-top: 4px;\n          opacity: 0.8;\n      }\n  \n      @keyframes messageSlide {\n          from {\n              opacity: 0;\n              transform: translateY(10px);\n          }\n          to {\n              opacity: 1;\n              transform: translateY(0);\n          }\n      }\n  \n      .user-message {\n          background: var(--primary-color);\n          color: white;\n          margin-left: auto;\n          border-radius: var(--message-radius) var(--message-radius) 0 var(--message-radius);\n      }\n  \n      .user-message .message-timestamp {\n          color: rgba(255, 255, 255, 0.8);\n          text-align: right;\n      }\n  \n      .bot-message {\n          background: white;\n          color: var(--text-color);\n          margin-right: auto;\n          border-radius: var(--message-radius) var(--message-radius) var(--message-radius) 0;\n          border: 1px solid #E5E7EB;\n      }\n  \n      .error-message {\n          background: #FEF2F2;\n          color: var(--error-color);\n          text-align: center;\n          padding: 12px;\n          margin: 10px 20px;\n          border-radius: var(--border-radius);\n          font-size: 14px;\n          border: 1px solid #FEE2E2;\n          animation: shake 0.5s ease;\n      }\n  \n      @keyframes shake {\n          0%, 100% { transform: translateX(0); }\n          25% { transform: translateX(-5px); }\n          75% { transform: translateX(5px); }\n      }\n  \n      .typing-indicator {\n          display: none;\n          background: white;\n          border: 1px solid #E5E7EB;\n          border-radius: var(--message-radius) var(--message-radius) var(--message-radius) 0;\n          padding: 16px;\n          margin-bottom: 16px;\n          width: fit-content;\n          animation: messageSlide 0.3s ease;\n      }\n  \n      .typing-indicator span {\n          display: inline-block;\n          width: 8px;\n          height: 8px;\n          background: var(--primary-color);\n          border-radius: 50%;\n          margin-right: 5px;\n          opacity: 0.6;\n          animation: typing 1s infinite;\n      }\n  \n      .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }\n      .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }\n  \n      @keyframes typing {\n          0%, 100% { transform: translateY(0); }\n          50% { transform: translateY(-5px); }\n      }\n  \n      .chat-input {\n          display: flex;\n          padding: 20px;\n          background: white;\n          border-top: 1px solid #E5E7EB;\n          gap: 12px;\n      }\n  \n      .chat-input-wrapper {\n          flex: 1;\n          position: relative;\n      }\n  \n      .chat-input input {\n          width: 100%;\n          padding: 12px 44px 12px 16px;\n          border: 1px solid #E5E7EB;\n          border-radius: 24px;\n          font-size: 14px;\n          transition: all 0.2s;\n          background: var(--secondary-color);\n      }\n  \n      .chat-input input:focus {\n          outline: none;\n          border-color: var(--primary-color);\n          background: white;\n          box-shadow: 0 0 0 3px var(--primary-light);\n      }\n  \n      .chat-input button {\n          padding: 12px !important;\n          background: var(--primary-color) !important;\n          color: white !important;\n          border: none !important;\n          border-radius: 50% !important;\n          cursor: pointer !important;\n          font-weight: 500 !important;\n          transition: all 0.2s !important;\n          display: flex !important;\n          align-items: center !important;\n          justify-content: center !important;\n          width: 42px !important;\n          height: 42px !important;\n          min-width: 42px !important;\n          min-height: 42px !important;\n      }\n  \n      .chat-input button:hover {\n          background: #1D4ED8 !important;\n          transform: scale(1.05);\n      }\n  \n      .chat-input button:active {\n          transform: scale(0.95);\n      }\n  \n      .chat-trigger {\n          position: fixed !important;\n          bottom: 24px !important;\n          right: 24px !important;\n          width: 64px !important;\n          height: 64px !important;\n          background: #2563EB !important;\n          border-radius: 50% !important;\n          display: flex !important;\n          align-items: center !important;\n          justify-content: center !important;\n          cursor: pointer !important;\n          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25) !important;\n          z-index: 9999 !important;\n          transition: all 0.2s !important;\n      }\n  \n      .chat-container {\n          z-index: 10000 !important;\n      }\n  \n      .chat-trigger:hover {\n          transform: scale(1.05);\n          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);\n      }\n  \n      .chat-trigger svg {\n          width: 28px;\n          height: 28px;\n          color: white;\n      }\n  \n      .close-btn {\n          background: none;\n          border: none;\n          color: white;\n          cursor: pointer;\n          padding: 8px;\n          opacity: 0.8;\n          transition: all 0.2s;\n          border-radius: 8px;\n      }\n  \n      .close-btn:hover {\n          opacity: 1;\n          background: rgba(255, 255, 255, 0.1);\n      }\n  \n      .setup-container {\n          padding: 32px 24px;\n          text-align: center;\n          background: white;\n          border-radius: var(--border-radius);\n          margin: 30px;\n          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);\n      }\n  \n      .setup-title {\n          color: var(--text-color);\n          margin-bottom: 8px;\n          font-size: 18px;\n      }\n  \n      .setup-description {\n          color: var(--light-text);\n          margin-bottom: 24px;\n          font-size: 14px;\n          line-height: 1.5;\n      }\n  \n      .setup-input {\n          width: 80%;\n          padding: 12px 10px;\n          margin-bottom: 16px;\n          border: 1px solid #E5E7EB;\n          border-radius: var(--border-radius);\n          font-size: 14px;\n          transition: all 0.2s;\n      }\n  \n      .setup-input:focus {\n          outline: none;\n          border-color: var(--primary-color);\n          box-shadow: 0 0 0 3px var(--primary-light);\n      }\n  \n      .setup-button {\n          background: var(--primary-color);\n          color: white;\n          border: none;\n          padding: 12px 24px;\n          border-radius: var(--border-radius);\n          cursor: pointer;\n          font-weight: 500;\n          transition: all 0.2s;\n          width: 100%;\n      }\n  \n      .setup-button:hover {\n          background: #1D4ED8;\n      }\n  \n      .conversation-end-buttons {\n          display: flex;\n          gap: 8px;\n          margin-top: 8px;\n      }\n  \n      .conversation-end-button {\n          padding: 6px 12px;\n          border-radius: 16px;\n          border: 1px solid var(--primary-color);\n          background: white;\n          color: var(--primary-color);\n          cursor: pointer;\n          transition: all 0.2s;\n          font-size: 12px;\n      }\n  \n      .feedback-button:hover {\n          background: var(--primary-light);\n      }\n    ",document.head.appendChild(n);
    // Create HTML elements
    const t=document.createElement("div");
    // Create container for chatbot
    t.innerHTML='\n     <div class="chat-trigger">\n        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />\n        </svg>\n      </div>\n  \n      <div class="chat-container" id="chatContainer">\n          <div class="chat-header">\n            <span>HF Chat Support</span>\n            <button class="close-btn">×</button>\n        </div>\n        <div class="chat-messages" id="chatMessages">\n            <div class="typing-indicator" id="typingIndicator">\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        </div>\n        <div class="chat-input">\n            <input type="text" id="userInput" placeholder="Type a message..." disabled>\n            <button id="sendButton" disabled>Send</button>\n        </div>\n      </div>\n    ',document.body.appendChild(t),
    // Configuration methods
    window.WebsiteChatWidget={config:function(n){this.apiKey=n.apiKey,this.apiEndpoint=n.apiEndpoint||"https://dial-ai.henceforthsolutions.com:3001/chat"},initialize:function(){
    // Additional initialization logic if needed
    }};
    // Initialize chatbot
    const e=new
    // ChatBot class definition
    class ChatBot{constructor(){this.apiKey=localStorage.getItem("chatbot_api_key"),this.apiEndpoint="https://dial-ai.henceforthsolutions.com:3001/chat",this.initialized=!1,this.messageHistory=[],this.chatId=null,this.inactivityTimer=null,this.feedbackTimer=null,this.isAwaitingFeedback=!1,this.isChatEnding=!1}async validateApiKey(n){
    // For demo purposes, always return true
    // In production, make an actual API request to validate
    return!0}async initialize(n){try{return await this.validateApiKey(n)?(this.apiKey=n,this.initialized=!0,this.enableInput(),localStorage.setItem("chatbot_api_key",n),this.chatId=null,this.addMessage("Hello! How can I help you today?",!1),!0):(this.showError("Invalid API key. Please check and try again."),!1)}catch(n){return this.showError("Failed to initialize chatbot. Please check your API key."),!1}}enableInput(){const n=document.getElementById("userInput"),t=document.getElementById("sendButton");n&&t&&(n.disabled=!1,t.disabled=!1)}disableInput(){const n=document.getElementById("userInput"),t=document.getElementById("sendButton");n&&t&&(n.disabled=!0,t.disabled=!0)}showError(n){const t=document.querySelector(".error-message");t&&t.remove();const e=document.createElement("div");e.className="error-message",e.textContent=n,document.getElementById("chatMessages")?.appendChild(e),setTimeout((()=>e.remove()),5e3)}addMessage(n,t,e=null){const i=document.createElement("div");i.className="message "+(t?"user-message":"bot-message"),i.textContent=n;const a=document.getElementById("typingIndicator"),o=document.getElementById("chatMessages");a&&o&&o.insertBefore(i,a),e&&(this.chatId=e),this.messageHistory.push({isUser:t,message:n}),this.scrollToBottom(),
    // Reset inactivity timer
    this.resetInactivityTimer(),
    // Check for conversation end triggers
    t&&this.shouldEndConversation(n)&&this.showConversationEndPrompt()}shouldEndConversation(n){return["thank you","thanks","thankyou","thank u","thx"].some((t=>n.toLowerCase().includes(t)))}showConversationEndPrompt(){const n="conversation-end-prompt-"+Date.now(),t=document.createElement("div");t.id=n,t.className="conversation-end",t.innerHTML='\n                <div>Would you like to continue?</div>\n                <div class="conversation-end-buttons">\n                    <button class="conversation-end-button primary" data-action="continue">Continue Chat</button>\n                    <button class="conversation-end-button" data-action="end">End Chat</button>\n                </div>\n            ';const e=document.getElementById("chatMessages");e?.appendChild(t),this.scrollToBottom(),
    // Set timeout for auto-end after 1 minute
    this.conversationEndTimeout=setTimeout((()=>{this.endConversation()}),6e4),
    // Add event listeners
    t.querySelectorAll("button").forEach((n=>{n.addEventListener("click",(n=>{if("continue"===n.target.dataset.action){
    // Replace prompt with continuation message
    const n=document.createElement("div");
    // continuationMessage.className = 'message bot-message';
    // continuationMessage.style.textAlign = 'center';
    // continuationMessage.innerHTML = 'Great! How else can I help you today?';
    // Replace the prompt with the continuation message
    t.replaceWith(n),clearTimeout(this.conversationEndTimeout),this.lastActivityTime=Date.now()}else this.endConversation()}))}))}async endConversation(){if(!this.isChatEnding){this.isChatEnding=!0;try{this.chatId&&
    // Call PUT API to mark conversation as complete
    await fetch(`${this.apiEndpoint}/${this.chatId}`,{method:"PUT",headers:{"Content-Type":"application/json","x-api-key":this.apiKey}}),
    // Clear chat history and start new conversation
    this.messageHistory=[],this.chatId=null,this.isAwaitingFeedback=!1,this.isChatEnding=!1;
    // Clear chat messages and add welcome message
    const n=document.getElementById("chatMessages");n&&(n.innerHTML='\n                        <div class="typing-indicator" id="typingIndicator">\n                            <span></span>\n                            <span></span>\n                            <span></span>\n                        </div>\n                    '),this.addMessage("Hello! How can I help you today?",!1)}catch(n){console.error("Error ending conversation:",n)}}}continueChatting(){this.isAwaitingFeedback=!1,this.feedbackTimer&&clearTimeout(this.feedbackTimer);
    // Remove the feedback prompt
    const n=document.querySelector(".bot-message:last-of-type");n&&n.innerHTML.includes("Would you like to continue?")&&n.remove(),this.resetInactivityTimer()}resetInactivityTimer(){this.inactivityTimer&&clearTimeout(this.inactivityTimer),this.isAwaitingFeedback||(this.inactivityTimer=setTimeout((()=>{this.isAwaitingFeedback||this.showConversationEndPrompt()}),4e4))}scrollToBottom(){const n=document.getElementById("chatMessages");n&&(n.scrollTop=n.scrollHeight)}showTypingIndicator(){const n=document.getElementById("typingIndicator");n&&(n.style.display="block",this.scrollToBottom())}hideTypingIndicator(){const n=document.getElementById("typingIndicator");n&&(n.style.display="none")}async sendMessage(n){if(this.initialized&&this.apiKey){this.addMessage(n,!0),this.showTypingIndicator();try{const t={text:n,...this.chatId&&{chat_id:this.chatId}},e=await fetch(this.apiEndpoint,{method:"POST",headers:{"Content-Type":"application/json","anthropic-version":"2023-06-01","x-api-key":this.apiKey},body:JSON.stringify(t)});if(!e.ok)throw new Error("API request failed");const i=await e.json();setTimeout((()=>{this.hideTypingIndicator(),this.addMessage(i?.data?.ai_response,!1,i?.data?.chat_id)}),500)}catch(n){this.hideTypingIndicator(),this.showError("Sorry, I encountered an error. Please try again later."),console.error("Error sending message:",n)}}else this.showError("Please configure the chatbot first.")}showSetup(){if(document.querySelector(".setup-container"))return;this.chatId=null;const n=`\n                <div class="setup-container">\n                    <h3 class="setup-title">Configure Chatbot</h3>\n                    <input \n                        type="password" \n                        class="setup-input" \n                        id="apiKey" \n                        placeholder="Enter your API Key" \n                        value="${this.apiKey||""}"\n                    />\n                    <button class="setup-button" id="setupButton">Start Chat</button>\n                </div>\n            `,t=document.getElementById("chatMessages");t&&(t.innerHTML=n+t.innerHTML)}};
    // If API key exists in localStorage, initialize immediately
    async function sendMessage(){const n=document.getElementById("userInput");if(!n)return;const t=n.value.trim();t&&(n.value="",await e.sendMessage(t))}
    // Setup button event listener
    e.apiKey&&e.initialize(e.apiKey),
    // Event Listeners
    document.querySelector(".chat-trigger")?.addEventListener("click",(function(){const n=document.getElementById("chatContainer");if(!n)return;const t="none"===n.style.display||""===n.style.display;n.style.display=t?"flex":"none",!t||e.initialized||e.apiKey||e.showSetup()})),document.querySelector(".close-btn")?.addEventListener("click",(function(){const n=document.getElementById("chatContainer");n&&(n.style.display="none")})),document.getElementById("userInput")?.addEventListener("keypress",(function(n){"Enter"===n.key&&sendMessage()})),document.getElementById("sendButton")?.addEventListener("click",sendMessage),document.addEventListener("click",(function(n){n.target&&"setupButton"===n.target.id&&
    // Helper functions
    async function setupChatbot(){const n=document.getElementById("apiKey"),t=n?.value.trim();if(!t)return void e.showError("Please provide your API key.");if(await e.initialize(t)){const n=document.querySelector(".setup-container");n&&n.remove()}}()}))}();
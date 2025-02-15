(function () {
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      :root {
          --primary-color: #181c67;
          --primary-light: #DBEAFE;
          --secondary-color: #F3F4F6;
          --error-color: #EF4444;
          --success-color: #10B981;
          --text-color: #1F2937;
          --light-text: #6B7280;
          --border-radius: 16px;
          --message-radius: 20px;
      }
  
      .chat-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 415px;
          height: 630px;
          background: white;
          z-index: 1000;
          border-radius: var(--border-radius);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          display: none;
          flex-direction: column;
          overflow: hidden;
          font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 13px;
      }

      #userDetailsForm{
        padding:0;
          text-align: start;
          width:100%
    }
          .switch-container {
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        width: 120px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        padding: 5px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .switch-button {
        flex: 1;
        padding: 8px 12px;
        border: none;
        background: transparent;
        color: var(--text-color);
        border-radius: 30px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        z-index: 2;
        transition: color 0.3s ease-in-out;
    }

    .switch-button.active {
        color: black;
    }

    .switch-slider {
        position: absolute;
        
        height: 90%;
        
        border-radius: 50px;
        transition: transform 0.3s ease-in-out;
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
        z-index: 1;
    }

  
      .chat-header {
          background: var(--primary-color);
          color: white;
          padding: 13px 0px;
         
        height: 35px;
          padding-left:10px;
          padding-top:17px;
          font-weight: 600;
          display: flex;
          font-size: 16px;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
  
      .chat-header-title {
          display: flex;
          align-items: center;
          gap: 10px;
      }
  
      .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 15px;
        
          
          scroll-behavior: smooth;
      }
      .chat-messages::-webkit-scrollbar-thumb {
           display:none !important
        }

      .setup-container {
          background: white;
          border-radius: var(--border-radius);
          padding:20px;
          padding-top:30px;
          padding-bottom:30px;
          display: flex;
          margin-top:20px;
          margin-left:7px;
            margin-right:7px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
         
         
          text-align: center;
         
         
         
          box-shadow: 0 0px 51px rgba(0, 0, 0, 0.09);
      }
  
      .setup-title {
          color: var(--text-color);
          text-align: start;
          margin-bottom: 20px;
          font-size: 16px;
         
      }
  
      .setup-description {
          color: var(--light-text);
          margin-bottom: 20px;
          font-size: 13px;
          line-height: 1.5;
      }

      .form-group {
          margin-bottom: 16px;
      }

      .form-label {
          display: block;
          align:start;
          margin-bottom: 6px;
          color: var(--text-color);
          font-size: 15px;
      }

      .form-input {
          width:-webkit-fill-available;
          padding: 13px 11px;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          font-size: 13px;
          color:black;
          transition: all 0.2s;
           focus:none !important;
    outline:none !important;
    box-shadow:none !important;
      }

      
      
      .form-input{
      color:black;
      }
      .country-select-container {
          position: relative;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
      }
    
      .country-select {
          width: 100%;
          
          padding: 8px 12px;
          font-size: 13px;
          transition: all 0.2s;
          background: white;
          cursor: pointer;
      }

      select{
      border:none !important;
      }
        .country-select:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px var(--primary-light);
        }

      .country-options {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          max-height: 200px;
          overflow-y: auto;
          display: none;
          z-index: 1000;
      }

      .country-option {
          padding: 8px 12px;
          cursor: pointer;
      }

      .country-option:hover {
          background: var(--secondary-color);
      }

      .setup-button {
          background: var(--primary-color);
          color: white;
          border: none;
          font-size: 18px;
          padding: 14px 20px;
          border-radius: 13px;
          cursor: pointer;
          font-weight: 500;
          width: 100%;
          transition: all 0.2s;
        
          font-size: 14px;
          font-weight: 600;
      }
  
   
  
      .chat-header-title svg {
          width: 24px;
          height: 24px;
      }
  
      .chat-header-status {
          font-size: 13px;
          opacity: 0.9;
          font-weight: normal;
      }
  
     
      .chat-messages::-webkit-scrollbar {
          width: 6px;
      }
  
      .chat-messages::-webkit-scrollbar-track {
          background: transparent;
      }
  
      .chat-messages::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 3px;
      }
  
      .message {
          margin-bottom: 16px;
          max-width: 75%;
          padding: 12px 16px;
          border-radius: var(--message-radius);
          word-wrap: break-word;
          position: relative;
          animation: messageSlide 0.3s ease;
          line-height: 1.5;
          font-size: 14px;
      }
  
      .message-timestamp {
          font-size: 11px;
          color: var(--light-text);
          margin-top: 4px;
          opacity: 0.8;
      }
          #userInput{
          color:black;
           box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
           padding: 17px 16px;
          }
  
      @keyframes messageSlide {
          from {
              opacity: 0;
              transform: translateY(10px);
          }
          to {
              opacity: 1;
              transform: translateY(0);
          }
      }
  
      .user-message {
          background: var(--secondary-color);
          color:black;
          margin-left: auto;
          border-radius: var(--message-radius) 0 var(--message-radius) var(--message-radius);
      }
  
      .user-message .message-timestamp {
          color: rgba(255, 255, 255, 0.8);
          text-align: right;
      }
  
      .bot-message {
          background: var(--primary-color);
          color: white;
          margin-right: auto;
          border-radius: 0 var(--message-radius) var(--message-radius) var(--message-radius) ;
          border: 1px solid #E5E7EB;
      }
  
      .error-message {
          background: #FEF2F2;
          color: var(--error-color);
          text-align: center;
          padding: 12px;
          margin: 10px 20px;
          border-radius: var(--border-radius);
          font-size: 14px;
          border: 1px solid #FEE2E2;
          animation: shake 0.5s ease;
      }
  
      @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
      }
  
      .typing-indicator {
          display: none;
          background: var(--primary-color);
          border-radius:0 var(--message-radius) var(--message-radius) var(--message-radius) ;
          padding: 12px;
          margin-bottom: 16px;
          width: fit-content;
          animation: messageSlide 0.3s ease;
      }

      .feedbackmsg{
      color:black;}
  
      .typing-indicator span {
          display: inline-block;
          width: 6px;
          height: 6px;
          background:white;
          border-radius: 50%;
          margin-right: 5px;
          opacity: 0.6;
          animation: typing 1s infinite;
      }
  
      .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
      .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
  
      @keyframes typing {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
      }
  
      .chat-input {
          display: flex;
          align-items: center;
          padding: 22px;
          background: white;
          gap: 12px;
      }
  
      .chat-input-wrapper {
          flex: 1;
          position: relative;
      }
  
      .chat-input input {
          width: 100%;
          padding: 12px 44px 12px 16px;
          border: 1px solid #E5E7EB;
          border-radius: 15px;
          font-size: 14px;
          transition: all 0.2s;
          
      }
  
      .chat-input input:focus {
          outline: none;
          border-color: var(--primary-color);
          background: white;
          box-shadow: 0 0 0 3px var(--primary-light);
      }
  
      .chat-input button {
          padding: 12px !important;
          background: var(--primary-color) !important;
          color: white !important;
          border: none !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          font-weight: 500 !important;
          transition: all 0.2s !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 42px !important;
          height: 42px !important;
          min-width: 42px !important;
          min-height: 42px !important;
      }
  
      .chat-input button:hover {
          
          transform: scale(1.05);
      }
  
      .chat-input button:active {
          transform: scale(0.95);
      }
  
      .chat-trigger {
          position: fixed !important;
          bottom: 24px !important;
          right: 24px !important;
          width: 64px !important;
          height: 64px !important;
          background:var(--primary-color) !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.25) !important;
          z-index: 9999 !important;
          transition: all 0.2s !important;
      }
  
      .chat-container {
          z-index: 10000 !important;
      }
  
      .chat-trigger:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);
      }
  
      .chat-trigger svg {
          width: 28px;
          height: 28px;
          color: white;
      }
  
      .close-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          margin-right:8px;
          opacity: 0.8;
          transition: all 0.2s;
          border-radius: 50%;
      }
  
      .close-btn:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.1);
      }
  
   
  
     
  
      .setup-description {
          color: var(--light-text);
          margin-bottom: 24px;
          font-size: 14px;
          line-height: 1.5;
      }
  
      .setup-input {
          width: 80%;
          padding: 12px 10px;
          margin-bottom: 16px;
          border: 1px solid #E5E7EB;
          border-radius: var(--border-radius);
          font-size: 14px;
          transition: all 0.2s;
      }
  
      .setup-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px var(--primary-light);
      }
  
    
      .conversation-end-buttons {
          display: flex;
          gap: 8px;
          margin-top: 8px;
      }
      
      .btn-container{
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          
          }
      .conversation-end-button {
          padding: 6px 12px;
          border-radius: 16px;
          border: 1px solid var(--primary-color);
          background: white;
          color: var(--primary-color);
          cursor: pointer;
          transition: all 0.2s;
          font-size: 12px;
      }
  
      .feedback-button:hover {
          background: var(--primary-light);
      }
    .chatbot-header{
    display:flex;
    align-items:center;
    }
    `;
    document.head.appendChild(style);
    const countryCodesStyle = `
    .country-select-container {
        display: flex;
        gap: 10px;
        align-items: center;
        
        }
        .country-select-container:focus {
            
            border-color:var(--primary-color);
            box-shadow:0 0 0 3px var(--primary-light);
        
        }
            

    .phonee{
    border:none !important;
    focus:none !important;
    outline:none !important;
    box-shadow:none !important;

    }
    .country-code-select {
        width: 60px;
        margin-top:0px;
        margin-bottom:0px;
         border: 1px solid #E5E7EB;
        
         font-size: 13px;
         background: white;
         }
         .custom-dropdown {
            border-radius: 50px;
        position: relative;
        width: 100%;
    }

    .selected-option {
        display: flex;
        align-items: center;
        padding: 12px;
        border-radius: 5px;
        border:1px solid #E5E7EB; 
        cursor: pointer;
    }

    .selected-option img {
        width: 20px;
        height: 15px;
        margin-right: 10px;
    }

    .dropdown-options {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        border: 1px solid #E5E7EB;
        border-radius: 5px;
        margin-top: 5px;
        max-height: 150px;
        overflow-y: auto;
        display: none;
        z-index: 100;
    }

    .dropdown-options div {
        display: flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;
    }

    .dropdown-options div:hover {
        background: #f0f0f0;
    }

    .dropdown-options img {
        width: 20px;
        height: 15px;
        margin-right: 10px;
    }
        @keyframes rippleEffect {
        0% {
            box-shadow: 0 0 0 0 rgba(24, 28, 103, 0.5),
                        0 0 0 10px rgba(24, 28, 103, 0.3),
                        0 0 0 20px rgba(24, 28, 103, 0.1);
            opacity: 1;
        }
        50% {
            box-shadow: 0 0 10px 5px rgba(24, 28, 103, 0.4),
                        0 0 20px 15px rgba(24, 28, 103, 0.2),
                        0 0 30px 25px rgba(24, 28, 103, 0.05);
            opacity: 0.8;
        }
        100% {
            box-shadow: 0 0 0 20px rgba(24, 28, 103, 0),
                        0 0 0 30px rgba(24, 28, 103, 0),
                        0 0 0 40px rgba(24, 28, 103, 0);
            opacity: 0;
        }
    }

    @keyframes rayPulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.1);
            opacity: 1;
        }
    }

    .agent-photo-container {
        position: relative;
        width: 150px;
        height: 150px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .agent-photo {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    }

    .ray-animation {
        position: absolute;
        width: 120%;
        height: 120%;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(24, 28, 103, 0.2), transparent);
        animation: rayPulse 3s infinite ease-in-out;
    }

    .ripple {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: rippleEffect 3s infinite ease-in-out;
    }

    .ripple:nth-child(1) {
        animation-delay: 0s;
    }

    .ripple:nth-child(2) {
        animation-delay: 1s;
    }

    .ripple:nth-child(3) {
        animation-delay: 2s;
    }

    `;
    style.textContent += countryCodesStyle;


    const countryCodes = [
        { code: '+93', country: 'af', country_name: 'Afghanistan' },
        { code: '+355', country: 'al', country_name: 'Albania' },
        { code: '+213', country: 'dz', country_name: 'Algeria' },
        { code: '+376', country: 'ad', country_name: 'Andorra' },
        { code: '+244', country: 'ao', country_name: 'Angola' },
        { code: '+1', country: 'us', country_name: 'United States' },
        { code: '+54', country: 'ar', country_name: 'Argentina' },
        { code: '+374', country: 'am', country_name: 'Armenia' },
        { code: '+61', country: 'au', country_name: 'Australia' },
        { code: '+43', country: 'at', country_name: 'Austria' },
        { code: '+994', country: 'az', country_name: 'Azerbaijan' },
        { code: '+973', country: 'bh', country_name: 'Bahrain' },
        { code: '+880', country: 'bd', country_name: 'Bangladesh' },
        { code: '+375', country: 'by', country_name: 'Belarus' },
        { code: '+32', country: 'be', country_name: 'Belgium' },
        { code: '+229', country: 'bj', country_name: 'Benin' },
        { code: '+975', country: 'bt', country_name: 'Bhutan' },
        { code: '+591', country: 'bo', country_name: 'Bolivia' },
        { code: '+267', country: 'bw', country_name: 'Botswana' },
        { code: '+55', country: 'br', country_name: 'Brazil' },
        { code: '+673', country: 'bn', country_name: 'Brunei' },
        { code: '+359', country: 'bg', country_name: 'Bulgaria' },
        { code: '+226', country: 'bf', country_name: 'Burkina Faso' },
        { code: '+257', country: 'bi', country_name: 'Burundi' },
        { code: '+855', country: 'kh', country_name: 'Cambodia' },
        { code: '+237', country: 'cm', country_name: 'Cameroon' },
        { code: '+1', country: 'ca', country_name: 'Canada' },
        { code: '+238', country: 'cv', country_name: 'Cape Verde' },
        { code: '+236', country: 'cf', country_name: 'Central African Republic' },
        { code: '+235', country: 'td', country_name: 'Chad' },
        { code: '+56', country: 'cl', country_name: 'Chile' },
        { code: '+86', country: 'cn', country_name: 'China' },
        { code: '+57', country: 'co', country_name: 'Colombia' },
        { code: '+269', country: 'km', country_name: 'Comoros' },
        { code: '+506', country: 'cr', country_name: 'Costa Rica' },
        { code: '+385', country: 'hr', country_name: 'Croatia' },
        { code: '+53', country: 'cu', country_name: 'Cuba' },
        { code: '+357', country: 'cy', country_name: 'Cyprus' },
        { code: '+420', country: 'cz', country_name: 'Czech Republic' },
        { code: '+45', country: 'dk', country_name: 'Denmark' },
        { code: '+253', country: 'dj', country_name: 'Djibouti' },
        { code: '+20', country: 'eg', country_name: 'Egypt' },
        { code: '+503', country: 'sv', country_name: 'El Salvador' },
        { code: '+372', country: 'ee', country_name: 'Estonia' },
        { code: '+251', country: 'et', country_name: 'Ethiopia' },
        { code: '+358', country: 'fi', country_name: 'Finland' },
        { code: '+33', country: 'fr', country_name: 'France' },
        { code: '+49', country: 'de', country_name: 'Germany' },
        { code: '+30', country: 'gr', country_name: 'Greece' },
        { code: '+91', country: 'in', country_name: 'India' },
        { code: '+62', country: 'id', country_name: 'Indonesia' },
        { code: '+98', country: 'ir', country_name: 'Iran' },
        { code: '+964', country: 'iq', country_name: 'Iraq' },
        { code: '+353', country: 'ie', country_name: 'Ireland' },
        { code: '+972', country: 'il', country_name: 'Israel' },
        { code: '+39', country: 'it', country_name: 'Italy' },
        { code: '+81', country: 'jp', country_name: 'Japan' },
        { code: '+7', country: 'ru', country_name: 'Russia' },
        { code: '+27', country: 'za', country_name: 'South Africa' },
        { code: '+34', country: 'es', country_name: 'Spain' },
        { code: '+46', country: 'se', country_name: 'Sweden' },
        { code: '+41', country: 'ch', country_name: 'Switzerland' },
        { code: '+66', country: 'th', country_name: 'Thailand' },
        { code: '+90', country: 'tr', country_name: 'Turkey' },
        { code: '+380', country: 'ua', country_name: 'Ukraine' },
        { code: '+44', country: 'gb', country_name: 'United Kingdom' },
        { code: '+971', country: 'ae', country_name: 'United Arab Emirates' },
        { code: '+84', country: 'vn', country_name: 'Vietnam' },
        { code: '+260', country: 'zm', country_name: 'Zambia' },
        { code: '+263', country: 'zw', country_name: 'Zimbabwe' }
    ];

    // Create HTML elements
    const chatHTML = `
        <div class="chat-trigger">
            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--primary-color)" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        </div>

        <div class="chat-container" id="chatContainer">
            <div class="chat-header">
                <div class="chatbot-header">QIXS AI</div>
                <div class="switch-container">
    <div class="switch-slider"></div>
    <button class="switch-button active" id="chatSwitch">Chat</button>
    <button class="switch-button" id="callSwitch">Call</button>
</div>
                <button class="close-btn">X</button>
            </div>
            <div class="chat-messages" id="chatMessages">
                <div class="typing-indicator" id="typingIndicator">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="chat-input" id="chatInput">
                <input type="text" id="userInput" placeholder="Send a message..." disabled>
                <button id="sendButton" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="var(--primary-color)" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div class="call-screen" id="callScreen" style="display: none; flex-direction: column; align-items: center; justify-content: center; height: 100%;  margin-top:-20 background: lavender;">
                <div class="agent-photo-container">
    <div class="ray-animation"></div>
    <img id="agentPhoto" class="agent-photo" src="https://img.freepik.com/premium-vector/vector-flat-illustration-round-gray-man-icon-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1794.jpg?w=740" alt="Agent">
    <div class="ripple"></div>
    <div class="ripple"></div>
    <div class="ripple"></div>
</div>
                <div class="call-controls" style="display: flex; gap: 20px;">
                    <button id="muteButton" style="padding: 10px; border: none; background: var(--primary-color); color: white; border-radius: 50%; cursor: pointer;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 24px; height: 24px;">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5v14l11-7L9 5z" />
                        </svg>
                    </button>
                    <button id="endCallButton" style="padding: 10px; border: none; background: var(--error-color); color: white; border-radius: 50%; cursor: pointer;">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 24px; height: 24px;">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;



    // Add event listeners for switch buttons
    document.addEventListener('DOMContentLoaded', () => {
        const chatSwitch = document.getElementById('chatSwitch');
        const callSwitch = document.getElementById('callSwitch');
        const chatInput = document.getElementById('chatInput');
        const callScreen = document.getElementById('callScreen');
        let socket = null;
        let mediaRecorder = null;

        chatSwitch.addEventListener('click', async () => {
            // Close mic and stop recording
            if (mediaRecorder) {
                mediaRecorder.stop();
                mediaRecorder.stream.getTracks().forEach(track => track.stop());
                mediaRecorder = null;
            }

            // Close all active sockets
            if (socket) {
                socket.close();
                socket = null;
            }

            // Show chat-messages
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.style.display = 'block';

            chatSwitch.classList.add('active');
            callSwitch.classList.remove('active');
            callSwitch.style.background = 'white';
            callSwitch.style.color = 'black';
            chatSwitch.style.background = 'green';
            chatSwitch.style.color = 'white';

            chatInput.style.display = 'flex';
            callScreen.style.display = 'none';
        });

        callSwitch.addEventListener('click', () => {
            navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(stream => {
                const chatMessages = document.getElementById('chatMessages');
                chatMessages.style.display = 'none';

                callSwitch.classList.add('active');
                chatSwitch.classList.remove('active');
                chatSwitch.style.background = 'white';
                chatSwitch.style.color = 'black';
                callSwitch.style.background = 'green';
                callSwitch.style.color = 'white';

                chatInput.style.display = 'none';
                callScreen.style.display = 'flex';

                mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
                socket = new WebSocket('wss://api.deepgram.com/v1/listen', ['token', 'd3ec5b8d86c1f5ff95bc89aee2aad135eb8b059f']);

                socket.onopen = () => {
                    mediaRecorder.addEventListener('dataavailable', event => {
                        if (event.data.size) {
                            socket.send(event.data);
                        }
                    });
                    mediaRecorder.start(300);
                };

                socket.onmessage = async (message) => {
                    const received = JSON.parse(message.data);
                    const transcript = received.channel.alternatives[0].transcript;
                    console.log(transcript);

                    {
                        /**
                         * const requestBody = {
        query: transcript,
        prompt: agentDetails?.call_prompt,
        voice: agentDetails?.agent_voice,
        agent_id: agentId,
        secret_key: secretKey,
        ...(refs.chatId && { chat_id: refs.chatId }),
      };

      const response = await fetch(
        "https://dev.qixs.ai:3003/knowledge-base/landing/page/ai",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      const responseBody = await response.json();
      const model_reply = responseBody?.model_text;

      if (responseBody?.chat_id && !refs.chatId) {
        const newChatId = String(responseBody.chat_id);
        setChatId(newChatId);
        refs.chatId = newChatId;
      }

      const audioBlob = new Blob([new Uint8Array(responseBody.data.data)], {
        type: "audio/wav",
      });
      const audioUrl = URL.createObjectURL(audioBlob);

      refs.audio.src = audioUrl;
      refs.isPlaying = true;

      refs.audio.onended = () => {
        refs.isPlaying = false;
        URL.revokeObjectURL(audioUrl);
      };

      addMessage(model_reply, "system");
      await refs.audio.play();
                         */

                        const refs = {
                            chatId: null,
                            audio: new Audio(),
                            isPlaying: false,
                        };

                        const requestBody = {
                            query: transcript,
                            prompt: "You are a voice assistant for Henceforth Solutions, a IT company which provide software solutions located at Mohali, Punjab, India. The hours to talk to sales team is 8 AM to 11:55 PM daily.\n\nHenceforth solutions provide software solutions with their custom website and mobile development services. They also provide digital marketing services and wordpress, shopify development services. \n\nYou are tasked with answering questions about the business, and booking appointments. If they wish to book an appointment, your goal is to gather necessary information from callers in a friendly and efficient manner like follows:\n\n1. Ask for their full name.\n2. Ask for Email (if they are comfortable to provide)\n3. Ask for Phone no  (if they are comfortable to provide)\n2. Ask for the purpose of their appointment.\n3. Request their preferred date and time for the appointment.\n4. Confirm all details with the caller, including the date and time of the appointment.\n\n- Be sure to be polite and jovial.\n- Keep all your responses short and simple. Use casual language.\n- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.",
                            voice: "aura-asteria-en",
                            agent_id: "67920ef61e04af14648d3623",
                            secret_key: "secret_mqeyvznwcwemv5b0",
                            ...(refs.chatId && { chat_id: refs.chatId }),
                        };

                        try {
                            const response = await fetch(
                                "https://dev.qixs.ai:3003/knowledge-base/landing/page/ai",
                                {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(requestBody),
                                }
                            );
                            const responseBody = await response.json();
                            const model_reply = responseBody?.model_text;
                            const audioBlob = new Blob([new Uint8Array(responseBody.data.data)], {
                                type: "audio/wav",
                            });
                            const audioUrl = URL.createObjectURL(audioBlob);

                            refs.audio.src = audioUrl;
                            refs.isPlaying = true;

                            refs.audio.onended = () => {
                                refs.isPlaying = false;
                                URL.revokeObjectURL(audioUrl);
                            };


                            await refs.audio.play();

                        }
                        catch (err) {
                            console.log(err);
                        }

                    }
                };
            }).catch(err => { return; });
        });

        // Set initial state
        chatSwitch.click();
    });




    // Create container for chatbot
    const chatbotContainer = document.createElement('div');
    chatbotContainer.innerHTML = chatHTML;
    document.body.appendChild(chatbotContainer);


    function getApiKeyFromScript() {
        const scripts = Array.from(document.querySelectorAll('script[src*="chatbot.js"]'));
        const currentScript = scripts[scripts.length - 1];
        const url = new URL(currentScript.src);


        return {
            ai_agent: url.searchParams.get('ai_agent'),
            secret_key: url.searchParams.get('secret_key')
        };
    }

    // Initialize widget with API key from URL
    const { ai_agent, secret_key } = getApiKeyFromScript();

    if (ai_agent && secret_key) {
        // Store API key
        localStorage.setItem('secret_key', secret_key);
        localStorage.setItem('ai_agent', ai_agent);
        this.secret_key = secret_key;
        this.agent_id = ai_agent;

    }

    class ChatBot {
        constructor() {
            this.secret_key = localStorage.getItem('secret_key');
            this.agent_id = localStorage.getItem('ai_agent');
            this.apiEndpoint = 'https://dev.qixs.ai:3003/';
            this.initialized = false;
            this.messageHistory = [];
            this.chatId = null;
            this.userDetails = null;
            this.pendingUserDetails = null;
            this.agent_photo = null;
            this.agent_name = null;
        }

        async validateApiKey(apiKey) {
            // For demo purposes
            return true;
        }

        async submitUserDetails(details) {
            // For demo purposes
            this.userDetails = details;
            const chatMessages = document.getElementById('chatMessages');
            if (chatMessages) {
                // Clear existing messages first
                chatMessages.innerHTML = `
                    <div class="typing-indicator" id="typingIndicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                `;

                // Add welcome message after a short delay to show animation

                const response = await fetch(`${this.apiEndpoint}agent/${this.agent_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'

                    }
                });

                if (response.ok) {
                    const apiRes = await response.json();
                    const firstMessage = apiRes.data.chat_first_message;
                    this.agent_name = apiRes.data.name;
                    this.agent_photo = apiRes.data.image;
                    const chatbotHeader = document.querySelector('.chatbot-header');
                    chatbotHeader.innerHTML = `
                        <img src="https://demoserver3.sgp1.digitaloceanspaces.com/uploads/images/original/${this.agent_photo}" alt="Agent" style="width: 35px; height: 35px; border-radius: 50%; margin-right: 8px; object-fit:cover; ">
                        <span>${apiRes?.data?.name}</span>
                    `;


                    agentPhoto.src = `https://demoserver3.sgp1.digitaloceanspaces.com/uploads/images/original/${this.agent_photo}`;
                    this.addMessage(firstMessage, false);
                } else {
                    console.error('Failed to fetch first message');
                }
                // setTimeout(() => {
                //     this.addMessage('Hello! How can I help you today?', false);
                // }, 300);
            }
            return true;
        }

        showUserForm() {
            // Generate country code options
            const countryCodeOptions = countryCodes.map(cc =>
                `<option value="${cc.code}">${cc.code} ${cc.country_name}</option>`
            ).join('');

            const formHtml = `
                <div class="setup-container" style="background: linear-gradient(135deg, #f5f7fa, #c3cfe2); border-radius: 20px; padding: 30px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);">
                    <form id="userDetailsForm" style="width: 100%; max-width: 400px; margin: auto;">
                        <div class="form-group" style="margin-bottom: 15px;">
                            <label class="form-label" style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #333;">Your name <span style="color: red;">*</span></label>
                            <input type="text" class="form-input" name="name" placeholder="Enter your name" required style=" padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        </div>
                        <div class="form-group" style="margin-bottom: 15px;">
                            <label class="form-label" style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #333;">Email address <span style="color: red;">*</span></label>
                            <input type="email" class="form-input" name="email" placeholder="Enter your email" required style=" padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        </div>
                        <div class="form-group" style="margin-bottom: 15px;">
                            <label class="form-label" style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #333;">Country code</label>
                            <div class="custom-dropdown" style="position: relative; width: 100%;">
                                <div class="selected-option" id="selectedCountry" style="display: flex; align-items: center; padding: 12px; border: 1px solid #ddd; border-radius: 8px; cursor: pointer; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                                    <img width="20" src="https://flagcdn.com/in.svg" id="selectedFlag" style="margin-right: 10px;">
                                    <span id="selectedCode" style="font-size: 14px;">+91 India</span>
                                </div>
                                <div class="dropdown-options" id="countryDropdown" style="position: absolute; top: 100%; left: 0; width: 100%; background: white; border: 1px solid #ddd; border-radius: 8px; margin-top: 5px; max-height: 150px; overflow-y: auto; display: none; z-index: 100; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
                                    <!-- Options will be inserted here dynamically -->
                                </div>
                            </div>
                        </div>
                        <div class="form-group" style="margin-bottom: 15px;">
                            <label class="form-label" style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #333;">Phone number</label>
                            <div class="country-select-container" style="display: flex; gap: 10px; align-items: center;">
                                <input type="tel" class="phonee form-input" name="phone" placeholder="Enter your phone number" style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 14px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                            </div>
                        </div>
                        <div class="btn-container" style="display: flex; justify-content: center; align-items: center; text-align: center;">
                            <button type="submit" class="setup-button" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; font-size: 16px; padding: 14px 20px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.2s;">Start Chat</button>
                        </div>
                    </form>
                </div>
            `;

            const chatMessages = document.getElementById('chatMessages');
            if (chatMessages) {
                chatMessages.innerHTML = formHtml;
                this.setupFormListeners();
            }
        }

        setupFormListeners() {
            const dropdown = document.getElementById("countryDropdown");
            const selectedCountry = document.getElementById("selectedCountry");
            const selectedCode = document.getElementById("selectedCode");
            const selectedFlag = document.getElementById("selectedFlag");

            countryCodes.forEach(cc => {
                const option = document.createElement("div");
                option.innerHTML = `<img src="https://flagcdn.com/16x12/${cc.country}.png"> ${cc.code} ${cc.country_name}`;
                option.onclick = () => {
                    selectedCode.innerText = cc.code + ' ' + cc.country_name;
                    selectedFlag.src = `https://flagcdn.com/16x12/${cc.country}.png`;
                    dropdown.style.display = "none";
                };
                dropdown.appendChild(option);
            });

            selectedCountry.onclick = () => {
                dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
            };

            document.addEventListener("click", (event) => {
                if (!selectedCountry.contains(event.target)) {
                    dropdown.style.display = "none";
                }
            });
            const form = document.getElementById('userDetailsForm');

            if (form) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const formData = new FormData(form);
                    const details = Object.fromEntries(formData.entries());

                    // Normalize details
                    const normalizedDetails = {
                        name: details.name || null,
                        email: details.email || null,
                        phone_no: details.phone || null,
                        country_code: details.country_code || null
                    };

                    // Store pending details to be updated later when chat_id is available
                    this.pendingUserDetails = normalizedDetails;

                    const success = await this.submitUserDetails(normalizedDetails);
                    if (success) {
                        console.log('User details:', normalizedDetails);
                        form.closest('.setup-container').remove();
                        this.initialized = true;
                        this.enableInput();
                    }
                });
            }
        }
        async updateUserDetails(chatId, details) {
            try {
                const response = await fetch(`${this.apiEndpoint}chat/${chatId}/user-detail`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': this.secret_key
                    },
                    body: JSON.stringify(details)
                });

                if (!response.ok) {
                    console.error('Failed to update user details');
                }
            } catch (error) {
                console.error('Error updating user details:', error);
            }
        }

        async validateApiKey(apiKey) {
            // For demo purposes, always return true
            // In production, make an actual API request to validate
            return true;
        }

        async initialize(secret_key) {
            try {
                const isValid = await this.validateApiKey(secret_key);
                if (!isValid) {
                    this.showError('Invalid API key. Please check and try again.');
                    return false;
                }

                this.secret_key = secret_key;
                if (!this.userDetails) {
                    this.showUserForm();
                    return true;
                }

                this.initialized = true;
                this.enableInput();
                // this.addMessage('Hello! How can I help you today?', false);
                const response = await fetch(`${this.apiEndpoint}agent/${this.agent_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const apiRes = await response.json();
                    const firstMessage = apiRes.data.chat_first_message;
                    this.agent_photo = apiRes.data.image;
                    this.addMessage(firstMessage, false);
                } else {
                    console.error('Failed to fetch first message');

                }
                return true;
            } catch (error) {
                this.addMessage(error?.request?.body?.message, false)
                return false;
            }
        }

        enableInput() {
            const userInput = document.getElementById('userInput');
            const sendButton = document.getElementById('sendButton');
            if (userInput && sendButton) {
                userInput.disabled = false;
                sendButton.disabled = false;
            }
        }

        disableInput() {
            const userInput = document.getElementById('userInput');
            const sendButton = document.getElementById('sendButton');
            if (userInput && sendButton) {
                userInput.disabled = true;
                sendButton.disabled = true;
            }
        }

        showError(message) {
            const existingError = document.querySelector('.error-message');
            if (existingError) {
                existingError.remove();
            }

            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = message;
            document.getElementById('chatMessages')?.appendChild(errorDiv);
            setTimeout(() => errorDiv.remove(), 5000);
        }
        addMessage(message, isUser, chat_id = null) {
            const messageContainer = document.createElement('div');
            messageContainer.style.display = 'flex';
            messageContainer.style.alignItems = 'flex-start';
            messageContainer.style.marginBottom = '16px';

            if (!isUser) {
                const botImage = document.createElement('img');
                botImage.src = `https://demoserver3.sgp1.digitaloceanspaces.com/uploads/images/original/${this.agent_photo}`; // Replace with the actual path to the bot image
                botImage.alt = 'Bot';
                botImage.style.width = '26px';
                botImage.style.objectFit = 'cover';
                botImage.style.height = '26px';
                botImage.style.borderRadius = '50%';
                botImage.style.marginRight = '8px';
                messageContainer.appendChild(botImage);
            }

            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

            const messageText = document.createElement('div');
            messageText.textContent = message;
            messageDiv.appendChild(messageText);

            messageContainer.appendChild(messageDiv);

            if (isUser) {
                const userImage = document.createElement('img');
                userImage.src = 'https://img.freepik.com/premium-vector/vector-flat-illustration-round-gray-man-icon-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1794.jpg?w=740'; // Placeholder image for user
                userImage.alt = 'User';
                userImage.style.width = '35px';
                userImage.style.objectFit = 'cover';
                userImage.style.height = '35px';
                userImage.style.borderRadius = '50%';
                userImage.style.marginLeft = '8px';
                userImage.style.marginTop = '-5px';
                messageContainer.appendChild(userImage);
            }

            console.log(message);

            const typingIndicator = document.getElementById('typingIndicator');
            const chatMessages = document.getElementById('chatMessages');
            console.log(chatMessages, "chatMessages");
            if (typingIndicator && chatMessages) {
                chatMessages.insertBefore(messageContainer, typingIndicator);
            }

            if (chat_id) {
                this.chatId = chat_id;
            }

            this.messageHistory.push({ isUser, message });
            this.scrollToBottom();

            // Reset inactivity timer
            this.resetInactivityTimer();

            // Check for conversation end triggers
            if (isUser && this.shouldEndConversation(message)) {
                this.showConversationEndPrompt();
            }
        }

        shouldEndConversation(message) {
            const endTriggers = ['thank you', 'thanks', 'thankyou', 'thank u', 'thx'];
            return endTriggers.some(trigger => message.toLowerCase().includes(trigger));
        }

        showConversationEndPrompt() {
            const promptId = 'conversation-end-prompt-' + Date.now();
            const promptDiv = document.createElement('div');
            promptDiv.id = promptId;
            promptDiv.className = 'conversation-end';
            promptDiv.innerHTML = `
                <div class="feedbackmsg">Would you like to continue?</div>
                <div class="conversation-end-buttons">
                    <button class="conversation-end-button primary" data-action="continue">Continue Chat</button>
                    <button class="conversation-end-button" data-action="end">End Chat</button>
                </div>
            `;

            const chatMessages = document.getElementById('chatMessages');
            chatMessages?.appendChild(promptDiv);
            this.scrollToBottom();

            // Set timeout for auto-end after 1 minute
            this.conversationEndTimeout = setTimeout(() => {
                this.endConversation();
            }, 60000);

            // Add event listeners
            promptDiv.querySelectorAll('button').forEach(button => {
                button.addEventListener('click', (e) => {
                    const action = e.target.dataset.action;
                    if (action === 'continue') {
                        // Replace prompt with continuation message
                        const continuationMessage = document.createElement('div');
                        // continuationMessage.className = 'message bot-message';
                        // continuationMessage.style.textAlign = 'center';
                        // continuationMessage.innerHTML = 'Great! How else can I help you today?';

                        // Replace the prompt with the continuation message
                        promptDiv.replaceWith(continuationMessage);

                        clearTimeout(this.conversationEndTimeout);
                        this.lastActivityTime = Date.now();
                    } else {
                        this.endConversation();
                    }
                });
            });
        }


        async endConversation() {
            if (this.isChatEnding) return;
            this.isChatEnding = true;

            try {
                if (this.chatId) {
                    await fetch(`${this.apiEndpoint}/${this.chatId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-api-key': this.secret_key
                        }
                    });
                }

                this.messageHistory = [];
                this.chatId = null;
                this.initialized = false; // Reset initialization status
                this.isChatEnding = false;

                const chatMessages = document.getElementById('chatMessages');
                if (chatMessages) {
                    // Show user form again
                    this.showUserForm();
                }

            } catch (error) {
                console.error('Error ending conversation:', error);
            }

        }


        continueChatting() {
            this.isAwaitingFeedback = false;
            if (this.feedbackTimer) {
                clearTimeout(this.feedbackTimer);
            }
            // Remove the feedback prompt
            const feedbackMessage = document.querySelector('.bot-message:last-of-type');
            if (feedbackMessage && feedbackMessage.innerHTML.includes('Would you like to continue?')) {
                feedbackMessage.remove();
            }
            this.resetInactivityTimer();
        }

        resetInactivityTimer() {
            if (this.inactivityTimer) {
                clearTimeout(this.inactivityTimer);
            }
            if (this.isAwaitingFeedback) return;

            this.inactivityTimer = setTimeout(() => {
                if (!this.isAwaitingFeedback) {
                    this.showConversationEndPrompt();
                }
            }, 120000);
        }

        scrollToBottom() {
            const chatMessages = document.getElementById('chatMessages');
            if (chatMessages) {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
        }

        showTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.style.display = 'block';
                this.scrollToBottom();
            }
        }

        hideTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.style.display = 'none';
            }
        }

        async sendMessage(message) {
            if (!this.initialized || !this.secret_key || !this.agent_id) {
                this.showError('Please configure the chatbot first.');
                return;
            }

            this.addMessage(message, true);
            this.showTypingIndicator();

            try {
                const requestBody = {
                    text: message,
                    secret_key: this.secret_key,
                    agent_id: this.agent_id,
                    ...(this.chatId && { chat_id: this.chatId }),
                };

                const response = await fetch(`${this.apiEndpoint}chat`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'anthropic-version': '2023-06-01',

                    },
                    body: JSON.stringify(requestBody)
                });

                if (!response.ok) {
                    throw new Error("You don't have any subscription plan! Please purchase any subscription.");
                }

                const data = await response.json();

                // If we have pending user details and a new chat_id, update user details
                if (this.pendingUserDetails && data?.data?.chat_id) {
                    await this.updateUserDetails(data.data.chat_id, this.pendingUserDetails);
                    this.pendingUserDetails = null;
                }

                setTimeout(() => {
                    this.hideTypingIndicator();
                    this.addMessage(data?.data?.ai_response, false, data?.data?.chat_id);
                }, 500);

            } catch (error) {
                this.hideTypingIndicator();
                this.showError(error?.message);
                console.error('Error sending message:', error);
            }
        }
        showSetup() {
            const existingSetup = document.querySelector('.setup-container');
            if (existingSetup) return;

            this.chatId = null;
            const setupHtml = `
                <div class="setup-container">
                    <h3 class="setup-title">Configure Chatbot</h3>
                    <input 
                        type="password" 
                        class="setup-input" 
                        id="secret_key" 
                        placeholder="Enter your API Key" 
                        value="${this.secret_key || ''}"
                    />
                    <button class="setup-button" id="setupButton">Start Chat</button>
                </div>
            `;
            const chatMessages = document.getElementById('chatMessages');
            if (chatMessages) {
                chatMessages.innerHTML = setupHtml + chatMessages.innerHTML;
            }
        }
    }

    // Initialize chatbot
    const chatbot = new ChatBot();

    // If API key exists in localStorage, initialize immediately
    if (chatbot.secret_key) {
        chatbot.initialize(chatbot.secret_key);
    } else {
        chatbot.showSetup();
    }

    // Event Listeners
    document.querySelector('.chat-trigger')?.addEventListener('click', function () {
        const chatContainer = document.getElementById('chatContainer');
        if (!chatContainer) return;

        const isHidden = chatContainer.style.display === 'none' || chatContainer.style.display === '';
        chatContainer.style.display = isHidden ? 'flex' : 'none';
        const secretKey = localStorage.getItem('secret_key');
        const agentId = localStorage.getItem('ai_agent');
        if (isHidden) {
            chatbot.initialize(secretKey);
        }
    });

    document.querySelector('.close-btn')?.addEventListener('click', function () {
        const chatContainer = document.getElementById('chatContainer');
        if (chatContainer) {
            chatContainer.style.display = 'none';
        }
    });

    document.getElementById('userInput')?.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    document.getElementById('sendButton')?.addEventListener('click', sendMessage);

    // Helper functions
    async function setupChatbot() {
        const apiKeyInput = document.getElementById('secret_key');
        const apiKey = apiKeyInput?.value.trim();

        if (!apiKey) {
            chatbot.showError('Please provide your API key.');
            return;
        }

        const success = await chatbot.initialize(apiKey);
        if (success) {
            const setupContainer = document.querySelector('.setup-container');
            if (setupContainer) {
                setupContainer.remove();
            }
        }
    }

    async function sendMessage() {
        const userInput = document.getElementById('userInput');
        if (!userInput) return;

        const message = userInput.value.trim();
        if (!message) return;

        userInput.value = '';
        await chatbot.sendMessage(message);
    }

    // Setup button event listener
    document.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'setupButton') {
            setupChatbot();
        }
    });
})();
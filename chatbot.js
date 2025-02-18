(function () {
  // Create style element
  const style = document.createElement("style");
  style.textContent = `
    :root {
        --primary-color: #33389d;
        --primary-light: #DBEAFE;
        --secondary-color: #ebedf1;
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
        width: 448px;
        height: 610px;
        
         
        z-index: 1000;
        border-radius: var(--border-radius);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        display: none;
        flex-direction: column;
        overflow: hidden;
        font-family: inherit;
        font-size: 13px;
    }

   .setup-container #userDetailsForm{
      padding:0 !important;
        text-align: start !important;
        width:100% !important;
  }
     .chat-header .switch-container {
      display: flex  ;
      gap: 4px    !important;
      align-items: center  !important;
      justify-content: center !important;
      width: 90px !important;
      background: rgba(255, 255, 255, 0.1) ;
      border-radius: 50px !important;
      padding: 5px  !important;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) ;
      position: relative !important;
  }

  .chat-header .switch-button {
      flex: 1;
      
      border: none !important;
      background: transparent ;
      color: var(--text-color) ;
      border-radius: 30px !important;
      font-size: 14px !important;
      padding-top:3px !important;
      font-weight: 600 !important;
      cursor: pointer !important;
      position: relative  !important;
      z-index: 2 !important;
      transition: color 0.3s ease-in-out !important;
  }

 .chat-header  .switch-button.active {
      color: black  !important;
  }

  .chat-header .switch-slider {
      position: absolute !important;
      
      height: 90% !important;
      
      border-radius: 50px !important;
      transition: transform 0.3s ease-in-out !important;
      box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2) !important;
      z-index: 1 !important;
  }


    .chat-container .chat-header {
        background: var(--primary-color) !important;
        color: white  !important;
        padding: 13px 0px  !important;
       
      height: auto !important;
        padding-left:10px  !important;
        padding-top:17px  !important;
        font-weight: 600  !important;
        display: flex  !important;
        font-size: 15px  !important;
        justify-content: space-between  !important;
        align-items: center !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1)  !important;
    }

    .chat-container  .chat-header-title {
        display: flex  !important;
        align-items: center  !important;
        gap: 10px  !important;
    }

    .chat-container .chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 10px 12px;
        padding-top: 20px;
        scroll-behavior: smooth;
    }
    .chat-messages::-webkit-scrollbar-thumb {
         display:none !important
      }
  
      .chat-input input:focus {
        border:none !important;
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

 

    .chat-container  .chat-header-title svg {
        width: 24px  !important;
        height: 24px  !important;
    }

    .chat-container  .chat-header-status {
        font-size: 13px  !important;
        opacity: 0.9  !important;
        font-weight: normal  !important;
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

    .ai_message {
        margin-bottom: 16px;
        max-width: 65%;
        padding: 12px 16px;
        border-radius: var(--message-radius);
        word-wrap: break-word;
        position: relative;
        top: 8px;
  right: 4px;
        animation: messageSlide 0.3s ease;
        line-height: 1.4;
        font-size: 13px;
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
        position: relative;
  left: 11px;
  top:10px;
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
        padding: 8px !important;
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
        width: 46px !important;
        height: 46px !important;
        min-width: 46px !important;
        min-height: 46px !important;
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
        background:#363fb9 !important;
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
        transform: scale(1.09);
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
        padding: 8px 11px;
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
         .message-timestamp {
        font-size: 11px;
     
        margin-top: 4px;
        opacity: 0.8;
        text-align:end;
        color: white;
    }

    .user-message-timestamp{
       font-size:11px;
          margin-top:4px;
          opacity:0.8;
          text-align:end;

    }

    .feedback-button:hover {
        background: var(--primary-light);
    }
  .chatbot-header{
  display:flex  !important;
  align-items:center  !important;
  }
  `;
  document.head.appendChild(style);
  const countryCodesStyle = `
 .setup-container .country-select-container {
      display: flex !important;
      gap: 10px !important;
      align-items: center !important;
      
      }
      .country-select-container:focus {
          
          border-color:var(--primary-color) !important;
          box-shadow:0 0 0 3px var(--primary-light) !important;
      
      }
          

  .setup-container .phonee{
  border:none !important;
  focus:none !important;
  outline:none !important;
  box-shadow:none !important;

  }
  .setup-container .country-code-select {
      width: 60px !important;
      margin-top:0px !important;
      margin-bottom:0px !important;
       border: 1px solid #E5E7EB !important;
      
       font-size: 13px !important;
       background: white !important;
       }
       .custom-dropdown {
          border-radius: 50px !important;
      position: relative !important;
      width: 100% !important;
  }

  .setup-container .selected-option {
      display: flex !important;
      align-items: center !important;
      padding: 12px !important;
      border-radius: 5px !important;
      border:1px solid #E5E7EB !important; 
      cursor: pointer !important;
  }

  .setup-container .selected-option img {
      width: 20px !important;
      height: 15px !important;
      margin-right: 10px !important;
  }

  .setup-container .dropdown-options {
      position: absolute !important;
      top: 100% !important;
      left: 0 !important;
      width: 100%;
      color:black !important;
      background: white !important;
      border: 1px solid #E5E7EB !important;
      border-radius: 5px !important;
      margin-top: 5px !important;
      max-height: 150px !important;
      overflow-y: auto !important;
      ;
      z-index: 100 !important; 
  }

  .setup-container .dropdown-options div {
      display: flex !important;
      align-items: center !important;
      padding: 8px !important;
      cursor: pointer !important;
  }

  .setup-container .dropdown-options div:hover {
      background: #f0f0f0 !important;
  }

  .setup-container .dropdown-options img {
      width: 20px !important;
      height: 15px !important;
      margin-right: 10px !important;
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

  .call-screen .agent-photo-container {
      position: relative !important;
      width: 150px !important;
      height: 150px   !important;
      margin-bottom: 20px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
  }

  .call-screen  .agent-photo {
      width: 100% !important;
      height: 100% !important;
      border-radius: 50% !important;
      object-fit: cover !important;
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2) !important;
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
    { code: "+93", country: "af", country_name: "Afghanistan" },
    { code: "+355", country: "al", country_name: "Albania" },
    { code: "+213", country: "dz", country_name: "Algeria" },
    { code: "+376", country: "ad", country_name: "Andorra" },
    { code: "+244", country: "ao", country_name: "Angola" },
    { code: "+1268", country: "ag", country_name: "Antigua and Barbuda" },
    { code: "+54", country: "ar", country_name: "Argentina" },
    { code: "+374", country: "am", country_name: "Armenia" },
    { code: "+61", country: "au", country_name: "Australia" },
    { code: "+43", country: "at", country_name: "Austria" },
    { code: "+994", country: "az", country_name: "Azerbaijan" },
    { code: "+1242", country: "bs", country_name: "Bahamas" },
    { code: "+973", country: "bh", country_name: "Bahrain" },
    { code: "+880", country: "bd", country_name: "Bangladesh" },
    { code: "+1246", country: "bb", country_name: "Barbados" },
    { code: "+375", country: "by", country_name: "Belarus" },
    { code: "+32", country: "be", country_name: "Belgium" },
    { code: "+501", country: "bz", country_name: "Belize" },
    { code: "+229", country: "bj", country_name: "Benin" },
    { code: "+975", country: "bt", country_name: "Bhutan" },
    { code: "+591", country: "bo", country_name: "Bolivia" },
    { code: "+387", country: "ba", country_name: "Bosnia and Herzegovina" },
    { code: "+267", country: "bw", country_name: "Botswana" },
    { code: "+55", country: "br", country_name: "Brazil" },
    { code: "+673", country: "bn", country_name: "Brunei" },
    { code: "+359", country: "bg", country_name: "Bulgaria" },
    { code: "+226", country: "bf", country_name: "Burkina Faso" },
    { code: "+257", country: "bi", country_name: "Burundi" },
    { code: "+855", country: "kh", country_name: "Cambodia" },
    { code: "+237", country: "cm", country_name: "Cameroon" },
    { code: "+1", country: "ca", country_name: "Canada" },
    { code: "+238", country: "cv", country_name: "Cabo Verde" },
    { code: "+236", country: "cf", country_name: "Central African Republic" },
    { code: "+235", country: "td", country_name: "Chad" },
    { code: "+56", country: "cl", country_name: "Chile" },
    { code: "+86", country: "cn", country_name: "China" },
    { code: "+57", country: "co", country_name: "Colombia" },
    { code: "+242", country: "cg", country_name: "Congo" },
    { code: "+243", country: "cd", country_name: "Congo (DRC)" },
    { code: "+506", country: "cr", country_name: "Costa Rica" },
    { code: "+225", country: "ci", country_name: "Côte d'Ivoire" },
    { code: "+385", country: "hr", country_name: "Croatia" },
    { code: "+357", country: "cy", country_name: "Cyprus" },
    { code: "+420", country: "cz", country_name: "Czech Republic" },
    { code: "+45", country: "dk", country_name: "Denmark" },
    { code: "+253", country: "dj", country_name: "Djibouti" },
    { code: "+1767", country: "dm", country_name: "Dominica" },
    { code: "+1809", country: "do", country_name: "Dominican Republic" },
    { code: "+593", country: "ec", country_name: "Ecuador" },
    { code: "+20", country: "eg", country_name: "Egypt" },
    { code: "+240", country: "gq", country_name: "Equatorial Guinea" },
    { code: "+291", country: "er", country_name: "Eritrea" },
    { code: "+372", country: "ee", country_name: "Estonia" },
    { code: "+268", country: "sz", country_name: "Eswatini" },
    { code: "+251", country: "et", country_name: "Ethiopia" },
    { code: "+679", country: "fj", country_name: "Fiji" },
    { code: "+358", country: "fi", country_name: "Finland" },
    { code: "+33", country: "fr", country_name: "France" },
    { code: "+241", country: "ga", country_name: "Gabon" },
    { code: "+220", country: "gm", country_name: "Gambia" },
    { code: "+995", country: "ge", country_name: "Georgia" },
    { code: "+49", country: "de", country_name: "Germany" },
    { code: "+233", country: "gh", country_name: "Ghana" },
    { code: "+30", country: "gr", country_name: "Greece" },
    { code: "+1473", country: "gd", country_name: "Grenada" },
    { code: "+502", country: "gt", country_name: "Guatemala" },
    { code: "+224", country: "gn", country_name: "Guinea" },
    { code: "+245", country: "gw", country_name: "Guinea-Bissau" },
    { code: "+504", country: "hn", country_name: "Honduras" },
    { code: "+36", country: "hu", country_name: "Hungary" },
    { code: "+354", country: "is", country_name: "Iceland" },
    { code: "+91", country: "in", country_name: "India" },
    { code: "+62", country: "id", country_name: "Indonesia" },
    { code: "+98", country: "ir", country_name: "Iran" },
    { code: "+964", country: "iq", country_name: "Iraq" },
    { code: "+353", country: "ie", country_name: "Ireland" },
    { code: "+972", country: "il", country_name: "Israel" },
    { code: "+39", country: "it", country_name: "Italy" },
    { code: "+1876", country: "jm", country_name: "Jamaica" },
    { code: "+81", country: "jp", country_name: "Japan" },
    { code: "+962", country: "jo", country_name: "Jordan" },
    { code: "+7", country: "kz", country_name: "Kazakhstan" },
    { code: "+254", country: "ke", country_name: "Kenya" },
    { code: "+686", country: "ki", country_name: "Kiribati" },
    { code: "+850", country: "kp", country_name: "North Korea" },
    { code: "+383", country: "xk", country_name: "Kosovo" },
    { code: "+965", country: "kw", country_name: "Kuwait" },
    { code: "+996", country: "kg", country_name: "Kyrgyzstan" },
    { code: "+856", country: "la", country_name: "Laos" },
    { code: "+371", country: "lv", country_name: "Latvia" },
    { code: "+961", country: "lb", country_name: "Lebanon" },
    { code: "+266", country: "ls", country_name: "Lesotho" },
    { code: "+231", country: "lr", country_name: "Liberia" },
    { code: "+218", country: "ly", country_name: "Libya" },
    { code: "+370", country: "lt", country_name: "Lithuania" },
    { code: "+352", country: "lu", country_name: "Luxembourg" },
    { code: "+261", country: "mg", country_name: "Madagascar" },
    { code: "+265", country: "mw", country_name: "Malawi" },
    { code: "+60", country: "my", country_name: "Malaysia" },
    { code: "+960", country: "mv", country_name: "Maldives" },
    { code: "+223", country: "ml", country_name: "Mali" },
    { code: "+356", country: "mt", country_name: "Malta" },
    { code: "+692", country: "mh", country_name: "Marshall Islands" },
    { code: "+222", country: "mr", country_name: "Mauritania" },
    { code: "+230", country: "mu", country_name: "Mauritius" },
    { code: "+52", country: "mx", country_name: "Mexico" },
    { code: "+691", country: "fm", country_name: "Micronesia" },
    { code: "+373", country: "md", country_name: "Moldova" },
    { code: "+377", country: "mc", country_name: "Monaco" },
    { code: "+976", country: "mn", country_name: "Mongolia" },
    { code: "+382", country: "me", country_name: "Montenegro" },
    { code: "+212", country: "ma", country_name: "Morocco" },
    { code: "+258", country: "mz", country_name: "Mozambique" },
    { code: "+95", country: "mm", country_name: "Myanmar" },
    { code: "+264", country: "na", country_name: "Namibia" },
    { code: "+674", country: "nr", country_name: "Nauru" },
    { code: "+977", country: "np", country_name: "Nepal" },
    { code: "+31", country: "nl", country_name: "Netherlands" },
    { code: "+64", country: "nz", country_name: "New Zealand" },
    { code: "+505", country: "ni", country_name: "Nicaragua" },
    { code: "+227", country: "ne", country_name: "Niger" },
    { code: "+234", country: "ng", country_name: "Nigeria" },
    { code: "+389", country: "mk", country_name: "North Macedonia" },
    { code: "+47", country: "no", country_name: "Norway" },
    { code: "+968", country: "om", country_name: "Oman" },
    { code: "+92", country: "pk", country_name: "Pakistan" },
    { code: "+680", country: "pw", country_name: "Palau" },
    { code: "+970", country: "ps", country_name: "Palestine" },
    { code: "+507", country: "pa", country_name: "Panama" },
    { code: "+675", country: "pg", country_name: "Papua New Guinea" },
    { code: "+595", country: "py", country_name: "Paraguay" },
    { code: "+51", country: "pe", country_name: "Peru" },
    { code: "+63", country: "ph", country_name: "Philippines" },
    { code: "+48", country: "pl", country_name: "Poland" },
    { code: "+351", country: "pt", country_name: "Portugal" },
    { code: "+974", country: "qa", country_name: "Qatar" },
    { code: "+40", country: "ro", country_name: "Romania" },
    { code: "+7", country: "ru", country_name: "Russia" },
    { code: "+250", country: "rw", country_name: "Rwanda" },
    { code: "+1869", country: "kn", country_name: "Saint Kitts and Nevis" },
    { code: "+1758", country: "lc", country_name: "Saint Lucia" },
    {
      code: "+1784",
      country: "vc",
      country_name: "Saint Vincent and the Grenadines",
    },
    { code: "+685", country: "ws", country_name: "Samoa" },
    { code: "+378", country: "sm", country_name: "San Marino" },
    { code: "+239", country: "st", country_name: "Sao Tome and Principe" },
    { code: "+966", country: "sa", country_name: "Saudi Arabia" },
    { code: "+221", country: "sn", country_name: "Senegal" },
    { code: "+381", country: "rs", country_name: "Serbia" },
    { code: "+248", country: "sc", country_name: "Seychelles" },
    { code: "+232", country: "sl", country_name: "Sierra Leone" },
    { code: "+65", country: "sg", country_name: "Singapore" },
    { code: "+421", country: "sk", country_name: "Slovakia" },
    { code: "+386", country: "si", country_name: "Slovenia" },
    { code: "+677", country: "sb", country_name: "Solomon Islands" },
    { code: "+252", country: "so", country_name: "Somalia" },
    { code: "+27", country: "za", country_name: "South Africa" },
    { code: "+82", country: "kr", country_name: "South Korea" },
    { code: "+211", country: "ss", country_name: "South Sudan" },
    { code: "+34", country: "es", country_name: "Spain" },
    { code: "+94", country: "lk", country_name: "Sri Lanka" },
    { code: "+249", country: "sd", country_name: "Sudan" },
    { code: "+46", country: "se", country_name: "Sweden" },
    { code: "+41", country: "ch", country_name: "Switzerland" },
    { code: "+963", country: "sy", country_name: "Syria" },
    { code: "+886", country: "tw", country_name: "Taiwan" },

    { code: "+992", country: "tj", country_name: "Tajikistan" },
    { code: "+255", country: "tz", country_name: "Tanzania" },
    { code: "+670", country: "tl", country_name: "Timor-Leste" },
    { code: "+228", country: "tg", country_name: "Togo" },
    { code: "+676", country: "to", country_name: "Tonga" },
    { code: "+216", country: "tn", country_name: "Tunisia" },
    { code: "+993", country: "tm", country_name: "Turkmenistan" },
    { code: "+688", country: "tv", country_name: "Tuvalu" },
    { code: "+256", country: "ug", country_name: "Uganda" },
    { code: "+44", country: "gb", country_name: "United Kingdom" },
    { code: "+1", country: "us", country_name: "United States" },
    { code: "+598", country: "uy", country_name: "Uruguay" },
    { code: "+998", country: "uz", country_name: "Uzbekistan" },
    { code: "+678", country: "vu", country_name: "Vanuatu" },
    { code: "+379", country: "va", country_name: "Vatican City" },
    { code: "+58", country: "ve", country_name: "Venezuela" },
    { code: "+967", country: "ye", country_name: "Yemen" },
    { code: "+260", country: "zm", country_name: "Zambia" },
    { code: "+263", country: "zw", country_name: "Zimbabwe" },
  ];
  // Create HTML elements

  let mediaRecorder, audioStream;
  let live;
  let callId = null;
  const audioPlayer = new Audio();
  let isFinalTranscripts = [];
  let isListening = false;
  let callDetailsSubmitted = false;
  let isProcessing = false;
  const chatHTML = `
      <div class="chat-trigger"
      style="display:flex;align-items:center;justify-content:center;position:fixed;bottom:20px;right:20px;width:60px;height:60px;background:var(--primary-color);border-radius:50%;cursor:pointer;box-shadow:0 4px 16px rgba(37, 99, 235, 0.25);z-index:9999;transition:all 0.2s;">
      </div>

      <div class="chat-container" id="chatContainer">
          <div class="chat-header">
          <div class="chatbot-header" style="position: relative;">
          <div class="active-dot" style="position: absolute; bottom: -2px; right: -2px; width: 10px; height: 10px; background: green; border-radius: 50%;"></div>
          </div>
          <div class="switch-container" style="display: none;"  >
           <div class="switch-slider"></div>
           <button class="switch-button active" title="Chat" id="chatSwitch"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></button>
           <button class="switch-button" title="Voice chat" id="callSwitch">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-audio-lines"><path d="M2 10v3"/><path d="M6 6v11"/><path d="M10 3v18"/><path d="M14 8v7"/><path d="M18 5v13"/><path d="M22 10v3"/></svg>                 </button>
          </div>
          <button class="close-btn">X</button>
          </div>
          <div class="chat-messages" id="chatMessages" style="background:white;">
          
          <div class="typing-indicator" id="typingIndicator" style="display: flex; align-items: center;">
          <img src="https://demoserver3.sgp1.digitaloceanspaces.com/uploads/images/original/${localStorage.getItem(
            "agent_image"
          )}" alt="Agent" style="width: 26px; height: 26px; border-radius: 50%; margin-right: 8px; object-fit: cover;">
          <span></span>
          <span></span>
          <span></span>
          </div>
          </div>
          <div class="chat-input" id="chatInput">
          <input type="text" id="userInput" placeholder="Send a message..." disabled>
          <button id="sendButton" disabled>
          <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5343 4.09889L8.64427 7.3846C1.99618 9.60793 1.99618 13.2332 8.64427 15.4456L11.5795 16.4203L12.5543 19.3556C14.7667 26.0036 18.4028 26.0036 20.6152 19.3556L23.9119 9.4765C25.3795 5.04079 22.97 2.62031 18.5343 4.09889ZM18.8847 9.99127L14.7228 14.1751C14.5586 14.3394 14.3505 14.416 14.1424 14.416C13.9343 14.416 13.7262 14.3394 13.5619 14.1751C13.2443 13.8575 13.2443 13.3317 13.5619 13.0141L17.7238 8.83031C18.0414 8.5127 18.5671 8.5127 18.8847 8.83031C19.2024 9.14793 19.2024 9.67365 18.8847 9.99127Z" fill="white"/>
      </svg>

          </button>
          </div>
          <div class="call-screen" id="callScreen" style="display: none; flex-direction: column; align-items: center; justify-content: center; height: 100%;  margin-top:-20 ">
          <div class="agent-photo-container">
          <div class="ray-animation"></div>
           <img id="agentPhoto" class="agent-photo" src="https://img.freepik.com/premium-vector/vector-flat-illustration-round-gray-man-icon-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1794.jpg?w=740" alt="Agent">
           <div class="ripple"></div>
           <div class="ripple"></div>
            <div class="ripple"></div>
          </div>
          <div class="call-controls" style="display: flex; gap: 20px;">
          
          <button id="muteButton" style="padding-top: 4px; border: none; background: var(--primary-color); color: white; border-radius: 50%; cursor: pointer;">
             <svg id="muteIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
          </button>
          <button id="endCallButton" style="padding-top: 4px; border: none; background: var(--error-color); color: white; border-radius: 50%; cursor: pointer;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-stop"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>
          </button>
          </div>
          </div>
      </div>
      `;

  async function endCall() {
    try {
      await fetch(`https://dev.qixs.ai:3003/chat/${callId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {}
  }

  document.addEventListener("DOMContentLoaded", () => {
    const muteButton = document.getElementById("muteButton");
    const muteIcon = document.getElementById("muteIcon");
    let isMuted = false;

    //handle stop button
    const endCallButton = document.getElementById("endCallButton");
    endCallButton.addEventListener("click", async () => {
      const chatSwitch = document.getElementById("chatSwitch");
      const callSwitch = document.getElementById("callSwitch");
      if (mediaRecorder) {
        mediaRecorder.stop();
        mediaRecorder.ondataavailable = null;
        mediaRecorder = null;
      }

      if (audioStream) {
        audioStream.getTracks().forEach((track) => track.stop());
        audioStream = null;
      }

      const callScreen = document.getElementById("callScreen");
      const chatInput = document.getElementById("chatInput");
      const chatMessages = document.getElementById("chatMessages");
      callScreen.style.display = "none";

      chatMessages.style.display = "block";
      chatInput.style.display = "flex";
      chatSwitch.classList.add("active");
      callSwitch.classList.remove("active");
      chatSwitch.style.background = "green";
      chatSwitch.style.color = "white";
      callSwitch.style.background = "white";
      callSwitch.style.color = "black";

      chatMessages.style.display = "block";

      await endCall();
    });

    muteButton.addEventListener("click", () => {
      isMuted = !isMuted;
      if (isMuted) {
        muteIcon.innerHTML = `<line x1="1" y1="1" x2="23" y2="23"/><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>`;
        muteButton.style.color = "white";
        muteButton.style.backgroundColor = "red";
        muteCall();
      } else {
        muteIcon.innerHTML = `<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>`;

        muteButton.style.color = "white";
        muteButton.style.backgroundColor = "var(--primary-color)";
        unmuteCall();
      }
    });

    function muteCall() {
      if (audioStream) {
        audioStream
          .getAudioTracks()
          .forEach((track) => (track.enabled = false));
      }
    }

    function unmuteCall() {
      if (audioStream) {
        audioStream.getAudioTracks().forEach((track) => (track.enabled = true));
      }
    }
  });

  async function playInitialMessage() {
    try {
      const response = await fetch(
        `https://api.deepgram.com/v1/speak?model=${localStorage.getItem(
          "agent_voice"
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token c7f2be50ae5262222eb302d1b47a8099e476b306",
          },
          body: JSON.stringify({
            text: localStorage.getItem("call_first_message"),
          }),
        }
      );

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      await playAudioAndInitialize(audioUrl);
    } catch (error) {
      console.error("Error playing initial message:", error);
      await initializeCall();
    }
  }

  async function playAudioAndInitialize(audioUrl) {
    return new Promise((resolve) => {
      audioPlayer.src = audioUrl;
      audioPlayer.play();

      audioPlayer.onended = async () => {
        URL.revokeObjectURL(audioUrl);
        isProcessing = false;

        if (callSwitch.classList.contains("active")) {
          await initializeCall();
        }
        resolve();
      };
    });
  }

  async function initializeCall() {
    if (isListening) return;

    const DEEPGRAM_API_KEY = "c7f2be50ae5262222eb302d1b47a8099e476b306";
    const { createClient } = window.deepgram;
    const deepgramClient = createClient(DEEPGRAM_API_KEY);

    try {
      audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          noiseSuppression: true,
          echoCancellation: true,
          autoGainControl: true,
        },
      });

      mediaRecorder = new MediaRecorder(audioStream, {
        mimeType: "audio/webm",
      });

      await startListening(deepgramClient);
    } catch (error) {
      console.error("Error initializing call:", error);
      isListening = false;
    }
  }

  async function startListening(deepgramClient) {
    if (isListening) return;

    console.log("Starting listening...");
    isListening = true;

    if (live) {
      await stopListening();
    }

    live = deepgramClient.listen.live({
      model: "nova-3",
      language: "en-US",
      smart_format: true,
      interim_results: true,
      utterance_end_ms: 1000,
      vad_events: true,
      endpointing: 500,
    });

    live.on("open", () => {
      console.log("Live transcription connection opened");

      mediaRecorder.addEventListener("dataavailable", (event) => {
        if (event.data.size > 0 && live && live.getReadyState() === 1) {
          live.send(event.data);
        }
      });

      if (mediaRecorder.state !== "recording") {
        mediaRecorder.start(250);
      }
    });

    live.on("close", async () => {
      console.log("WebSocket connection closed");
      isListening = false;

      if (callSwitch.classList.contains("active") && !isProcessing) {
        await initializeCall();
      }
    });

    live.on("error", async (err) => {
      console.error("Deepgram error:", err);
      isListening = false;
      await stopListening();

      if (callSwitch.classList.contains("active") && !isProcessing) {
        await initializeCall();
      }
    });

    live.on("Results", (data) => {
      if (!isProcessing) {
        const receivedTranscript =
          data.channel?.alternatives[0]?.transcript || "";
        if (data.is_final) {
          isFinalTranscripts.push(receivedTranscript);
        }
      }
    });

    live.on("UtteranceEnd", async () => {
      if (!isProcessing) {
        const fullUtterance = isFinalTranscripts.join(" ");
        if (fullUtterance.trim() !== "") {
          await processTranscript(fullUtterance);
          isFinalTranscripts = [];
        }
      }
    });
  }

  async function submitUserDetailsForCall() {
    if (callDetailsSubmitted) return;
    callDetailsSubmitted = true;
    const user_details = JSON.parse(localStorage.getItem("user_details"));
    const payload = {
      chat_id: localStorage.getItem("call_id"),

      name: user_details?.name || "",
      phone_no: user_details?.phone_no || "",
      email: user_details?.email || "",
      country_code: user_details?.country_code || "",
      type: "VOICE_CHAT",
    };

    try {
      await fetch(`https://dev.qixs.ai:3003/chat/${callId}/user-detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Error submitting user details:", error);
    }
  }

  async function processTranscript(transcript) {
    if (!transcript || isProcessing) return;

    console.log("Processing transcript:", transcript);
    isProcessing = true;

    try {
      const payload = {
        query: transcript,
        prompt: localStorage.getItem("call_prompt"),
        voice: localStorage.getItem("agent_voice"),
        agent_id: localStorage.getItem("ai_agent"),
        secret_key: localStorage.getItem("secret_key"),
      };

      if (localStorage.getItem("call_id") !== "undefined") {
        payload.chat_id = localStorage.getItem("call_id");
      }

      const apiResponse = await fetch(
        "https://dev.qixs.ai:3003/knowledge-base/landing/page/ai",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const response = await apiResponse.json();

      if (!callId) {
        localStorage.setItem("call_id", response.chat_id);
        await submitUserDetailsForCall();
      }
      const audioBlob = new Blob([new Uint8Array(response.data.data)], {
        type: "audio/wav",
      });

      const audioUrl = URL.createObjectURL(audioBlob);
      await playAudioAndInitialize(audioUrl);
    } catch (error) {
      console.error("Error processing transcript:", error);
      isProcessing = false;

      if (callSwitch.classList.contains("active")) {
        await initializeCall();
      }
    }
  }
  async function stopListening() {
    console.log("Stopping live transcription...");
    isListening = false;

    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
    }

    if (audioStream) {
      audioStream.getTracks().forEach((track) => track.stop());
    }

    if (live && live.socket && live.socket.readyState === 1) {
      live.socket.close();
    }

    live = null;
    isFinalTranscripts = [];
  }

  // Add event listeners for switch buttons
  document.addEventListener("DOMContentLoaded", () => {
    const chatSwitch = document.getElementById("chatSwitch");
    const callSwitch = document.getElementById("callSwitch");
    const chatInput = document.getElementById("chatInput");
    const callScreen = document.getElementById("callScreen");
    // let mediaRecorder, audioStream;
    // let live;
    // const audioPlayer = new Audio();
    // let isFinalTranscripts = [];
    // let isListening = false;
    // let isProcessing = false;

    chatSwitch.addEventListener("click", async () => {
      if (mediaRecorder || live) {
        await stopListening();
      }

      const chatMessages = document.getElementById("chatMessages");
      chatMessages.style.display = "block";

      updateSwitchStyles(true);

      chatInput.style.display = "flex";
      callScreen.style.display = "none";
    });

    callSwitch.addEventListener("click", async () => {
      //if microphone is not available return
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        stream.getTracks().forEach((track) => track.stop());
      } catch (err) {
        alert("Please allow microphone access to use voice chat");
        chatSwitch.click();
        return;
      }
      const chatMessages = document.getElementById("chatMessages");
      chatMessages.style.display = "none";
      const callScreen = document.getElementById("callScreen");
      callScreen.style.backgroundColor = "white";

      updateSwitchStyles(false);

      chatInput.style.display = "none";
      callScreen.style.display = "flex";

      if (isFinalTranscripts.length <= 0) {
        await playInitialMessage();
      } else {
        await initializeCall();
      }
    });

    function updateSwitchStyles(isChatActive) {
      if (isChatActive) {
        chatSwitch.classList.add("active");
        callSwitch.classList.remove("active");
        chatSwitch.style.background = "green";
        chatSwitch.style.color = "white";
        callSwitch.style.background = "white";
        callSwitch.style.color = "black";
      } else {
        callSwitch.classList.add("active");
        chatSwitch.classList.remove("active");
        callSwitch.style.background = "green";
        callSwitch.style.color = "white";
        chatSwitch.style.background = "white";
        chatSwitch.style.color = "black";
      }
    }

    chatSwitch.click();
  });

  // Create container for chatbot
  const chatbotContainer = document.createElement("div");
  chatbotContainer.innerHTML = chatHTML;
  document.body.appendChild(chatbotContainer);

  function getApiKeyFromScript() {
    const scripts = Array.from(
      document.querySelectorAll('script[src*="chatbot.js"]')
    );
    const currentScript = scripts[scripts.length - 1];
    const url = new URL(currentScript.src);

    const token = url.searchParams.get("token");
    const normalizedToken = token.replace(/-/g, "+").replace(/_/g, "/");

    const padding = normalizedToken.length % 4;
    const paddedToken = padding
      ? normalizedToken + "=".repeat(4 - padding)
      : normalizedToken;

    // Browser-compatible base64 decoding
    const decoded = atob(paddedToken);
    const data = JSON.parse(decoded);
    const getAgentandScriptDetails = async (agentId) => {
      try {
        const apiRes = await fetch(
          `https://dev.qixs.ai:3003/agent/${agentId}`,
          {
            method: "GET",
          }
        );
        const response = await apiRes.json();

        //insert image of agent inside chattrigger div
        const chatTrigger = document.querySelector(".chat-trigger");
        const chatbotHeader = document.querySelector(".chatbot-header");
        const agentPhoto = document.getElementById("agentPhoto");
        if (response?.data?.image) {
          // Add a tooltip to the chat trigger
          chatTrigger.setAttribute("title", "Talk to " + response?.data?.name);

          // Create the green dot
          const greenDot = document.createElement("div");
          greenDot.style.position = "absolute";
          greenDot.style.bottom = "0px";
          greenDot.style.right = "3px";
          greenDot.style.width = "12px";
          greenDot.style.height = "12px";
          greenDot.style.backgroundColor = "green";
          greenDot.style.borderRadius = "50%";
          greenDot.style.border = "2px solid white";

          // Set the chat trigger image
          chatTrigger.style.position = "relative";
          chatTrigger.innerHTML = `<img src="https://demoserver3.sgp1.digitaloceanspaces.com/uploads/images/original/${response?.data?.image}" alt="Agent" style="width: 58px; height: 58px; border-radius: 50%; object-fit:cover; ">`;

          // Append the green dot and send icon after setting the innerHTML
          chatTrigger.appendChild(greenDot);

          // Set the chatbot header and agent photo
          chatbotHeader.innerHTML = `<img src="https://demoserver3.sgp1.digitaloceanspaces.com/uploads/images/original/${response?.data?.image}" alt="Agent" style="width: 35px; height: 35px; border-radius: 50%; margin-right: 8px; object-fit:cover; "><span>${response?.data?.name}</span>`;
          agentPhoto.src = `https://demoserver3.sgp1.digitaloceanspaces.com/uploads/images/original/${response?.data?.image}`;
        } else {
          chatTrigger.innerHTML = `<img src="https://img.freepik.com/premium-vector/vector-flat-illustration-round-gray-man-icon-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1794.jpg?w=740" alt="Agent" style="width: 35px; height: 35px; border-radius: 50%; ; object-fit:cover; "> `;
          chatbotHeader.innerHTML = `<img src="https://img.freepik.com/premium-vector/vector-flat-illustration-round-gray-man-icon-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1794.jpg?w=740" alt="Agent" style="width: 35px; height: 35px; border-radius: 50%; ; object-fit:cover; ">
                  <span>${response?.data?.name}</span>`;
        }

        localStorage.setItem("secret_key", response?.data?.script_data?.key);
        localStorage.setItem("ai_agent", response?.data?._id);
        localStorage.setItem("agent_name", response?.data?.name);
        localStorage.setItem("agent_voice", response?.data?.voice);
        localStorage.setItem("agent_image", response?.data?.image);
        localStorage.setItem("chat_prompt", response?.data?.chat_prompt);
        localStorage.setItem(
          "call_first_message",
          response?.data?.call_first_message
        );
        localStorage.setItem("call_prompt", response?.data?.call_prompt);
        localStorage.setItem(
          "chat_first_message",
          response?.data?.chat_first_message
        );
      } catch (error) {
        console.error("Profile fetch error:", error);
      }
    };
    return getAgentandScriptDetails(data.agent_id);
  }

  // Initialize widget with API key from URL
  getApiKeyFromScript();

  class ChatBot {
    constructor() {
      this.secret_key = localStorage.getItem("secret_key");
      this.agent_id = localStorage.getItem("ai_agent");
      this.apiEndpoint = "https://dev.qixs.ai:3003/";
      this.initialized = false;
      this.messageHistory = [];
      this.chatId = null;
      this.callId = null;
      this.userDetails = null;
      this.pendingUserDetails = null;
      this.agent_photo = localStorage.getItem("agent_image");
      this.agent_name = localStorage.getItem("agent_name");
    }

    async validateApiKey(apiKey) {
      // For demo purposes
      return true;
    }

    async submitUserDetails(details) {
      // For demo purposes
      this.userDetails = details;
      const chatMessages = document.getElementById("chatMessages");
      if (chatMessages) {
        chatMessages.innerHTML = `
                  <div class="typing-indicator" id="typingIndicator">
                      <span></span>
                      <span></span>
                      <span></span>
                  </div>
              `;
        const firstMessage = localStorage.getItem("chat_first_message");
        this.addMessage(firstMessage, false);
      }
      return true;
    }

    showUserForm() {
      // Generate country code options

      const formHtml = `
              <div class="setup-container" style="background: linear-gradient(135deg, #f5f7fa, #c3cfe2) !important; border-radius: 20px !important; padding: 30px !important; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;">
              <form id="userDetailsForm" style="width: 100% !important; max-width: 400px !important; margin: auto !important;">
                  <div class="form-group" style="margin-bottom: 15px !important;">
                  <label class="form-label" style="display: block !important; margin-bottom: 8px !important; font-size: 14px !important; font-weight: 600 !important; color: #333 !important;">Your name <span style="color: red !important;">*</span></label>
                  <input type="text" class="form-input" name="name" placeholder="Enter your name" required style="padding: 12px !important; border: 1px solid #ddd !important; border-radius: 8px !important; font-size: 14px !important; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;">
                  </div>
                  <div class="form-group" style="margin-bottom: 15px !important;">
                  <label class="form-label" style="display: block !important; margin-bottom: 8px !important; font-size: 14px !important; font-weight: 600 !important; color: #333 !important;">Email address <span style="color: red !important;">*</span></label>
                  <input type="email" class="form-input" name="email" placeholder="Enter your email" required style="padding: 12px !important; border: 1px solid #ddd !important; border-radius: 8px !important; font-size: 14px !important; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;">
                  </div>
                  <div class="form-group" style="margin-bottom: 15px !important;">
                  <label class="form-label" style="display: block !important; margin-bottom: 8px !important; font-size: 14px !important; font-weight: 600 !important; color: #333 !important;">Phone number</label>
                  <div class="country-select-container" style="display: flex !important; gap: 10px !important; align-items: center !important;">
                  <div class="selected-option" id="selectedCountry" style="display: flex !important; align-items: center !important; gap: 5px !important; padding: 12px !important; border: 1px solid #ddd !important; border-radius: 8px !important; cursor: pointer !important; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;">
                      <img width="20" src="https://flagcdn.com/in.svg" id="selectedFlag" style="margin-right: 10px !important;">
                      <span id="selectedCode" style="font-size: 14px !important; color: black !important">+91</span>
                  </div>
                  <input type="tel" class="phonee form-input" name="phone" placeholder="Enter your phone number" style="flex: 1 !important; padding: 12px !important; border: 1px solid #ddd !important; border-radius: 8px !important; font-size: 14px !important; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;">
                  <div class="dropdown-options" id="countryDropdown" style="position: absolute !important; top: 100% !important; left: 0 !important; width: 100% !important; background: white !important; border: 1px solid #ddd !important; border-radius: 8px !important; margin-top: 5px !important; max-height: 150px !important; overflow-y: auto !important; display: none; z-index: 100 !important; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;">
                      <!-- Options will be inserted here dynamically -->
                  </div>
                  </div>
                  </div>
                  <div class="btn-container" style="display: flex !important; justify-content: center !important; align-items: center !important; text-align: center !important;">
                  <button type="submit" class="setup-button" style="background: linear-gradient(135deg, #667eea, #33389d) !important; color: white !important; border: none !important; font-size: 16px !important; padding: 14px 20px !important; border-radius: 8px !important; cursor: pointer !important; font-weight: 600 !important; transition: all 0.2s !important;">Start Chat</button>
                  </div>
              </form>
              </div>
              `;

      const chatMessages = document.getElementById("chatMessages");
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

      countryCodes.forEach((cc) => {
        const option = document.createElement("div");
        option.innerHTML = `<img src="https://flagcdn.com/16x12/${cc.country}.png"> ${cc.code} ${cc.country_name}`;
        option.onclick = () => {
          selectedCode.innerText = cc.code;
          selectedFlag.src = `https://flagcdn.com/16x12/${cc.country}.png`;
          dropdown.style.display = "none";
        };
        dropdown.appendChild(option);
      });

      selectedCountry.onclick = () => {
        dropdown.style.display =
          dropdown.style.display === "block" ? "none" : "block";
      };

      document.addEventListener("click", (event) => {
        if (!selectedCountry.contains(event.target)) {
          dropdown.style.display = "none";
        }
      });
      const form = document.getElementById("userDetailsForm");

      if (form) {
        form.addEventListener("submit", async (e) => {
          e.preventDefault();
          const switchContainer = document.querySelector(".switch-container");
          switchContainer.style.display = "flex";
          const formData = new FormData(form);
          const details = Object.fromEntries(formData.entries());

          const selectedCode =
            document.getElementById("selectedCode").innerText;
          const code = selectedCode.split(" ")[0];

          //set form details in localstorage

          // Normalize details
          const normalizedDetails = {
            name: details.name || null,
            email: details.email || null,
            phone_no: details.phone || null,
            country_code: code || null,
          };

          localStorage.setItem(
            "user_details",
            JSON.stringify(normalizedDetails)
          );

          normalizedDetails.type = "CHAT";

          // Store pending details to be updated later when chat_id is available
          this.pendingUserDetails = normalizedDetails;

          const success = await this.submitUserDetails(normalizedDetails);
          if (success) {
            console.log("User details:", normalizedDetails);
            form.closest(".setup-container").remove();
            this.initialized = true;
            this.enableInput();
          }
        });
      }
    }
    async updateUserDetails(chatId, details) {
      try {
        const response = await fetch(
          `${this.apiEndpoint}chat/${chatId}/user-detail`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": this.secret_key,
            },
            body: JSON.stringify(details),
          }
        );

        if (!response.ok) {
          console.error("Failed to update user details");
        }
      } catch (error) {
        console.error("Error updating user details:", error);
      }
    }

    async validateApiKey(apiKey) {
      // For demo purposes, always return true
      // In production, make an actual API request to validate
      return true;
    }

    async initialize(secret_key) {
      try {
        this.secret_key = secret_key;
        if (!this.userDetails) {
          this.showUserForm();
          return true;
        }

        this.initialized = true;
        this.enableInput();
        // this.addMessage('Hello! How can I help you today?', false);
        // this.addMessage(localStorage.getItem('chat_first_message'), false);
        return true;
      } catch (error) {
        this.addMessage(error?.request?.body?.message, false);
        return false;
      }
    }

    enableInput() {
      const userInput = document.getElementById("userInput");
      const sendButton = document.getElementById("sendButton");
      if (userInput && sendButton) {
        userInput.disabled = false;
        sendButton.disabled = false;
      }
    }

    disableInput() {
      const userInput = document.getElementById("userInput");
      const sendButton = document.getElementById("sendButton");
      if (userInput && sendButton) {
        userInput.disabled = true;
        sendButton.disabled = true;
      }
    }

    showError(message) {
      const existingError = document.querySelector(".error-message");
      if (existingError) {
        existingError.remove();
      }

      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.textContent = message;
      document.getElementById("chatMessages")?.appendChild(errorDiv);
      setTimeout(() => errorDiv.remove(), 5000);
    }
    addMessage(message, isUser, chat_id = null) {
      const messageContainer = document.createElement("div");
      messageContainer.style.display = "flex";
      messageContainer.style.alignItems = "flex-start";
      messageContainer.style.marginBottom = "16px";

      if (!isUser) {
        const botImage = document.createElement("img");
        botImage.src = `https://demoserver3.sgp1.digitaloceanspaces.com/uploads/images/original/${this.agent_photo}`; // Replace with the actual path to the bot image
        botImage.alt = "Bot";
        botImage.style.width = "26px";
        botImage.style.objectFit = "cover";
        botImage.style.height = "26px";
        botImage.style.borderRadius = "50%";
        botImage.style.marginRight = "8px";
        messageContainer.appendChild(botImage);
      }

      const messageDiv = document.createElement("div");
      messageDiv.className = `ai_message ${
        isUser ? "user-message" : "bot-message"
      }`;

      const messageText = document.createElement("div");
      messageText.textContent = message;
      messageDiv.appendChild(messageText);
      const timestamp = document.createElement("div");
      if (isUser) {
        timestamp.className = "user-message-timestamp";
      } else {
        timestamp.className = "message-timestamp";
      }
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      timestamp.textContent = time;
      messageDiv.appendChild(timestamp);
      messageContainer.appendChild(messageDiv);

      if (isUser) {
        const userImage = document.createElement("img");
        userImage.src =
          "https://img.freepik.com/premium-vector/vector-flat-illustration-round-gray-man-icon-avatar-user-profile-person-icon-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1794.jpg?w=740"; // Placeholder image for user
        userImage.alt = "User";
        userImage.style.width = "35px";
        userImage.style.objectFit = "cover";
        userImage.style.height = "35px";
        userImage.style.borderRadius = "50%";
        userImage.style.marginLeft = "8px";
        userImage.style.marginTop = "-5px";
        messageContainer.appendChild(userImage);
      }

      console.log(message);

      const typingIndicator = document.getElementById("typingIndicator");
      const chatMessages = document.getElementById("chatMessages");
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
      const endTriggers = ["thank you", "thanks", "thankyou", "thank u", "thx"];
      return endTriggers.some((trigger) =>
        message.toLowerCase().includes(trigger)
      );
    }

    showConversationEndPrompt() {
      const promptId = "conversation-end-prompt-" + Date.now();
      const promptDiv = document.createElement("div");
      this.disableInput();
      promptDiv.id = promptId;
      promptDiv.className = "conversation-end";
      promptDiv.innerHTML = `
              <div class="feedbackmsg">Would you like to continue?</div>
              <div class="conversation-end-buttons">
                  <button class="conversation-end-button primary" data-action="continue">Continue Chat</button>
                  <button class="conversation-end-button" data-action="end">End Chat</button>
              </div>
          `;

      const chatMessages = document.getElementById("chatMessages");
      chatMessages?.appendChild(promptDiv);
      this.scrollToBottom();

      // Set timeout for auto-end after 1 minute
      this.conversationEndTimeout = setTimeout(() => {
        this.endConversation();
      }, 120000);

      // Add event listeners
      promptDiv.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", (e) => {
          const action = e.target.dataset.action;
          if (action === "continue") {
            // Replace prompt with continuation message
            const continuationMessage = document.createElement("div");
            this.enableInput();
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
      if (
        callScreen.style.display === "flex" ||
        callScreen.style.display === "block"
      ) {
        return;
      }

      if (this.isChatEnding) return;
      this.isChatEnding = true;

      try {
        if (this.chatId) {
          await fetch(`${this.apiEndpoint}${this.chatId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": this.secret_key,
            },
          });
        }

        this.messageHistory = [];
        this.disableInput();
        this.chatId = null;
        this.initialized = false; // Reset initialization status
        this.isChatEnding = false;

        const chatMessages = document.getElementById("chatMessages");
        if (chatMessages) {
          // Show user form again
          this.showUserForm();
        }
      } catch (error) {
        console.error("Error ending conversation:", error);
      }
    }

    continueChatting() {
      this.isAwaitingFeedback = false;
      if (this.feedbackTimer) {
        clearTimeout(this.feedbackTimer);
      }
      // Remove the feedback prompt
      const feedbackMessage = document.querySelector(
        ".bot-message:last-of-type"
      );
      if (
        feedbackMessage &&
        feedbackMessage.innerHTML.includes("Would you like to continue?")
      ) {
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
      const chatMessages = document.getElementById("chatMessages");
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }

    showTypingIndicator() {
      const typingIndicator = document.getElementById("typingIndicator");
      if (typingIndicator) {
        typingIndicator.style.display = "block";
        this.scrollToBottom();
      }
    }

    hideTypingIndicator() {
      const typingIndicator = document.getElementById("typingIndicator");
      if (typingIndicator) {
        typingIndicator.style.display = "none";
      }
    }

    async sendMessage(message) {
      if (!this.initialized || !this.secret_key || !this.agent_id) {
        this.showError("Please configure the chatbot first.");
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
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
          throw new Error(
            "You don't have any subscription plan! Please purchase any subscription."
          );
        }

        const data = await response.json();

        // If we have pending user details and a new chat_id, update user details
        if (this.pendingUserDetails && data?.data?.chat_id) {
          await this.updateUserDetails(
            data.data.chat_id,
            this.pendingUserDetails
          );
          this.pendingUserDetails = null;
        }

        setTimeout(() => {
          this.hideTypingIndicator();
          this.addMessage(data?.data?.ai_response, false, data?.data?.chat_id);
        }, 500);
      } catch (error) {
        this.hideTypingIndicator();
        this.showError(error?.message);
        console.error("Error sending message:", error);
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
  document
    .querySelector(".chat-trigger")
    ?.addEventListener("click", function () {
      const chatContainer = document.getElementById("chatContainer");
      if (!chatContainer) return;

      const isHidden =
        chatContainer.style.display === "none" ||
        chatContainer.style.display === "";
      chatContainer.style.display = isHidden ? "flex" : "none";
      const secretKey = localStorage.getItem("secret_key");

      if (isHidden) {
        chatbot.initialize(secretKey);
      }
    });

  document.querySelector(".close-btn")?.addEventListener("click", function () {
    const chatContainer = document.getElementById("chatContainer");
    if (chatContainer) {
      chatContainer.style.display = "none";
    }
  });

  document
    .getElementById("userInput")
    ?.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });

  document.getElementById("sendButton")?.addEventListener("click", sendMessage);

  // Helper functions
  async function setupChatbot() {
    const apiKeyInput = document.getElementById("secret_key");
    const apiKey = apiKeyInput?.value.trim();

    if (!apiKey) {
      chatbot.showError("Please provide your API key.");
      return;
    }

    const success = await chatbot.initialize(apiKey);
    if (success) {
      const setupContainer = document.querySelector(".setup-container");
      if (setupContainer) {
        setupContainer.remove();
      }
    }
  }

  async function sendMessage() {
    const userInput = document.getElementById("userInput");
    if (!userInput) return;

    const message = userInput.value.trim();
    if (!message) return;

    userInput.value = "";
    await chatbot.sendMessage(message);
  }

  // Setup button event listener
  document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "setupButton") {
      setupChatbot();
    }
  });
})();

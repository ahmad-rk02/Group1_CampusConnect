import React, { useState } from 'react';
import './chatbotCTA.css';

function ChatbotCTA() {
    const [showChatbot, setShowChatbot] = useState(false);

    return (
        <div>
            <div className="chatbot-cta" onClick={() => setShowChatbot(!showChatbot)}>
                <i className="fas fa-comments"></i> Chat
            </div>
            {showChatbot && (
                <div className="chatbot-iframe-container">
                    <iframe
                        src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/15/11/20241015114548-QIM5KDRH.json"
                        width="100%"
                        height="100%"
                         
                        title="Chatbot"
                        className="chatbot-iframe"
                    ></iframe>
                    <button className="close-chatbot" onClick={() => setShowChatbot(false)}>X</button>
                </div>
            )}
        </div>
    );
}

export default ChatbotCTA;

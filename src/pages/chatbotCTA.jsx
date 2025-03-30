import React, { useState } from "react";
import "./chatbotCTA.css";

function ChatbotCTA() {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);

    const toggleChatbot = () => {
        setIsChatbotOpen(!isChatbotOpen);
    };

    return (
        <div>
            {/* Chatbot Button */}
            <div className="chatbot-cta" onClick={toggleChatbot}>
                <i className="fas fa-comments"></i> Chat
            </div>

            {/* Chatbot Popup */}
            {isChatbotOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        <span>Chatbot</span>
                        <button className="close-btn" onClick={toggleChatbot}>&times;</button>
                    </div>
                    <iframe
                        src="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/15/11/20241015114548-QIM5KDRH.json"
                        title="AI Chatbot"
                        className="chatbot-frame"
                        allow="microphone"
                    ></iframe>
                </div>
            )}
        </div>
    );
}

export default ChatbotCTA;

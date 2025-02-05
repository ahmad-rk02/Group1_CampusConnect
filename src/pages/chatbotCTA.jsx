import React from 'react';
import './chatbotCTA.css';

function ChatbotCTA() {
    const openChatbot = () => {
        window.open(
            "https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/15/11/20241015114548-QIM5KDRH.json",
            "_blank", 
            "noopener,noreferrer"
        );
    };

    return (
        <div>
            <div className="chatbot-cta" onClick={openChatbot}>
                <i className="fas fa-comments"></i> Chat
            </div>
        </div>
    );
}

export default ChatbotCTA;

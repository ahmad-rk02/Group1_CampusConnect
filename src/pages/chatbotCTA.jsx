import React, { useState, useEffect } from "react";
import "./chatbotCTA.css";

function ChatbotCTA() {
    const [isChatbotOpen, setIsChatbotOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust threshold if needed
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
                <div className={`chatbot-container ${isMobile ? "chatbot-fullscreen" : ""}`}>
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

// src/components/Chatbot.js
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { SendHorizontal, X } from "lucide-react"; // Removed MessageCircle
import botLogo from "../assets/Chatbot.png"; // Ensure proper file extension

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://chatbot-3-j5gp.onrender.com/chat",
        { message: input }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.reply || "No response",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Error: Could not reach server." },
      ]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div>
      {/* Floating Chat Button with Bot Logo */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 p-1 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src={botLogo}
            alt="HealthBot"
            className="w-12 h-12 rounded-full object-cover"
          />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 h-[500px] bg-gradient-to-b from-blue-50 to-white/80 backdrop-blur-md shadow-2xl rounded-2xl flex flex-col border border-gray-200 animate-fadeIn overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-t-2xl shadow-md">
            <img src={botLogo} alt="HealthBot" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-sm">HealthBot</h2>
              <span className="text-xs font-light">Your Personal HealthCare Companion</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-end gap-2 max-w-[75%] ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                }`}
              >
                {msg.sender === "bot" && (
                  <img
                    src={botLogo}
                    alt="Bot"
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <div
                  className={`px-3 py-2 rounded-2xl text-sm shadow-sm break-words ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-500 italic text-sm">Bot is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2 bg-white/90">
            <input
              type="text"
              className="flex-1 p-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={handleSend}
              className="p-2 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition"
            >
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;




import React, { useState, useRef } from 'react';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const chatbotRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleSend = () => {
        if (input.trim()) {
            setMessages((prev) => [...prev, { user: true, text: input }]);
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    { user: false, text: 'This is a chatbot response!' },
                ]);
            }, 1000);
            setInput('');
        }
    };

    const handleDragStart = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleDrag = (e) => {
        if (isDragging) {
            setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div
        ref={chatbotRef}
        className="fixed w-64 bg-gray-100 border rounded-lg shadow-lg z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div className="p-4 border-b bg-gray-800 text-white font-bold flex justify-between items-center">
          <span>Chat with Me</span>
          <button
            onClick={handleClose}
            className="text-white hover:text-red-500"
            aria-label="Close Chatbot"
          >
            ✖
          </button>
        </div>
        <div className="p-4 h-48 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${msg.user ? 'text-right' : 'text-left'}`}
            >
              <span
                className={`inline-block p-2 rounded ${
                  msg.user
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-800'
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>
        <div className="p-2 border-t flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border rounded-l"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    );
};

export default Chatbot;

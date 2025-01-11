import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

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

  return (
    <div className="fixed bottom-4 right-4 w-64 bg-gray-100 border rounded-lg shadow-lg">
      <div className="p-4 border-b bg-gray-800 text-white font-bold">
        Chat with Me
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

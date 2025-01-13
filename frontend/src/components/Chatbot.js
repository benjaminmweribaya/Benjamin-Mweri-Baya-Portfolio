import React, { useState, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const chatbotRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const topics = ['projects', 'skills', 'contact', 'about', 'GitHub',];

  const getResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('hi') || message.includes('hello')) {
      return `Hi, my name is Benjamin Mweri Baya. How may I help you? You can ask me questions on ${topics
        .map((topic) => topic.charAt(0).toUpperCase() + topic.slice(1))
        .join(', ')}.`;
    }
    if (message.includes('projects')) {
      return "Here are the projects I've worked on:\n1. Becof Web App\n2. Reading Tracker CLI\n3. Eco Home Guide\n4. Textile Waste Recycling App\n5. Movie Character Explorer\n6. Turkana Tech Youths Hub Donation Website.";
    } else if (message.includes('skills')) {
      return 'I have expertise in React, Node.js, JavaScript, HTML, CSS, and Tailwind CSS. Additionally, I have experience in building REST APIs and single-page applications.';
    } else if (message.includes('contact')) {
      return 'You can contact me via email at b3njaminbaya@gmail.com or WhatsApp at +254783797132. Alternatively, use the contact form on the website.';
    } else if (message.includes('about')) {
      return 'I am a full-stack developer trained at Moringa School. My passion lies in building user-centric applications that solve real-world problems.';
    } else if (message.includes('github')) {
      return 'You can view my GitHub repositories here: https://github.com/benjaminmweribaya';
    } else {
      return 'Sorry, I didn’t understand that. Try asking about my projects, skills, contact, or GitHub.';
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { user: true, text: input }]);
      setTimeout(() => {
        const botResponse = getResponse(input);
        setMessages((prev) => [...prev, { user: false, text: botResponse }]);
      }, 1000);
      setInput('');
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const rect = chatbotRef.current.getBoundingClientRect();
    setIsDragging(true);
    setDragStart({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      const newX = Math.max(0, Math.min(window.innerWidth - chatbotRef.current.offsetWidth, touch.clientX - dragStart.x));
      const newY = Math.max(0, Math.min(window.innerHeight - chatbotRef.current.offsetHeight, touch.clientY - dragStart.y));

      setPosition({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };


  const handleDragStart = (e) => {
    const rect = chatbotRef.current.getBoundingClientRect();
    setIsDragging(true);
    setDragStart({ x: e.clientX - rect.x, y: e.clientY - rect.top });
  };

  const handleDrag = (e) => {
    if (isDragging) {
      const newX = Math.max(0, Math.min(window.innerWidth - chatbotRef.current.offsetWidth, e.clientX - dragStart.x));
      const newY = Math.max(0, Math.min(window.innerHeight - chatbotRef.current.offsetHeight, e.clientY - dragStart.y));

      setPosition({ x: newX, y: newY });
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="p-4 border-b bg-black text-white font-bold flex justify-between items-center">
        <span>Chat with Me</span>
        <button
          onClick={handleClose}
          className="text-white hover:text-red-500"
          aria-label="Close Chatbot"
          title="Close Chatbot"
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
              className={`inline-block p-2 rounded ${msg.user
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-800'
                }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex flex-col gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 w-full"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

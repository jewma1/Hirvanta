"use client";

import { useState } from "react";

export default function CareerCoachPage() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { role: "assistant", text: "Hi, I am your AI career assistant. Ask me anything." }
  ]);

  const sendMessage = () => {
    if (!message) return;

    setChat([...chat, { role: "user", text: message }]);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        { role: "assistant", text: "I recommend focusing on skills and resume improvement." }
      ]);
    }, 1000);

    setMessage("");
  };

  // Voice Input
  const startVoice = () => {
    const recognition =
      new (window as any).webkitSpeechRecognition();

    recognition.onresult = (event: any) => {
      setMessage(event.results[0][0].transcript);
    };

    recognition.start();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        AI Career Assistant
      </h1>

      <div className="bg-white p-6 rounded-xl shadow h-[500px] flex flex-col">

        {/* Chat */}
        <div className="flex-1 overflow-y-auto mb-4">
          {chat.map((c, i) => (
            <div
              key={i}
              className={`mb-3 ${
                c.role === "user"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              <span className="bg-gray-200 px-3 py-2 rounded-lg inline-block">
                {c.text}
              </span>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            className="border p-3 flex-1"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask career question..."
          />

          <button
            onClick={startVoice}
            className="bg-purple-600 text-white px-4 rounded"
          >
            🎤
          </button>

          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-6 rounded"
          >
            Send
          </button>
        </div>

      </div>

    </div>
  );
}

"use client";

import { useState } from "react";

export default function CareerCoachPage() {
  const [result, setResult] = useState("");

  const generateCareer = async () => {
    const res = await fetch(
      "YOUR_BACKEND_URL/api/ai/career",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Give career advice",
        }),
      }
    );

    const data = await res.json();
    setResult(data.text);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Career Assistant
      </h1>

      <button
        onClick={generateCareer}
        className="bg-blue-600 text-white p-4 rounded-lg mb-6"
      >
        Get Career Advice
      </button>

      <div className="bg-white p-6 rounded-xl shadow min-h-[300px]">
        {result || "AI career advice will appear here"}
      </div>

    </div>
  );
}

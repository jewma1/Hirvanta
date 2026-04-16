"use client";

import { useState } from "react";

export default function TrackerPage() {
  const [result, setResult] = useState("");

  const generateTracker = async () => {
    const res = await fetch(
      "YOUR_BACKEND_URL/api/ai/tracker",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Track job applications and suggest followups",
        }),
      }
    );

    const data = await res.json();
    setResult(data.text);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        AI Job Tracker
      </h1>

      <button
        onClick={generateTracker}
        className="bg-blue-600 text-white p-4 rounded-lg mb-6"
      >
        Analyze Applications
      </button>

      <div className="bg-white p-6 rounded-xl shadow min-h-[300px]">
        {result || "AI job tracking insights will appear here"}
      </div>

    </div>
  );
}

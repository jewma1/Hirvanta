"use client";

import { useState } from "react";

export default function InterviewPage() {
  const [question, setQuestion] = useState(
    "Tell me about yourself"
  );
  const [answer, setAnswer] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        AI Interview Coach
      </h1>

      <div className="grid grid-cols-2 gap-8">

        {/* Question */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-3">
            Interview Question
          </h2>

          <p className="mb-4">{question}</p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Next Question
          </button>
        </div>

        {/* Answer */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-3">
            Your Answer
          </h2>

          <textarea
            className="border p-3 w-full mb-3"
            rows={6}
            placeholder="Type your answer..."
            value={answer}
            onChange={(e)=>setAnswer(e.target.value)}
          />

          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Get Feedback
          </button>
        </div>

      </div>

    </div>
  );
}

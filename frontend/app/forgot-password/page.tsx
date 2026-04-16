"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const sendReset = () => {
    if (!email) {
      alert("Enter your email");
      return;
    }
    alert("Password reset link sent");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[420px] bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-3xl font-bold mb-2">Reset Password</h2>
        <p className="text-gray-500 mb-6">
          Enter your email to receive reset link
        </p>

        <input
          className="border p-3 w-full mb-4 rounded-lg"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={sendReset}
          className="bg-blue-700 text-white w-full p-3 rounded-lg"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <div className="min-h-screen flex">

      <div className="w-1/2 bg-blue-700 text-white p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Hirvanta</h1>
        <p>Your AI Career Copilot</p>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-96">

          <h2 className="text-2xl font-bold mb-4">
            Sign In
          </h2>

          <input
            className="border p-3 w-full mb-3"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            className="border p-3 w-full mb-3"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="bg-blue-600 text-white w-full p-3 rounded mb-2">
            Login
          </button>

          <button className="border w-full p-3 rounded mb-2">
            Login with OTP
          </button>

          <a href="/forgot-password" className="text-blue-600">
            Forgot Password?
          </a>

        </div>
      </div>

    </div>
  );
}

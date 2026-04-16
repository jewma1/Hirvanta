"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem(
      "hirvantaUser",
      JSON.stringify({
        name,
        email,
      })
    );

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[420px] bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-gray-500 mb-6">
          Start your AI-powered career journey
        </p>

        <input
          className="border p-3 w-full mb-4 rounded-lg"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-3 w-full mb-4 rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-3 w-full mb-4 rounded-lg"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-blue-700 text-white w-full p-3 rounded-lg"
        >
          Create Account
        </button>

        <div className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

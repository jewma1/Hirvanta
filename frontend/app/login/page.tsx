"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem(
      "hirvantaUser",
      JSON.stringify({
        name: email.split("@")[0],
        email: email,
      })
    );

    router.push("/dashboard");
  };

  const handleOtpLogin = () => {
    router.push("/otp-login");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left */}
      <div className="w-1/2 bg-blue-800 text-white p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Hirvanta</h1>
        <h2 className="text-4xl font-bold leading-tight">
          Your AI Career Copilot
        </h2>
        <p className="mt-6 text-lg text-blue-100 max-w-md">
          From resume to offer letter. Let AI power your job search with smart
          tools built for modern professionals.
        </p>
      </div>

      {/* Right */}
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-[420px] bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-6">
            Sign in to continue your job search
          </p>

          <div className="border rounded-lg p-3 text-sm text-gray-500 mb-4">
            Google Sign-in available when configured. Use email to continue.
          </div>

          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            className="border p-3 w-full mb-4 rounded-lg"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            className="border p-3 w-full mb-4 rounded-lg"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="bg-blue-700 text-white w-full p-3 rounded-lg mb-3"
          >
            Sign In →
          </button>

          <button
            onClick={handleOtpLogin}
            className="border w-full p-3 rounded-lg mb-4"
          >
            Login with Phone OTP
          </button>

          <div className="text-center text-sm mb-3">
            <Link href="/forgot-password" className="text-blue-600">
              Forgot password?
            </Link>
          </div>

          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-medium">
              Sign up
            </Link>
          </div>

          <div className="text-center text-sm mt-4">
            <Link href="/" className="text-gray-500">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

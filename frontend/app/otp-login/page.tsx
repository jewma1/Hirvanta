"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OTPLoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const sendOtp = () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }
    alert("OTP sent successfully");
  };

  const verifyOtp = () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    localStorage.setItem(
      "hirvantaUser",
      JSON.stringify({
        name: "User",
        email: `${phone}@phone.login`,
      })
    );

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[420px] bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-3xl font-bold mb-2">Mobile OTP Login</h2>
        <p className="text-gray-500 mb-6">
          Login using your phone number
        </p>

        <input
          className="border p-3 w-full mb-4 rounded-lg"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={sendOtp}
          className="border w-full p-3 rounded-lg mb-4"
        >
          Send OTP
        </button>

        <input
          className="border p-3 w-full mb-4 rounded-lg"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={verifyOtp}
          className="bg-blue-700 text-white w-full p-3 rounded-lg"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}

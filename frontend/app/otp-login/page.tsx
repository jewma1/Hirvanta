"use client";

import { useState } from "react";

export default function OTPLogin(){
const [phone,setPhone]=useState("");
const [otp,setOtp]=useState("");

return(
<div className="min-h-screen flex items-center justify-center">

<div className="w-96">

<h2 className="text-2xl font-bold mb-4">
Mobile OTP Login
</h2>

<input
className="border p-3 w-full mb-3"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<button className="bg-blue-600 text-white w-full p-3 rounded mb-3">
Send OTP
</button>

<input
className="border p-3 w-full mb-3"
placeholder="Enter OTP"
value={otp}
onChange={(e)=>setOtp(e.target.value)}
/>

<button className="bg-green-600 text-white w-full p-3 rounded">
Verify OTP
</button>

</div>
</div>
)}

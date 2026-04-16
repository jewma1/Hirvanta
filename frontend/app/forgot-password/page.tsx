"use client";

export default function ForgotPassword(){
return(
<div className="min-h-screen flex items-center justify-center">

<div className="w-96">

<h2 className="text-2xl font-bold mb-4">
Reset Password
</h2>

<input
className="border p-3 w-full mb-3"
placeholder="Enter email"
/>

<button className="bg-blue-600 text-white w-full p-3 rounded">
Send Reset Link
</button>

</div>
</div>
)}

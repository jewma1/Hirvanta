"use client";

export default function SignupPage(){
return(
<div className="min-h-screen flex items-center justify-center">

<div className="w-96">

<h2 className="text-2xl font-bold mb-4">
Create Account
</h2>

<input className="border p-3 w-full mb-3" placeholder="Name"/>
<input className="border p-3 w-full mb-3" placeholder="Email"/>
<input className="border p-3 w-full mb-3" placeholder="Password"/>

<button className="bg-blue-600 text-white w-full p-3 rounded">
Signup
</button>

</div>
</div>
)}

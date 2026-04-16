"use client";

export default function ProfilePage(){
return(
<div className="min-h-screen p-8">

<h1 className="text-3xl font-bold mb-6">
Profile
</h1>

<div className="bg-white p-6 rounded-xl shadow w-96">

<input className="border p-3 w-full mb-3" placeholder="Name"/>
<input className="border p-3 w-full mb-3" placeholder="Email"/>
<input className="border p-3 w-full mb-3" placeholder="Role"/>

<button className="bg-blue-600 text-white px-6 py-2 rounded">
Save
</button>

</div>

</div>
)}

"use client";

import { useState } from "react";

export default function ResumePage() {
  const [tab,setTab]=useState("auto");

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Resume Builder
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <Tab label="Auto Resume" id="auto" tab={tab} setTab={setTab}/>
        <Tab label="From Job Description" id="jd" tab={tab} setTab={setTab}/>
        <Tab label="Improve Resume" id="improve" tab={tab} setTab={setTab}/>
      </div>

      <div className="bg-white rounded-xl shadow p-6">

        {tab==="auto" && <AutoResume/>}
        {tab==="jd" && <JDResume/>}
        {tab==="improve" && <ImproveResume/>}

      </div>

    </div>
  );
}

function Tab({label,id,tab,setTab}:any){
return(
<button
onClick={()=>setTab(id)}
className={`px-5 py-2 rounded-lg font-medium ${
tab===id
? "bg-blue-600 text-white"
: "bg-gray-100"
}`}
>
{label}
</button>
)}

function AutoResume(){
return(
<div className="grid grid-cols-2 gap-6">

<div>
<input className="border p-3 w-full mb-3" placeholder="Full Name"/>
<input className="border p-3 w-full mb-3" placeholder="Target Role"/>
<textarea className="border p-3 w-full mb-3" placeholder="Skills"/>
<textarea className="border p-3 w-full mb-3" placeholder="Experience"/>

<button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Generate Resume
</button>
</div>

<div className="border rounded-lg p-4">
Preview will appear here
</div>

</div>
)}

function JDResume(){
return(
<div>
<textarea
className="border p-3 w-full mb-3"
placeholder="Paste Job Description"
/>

<button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Generate Tailored Resume
</button>
</div>
)}

function ImproveResume(){
return(
<div>
<input type="file" className="mb-3"/>

<button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
Analyze & Improve Resume
</button>
</div>
)}

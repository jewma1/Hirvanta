"use client";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold text-center mb-10">
        Simple Pricing
      </h1>

      <div className="grid grid-cols-3 gap-8">

        {/* Free */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Free</h2>
          <p className="text-3xl font-bold mb-4">₹0</p>

          <ul className="mb-6 space-y-2 text-gray-600">
            <li>✔ Resume Builder</li>
            <li>✔ Job Finder</li>
            <li>✔ Interview Coach</li>
          </ul>

          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Get Started
          </button>
        </div>

        {/* Pro */}
        <div className="bg-white p-6 rounded-xl shadow border-2 border-blue-600">
          <h2 className="text-xl font-semibold mb-3">Pro</h2>
          <p className="text-3xl font-bold mb-4">₹499</p>

          <ul className="mb-6 space-y-2 text-gray-600">
            <li>✔ Everything in Free</li>
            <li>✔ AI Career Assistant</li>
            <li>✔ Recruiter Messages</li>
            <li>✔ Job Tracker</li>
          </ul>

          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Upgrade
          </button>
        </div>

        {/* Premium */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-3">Premium</h2>
          <p className="text-3xl font-bold mb-4">₹999</p>

          <ul className="mb-6 space-y-2 text-gray-600">
            <li>✔ Everything in Pro</li>
            <li>✔ Unlimited AI</li>
            <li>✔ Priority Support</li>
          </ul>

          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Go Premium
          </button>
        </div>

      </div>

    </div>
  );
}

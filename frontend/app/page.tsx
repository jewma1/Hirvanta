'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-pink-500">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-600">Hirvanta</div>
            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-indigo-600">Pricing</a>
              <Link href="/login" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                Login
              </Link>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Your AI Career Assistant</h1>
          <p className="text-xl mb-8 text-gray-100">
            Build professional resumes, practice interviews, and land your dream job
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/login" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get Started
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📄', title: 'Resume Builder', desc: '3 professional templates' },
              { icon: '🎯', title: 'Job Finder', desc: 'AI-powered job recommendations' },
              { icon: '🎤', title: 'Interview Coach', desc: 'Practice with AI interviewer' },
              { icon: '🎙️', title: 'Voice Coach', desc: 'Improve delivery and confidence' },
              { icon: '💬', title: 'Chat Interview', desc: 'Text-based interview practice' },
              { icon: '🤖', title: 'AI Assistant', desc: 'Career guidance 24/7' },
            ].map((feature, i) => (
              <div key={i} className="border rounded-lg p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Weekly', price: '$9.99', features: ['5 resumes', '10 interviews', 'Chat support'] },
              { name: 'Monthly', price: '$29.99', features: ['Unlimited resumes', 'Unlimited interviews', 'Priority support', 'Voice coach'] },
              { name: 'Lifetime', price: '$199.99', features: ['Everything', 'Forever access', 'Priority support', 'Custom features'] },
            ].map((plan, i) => (
              <div key={i} className={`rounded-lg p-8 ${i === 1 ? 'bg-indigo-600 text-white' : 'bg-white'}`}> 
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg font-semibold ${i === 1 ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'}`}>Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2026 Hirvanta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
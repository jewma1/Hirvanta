'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [usage, setUsage] = useState({
    resumes: { used: 2, limit: 5 },
    interviews: { used: 3, limit: 10 },
    jobs: { used: 15, limit: 50 },
    voiceCoach: { used: 1, limit: 5 },
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      // Fetch user data
      setUser({ name: 'John Doe', email: 'john@example.com', plan: 'Monthly' });
    }
  }, [router]);

  if (!user) return <div>Loading...</div>;

  const features = [
    { icon: '📄', title: 'Resume Builder', href: '/resume', color: 'bg-blue-100' },
    { icon: '🎯', title: 'Job Finder', href: '/jobs', color: 'bg-green-100' },
    { icon: '🎤', title: 'Chat Interview', href: '/interview/chat', color: 'bg-purple-100' },
    { icon: '🎙️', title: 'Voice Interview', href: '/interview/voice', color: 'bg-pink-100' },
    { icon: '💬', title: 'Career Assistant', href: '/assistant', color: 'bg-yellow-100' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user.name}!</h1>
            <p className="text-gray-600">Current Plan: <span className="font-semibold">{user.plan}</span></p>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Usage Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {Object.entries(usage).map(([key, value]: any) => (
            <div key={key} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-semibold text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-2xl font-bold">{value.used}</span>
                  <span className="text-gray-500">/ {value.limit}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${(value.used / value.limit) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <Link key={i} href={feature.href}>
                <div className={`${feature.color} rounded-lg p-8 text-center cursor-pointer hover:shadow-lg transition`}> 
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upgrade Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-pink-500 rounded-lg p-8 text-white text-center"> 
          <h3 className="text-2xl font-bold mb-2">Upgrade Your Plan</h3>
          <p className="mb-4">Get unlimited access to all features</p>
          <Link href="/pricing" className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 inline-block"> 
            View Plans
          </Link>
        </div>
      </div>
    </div>
  );
}
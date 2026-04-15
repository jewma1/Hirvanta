'use client';

import { useState } from 'react';
import axios from 'axios';

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const plans = [
    {
      id: 'weekly',
      name: 'Weekly',
      price: 999,
      duration: 'per 7 days',
      features: ['5 Resume Builds', '10 Interviews', 'Chat Support', 'Basic AI Assistant'],
      popular: false,
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: 2999,
      duration: 'per month',
      features: [
        'Unlimited Resumes',
        'Unlimited Interviews',
        'Voice Interview Coach',
        'Job Finder (50/month)',
        'Priority Support',
        'Advanced AI Assistant',
      ],
      popular: true,
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      price: 19999,
      duration: 'one-time',
      features: [
        'Everything in Monthly',
        'Lifetime Access',
        'Unlimited Job Finder',
        '24/7 Premium Support',
        'Custom Features',
        'Early Access to New Features',
      ],
      popular: false,
    },
  ];

  const handlePayment = async (planId: string) => {
    setLoading(planId);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_URL}/api/payment/create-order`,
        { planId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Redirect to Razorpay checkout
      if (window.Razorpay) {
        const razorpay = new (window as any).Razorpay({
          key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
          order_id: response.data.orderId,
          handler: async (paymentResponse: any) => {
            await axios.post(
              `${API_URL}/api/payment/verify`,
              { ...paymentResponse, planId },
              { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Payment successful!');
            window.location.href = '/dashboard';
          },
        });
        razorpay.open();
      }
    } catch (error) {
      alert('Payment failed');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the perfect plan for your career growth</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 ${
                plan.popular ? 'ring-2 ring-indigo-600 md:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-600 text-white text-center py-2 font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="bg-white p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">₹{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.duration}</span>
                </div>

                <button
                  onClick={() => handlePayment(plan.id)}
                  disabled={loading === plan.id}
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } disabled:opacity-50`}
                >
                  {loading === plan.id ? 'Processing...' : 'Choose Plan'}
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Payment Methods Accepted</h3>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-4xl">💳 Cards</div>
            <div className="text-4xl">📱 UPI</div>
            <div className="text-4xl">🏦 Google Pay</div>
            <div className="text-4xl">💰 BHIM</div>
            <div className="text-4xl">🏧 Net Banking</div>
          </div>
        </div>
      </div>
    </div>
  );
}
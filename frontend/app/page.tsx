"use client";
import React, { useState } from 'react';

export default function HirvantaApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change to true to see dashboard
  const [activeTab, setActiveTab] = useState('Dashboard');

  // --- 1. LANDING PAGE (BEFORE SIGNING) ---
  if (!isLoggedIn) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
        {/* Navigation Bar */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 6%', alignItems: 'center', borderBottom: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#1E3A8A', borderRadius: '6px' }}></div>
            <span style={{ fontWeight: '800', fontSize: '22px', color: '#1E3A8A' }}>Hirvanta</span>
          </div>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#64748B', fontWeight: '500' }}>Features</a>
            <a href="#" style={{ textDecoration: 'none', color: '#64748B', fontWeight: '500' }}>Pricing</a>
            <button onClick={() => setIsLoggedIn(true)} style={{ backgroundColor: '#1E3A8A', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>
              Try Free
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '120px 5%' }}>
          <span style={{ backgroundColor: '#EEF2FF', color: '#4338CA', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '700' }}>🚀 Your Professional AI Copilot</span>
          <h1 style={{ fontSize: '72px', fontWeight: '900', color: '#0F172A', marginTop: '24px', letterSpacing: '-2px' }}>
            From Resume to <br/><span style={{ color: '#2563EB' }}>Offer Letter</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#64748B', maxWidth: '800px', margin: '24px auto 48px auto' }}>
            Stop wasting hours. Hirvanta uses Generative AI to optimize your workflow and secure your next role.
          </p>
          <button onClick={() => setIsLoggedIn(true)} style={{ backgroundColor: '#1E3A8A', color: '#fff', padding: '18px 48px', borderRadius: '12px', fontSize: '18px', fontWeight: '800', border: 'none', cursor: 'pointer', boxShadow: '0 20px 25px -5px rgba(30, 58, 138, 0.2)' }}>
            Start Free Trial →
          </button>
        </section>
      </div>
    );
  }

  // --- 2. THE PREMIUM DASHBOARD (AFTER SIGNING) ---
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      
      {/* LEFT SIDEBAR */}
      <aside style={{ width: '260px', backgroundColor: '#fff', borderRight: '1px solid #E2E8F0', padding: '24px', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#1E3A8A', borderRadius: '6px' }}></div>
          <span style={{ fontWeight: '800', fontSize: '22px', color: '#1E3A8A' }}>Hirvanta</span>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Dashboard', 'Job Finder', 'Resume Builder', 'Interview Coach', 'Career Assistant', 'Pricing'].map((item) => (
            <button 
              key={item}
              onClick={() => setActiveTab(item)}
              style={{ 
                textAlign: 'left', padding: '12px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '15px', fontWeight: '600',
                backgroundColor: activeTab === item ? '#1E3A8A' : 'transparent',
                color: activeTab === item ? '#fff' : '#64748B'
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* PRO UPGRADE CARD */}
        <div style={{ backgroundColor: '#F1F5F9', padding: '20px', borderRadius: '12px', marginTop: '20px' }}>
          <p style={{ fontSize: '13px', fontWeight: '700', margin: '0 0 8px 0' }}>👑 Free Trial Active</p>
          <p style={{ fontSize: '12px', color: '#64748B', margin: '0 0 16px 0' }}>Resumes: 0/3</p>
          <button style={{ width: '100%', backgroundColor: '#4F46E5', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
            Upgrade to Pro
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main style={{ marginLeft: '260px', flex: 1, padding: '40px' }}>
        
        {/* TOP BAR */}
        <header style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginBottom: '40px' }}>
          <span style={{ backgroundColor: '#FFF7ED', color: '#C2410C', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>Free Trial Active</span>
          <button style={{ backgroundColor: '#4F46E5', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>⚡ Upgrade</button>
        </header>

        {/* DYNAMIC CONTENT VIEWS */}
        {activeTab === 'Interview Coach' && (
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>AI Interview Coach</h1>
            <p style={{ color: '#64748B', marginBottom: '32px' }}>Practice with AI that asks role-specific questions and provides real-time feedback.</p>
            
            <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
              <p style={{ fontWeight: '700', marginBottom: '16px' }}>Interview Mode</p>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                <div style={{ flex: 1, padding: '20px', border: '2px solid #1E3A8A', borderRadius: '12px', backgroundColor: '#F8FAFC' }}>
                  <p style={{ fontWeight: '700', margin: 0 }}>Chat Interview</p>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>Type your answers</p>
                </div>
                <div style={{ flex: 1, padding: '20px', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                  <p style={{ fontWeight: '700', margin: 0 }}>Voice Interview</p>
                  <p style={{ fontSize: '13px', color: '#64748B', margin: 0 }}>Speak your answers</p>
                </div>
              </div>
              
              <p style={{ fontWeight: '700', marginBottom: '8px' }}>Role / Position</p>
              <input type="text" placeholder="e.g., Project Engineer" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '24px' }} />
              
              <button style={{ backgroundColor: '#94A3B8', color: '#fff', border: 'none', padding: '16px 32px', borderRadius: '8px', fontWeight: '700', cursor: 'not-allowed' }}>
                Start Chat Interview →
              </button>
            </div>
          </div>
        )}

        {activeTab === 'Pricing' && (
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '40px' }}>Choose Your Plan</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {[
                { name: 'Free', price: 'Free', sub: 'Current Plan' },
                { name: 'Weekly', price: '₹7', sub: '/week' },
                { name: 'Monthly', price: '₹99', sub: '/mo', tag: 'POPULAR' },
                { name: 'Lifetime', price: '₹299', sub: 'once', tag: 'BEST VALUE' }
              ].map((plan) => (
                <div key={plan.name} style={{ backgroundColor: '#fff', padding: '32px 24px', borderRadius: '20px', border: plan.tag ? '2px solid #2563EB' : '1px solid #E2E8F0', position: 'relative' }}>
                  {plan.tag && <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#F59E0B', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: '900' }}>{plan.tag}</span>}
                  <p style={{ fontWeight: '700', fontSize: '18px' }}>{plan.name}</p>
                  <h2 style={{ fontSize: '32px', margin: '16px 0' }}>{plan.price}<span style={{ fontSize: '16px', color: '#64748B' }}>{plan.sub}</span></h2>
                  <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E2E8F0', backgroundColor: plan.tag ? '#1E3A8A' : '#fff', color: plan.tag ? '#fff' : '#1E3A8A', fontWeight: '700', cursor: 'pointer' }}>Get Started</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add more tabs as needed... */}
      </main>
    </div>
  );
}

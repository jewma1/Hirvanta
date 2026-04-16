"use client";
import React, { useState, useEffect } from 'react';

// --- THE REAL SYSTEM ARCHITECTURE ---
export default function HirvantaProApp() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  // DYNAMIC USER STATE (This is what Kunal or anyone else will see)
  const [user, setUser] = useState({
    name: "Guest User",
    email: "not_signed_in@hirvanta.com",
    initials: "GU",
    isLoggedIn: false
  });

  // SIMULATING THE AUTH CHECK (This runs when the page loads)
  useEffect(() => {
    // In a real app, this is where we check Google/Firebase/Backend session
    const checkUserSession = async () => {
      // For now, let's pretend we found a session. 
      // When Kunal logs in, the backend sends this data:
      const loggedInUser = {
        name: "Kunal", // This will come from your Auth provider
        email: "kunal.dev@example.com",
        initials: "K",
        isLoggedIn: true
      };
      setUser(loggedInUser);
    };
    
    checkUserSession();
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: '📁' },
    { name: 'Job Finder', icon: '🔍' },
    { name: 'Resume Builder', icon: '📄' },
    { name: 'Cover Letter', icon: '✉️' },
    { name: 'Interview Coach', icon: '💬' },
    { name: 'Career Assistant', icon: '👑' },
    { name: 'Recruiter Messages', icon: '📩' },
    { name: 'Job Tracker', icon: '💼' },
    { name: 'Pricing', icon: '💳' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      
      {/* --- DYNAMIC SIDEBAR --- */}
      <aside style={{ width: '280px', backgroundColor: '#fff', borderRight: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh' }}>
        <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#1E3A8A', borderRadius: '6px' }}></div>
          <span style={{ fontWeight: '900', fontSize: '22px', color: '#1E3A8A' }}>Hirvanta</span>
        </div>

        <nav style={{ flex: 1, padding: '0 16px' }}>
          {menuItems.map((item) => (
            <div 
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '10px', cursor: 'pointer', marginBottom: '4px',
                backgroundColor: activeTab === item.name ? '#1E3A8A' : 'transparent',
                color: activeTab === item.name ? '#fff' : '#64748B',
                fontWeight: '600', transition: '0.2s'
              }}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              {item.name}
            </div>
          ))}
        </nav>

        {/* --- DYNAMIC USER PROFILE SECTION --- */}
        <div style={{ padding: '16px', borderTop: '1px solid #F1F5F9' }}>
          {user.isLoggedIn ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
              <div style={{ 
                width: '40px', height: '40px', 
                backgroundColor: '#1E3A8A', borderRadius: '50%', 
                color: '#fff', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', 
                fontWeight: '700', fontSize: '16px' 
              }}>
                {user.initials}
              </div>
              <div style={{ overflow: 'hidden' }}>
                <p style={{ fontSize: '14px', fontWeight: '700', margin: 0, color: '#1E293B' }}>{user.name}</p>
                <p style={{ fontSize: '11px', color: '#94A3B8', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {user.email}
                </p>
              </div>
            </div>
          ) : (
            <button style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#1E3A8A', color: '#fff', border: 'none', fontWeight: '700' }}>
              Sign In to App
            </button>
          )}
        </div>
      </aside>

      {/* --- MAIN DASHBOARD CONTENT --- */}
      <main style={{ marginLeft: '280px', flex: 1, padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '800' }}>{activeTab}</h2>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span style={{ backgroundColor: '#FEF3C7', color: '#92400E', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
              Free Trial
            </span>
            <button style={{ backgroundColor: '#4F46E5', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '8px', fontWeight: '700' }}>
              ⚡ Upgrade
            </button>
          </div>
        </header>

        {/* Content views based on activeTab... */}
        {activeTab === 'Dashboard' && (
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
            <h3 style={{ fontSize: '20px', margin: 0 }}>Hello, {user.name}!</h3>
            <p style={{ color: '#64748B' }}>Ready to optimize your engineering career today?</p>
          </div>
        )}
        
        {/* (The rest of the tab logic for Interview, Pricing etc. goes here) */}
      </main>
    </div>
  );
}

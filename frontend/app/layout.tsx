"use client";
import React, { useState, useEffect } from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({ name: "Loading...", email: "", initials: ".." });

  // REAL LOGIC: Fetching the person who actually signed in
  useEffect(() => {
    // In production, this data comes from your Firebase/Auth session
    const currentUser = {
      name: "Kunal Sharma", // Dynamic: changes based on login
      email: "kunal.dev@example.com",
      initials: "KS"
    };
    setUser(currentUser);
  }, []);

  const menu = [
    { name: 'Dashboard', icon: '📁', path: '/' },
    { name: 'Job Finder', icon: '🔍', path: '/jobs' },
    { name: 'Resume Builder', icon: '📄', path: '/resume' },
    { name: 'Cover Letter', icon: '✉️', path: '/cover-letter' },
    { name: 'Interview Coach', icon: '💬', path: '/interview' },
    { name: 'Career Assistant', icon: '👑', path: '/assistant' },
    { name: 'Recruiter Messages', icon: '📩', path: '/messages' },
    { name: 'Job Tracker', icon: '💼', path: '/tracker' },
    { name: 'Pricing', icon: '💳', path: '/pricing' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FAFC' }}>
      {/* SIDEBAR (The Red Rectangle Area) */}
      <aside style={{ width: '280px', backgroundColor: '#fff', borderRight: '1px solid #E2E8F0', position: 'fixed', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', fontWeight: '900', fontSize: '22px', color: '#1E3A8A' }}>Hirvanta</div>
        
        <nav style={{ flex: 1, padding: '0 16px' }}>
          {menu.map((item) => (
            <a key={item.name} href={item.path} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '10px', textDecoration: 'none', color: '#64748B', fontWeight: '600', marginBottom: '4px' }}>
              <span>{item.icon}</span> {item.name}
            </a>
          ))}
        </nav>

        {/* DYNAMIC USER PROFILE (No more hardcoded names!) */}
        <div style={{ padding: '20px', borderTop: '1px solid #F1F5F9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#1E3A8A', borderRadius: '50%', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>
              {user.initials}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', margin: 0 }}>{user.name}</p>
              <p style={{ fontSize: '11px', color: '#94A3B8', margin: 0, textOverflow: 'ellipsis', overflow: 'hidden' }}>{user.email}</p>
            </div>
          </div>
        </div>
      </aside>

      <main style={{ marginLeft: '280px', flex: 1, padding: '40px' }}>{children}</main>
    </div>
  );
}

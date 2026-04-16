import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hirvanta | Your AI Career Copilot",
  description: "Upgrade your career with Generative AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#ffffff' }}>
        
        {/* --- THE PREMIUM PROFESSIONAL NAVBAR --- */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '14px 6%',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f1f5f9',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
        }}>
          
          {/* LEFT: THE NEW CIRCUIT-H LOGO */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M20 20 V80 H32 V20 Z" fill="url(#logoGrad)" />
              <path d="M32 52 H55 L80 22" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round" />
              <path d="M70 22 H80 V32" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round" />
              <path d="M55 80 V55 L80 55 V80 Z" fill="url(#logoGrad)" opacity="0.8" />
            </svg>
            <span style={{ fontWeight: '900', fontSize: '24px', color: '#1e3a8a', letterSpacing: '-0.5px' }}>
              Hirvanta
            </span>
          </div>

          {/* MIDDLE: NAVIGATION LINKS */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500', fontSize: '14px' }}>Features</a>
            <a href="#how-it-works" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500', fontSize: '14px' }}>How it Works</a>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#64748b', fontWeight: '500', fontSize: '14px' }}>Pricing</a>
          </div>

          {/* RIGHT: THE ACTION BUTTONS (SIGN IN + UPGRADE) */}
          <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
            <a href="/login" style={{ textDecoration: 'none', color: '#475569', fontWeight: '600', fontSize: '14px' }}>Sign In</a>
            
            {/* NEW UPGRADE BUTTON */}
            <button style={{
              backgroundColor: '#f8fafc',
              color: '#1e3a8a',
              border: '1px solid #cbd5e1',
              padding: '8px 16px',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer'
            }}>
              ⭐ Upgrade
            </button>

            <button style={{ 
              backgroundColor: '#1e3a8a', 
              color: 'white', 
              border: 'none', 
              padding: '10px 20px', 
              borderRadius: '6px', 
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              Try Free →
            </button>
          </div>
        </nav>

        <main>{children}</main>

      </body>
    </html>
  );
}

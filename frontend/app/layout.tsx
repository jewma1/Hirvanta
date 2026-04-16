import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hirvanta | AI Career Copilot",
  description: "Transforming resumes into offer letters with AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#ffffff' }}>
        
        {/* --- THE UPGRADED PROFESSIONAL NAVBAR --- */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 6%',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
        }}>
          
          {/* THE CIRCUIT H LOGO (LEFT) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#0033ff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M20 20 V80 H32 V20 Z" fill="url(#logoGrad)" />
              <path d="M32 52 H55 L80 22" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round" />
              <path d="M70 22 H80 V32" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round" />
              <path d="M55 80 V55 L80 55 V80 Z" fill="url(#logoGrad)" opacity="0.8" />
              <circle cx="26" cy="38" r="3" fill="white" />
              <circle cx="26" cy="62" r="3" fill="white" />
            </svg>
            <span style={{ fontWeight: '900', fontSize: '24px', color: '#1e3a8a', letterSpacing: '-0.5px' }}>
              Hirvanta
            </span>
          </div>

          {/* CENTER NAVIGATION (HOME, PRICING) */}
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600', fontSize: '15px' }}>Home</a>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600', fontSize: '15px' }}>Pricing</a>
            <a href="#features" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600', fontSize: '15px' }}>Features</a>
          </div>

          {/* RIGHT SIDE (SIGN IN, TRY FREE) */}
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <a href="/login" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: '700', fontSize: '15px' }}>Sign In</a>
            <button style={{ 
              backgroundColor: '#1e3a8a', 
              color: 'white', 
              border: 'none', 
              padding: '10px 22px', 
              borderRadius: '8px', 
              fontWeight: '800',
              fontSize: '15px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(30, 58, 138, 0.2)'
            }}>
              Try Free →
            </button>
          </div>
        </nav>

        {/* This main part keeps your website content clean */}
        <main>{children}</main>

      </body>
    </html>
  );
}

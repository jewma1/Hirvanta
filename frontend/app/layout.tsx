import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Hirvanta | AI Career Copilot",
  description: "Transforming resumes into offer letters with AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#fafafa' }}>
        
        {/* --- PROFESSIONAL STARTUP HEADER --- */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 5%',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
        }}>
          
          {/* THE EXACT CIRCUIT-H LOGO DESIGN */}
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '10px' }}>
            
            {/* SVG LOGO: CIRCUIT H + ARROW */}
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="hGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#0033ff', stopOpacity: 1 }} /> {/* Deep Blue */}
                  <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} /> {/* Bright Cyan */}
                </linearGradient>
              </defs>
              
              {/* Left Side: Circuit Pillar */}
              <path d="M25 25 V75 H35 V25 Z" fill="url(#hGradient)" />
              <circle cx="25" cy="40" r="3" fill="white" />
              <circle cx="25" cy="55" r="3" fill="white" />
              <path d="M25 40 H30 V55 H25" stroke="white" strokeWidth="1.5" fill="none" />
              
              {/* Middle & Right: The Growth Arrow */}
              <path d="M35 50 H55 L75 25" stroke="url(#hGradient)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M65 25 H75 V35" stroke="url(#hGradient)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M55 75 V55 L75 55 V75 Z" fill="url(#hGradient)" opacity="0.8" />
            </svg>

            {/* BRAND TEXT */}
            <span style={{ 
              fontWeight: '800', 
              fontSize: '28px', 
              color: '#1e3a8a', 
              letterSpacing: '-0.8px',
              fontFamily: 'system-ui, sans-serif'
            }}>
              Hirvanta
            </span>
          </div>

          {/* NAVIGATION */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500', fontSize: '15px' }}>Home</a>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500', fontSize: '15px' }}>Pricing</a>
            <button style={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              border: 'none',
              padding: '10px 22px',
              borderRadius: '8px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: '0.2s'
            }}>
              Try Free
            </button>
          </div>
        </nav>

        {/* --- PAGE CONTENT --- */}
        <main>{children}</main>

        {/* --- SIMPLE FOOTER --- */}
        <footer style={{ padding: '40px 5%', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>
          © 2026 HIRVANTA. AI-POWERED CAREER GROWTH.
        </footer>

      </body>
    </html>
  );
}

import type { Metadata } from "next";
import React from "react";

// This is the "ID Card" for your website on Google and LinkedIn
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
        
        {/* --- PROFESSIONAL HEADER START --- */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 5%',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
          
          {/* THE NEW BRAND LOGO DESIGN (Icon + Text) */}
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '12px' }}>
            
            {/* GEOMETRIC ARROW MONOGRAM */}
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M15 70 L35 30 L45 30 L25 70 Z" fill="url(#logoGradient)" />
              <path d="M40 70 L60 30 L70 30 L50 70 Z" fill="url(#logoGradient)" />
              <path d="M65 70 L85 30 L95 30 L75 70 Z" fill="url(#logoGradient)" />
            </svg>

            {/* BRAND NAME & TAGLINE */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontWeight: '900', 
                fontSize: '24px', 
                color: '#1e3a8a', 
                letterSpacing: '-1px',
                textTransform: 'uppercase',
                lineHeight: '1'
              }}>
                Hirvanta
              </span>
              <span style={{ 
                fontWeight: '600', 
                fontSize: '9px', 
                color: '#6b7280', 
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}>
                Your Career Copilot
              </span>
            </div>
          </div>

          {/* NAVIGATION MENU */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500', fontSize: '14px' }}>Home</a>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500', fontSize: '14px' }}>Pricing</a>
            <button style={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              border: 'none',
              padding: '10px 18px',
              borderRadius: '6px',
              fontWeight: '600',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
              Try Free
            </button>
          </div>
        </nav>
        {/* --- HEADER END --- */}

        {/* This is where the magic happens - your page content goes here */}
        <main>{children}</main>

        {/* --- PROFESSIONAL FOOTER --- */}
        <footer style={{ 
          padding: '40px 5%', 
          textAlign: 'center', 
          backgroundColor: '#ffffff', 
          borderTop: '1px solid #e5e7eb', 
          marginTop: '60px' 
        }}>
          <p style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '500' }}>
            © 2026 HIRVANTA AI. ALL RIGHTS RESERVED.
          </p>
        </footer>

      </body>
    </html>
  );
}

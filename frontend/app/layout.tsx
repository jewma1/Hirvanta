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
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 5%',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          {/* --- NEW LOGO: CIRCUIT H + ARROW --- */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#0033ff', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="M20 20 V80 H32 V20 Z" fill="url(#logoGrad)" />
              <path d="M32 50 H55 L80 20" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round" />
              <path d="M70 20 H80 V30" stroke="url(#logoGrad)" strokeWidth="12" strokeLinecap="round" />
              <path d="M55 80 V55 L80 55 V80 Z" fill="url(#logoGrad)" opacity="0.8" />
              <circle cx="26" cy="35" r="3" fill="white" />
              <circle cx="26" cy="65" r="3" fill="white" />
            </svg>
            <span style={{ fontWeight: '900', fontSize: '26px', color: '#1e3a8a', letterSpacing: '-1px' }}>
              Hirvanta
            </span>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Home</a>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Pricing</a>
            <button style={{ backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '700' }}>
              Try Free
            </button>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

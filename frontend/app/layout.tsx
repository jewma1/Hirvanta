import type { Metadata } from "next";
import React from "react";

// This is for Google and LinkedIn to see your site name
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
        
        {/* --- PROFESSIONAL LOGO & NAVBAR START --- */}
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px 5%',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          {/* THE NEW BRAND LOGO */}
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="22" fill="#1e3a8a"/>
              <path d="M30 70V30H42V44H58V30H70V70H58V56H42V70H30Z" fill="white"/>
              <circle cx="78" cy="22" r="10" fill="#3b82f6"/>
            </svg>
            <span style={{ 
              fontWeight: '800', 
              fontSize: '24px', 
              color: '#1e3a8a', 
              marginLeft: '12px',
              letterSpacing: '-0.5px' 
            }}>
              Hirvanta
            </span>
          </div>

          {/* NAVIGATION LINKS */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Home</a>
            <a href="/pricing" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Pricing</a>
            <button style={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Try Free
            </button>
          </div>
        </nav>
        {/* --- NAVBAR END --- */}

        {/* This "children" part is where your pages like Home or Pricing will appear */}
        <main>{children}</main>

        {/* --- PROFESSIONAL FOOTER --- */}
        <footer style={{ padding: '40px 5%', textAlign: 'center', backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', marginTop: '50px' }}>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>
            © 2026 Hirvanta AI. Built for the future of careers.
          </p>
        </footer>

      </body>
    </html>
  );
}

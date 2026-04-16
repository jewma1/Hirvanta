import React from 'react';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 5%' }}>
      
      {/* AI BADGE */}
      <div style={{ 
        display: 'inline-flex', 
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#eff6ff', 
        color: '#1e40af', 
        padding: '8px 16px', 
        borderRadius: '20px', 
        fontSize: '13px', 
        fontWeight: '700',
        marginBottom: '32px',
        border: '1px solid #dbeafe'
      }}>
        <span>⚡</span> AI-Powered Career Assistant
      </div>
      
      {/* HERO HEADLINE */}
      <h1 style={{ fontSize: '68px', fontWeight: '900', color: '#0f172a', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-2px' }}>
        Your AI Career Copilot <br/>
        <span style={{ color: '#3b82f6' }}>From Resume to Offer Letter</span>
      </h1>
      
      {/* HERO SUBTEXT */}
      <p style={{ fontSize: '19px', color: '#64748b', maxWidth: '750px', margin: '0 auto 48px auto', lineHeight: '1.6' }}>
        Stop spending hours on applications. Hirvanta uses AI to build resumes, write cover letters, 
        prepare for interviews, and find jobs — all from a single job description.
      </p>

      {/* PRIMARY BUTTONS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button style={{ 
          backgroundColor: '#1e3a8a', 
          color: 'white', 
          padding: '18px 38px', 
          borderRadius: '10px', 
          fontSize: '17px', 
          fontWeight: '700', 
          border: 'none', 
          cursor: 'pointer',
          boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.3)'
        }}>
          Start Your Free Trial →
        </button>
        <button style={{ 
          backgroundColor: '#ffffff', 
          color: '#1e3a8a', 
          padding: '18px 38px', 
          borderRadius: '10px', 
          fontSize: '17px', 
          fontWeight: '700', 
          border: '1px solid #e2e8f0', 
          cursor: 'pointer' 
        }}>
          Upload Job Description
        </button>
      </div>

      <p style={{ marginTop: '24px', color: '#94a3b8', fontSize: '14px', fontWeight: '500' }}>
        Free trial includes 3 resumes, 2 cover letters, and unlimited job search.
      </p>

      {/* --- NEW: LIFETIME UPGRADE SECTION --- */}
      <div style={{ 
        marginTop: '100px', 
        padding: '40px', 
        backgroundColor: '#f8fafc', 
        borderRadius: '24px', 
        border: '1px solid #e2e8f0',
        maxWidth: '900px',
        margin: '100px auto 0 auto'
      }}>
        <h2 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: '800' }}>👑 Go Pro with Lifetime Access</h2>
        <p style={{ color: '#64748b', marginBottom: '25px' }}>Get every feature, every AI upgrade, and unlimited resumes forever.</p>
        <button style={{
          backgroundColor: '#1e3a8a',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          fontWeight: '700',
          border: 'none',
          cursor: 'pointer'
        }}>
          View Lifetime Plans
        </button>
      </div>
    </div>
  );
}

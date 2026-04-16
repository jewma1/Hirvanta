import React from 'react';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 5%' }}>
      {/* BADGE */}
      <div style={{ 
        display: 'inline-block', 
        backgroundColor: '#f0f7ff', 
        color: '#1e40af', 
        padding: '8px 20px', 
        borderRadius: '30px', 
        fontSize: '14px', 
        fontWeight: '700',
        marginBottom: '24px',
        border: '1px solid #dbeafe'
      }}>
        🚀 AI-Powered Career Assistant
      </div>
      
      {/* MAIN HEADLINE */}
      <h1 style={{ fontSize: '64px', fontWeight: '900', color: '#0f172a', marginBottom: '24px', lineHeight: '1.1' }}>
        Your AI Career Copilot <br/>
        <span style={{ 
          background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent' 
        }}>
          From Resume to Offer Letter
        </span>
      </h1>
      
      {/* SUBTEXT */}
      <p style={{ fontSize: '20px', color: '#475569', maxWidth: '800px', margin: '0 auto 48px auto', lineHeight: '1.6' }}>
        Stop spending hours on applications. Hirvanta uses AI to build resumes, write cover letters, 
        prepare for interviews, and find jobs — all from a single job description.
      </p>

      {/* CALL TO ACTION BUTTONS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button style={{ 
          backgroundColor: '#1e3a8a', 
          color: 'white', 
          padding: '18px 36px', 
          borderRadius: '12px', 
          fontSize: '18px', 
          fontWeight: '800', 
          border: 'none', 
          cursor: 'pointer',
          boxShadow: '0 10px 15px rgba(30, 58, 138, 0.2)'
        }}>
          Start Your Free Trial →
        </button>
        <button style={{ 
          backgroundColor: '#ffffff', 
          color: '#1e3a8a', 
          padding: '18px 36px', 
          borderRadius: '12px', 
          fontSize: '18px', 
          fontWeight: '800', 
          border: '2px solid #e2e8f0', 
          cursor: 'pointer' 
        }}>
          Upload Job Description
        </button>
      </div>

      <p style={{ marginTop: '24px', color: '#94a3b8', fontSize: '15px', fontWeight: '500' }}>
        No credit card required. Free trial includes 3 premium resumes.
      </p>
    </div>
  );
}

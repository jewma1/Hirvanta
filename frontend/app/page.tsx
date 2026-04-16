import React from 'react';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '80px 5%' }}>
      <div style={{ 
        display: 'inline-block', 
        backgroundColor: '#e0e7ff', 
        color: '#4338ca', 
        padding: '6px 16px', 
        borderRadius: '20px', 
        fontSize: '14px', 
        fontWeight: '600',
        marginBottom: '20px'
      }}>
        ⚡ AI-Powered Career Assistant
      </div>
      
      <h1 style={{ fontSize: '56px', fontWeight: '900', color: '#111827', marginBottom: '20px', lineHeight: '1.1' }}>
        Your AI Career Copilot <br/>
        <span style={{ color: '#4f46e5' }}>From Resume to Offer Letter</span>
      </h1>
      
      <p style={{ fontSize: '18px', color: '#4b5563', maxWidth: '700px', margin: '0 auto 40px auto' }}>
        Stop spending hours on applications. Hirvanta uses AI to build resumes, write cover letters, 
        prepare for interviews, and find jobs — all from a single job description.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <button style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '15px 30px', borderRadius: '8px', fontSize: '18px', fontWeight: '700', border: 'none', cursor: 'pointer' }}>
          Start Your Free Trial →
        </button>
        <button style={{ backgroundColor: 'white', color: '#111827', padding: '15px 30px', borderRadius: '8px', fontSize: '18px', fontWeight: '700', border: '1px solid #e5e7eb', cursor: 'pointer' }}>
          Upload Job Description
        </button>
      </div>

      <p style={{ marginTop: '20px', color: '#9ca3af', fontSize: '14px' }}>
        Free trial includes 3 resumes, 2 cover letters, and unlimited job search.
      </p>
    </div>
  );
}

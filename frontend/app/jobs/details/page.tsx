'use client';
import Link from 'next/link';

export default function JobDetails() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/jobs" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold' }}>← Back to Jobs</Link>
        <div style={{ fontWeight: '900', color: '#111827' }}>📄 Hirvanta AI</div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '850px', margin: '0 auto' }}>
        
        {/* Job Header Card */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e5e7eb', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
            <div>
              <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#111827', margin: '0 0 10px 0' }}>Senior Project Engineer</h1>
              <p style={{ fontSize: '18px', color: '#4b5563', margin: 0 }}>Ingersoll Rand • Bangalore • Posted 2 days ago</p>
            </div>
            <span style={{ backgroundColor: '#e0e7ff', color: '#4338ca', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>FULL-TIME</span>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
              Apply on LinkedIn ↗
            </button>
            <button style={{ backgroundColor: '#f3f4f6', color: '#111827', border: 'none', padding: '14px 28px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
              Save Job
            </button>
          </div>
        </div>

        {/* The Job Description Content */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Job Description</h3>
          <p style={{ lineHeight: '1.7', color: '#374151', marginBottom: '30px' }}>
            As a Senior Project Engineer at Ingersoll Rand, you will oversee mechanical engineering projects 
            from conception to completion. You will work closely with cross-functional teams in Bangalore 
            to ensure project milestones are met using SolidWorks and advanced project management tools.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Key Requirements</h3>
          <ul style={{ lineHeight: '2', color: '#374151', paddingLeft: '20px', marginBottom: '40px' }}>
            <li>Bachelor's degree in Mechanical or Aerospace Engineering.</li>
            <li>3-5 years of experience in project handling.</li>
            <li>Proficiency in SolidWorks and AISI material standards.</li>
            <li>Strong communication skills for stakeholder management.</li>
          </ul>

          {/* THE STARTUP UNIQUE FEATURE: AI TAILORING */}
          <div style={{ backgroundColor: '#f0f9ff', padding: '30px', borderRadius: '16px', border: '1px solid #bae6fd', textAlign: 'center' }}>
            <h3 style={{ color: '#0369a1', margin: '0 0 10px 0' }}>Perfect Match Found!</h3>
            <p style={{ color: '#0c4a6e', marginBottom: '20px' }}>Our AI can rewrite your resume to highlight your <strong>Aerospace background</strong> for this specific role.</p>
            <Link href="/resume">
              <button style={{ backgroundColor: '#0369a1', color: 'white', border: 'none', padding: '16px 32px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '18px' }}>
                🎯 Tailor Resume Now
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

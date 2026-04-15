'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function JobPortal() {
  const [activeTab, setActiveTab] = useState<'search' | 'upload'>('search');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold' }}>← Dashboard</Link>
        <div style={{ fontWeight: '900', color: '#111827' }}>📄 Hirvanta Job Center</div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Toggle Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#111827', marginBottom: '20px' }}>How would you like to start?</h1>
          <div style={{ display: 'inline-flex', backgroundColor: '#e2e8f0', padding: '5px', borderRadius: '14px' }}>
            <button 
              onClick={() => setActiveTab('search')}
              style={{ ...toggleButtonStyle, backgroundColor: activeTab === 'search' ? 'white' : 'transparent', boxShadow: activeTab === 'search' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none' }}>
              🔍 Find a Job
            </button>
            <button 
              onClick={() => setActiveTab('upload')}
              style={{ ...toggleButtonStyle, backgroundColor: activeTab === 'upload' ? 'white' : 'transparent', boxShadow: activeTab === 'upload' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none' }}>
              📄 I have a Job Description
            </button>
          </div>
        </div>

        {activeTab === 'search' ? (
          /* SECTION: JOB FINDER */
          <div style={{ animation: 'fadeIn 0.3s ease-in' }}>
            <div style={searchContainerStyle}>
              <input type="text" placeholder="Role (e.g. Project Engineer)" style={inputStyle} />
              <input type="text" placeholder="Exp (Years)" style={{ ...inputStyle, width: '120px' }} />
              <input type="text" placeholder="Location (Bangalore)" style={inputStyle} />
              <button style={primaryButtonStyle}>Search</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <JobCard title="Senior Project Engineer" company="Ingersoll Rand" location="Bangalore" source="LinkedIn" />
              <JobCard title="Aerospace Design Lead" company="HAL" location="Bangalore" source="Direct" />
              <JobCard title="Mechanical Engineer" company="AutoTech" location="Remote" source="Indeed" />
            </div>
          </div>
        ) : (
          /* SECTION: JOB DESCRIPTION INPUT */
          <div style={{ animation: 'fadeIn 0.3s ease-in', backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginBottom: '20px' }}>Paste Job Details</h3>
            <input type="text" placeholder="Job URL (LinkedIn, Indeed, etc.)" style={{ ...inputStyle, marginBottom: '15px' }} />
            <textarea placeholder="Paste the full job description here..." style={{ ...inputStyle, height: '200px', marginBottom: '20px', resize: 'none' }}></textarea>
            
            <div style={{ border: '2px dashed #d1d5db', padding: '30px', textAlign: 'center', borderRadius: '12px', marginBottom: '25px' }}>
              <p style={{ margin: 0, color: '#6b7280' }}>Drop your JD here or <strong>Browse Files</strong></p>
              <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '5px' }}>Supports PDF, DOC, DOCX, TXT</p>
            </div>

            <Link href="/resume">
              <button style={{ ...primaryButtonStyle, width: '100%', padding: '18px' }}>🎯 Build Resume for this Job</button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

// Sub-Components
function JobCard({ title, company, location, source }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{title}</h4>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>{company} • {location} • <span style={{ color: '#1e3a8a', fontWeight: '600' }}>{source}</span></p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Link href="/jobs/details"><button style={secondaryButtonStyle}>View Details</button></Link>
        <Link href="/resume"><button style={primaryButtonStyle}>Build Resume</button></Link>
      </div>
    </div>
  );
}

// Styles
const toggleButtonStyle = { padding: '10px 20px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: '600', transition: '0.2s' };
const searchContainerStyle = { display: 'flex', gap: '12px', backgroundColor: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '30px', flexWrap: 'wrap' as 'wrap' };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', fontSize: '15px', outline: 'none', boxSizing: 'border-box' as 'border-box' };
const primaryButtonStyle = { backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };
const secondaryButtonStyle = { backgroundColor: '#f3f4f6', color: '#111827', border: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' };

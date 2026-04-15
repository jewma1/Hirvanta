'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ResumeBuilder() {
  const [mode, setMode] = useState<'auto' | 'optimize' | 'tailor'>('auto');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold' }}>← Dashboard</Link>
        <div style={{ fontWeight: '900', color: '#111827' }}>📄 Hirvanta AI Builder</div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#111827', margin: '0 0 10px 0' }}>AI Resume Suite</h1>
          <p style={{ color: '#4b5563', fontSize: '18px' }}>Choose a mode to start building your professional future.</p>
        </header>

        {/* Mode Selector Tabs */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <ModeTab 
            active={mode === 'auto'} 
            onClick={() => setMode('auto')} 
            icon="✨" 
            title="Auto Maker" 
            desc="Build from scratch" 
          />
          <ModeTab 
            active={mode === 'optimize'} 
            onClick={() => setMode('optimize')} 
            icon="🚀" 
            title="Optimizer" 
            desc="Improve old resume" 
          />
          <ModeTab 
            active={mode === 'tailor'} 
            onClick={() => setMode('tailor')} 
            icon="🎯" 
            title="JD Tailor" 
            desc="Match a specific job" 
          />
        </div>

        {/* Dynamic Form Area */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e5e7eb', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
          
          {mode === 'auto' && (
            <div style={{ animation: 'fadeIn 0.3s' }}>
              <h3 style={sectionTitle}>Personal & Professional Info</h3>
              <div style={gridStyle}>
                <input type="text" placeholder="Full Name" style={inputStyle} />
                <input type="text" placeholder="Target Job Title (e.g. Project Engineer)" style={inputStyle} />
                <textarea placeholder="Tell us about your top 3 achievements..." style={{ ...inputStyle, gridColumn: 'span 2', height: '100px' }} />
              </div>
            </div>
          )}

          {mode === 'optimize' && (
            <div style={{ animation: 'fadeIn 0.3s', textAlign: 'center' }}>
              <h3 style={sectionTitle}>ATS Optimization Engine</h3>
              <div style={uploadBoxStyle}>
                <span style={{ fontSize: '40px' }}>📤</span>
                <p>Upload your existing Resume (PDF, DOCX)</p>
                <button style={secondaryButtonStyle}>Browse Files</button>
              </div>
              <p style={{ color: '#6b7280', fontSize: '14px' }}>AI will improve formatting, fix grammar, and enhance skills.</p>
            </div>
          )}

          {mode === 'tailor' && (
            <div style={{ animation: 'fadeIn 0.3s' }}>
              <h3 style={sectionTitle}>Job Description Matching</h3>
              <textarea placeholder="Paste the Job Description here..." style={{ ...inputStyle, height: '150px', marginBottom: '20px' }} />
              <div style={uploadBoxStyle}>
                <p>Upload your base resume to tailor it</p>
                <button style={secondaryButtonStyle}>Browse Resume</button>
              </div>
            </div>
          )}

          <button style={mainButtonStyle}>
            {mode === 'auto' && 'Generate Full Resume'}
            {mode === 'optimize' && 'Start ATS Optimization'}
            {mode === 'tailor' && 'Generate Tailored Resume'}
          </button>
        </div>

      </main>
    </div>
  );
}

// Sub-components
function ModeTab({ active, onClick, icon, title, desc }) {
  return (
    <div 
      onClick={onClick}
      style={{ 
        flex: '1 1 250px', 
        backgroundColor: active ? '#1e3a8a' : 'white', 
        color: active ? 'white' : '#111827',
        padding: '20px', 
        borderRadius: '16px', 
        border: active ? 'none' : '1px solid #e5e7eb',
        cursor: 'pointer',
        transition: '0.2s'
      }}>
      <div style={{ fontSize: '24px', marginBottom: '8px' }}>{icon}</div>
      <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{title}</div>
      <div style={{ fontSize: '13px', opacity: active ? 0.8 : 0.6 }}>{desc}</div>
    </div>
  );
}

// Styles
const sectionTitle = { fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' };
const inputStyle = { width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', fontSize: '15px', boxSizing: 'border-box' as 'border-box' };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const uploadBoxStyle = { border: '2px dashed #d1d5db', padding: '40px', borderRadius: '16px', marginBottom: '20px' };
const mainButtonStyle = { width: '100%', backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '18px', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px' };
const secondaryButtonStyle = { backgroundColor: '#f3f4f6', color: '#111827', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' };

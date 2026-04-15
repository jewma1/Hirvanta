'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function CareerMentor() {
  const [view, setView] = useState<'session' | 'roadmap'>('session');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Premium Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          ← <span style={{fontSize: '14px'}}>DASHBOARD</span>
        </Link>
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setView('session')} style={view === 'session' ? activeTab : inactiveTab}>1-on-1 Session</button>
            <button onClick={() => setView('roadmap')} style={view === 'roadmap' ? activeTab : inactiveTab}>My Career Roadmap</button>
        </div>
        <div style={{ backgroundColor: '#fbbf24', color: '#78350f', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>LIFETIME ACCESS</div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1100px', margin: '0 auto' }}>
        
        {view === 'session' ? (
          /* MODE 1: THE HUMAN-LIKE SESSION */
          <div style={{ animation: 'fadeIn 0.4s ease' }}>
            <header style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h1 style={{ fontSize: '38px', fontWeight: '900', color: '#111827' }}>Your Personal Mentor</h1>
              <p style={{ color: '#6b7280', fontSize: '18px' }}>"Let's figure out your next big move, Jewma."</p>
            </header>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              {/* Voice Mentor Card */}
              <div style={voiceCardStyle}>
                <div style={pulseAnimation}>🎙️</div>
                <h2 style={{ margin: '20px 0 10px 0' }}>Voice Guidance</h2>
                <p style={{ opacity: 0.9, marginBottom: '30px' }}>Speak naturally. Our AI listens and responds with human-like empathy and professional wisdom.</p>
                <button style={whiteButtonStyle}>Start Live Conversation</button>
              </div>

              {/* Chat Mentor Card */}
              <div style={{ flex: '1 1 400px', backgroundColor: 'white', padding: '30px', borderRadius: '28px', border: '1px solid #e5e7eb', boxShadow: '0 10px 15px rgba(0,0,0,0.03)' }}>
                <div style={{ height: '300px', overflowY: 'auto', marginBottom: '20px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={mentorBubble}>"I see you're an Aerospace student interested in AI. That's a powerful combination. Are you worried about the transition?"</div>
                  <div style={userBubble}>"Yes, I'm not sure if my mechanical skills translate to Data Science."</div>
                  <div style={mentorBubble}>"They do! Your structural logic is exactly what complex algorithms need. Let's look at your roadmap."</div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input type="text" placeholder="Ask anything about your future..." style={inputStyle} />
                  <button style={primaryButtonStyle}>Send</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* MODE 2: THE DATA-DRIVEN ROADMAP (NEW UPGRADE) */
          <div style={{ animation: 'fadeIn 0.4s ease' }}>
            <h2 style={{ marginBottom: '30px', fontSize: '28px', fontWeight: 'bold' }}>Career Strategy Center</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              
              {/* Skill Gap Analysis */}
              <div style={roadmapCard}>
                <h3 style={{ color: '#1e3a8a' }}>🔍 Skill Gap Analysis</h3>
                <p style={{ fontSize: '14px', color: '#6b7280' }}>Based on your target: **AI Engineer**</p>
                <div style={{ marginTop: '15px' }}>
                  <SkillItem label="Python" level="40%" color="#ef4444" />
                  <SkillItem label="Mechanical Design" level="95%" color="#10b981" />
                  <SkillItem label="Math/Logic" level="85%" color="#10b981" />
                  <SkillItem label="Neural Networks" level="10%" color="#ef4444" />
                </div>
              </div>

              {/* Upskilling Roadmap */}
              <div style={roadmapCard}>
                <h3 style={{ color: '#1e3a8a' }}>🛤️ Upskilling Roadmap</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '15px' }}>
                  <div style={stepStyle}><strong>Step 1:</strong> Finish Python for Data Science (2 weeks)</div>
                  <div style={stepStyle}><strong>Step 2:</strong> Build 3 Aerospace-AI projects (4 weeks)</div>
                  <div style={stepStyle}><strong>Step 3:</strong> Start PMP Certification (Target: June)</div>
                </div>
              </div>

              {/* Salary Guidance */}
              <div style={{ ...roadmapCard, background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                <h3 style={{ color: '#1e40af' }}>💰 Salary Guidance</h3>
                <p style={{ fontSize: '14px', color: '#1e40af', marginBottom: '15px' }}>Bangalore Market Rate for your profile:</p>
                <div style={{ fontSize: '32px', fontWeight: '900', color: '#1e3a8a' }}>₹8L - ₹15L</div>
                <p style={{ fontSize: '12px', color: '#1e40af', marginTop: '10px' }}>*Based on combining Engineering + AI skills.</p>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Sub-components & Styles
function SkillItem({ label, level, color }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
        <span>{label}</span><span>{level}</span>
      </div>
      <div style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '10px' }}>
        <div style={{ width: level, height: '100%', backgroundColor: color, borderRadius: '10px' }}></div>
      </div>
    </div>
  );
}

const activeTab = { padding: '10px 20px', borderRadius: '10px', border: 'none', backgroundColor: '#1e3a8a', color: 'white', fontWeight: 'bold', cursor: 'pointer' };
const inactiveTab = { padding: '10px 20px', borderRadius: '10px', border: 'none', backgroundColor: 'transparent', color: '#6b7280', fontWeight: 'bold', cursor: 'pointer' };
const voiceCardStyle = { flex: '1 1 350px', background: 'linear-gradient(135deg, #1e3a8a 0%, #4338ca 100%)', padding: '40px', borderRadius: '28px', color: 'white', textAlign: 'center' as 'center', boxShadow: '0 15px 30px rgba(30, 58, 138, 0.2)' };
const roadmapCard = { backgroundColor: 'white', padding: '25px', borderRadius: '20px', border: '1px solid #e5e7eb' };
const mentorBubble = { alignSelf: 'flex-start', backgroundColor: '#f1f5f9', padding: '15px', borderRadius: '18px 18px 18px 2px', fontSize: '14px', color: '#1e3a8a', maxWidth: '85%', lineHeight: '1.5' };
const userBubble = { alignSelf: 'flex-end', backgroundColor: '#1e3a8a', padding: '15px', borderRadius: '18px 18px 2px 18px', fontSize: '14px', color: 'white', maxWidth: '85%' };
const inputStyle = { flex: 1, padding: '14px', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none' };
const primaryButtonStyle = { backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' };
const whiteButtonStyle = { backgroundColor: 'white', color: '#1e3a8a', border: 'none', padding: '16px 32px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '10px' };
const stepStyle = { padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #1e3a8a', fontSize: '14px' };
const pulseAnimation = { fontSize: '50px', animation: 'pulse 2s infinite' };

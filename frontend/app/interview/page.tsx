'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function InterviewCoach() {
  const [activeMode, setActiveMode] = useState<'chat' | 'voice'>('chat');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold' }}>← Dashboard</Link>
        <div style={{ fontWeight: '900', color: '#111827' }}>🎧 Hirvanta AI Coach</div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#111827' }}>Interview Practice</h1>
          <p style={{ color: '#6b7280' }}>Master your communication skills with real-time AI feedback.</p>
        </header>

        {/* Mode Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
          <button 
            onClick={() => setActiveMode('chat')}
            style={{ ...modeButtonStyle, backgroundColor: activeMode === 'chat' ? '#1e3a8a' : 'white', color: activeMode === 'chat' ? 'white' : '#1e3a8a' }}>
            💬 Chat Interview
          </button>
          <button 
            onClick={() => setActiveMode('voice')}
            style={{ ...modeButtonStyle, backgroundColor: activeMode === 'voice' ? '#1e3a8a' : 'white', color: activeMode === 'voice' ? 'white' : '#1e3a8a' }}>
            🎙️ Voice Interview
          </button>
        </div>

        {activeMode === 'chat' ? (
          /* CHAT INTERVIEW UI */
          <div style={{ animation: 'fadeIn 0.3s', backgroundColor: 'white', borderRadius: '24px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #f1f5f9', backgroundColor: '#f8fafc', fontWeight: 'bold' }}>Session: Project Engineer Role</div>
            <div style={{ height: '350px', padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={aiBubble}>AI: "Can you describe a time you used SolidWorks to solve a complex mechanical problem?"</div>
              <div style={userBubble}>User: "I designed a gear assembly for a drone motor..."</div>
              <div style={feedbackBubble}>💡 <strong>Vocabulary Suggestion:</strong> Instead of "solve," try using "re-engineer" or "optimize" for a stronger impact.</div>
            </div>
            <div style={{ padding: '20px', borderTop: '1px solid #e5e7eb', display: 'flex', gap: '10px' }}>
              <input type="text" placeholder="Type your answer..." style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
              <button style={{ backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold' }}>Send</button>
            </div>
          </div>
        ) : (
          /* VOICE INTERVIEW UI */
          <div style={{ animation: 'fadeIn 0.3s', textAlign: 'center', backgroundColor: '#1e3a8a', padding: '60px', borderRadius: '24px', color: 'white' }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>🎙️</div>
            <h2 style={{ marginBottom: '10px' }}>AI Voice Coach is Listening...</h2>
            <p style={{ opacity: 0.8, marginBottom: '40px' }}>Speak clearly. The AI will analyze your pace, tone, and answers.</p>
            
            <div style={waveContainer}>
               <div style={waveBar}></div>
               <div style={{...waveBar, height: '60px'}}></div>
               <div style={{...waveBar, height: '40px'}}></div>
               <div style={{...waveBar, height: '70px'}}></div>
               <div style={waveBar}></div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <button style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>End Call</button>
              <button style={{ backgroundColor: 'white', color: '#1e3a8a', border: 'none', padding: '15px 30px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}>Next Question</button>
            </div>
            
            <div style={{ marginTop: '40px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px' }}>
               <h4 style={{ margin: '0 0 10px 0' }}>Live Communication Feedback</h4>
               <p style={{ fontSize: '14px', margin: 0 }}>Tone: Professional | Pace: Good | Clarity: High</p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

// Styles
const modeButtonStyle = { padding: '12px 30px', borderRadius: '30px', border: '2px solid #1e3a8a', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' };
const aiBubble = { alignSelf: 'flex-start', backgroundColor: '#f1f5f9', padding: '12px 18px', borderRadius: '18px 18px 18px 2px', maxWidth: '80%', fontSize: '15px', color: '#1e3a8a' };
const userBubble = { alignSelf: 'flex-end', backgroundColor: '#1e3a8a', padding: '12px 18px', borderRadius: '18px 18px 2px 18px', maxWidth: '80%', fontSize: '15px', color: 'white' };
const feedbackBubble = { alignSelf: 'center', backgroundColor: '#fff7ed', border: '1px solid #ffedd5', padding: '12px', borderRadius: '10px', fontSize: '13px', color: '#9a3412', width: '90%' };
const waveContainer = { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', height: '100px', marginBottom: '40px' };
const waveBar = { width: '8px', height: '30px', backgroundColor: 'white', borderRadius: '10px' };

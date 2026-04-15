'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function CareerMentor() {
  const [isCalling, setIsCalling] = useState(false);
  const [sessionMode, setSessionMode] = useState<'voice' | 'chat'>('voice');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', fontFamily: 'system-ui, sans-serif', color: 'white' }}>
      
      {/* Premium Navbar */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#94a3b8', fontWeight: 'bold' }}>← EXIT SESSION</Link>
        <div style={{ backgroundColor: '#fbbf24', color: '#78350f', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>LIFETIME MENTORSHIP</div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Toggle between Voice and Chat */}
        <div style={{ marginBottom: '40px', display: 'inline-flex', backgroundColor: 'rgba(255,255,255,0.05)', padding: '5px', borderRadius: '12px' }}>
            <button onClick={() => {setIsCalling(false); setSessionMode('voice')}} style={sessionMode === 'voice' ? activeTab : inactiveTab}>🎙️ Voice Session</button>
            <button onClick={() => {setIsCalling(false); setSessionMode('chat')}} style={sessionMode === 'chat' ? activeTab : inactiveTab}>💬 Text Chat</button>
        </div>

        {sessionMode === 'voice' ? (
          /* --- THE HUMAN VOICE EXPERIENCE --- */
          <div style={{ animation: 'fadeIn 0.5s ease' }}>
            <div style={{ marginBottom: '50px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: '900', marginBottom: '10px' }}>1-on-1 Career Guidance</h1>
              <p style={{ color: '#94a3b8', fontSize: '18px' }}>Speak your heart out. Your mentor is listening.</p>
            </div>

            {/* Visualizer / Avatar Area */}
            <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px' }}>
              {isCalling ? (
                /* Active Calling Animation */
                <div style={pulseContainer}>
                  <div style={{...pulseRing, animationDelay: '0s'}}></div>
                  <div style={{...pulseRing, animationDelay: '0.5s'}}></div>
                  <div style={{...pulseRing, animationDelay: '1s'}}></div>
                  <div style={avatarStyle}>
                    <span style={{fontSize: '40px'}}>🧘‍♂️</span>
                  </div>
                </div>
              ) : (
                /* Ready State */
                <div style={avatarStyleStatic}>
                  <span style={{fontSize: '40px'}}>🧘‍♂️</span>
                </div>
              )}
            </div>

            {isCalling ? (
              <div style={{ animation: 'fadeIn 0.5s' }}>
                <p style={{ fontSize: '20px', fontWeight: '500', marginBottom: '10px', color: '#38bdf8' }}>"I'm here, Jewma. Tell me, what's making you feel stuck today?"</p>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '30px' }}>Listening to your tone and feelings...</p>
                <button onClick={() => setIsCalling(false)} style={endCallButton}>End Session</button>
              </div>
            ) : (
              <button onClick={() => setIsCalling(true)} style={startCallButton}>
                Start Voice Call
              </button>
            )}

            <div style={coachNotes}>
              <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>Coaching Focus:</h4>
              <p style={{ fontSize: '14px', opacity: 0.8, margin: 0 }}>Emotional Intelligence • Career Transition • Confidence Building</p>
            </div>
          </div>
        ) : (
          /* --- THE CHAT EXPERIENCE --- */
          <div style={{ animation: 'fadeIn 0.5s ease', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ height: '300px', overflowY: 'auto', textAlign: 'left', padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={mentorBubble}>"I understand that changing from Aerospace to AI feels like a big jump. Let's break down why your engineering mind is actually your biggest strength."</div>
                <div style={userBubble}>"I just feel like I'm starting from zero."</div>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <input type="text" placeholder="Type your thoughts..." style={chatInput} />
              <button style={sendButton}>Send</button>
            </div>
          </div>
        )}
      </main>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// Styles
const activeTab = { padding: '10px 24px', borderRadius: '8px', border: 'none', backgroundColor: '#38bdf8', color: '#0f172a', fontWeight: 'bold', cursor: 'pointer' };
const inactiveTab = { padding: '10px 24px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', color: '#94a3b8', fontWeight: 'bold', cursor: 'pointer' };
const avatarStyleStatic = { width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.2)' };
const avatarStyle = { width: '120px', height: '120px', borderRadius: '50%', backgroundColor: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' as 'relative', zIndex: 2 };
const pulseContainer = { position: 'relative' as 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const pulseRing = { position: 'absolute' as 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid #38bdf8', animation: 'pulse 2s infinite' };
const startCallButton = { backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '18px 40px', borderRadius: '40px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 20px rgba(56, 189, 248, 0.3)' };
const endCallButton = { backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '14px 30px', borderRadius: '40px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' };
const mentorBubble = { alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '15px 15px 15px 2px', fontSize: '14px', maxWidth: '85%', lineHeight: '1.5' };
const userBubble = { alignSelf: 'flex-end', backgroundColor: '#38bdf8', color: '#0f172a', padding: '15px', borderRadius: '15px 15px 2px 15px', fontSize: '14px', maxWidth: '85%', fontWeight: '500' };
const chatInput = { flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px', color: 'white', outline: 'none' };
const sendButton = { backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', padding: '12px 24px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' };
const coachNotes = { marginTop: '60px', padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' };

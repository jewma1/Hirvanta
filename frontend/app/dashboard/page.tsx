'use client';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Sidebar/Nav */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '22px', fontWeight: '900', color: '#1e3a8a' }}>
          📄 Hirvanta
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link href="/jobs" style={navLink}>Job Finder</Link>
          <Link href="/resume" style={navLink}>Resume Builder</Link>
          <Link href="/profile">
            <div style={{ width: '35px', height: '35px', backgroundColor: '#e0e7ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#4338ca', cursor: 'pointer' }}>J</div>
          </Link>
        </div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Main Heading */}
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#111827', margin: '0 0 8px 0' }}>
            Start your AI-powered career journey
          </h1>
          <p style={{ color: '#6b7280', fontSize: '18px' }}>Manage your applications and AI coaching sessions.</p>
        </header>

        {/* Usage Counters (Based on your Free Plan limits) */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <CounterCard title="Resumes" used={1} limit={3} icon="📝" color="#4f46e5" />
          <CounterCard title="Cover Letters" used={0} limit={2} icon="✉️" color="#10b981" />
          <CounterCard title="Voice Interviews" used={0} limit={2} icon="🎙️" color="#f59e0b" />
        </div>

        {/* Upgrade Prompt (Best Value Highlight) */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1e3a8a 0%, #4f46e5 100%)', 
          borderRadius: '24px', 
          padding: '40px', 
          color: 'white', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          boxShadow: '0 20px 25px -5px rgba(79, 70, 229, 0.2)',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', marginBottom: '15px' }}>
              PRO TIP: BEST VALUE
            </div>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '28px', fontWeight: 'bold' }}>Get Lifetime Access for ₹299</h2>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '16px', maxWidth: '500px' }}>
              Unlock unlimited resumes, human-voice career coaching, and premium templates forever.
            </p>
          </div>
          <Link href="/pricing">
            <button style={{ backgroundColor: 'white', color: '#1e3a8a', border: 'none', padding: '16px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s' }}>
              Upgrade Now
            </button>
          </Link>
        </div>

        {/* Quick Actions */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', color: '#111827' }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <ActionBox href="/resume" title="Tailor Resume" icon="🎯" />
            <ActionBox href="/career-coach" title="AI Counselor" icon="🧘‍♂️" />
            <ActionBox href="/interview" title="Mock Interview" icon="🎧" />
            <ActionBox href="/jobs" title="Find Jobs" icon="🔍" />
          </div>
        </div>
      </main>
    </div>
  );
}

// Components
function CounterCard({ title, used, limit, icon, color }) {
  const percent = (used / limit) * 100;
  return (
    <div style={{ flex: '1 1 300px', backgroundColor: 'white', padding: '24px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <span style={{ fontSize: '24px' }}>{icon}</span>
        <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#9ca3af', textTransform: 'uppercase' }}>{title}</span>
      </div>
      <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>{used} <span style={{ fontSize: '16px', color: '#9ca3af', fontWeight: 'normal' }}>/ {limit}</span></div>
      <div style={{ width: '100%', height: '6px', backgroundColor: '#f1f5f9', borderRadius: '10px' }}>
        <div style={{ width: `${percent}%`, height: '100%', backgroundColor: color, borderRadius: '10px' }}></div>
      </div>
    </div>
  );
}

function ActionBox({ href, title, icon }) {
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e5e7eb', textAlign: 'center', cursor: 'pointer', transition: '0.2s' }}>
        <div style={{ fontSize: '30px', marginBottom: '10px' }}>{icon}</div>
        <div style={{ color: '#111827', fontWeight: '600' }}>{title}</div>
      </div>
    </Link>
  );
}

const navLink = { textDecoration: 'none', color: '#4b5563', fontWeight: '500', fontSize: '15px' };

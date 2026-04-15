import Link from 'next/link';

export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Side Navigation or Top Nav (We'll use Top Nav for simplicity) */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '22px', fontWeight: '900', color: '#111827' }}>
          <span style={{ color: '#1e3a8a', fontSize: '24px' }}>📄</span> Hirvanta
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/jobs" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Jobs</Link>
          <Link href="/resume" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Resume</Link>
          <Link href="/interview" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Interview</Link>
        </div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Professional Heading */}
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#111827', margin: '0 0 10px 0' }}>
            Start your AI-powered career journey
          </h1>
          <p style={{ color: '#6b7280', fontSize: '18px' }}>Welcome back, Jewma! Here is your career progress.</p>
        </header>

        {/* Usage Counters Section */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <UsageCard title="Resumes Generated" count="1" limit="3" color="#4f46e5" />
          <UsageCard title="Cover Letters" count="0" limit="2" color="#10b981" />
          <UsageCard title="Voice Interviews" count="0" limit="2" color="#f59e0b" />
        </div>

        {/* Upgrade Prompt Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)', 
          borderRadius: '20px', 
          padding: '40px', 
          color: 'white', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h2 style={{ margin: '0 0 10px 0', fontSize: '28px', fontWeight: 'bold' }}>Upgrade to Lifetime Access</h2>
            <p style={{ margin: 0, opacity: 0.9, fontSize: '18px' }}>Unlock unlimited resumes, interviews, and our AI Career Counselor for only ₹299.</p>
          </div>
          <Link href="/pricing">
            <button style={{ 
              backgroundColor: 'white', 
              color: '#1e3a8a', 
              border: 'none', 
              padding: '16px 32px', 
              borderRadius: '12px', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}>
              Upgrade Now
            </button>
          </Link>
        </div>

        {/* Quick Actions Section */}
        <div style={{ marginTop: '50px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>Quick Actions</h3>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <ActionButton href="/resume" title="New Resume" icon="📝" />
            <ActionButton href="/jobs" title="Search Jobs" icon="🔍" />
            <ActionButton href="/interview" title="Practice Interview" icon="🎙️" />
          </div>
        </div>

      </main>
    </div>
  );
}

// Small helper component for the Counter Cards
function UsageCard({ title, count, limit, color }) {
  return (
    <div style={{ flex: '1 1 300px', backgroundColor: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
      <p style={{ margin: '0 0 10px 0', color: '#6b7280', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase' }}>{title}</p>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
        <span style={{ fontSize: '36px', fontWeight: 'bold', color: color }}>{count}</span>
        <span style={{ fontSize: '18px', color: '#9ca3af' }}>/ {limit} used</span>
      </div>
      <div style={{ width: '100%', height: '8px', backgroundColor: '#f3f4f6', borderRadius: '10px', marginTop: '15px' }}>
        <div style={{ width: `${(Number(count)/Number(limit))*100}%`, height: '100%', backgroundColor: color, borderRadius: '10px' }}></div>
      </div>
    </div>
  );
}

// Small helper for Quick Action buttons
function ActionButton({ href, title, icon }) {
  return (
    <Link href={href} style={{ textDecoration: 'none', flex: '1 1 200px' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', textAlign: 'center', cursor: 'pointer', fontWeight: '600', color: '#111827' }}>
        <span style={{ fontSize: '24px', display: 'block', marginBottom: '5px' }}>{icon}</span>
        {title}
      </div>
    </Link>
  );
}

import Link from 'next/link';

export default function CareerCoach() {
  // In the future, we will check if the user paid ₹299 here
  const isLifetimeMember = false; 

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#1e3a8a', fontSize: '22px', fontWeight: 'bold' }}>← Back</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
           <span style={{ fontSize: '20px' }}>💎</span>
           <span style={{ fontWeight: 'bold', color: '#111827' }}>Premium Mentorship</span>
        </div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '900', color: '#111827' }}>AI Career Counselor</h1>
          <p style={{ color: '#4b5563', fontSize: '18px' }}>One-on-one guidance for your future.</p>
        </header>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* LEFT SIDE: Chat Mode (Available for Monthly/Lifetime) */}
          <div style={{ flex: '1 1 400px', backgroundColor: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #e5e7eb' }}>
            <h3>💬 Chat with Assistant</h3>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Get text-based answers to your career path questions.</p>
            <div style={{ height: '150px', backgroundColor: '#f9fafb', borderRadius: '12px', padding: '15px', marginBottom: '15px', color: '#9ca3af', fontSize: '14px' }}>
              Assistant: "How can I help you choose your career path today?"
            </div>
            <button style={{ width: '100%', backgroundColor: '#f3f4f6', color: '#111827', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold' }}>
              Open Chat
            </button>
          </div>

          {/* RIGHT SIDE: The PREMIUM Voice Coach (LIFETIME ONLY) */}
          <div style={{ 
            flex: '1 1 400px', 
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', 
            padding: '30px', 
            borderRadius: '24px', 
            color: 'white', 
            position: 'relative',
            overflow: 'hidden' 
          }}>
            {/* The Lock Overlay if not a member */}
            {!isLifetimeMember && (
              <div style={{ 
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
                backgroundColor: 'rgba(30, 58, 138, 0.8)', 
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', padding: '20px', backdropFilter: 'blur(4px)', zIndex: 10
              }}>
                <span style={{ fontSize: '40px', marginBottom: '10px' }}>🔒</span>
                <h3 style={{ margin: 0 }}>Lifetime Feature</h3>
                <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '20px' }}>Get the full Human-Voice Career Counselor with Lifetime Access.</p>
                <Link href="/pricing">
                  <button style={{ backgroundColor: '#fbbf24', color: '#78350f', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Upgrade for ₹299
                  </button>
                </Link>
              </div>
            )}

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '10px' }}>🎙️</div>
              <h3>Live Voice Session</h3>
              <p style={{ fontSize: '14px', opacity: 0.8 }}>Talk to your mentor just like a human.</p>
              <button style={{ width: '100%', backgroundColor: 'white', color: '#1e3a8a', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', marginTop: '20px' }}>
                Start Call
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';

export default function CareerCoach() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#1e3a8a', fontSize: '22px', fontWeight: 'bold' }}>← Back to Dashboard</Link>
        <div style={{ backgroundColor: '#fbbf24', color: '#78350f', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
           LIFETIME PREMIUM
        </div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#111827', margin: '0 0 10px 0' }}>Your 1-on-1 Career Mentor</h1>
          <p style={{ color: '#4b5563', fontSize: '20px' }}>Talk it out. No typing required.</p>
        </header>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* OPTION 1: Chat Mode (The Typing Coach) */}
          <div style={{ flex: '1 1 450px', backgroundColor: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #e5e7eb', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>💬</div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Chat with Mentor</h2>
            <p style={{ color: '#6b7280', marginBottom: '30px', lineHeight: '1.6' }}>
              Perfect for when you want to write down your thoughts and get a detailed career roadmap in text.
            </p>
            <textarea 
              placeholder="What's on your mind? Tell me about your career confusion..." 
              style={{ width: '100%', height: '100px', padding: '15px', borderRadius: '12px', border: '1px solid #d1d5db', marginBottom: '20px', resize: 'none' }}
            />
            <button style={{ width: '100%', backgroundColor: '#4f46e5', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
              Send Message
            </button>
          </div>

          {/* OPTION 2: Voice Mode (The Human Voice Coach) */}
          <div style={{ 
            flex: '1 1 450px', 
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', 
            padding: '40px', 
            borderRadius: '24px', 
            color: 'white', 
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(30, 58, 138, 0.3)' 
          }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>🎙️</div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Voice Session</h2>
            <p style={{ opacity: 0.9, marginBottom: '30px', lineHeight: '1.6' }}>
              Ready to talk? Start a real-time conversation. Our AI sounds and thinks just like a human career coach.
            </p>
            
            {/* The "Microphone" Animation Circle */}
            <div style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              borderRadius: '50%', 
              margin: '0 auto 30px auto', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              border: '2px solid white'
            }}>
              <div style={{ width: '20px', height: '20px', backgroundColor: '#ef4444', borderRadius: '50%' }}></div>
            </div>

            <button style={{ 
              width: '100%', 
              backgroundColor: 'white', 
              color: '#1e3a8a', 
              border: 'none', 
              padding: '16px', 
              borderRadius: '12px', 
              fontWeight: 'bold', 
              fontSize: '18px', 
              cursor: 'pointer' 
            }}>
              Start Live Call
            </button>
          </div>

        </div>

        {/* What the Coach Understands Section */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h3 style={{ color: '#111827', marginBottom: '30px' }}>Your Mentor can help with:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '250px' }}>
              <strong style={{ display: 'block', marginBottom: '10px' }}>Career Confusion</strong>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>"I have an Engineering degree but I'm bored. What else can I do?"</p>
            </div>
            <div style={{ maxWidth: '250px' }}>
              <strong style={{ display: 'block', marginBottom: '10px' }}>Confidence Building</strong>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>"I'm nervous about switching to a new industry like AI."</p>
            </div>
            <div style={{ maxWidth: '250px' }}>
              <strong style={{ display: 'block', marginBottom: '10px' }}>Job Selection</strong>
              <p style={{ fontSize: '14px', color: '#6b7280' }}>"I have two job offers. Which one is better for my long-term future?"</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

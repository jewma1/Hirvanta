import Link from 'next/link';

export default function InterviewCoach() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#1e3a8a', fontSize: '22px', fontWeight: 'bold' }}>📄 Hirvanta AI</Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/resume" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Resume Builder</Link>
          <Link href="/jobs" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Job Finder</Link>
        </div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#111827', margin: '0 0 10px 0' }}>AI Interview Coach</h1>
          <p style={{ color: '#4b5563', fontSize: '18px' }}>Practice with AI to boost your confidence and vocabulary.</p>
        </header>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* Mode 1: Chat Interview */}
          <div style={{ flex: '1 1 400px', backgroundColor: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>💬</div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Chat Interview</h2>
            <p style={{ color: '#6b7280', marginBottom: '25px', lineHeight: '1.5' }}>
              A text-based mock interview. Get instant feedback on your answers and suggestions for better vocabulary.
            </p>
            <button style={{ width: '100%', backgroundColor: '#4f46e5', color: 'white', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
              Start Chat Practice
            </button>
          </div>

          {/* Mode 2: Voice Interview */}
          <div style={{ flex: '1 1 400px', backgroundColor: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '40px', marginBottom: '20px' }}>🎙️</div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Voice Interview</h2>
            <p style={{ color: '#6b7280', marginBottom: '25px', lineHeight: '1.5' }}>
              A real-time voice call with AI. Practice your tone, pace, and communication skills for the big day.
            </p>
            <button style={{ width: '100%', backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
              Start Voice Call
            </button>
          </div>

        </div>

        {/* Feedback Section Placeholder */}
        <div style={{ marginTop: '50px', backgroundColor: '#eff6ff', padding: '30px', borderRadius: '16px', border: '1px dashed #bfdbfe', textAlign: 'center' }}>
          <h3 style={{ color: '#1e40af', margin: '0 0 10px 0' }}>Your Coaching Stats</h3>
          <p style={{ color: '#60a5fa', margin: 0 }}>Complete your first mock interview to see communication feedback here.</p>
        </div>
      </main>
    </div>
  );
}

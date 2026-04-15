import Link from 'next/link';

export default function ResumeBuilder() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#1e3a8a', fontSize: '22px', fontWeight: 'bold' }}>📄 Hirvanta AI</Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/jobs" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Find Jobs</Link>
          <Link href="/pricing" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Pricing</Link>
        </div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#111827', margin: '0 0 10px 0' }}>AI Resume Builder</h1>
          <p style={{ color: '#4b5563', fontSize: '18px' }}>Create a high-scoring ATS resume in seconds.</p>
        </header>

        {/* Section 1: Job Description Input */}
        <section style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', fontWeight: 'bold' }}>1. Paste Job Description</h3>
          <textarea 
            placeholder="Paste the job requirements here..." 
            style={{ width: '100%', height: '150px', padding: '15px', borderRadius: '8px', border: '1px solid #d1d5db', fontFamily: 'inherit', marginBottom: '15px', resize: 'vertical' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#6b7280' }}>OR</span>
            <button style={{ backgroundColor: '#f3f4f6', border: '1px dashed #9ca3af', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
              Upload JD (PDF/DOCX)
            </button>
          </div>
        </section>

        {/* Section 2: Choose Resume Mode */}
        <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: 'bold' }}>2. Choose AI Resume Mode</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
          
          <ResumeModeCard 
            emoji="✨" 
            title="Auto Maker" 
            desc="Enter basic info and let AI generate a full resume." 
          />
          
          <ResumeModeCard 
            emoji="🚀" 
            title="Resume Optimizer" 
            desc="Upload your old resume and AI will improve it for ATS." 
          />
          
          <ResumeModeCard 
            emoji="🎯" 
            title="JD Tailor" 
            desc="AI matches your resume perfectly to the job above." 
          />

        </div>

        <button style={{ 
          width: '100%', 
          backgroundColor: '#1e3a8a', 
          color: 'white', 
          border: 'none', 
          padding: '20px', 
          borderRadius: '12px', 
          fontSize: '20px', 
          fontWeight: 'bold', 
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(30, 58, 138, 0.2)'
        }}>
          Generate My AI Resume Now
        </button>
      </main>
    </div>
  );
}

function ResumeModeCard({ emoji, title, desc }) {
  return (
    <div style={{ 
      flex: '1 1 250px', 
      backgroundColor: 'white', 
      padding: '25px', 
      borderRadius: '16px', 
      border: '1px solid #e5e7eb', 
      cursor: 'pointer',
      transition: 'transform 0.2s'
    }}>
      <div style={{ fontSize: '30px', marginBottom: '15px' }}>{emoji}</div>
      <h4 style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: '14px', color: '#6b7280', lineHeight: '1.4' }}>{desc}</p>
    </div>
  );
}

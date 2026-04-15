export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: 'transparent' }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '22px', fontWeight: '900', color: '#111827' }}>
          <span style={{ color: '#1e3a8a', fontSize: '24px' }}>📄</span> Hirvanta
        </div>
        
        {/* Center Links */}
        <div style={{ display: 'flex', gap: '32px', color: '#4b5563', fontSize: '15px', fontWeight: '500' }}>
          <span style={{ cursor: 'pointer' }}>Features</span>
          <span style={{ cursor: 'pointer' }}>How it Works</span>
          <span style={{ cursor: 'pointer' }}>Pricing</span>
        </div>
        
        {/* Auth Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ cursor: 'pointer', color: '#4b5563', fontWeight: '500', fontSize: '15px' }}>Sign In</span>
          <button style={{ 
            backgroundColor: '#1e3a8a', 
            color: 'white', 
            border: 'none', 
            padding: '10px 24px', 
            borderRadius: '24px', 
            fontWeight: '600', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px' 
          }}>
            Try Free →
          </button>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '80px 20px', maxWidth: '850px', margin: '0 auto' }}>
        
        {/* Purple AI Badge */}
        <div style={{ 
          backgroundColor: '#e0e7ff', 
          color: '#3730a3', 
          padding: '8px 20px', 
          borderRadius: '30px', 
          fontSize: '14px', 
          fontWeight: '600', 
          marginBottom: '32px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px' 
        }}>
          <span>⚡</span> AI-Powered Career Assistant
        </div>

        {/* Massive Headline */}
        <h1 style={{ fontSize: '64px', fontWeight: '900', color: '#111827', margin: '0 0 24px 0', lineHeight: '1.1', letterSpacing: '-1.5px' }}>
          Your AI Career Copilot <br />
          <span style={{ color: '#4f46e5' }}>From Resume to Offer Letter</span>
        </h1>

        {/* Sub-headline Text */}
        <p style={{ fontSize: '20px', color: '#4b5563', marginBottom: '40px', lineHeight: '1.5', maxWidth: '750px' }}>
          Stop spending hours on applications. Hirvanta uses AI to build resumes, write cover letters, prepare for interviews, and find jobs — all from a single job description.
        </p>

        {/* Main Action Buttons */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={{ 
            backgroundColor: '#1e3a8a', 
            color: 'white', 
            border: 'none', 
            padding: '16px 32px', 
            borderRadius: '12px', 
            fontSize: '18px', 
            fontWeight: '600', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            boxShadow: '0 4px 6px rgba(30, 58, 138, 0.2)'
          }}>
            Start Your Free Trial →
          </button>
          
          <button style={{ 
            backgroundColor: 'transparent', 
            color: '#111827', 
            border: '1px solid #d1d5db', 
            padding: '16px 32px', 
            borderRadius: '12px', 
            fontSize: '18px', 
            fontWeight: '600', 
            cursor: 'pointer' 
          }}>
            Upload Job Description
          </button>
        </div>

        {/* Tiny Disclaimer Text */}
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          Free trial includes 3 resumes, 2 cover letters, unlimited chat interviews, and unlimited job search
        </p>
      </main>
      
    </div>
  );
}

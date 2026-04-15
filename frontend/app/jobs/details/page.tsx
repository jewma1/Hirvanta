import Link from 'next/link';

export default function JobDetails() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/jobs" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold' }}>← Back to Job Finder</Link>
        <div style={{ fontWeight: '900', color: '#111827' }}>📄 Hirvanta AI</div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Job Header */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', border: '1px solid #e5e7eb', marginBottom: '30px' }}>
          <div style={{ color: '#4f46e5', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>NEW POSTING</div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', margin: '0 0 10px 0' }}>Senior Project Engineer</h1>
          <p style={{ fontSize: '18px', color: '#6b7280', margin: '0 0 20px 0' }}>Ingersoll Rand • Bangalore, India • Full-time</p>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            {/* Button to original site (LinkedIn/Indeed) */}
            <button style={{ backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
              Apply on Company Site ↗
            </button>
            
            {/* Button to Apply via Hirvanta */}
            <button style={{ backgroundColor: '#eff6ff', color: '#1e3a8a', border: '1px solid #bfdbfe', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
              One-Click Apply with Hirvanta
            </button>
          </div>
        </div>

        {/* Job Description Text */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>About the Role</h3>
          <p style={{ lineHeight: '1.6', color: '#374151' }}>
            We are looking for an experienced Project Engineer to lead our technical teams in Bangalore. 
            You will be responsible for SolidWorks modeling, structural analysis (AISI 1020), and 
            managing the project lifecycle from design to deployment.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '30px', marginBottom: '20px' }}>Requirements</h3>
          <ul style={{ lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li>Bachelor's degree in Mechanical Engineering.</li>
            <li>3+ years of experience in project management.</li>
            <li>Proficiency in Data Analytics and AI tools.</li>
          </ul>

          <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #e5e7eb' }} />

          {/* THE MAGIC BUTTON: Tailor Resume */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '15px' }}>Want this job? Let AI win it for you.</h3>
            <Link href="/resume">
              <button style={{ 
                backgroundColor: '#4f46e5', 
                color: 'white', 
                border: 'none', 
                padding: '16px 32px', 
                borderRadius: '12px', 
                fontSize: '18px', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(79, 70, 229, 0.3)'
              }}>
                🎯 Tailor My Resume for this Role
              </button>
            </Link>
            <p style={{ marginTop: '10px', fontSize: '14px', color: '#6b7280' }}>
              AI will rewrite your experience to match these requirements perfectly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

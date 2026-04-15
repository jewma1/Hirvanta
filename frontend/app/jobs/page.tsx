import Link from 'next/link';

export default function JobFinder() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Header */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#1e3a8a', fontSize: '22px', fontWeight: 'bold' }}>📄 Hirvanta</Link>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/dashboard" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Dashboard</Link>
          <Link href="/pricing" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '500' }}>Pricing</Link>
        </div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#111827', marginBottom: '25px' }}>Find your next AI-powered role</h2>
        
        {/* Search Bar Area */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          backgroundColor: 'white', 
          padding: '24px', 
          borderRadius: '16px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <input type="text" placeholder="Role (e.g. Project Engineer)" style={{ flex: 1, padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', fontSize: '16px' }} />
          <input type="text" placeholder="Experience" style={{ width: '140px', padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', fontSize: '16px' }} />
          <input type="text" placeholder="Location (e.g. Bangalore)" style={{ flex: 1, padding: '14px', borderRadius: '10px', border: '1px solid #d1d5db', fontSize: '16px' }} />
          <button style={{ backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
            Search Jobs
          </button>
        </div>

        {/* Job Results List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <JobCard 
            title="Senior Project Engineer" 
            company="Ingersoll Rand" 
            location="Bangalore, India" 
            tags={["Mechanical", "SolidWorks"]}
          />
          <JobCard 
            title="Mechanical Design Engineer" 
            company="Global Engineering Center" 
            location="Bangalore" 
            tags={["AISI 1020", "Design"]}
          />
          <JobCard 
            title="AI Career Consultant" 
            company="Hirvanta" 
            location="Remote" 
            tags={["AI", "Career"]}
          />
        </div>
      </main>
    </div>
  );
}

// The JobCard Component with the "Full Cut" connection
function JobCard({ title, company, location, tags }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'transform 0.2s' }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>{title}</h3>
        <p style={{ margin: '0 0 12px 0', color: '#6b7280', fontSize: '16px' }}>{company} • {location}</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          {tags.map((tag, i) => (
            <span key={i} style={{ backgroundColor: '#eff6ff', color: '#1e3a8a', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        {/* THIS IS THE CONNECTION POINT */}
        <Link href="/jobs/details">
          <button style={{ backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', color: '#374151' }}>
            View Details
          </button>
        </Link>
        
        <Link href="/resume">
          <button style={{ backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>
            Build Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

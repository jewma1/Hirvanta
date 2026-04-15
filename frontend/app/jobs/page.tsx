export default function JobFinder() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Header */}
      <div style={{ padding: '20px 40px', borderBottom: '1px solid #e5e7eb', backgroundColor: 'white' }}>
        <h1 style={{ margin: 0, color: '#1e3a8a', fontSize: '24px', fontWeight: 'bold' }}>📄 Hirvanta Job Finder</h1>
      </div>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>Find your next AI-powered role</h2>
        
        {/* Search Bar Area */}
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          backgroundColor: 'white', 
          padding: '20px', 
          borderRadius: '12px', 
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <input type="text" placeholder="Role (e.g. Project Engineer)" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          <input type="text" placeholder="Experience" style={{ width: '150px', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          <input type="text" placeholder="Location (e.g. Bangalore)" style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          <button style={{ backgroundColor: '#4f46e5', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            Search Jobs
          </button>
        </div>

        {/* Job Results List (Example) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <JobCard title="Project Engineer" company="Tech Corp" location="Bangalore" />
          <JobCard title="Mechanical Engineer" company="Auto Systems" location="Remote" />
          <JobCard title="AI Career Assistant" company="Hirvanta" location="Bangalore" />
        </div>
      </main>
    </div>
  );
}

function JobCard({ title, company, location }: { title: string, company: string, location: string }) {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '18px' }}>{title}</h3>
        <p style={{ margin: 0, color: '#6b7280' }}>{company} • {location}</p>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={{ backgroundColor: '#f3f4f6', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>View Details</button>
        <button style={{ backgroundColor: '#1e3a8a', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>Build Resume</button>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Signup() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        
        <h1 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Create Account</h1>
        <p style={{ color: '#6b7280', marginBottom: '30px' }}>Join the AI-powered career platform</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '5px' }}>Full Name</label>
            <input type="text" placeholder="Jewma Ramchiary" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '5px' }}>Email Address</label>
            <input type="email" placeholder="name@company.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '5px' }}>Password</label>
            <input type="password" placeholder="Create a password" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>
          
          <button style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
            Start Building for Free
          </button>
        </div>

        <p style={{ marginTop: '25px', fontSize: '14px', color: '#4b5563' }}>
          Already have an account? <Link href="/login" style={{ color: '#4f46e5', fontWeight: 'bold', textDecoration: 'none' }}>Log In</Link>
        </p>
      </div>
    </div>
  );
}

import Link from 'next/link';

export default function Login() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        
        <h1 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Welcome Back</h1>
        <p style={{ color: '#6b7280', marginBottom: '30px' }}>Log in to your Hirvanta account</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '5px' }}>Email Address</label>
            <input type="email" placeholder="name@company.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '5px' }}>Password</label>
            <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db' }} />
          </div>
          
          <button style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
            Log In
          </button>
        </div>

        <div style={{ margin: '20px 0', color: '#9ca3af', fontSize: '14px' }}>OR</div>

        <button style={{ width: '100%', backgroundColor: 'white', border: '1px solid #d1d5db', padding: '12px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', fontWeight: '600' }}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" width="18" alt="google" />
          Sign in with Google
        </button>

        <p style={{ marginTop: '25px', fontSize: '14px', color: '#4b5563' }}>
          Don't have an account? <Link href="/signup" style={{ color: '#4f46e5', fontWeight: 'bold', textDecoration: 'none' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

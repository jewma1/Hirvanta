'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [method, setMethod] = useState<'email' | 'phone'>('email');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif', padding: '20px' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '450px' }}>
        
        {/* Logo Section */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <span style={{ fontSize: '30px' }}>📄</span>
          <h1 style={{ color: '#1e3a8a', fontSize: '28px', fontWeight: 'bold', marginTop: '10px' }}>Welcome Back</h1>
          <p style={{ color: '#6b7280' }}>Log in to your Hirvanta dashboard</p>
        </div>

        {/* Login Method Toggle */}
        <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '12px', marginBottom: '25px' }}>
          <button 
            onClick={() => setMethod('email')}
            style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: method === 'email' ? 'white' : 'transparent', boxShadow: method === 'email' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}>
            Email
          </button>
          <button 
            onClick={() => setMethod('phone')}
            style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: method === 'phone' ? 'white' : 'transparent', boxShadow: method === 'phone' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none' }}>
            Phone OTP
          </button>
        </div>

        {/* Input Fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {method === 'email' ? (
            <>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input type="email" placeholder="name@company.com" style={inputStyle} />
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                  <label style={labelStyle}>Password</label>
                  <Link href="/forgot-password" style={{ fontSize: '12px', color: '#4f46e5', textDecoration: 'none', fontWeight: '600' }}>Forgot password?</Link>
                </div>
                <input type="password" placeholder="••••••••" style={inputStyle} />
              </div>
            </>
          ) : (
            <>
              <label style={labelStyle}>Phone Number</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #d1d5db', borderRadius: '8px', color: '#6b7280' }}>+91</span>
                <input type="tel" placeholder="Mobile Number" style={{ ...inputStyle, flex: 1 }} />
              </div>
            </>
          )}
          
          {/* Remember Session Checkbox */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
            <input type="checkbox" id="remember" style={{ cursor: 'pointer' }} />
            <label htmlFor="remember" style={{ fontSize: '14px', color: '#4b5563', cursor: 'pointer' }}>Remember me for 30 days</label>
          </div>

          <button style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
            {method === 'email' ? 'Sign In' : 'Send Login OTP'}
          </button>
        </div>

        {/* Google Login Option */}
        <div style={{ margin: '25px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }}></div>
          <span style={{ fontSize: '14px', color: '#9ca3af' }}>OR</span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#e5e7eb' }}></div>
        </div>

        <button style={{ width: '100%', backgroundColor: 'white', border: '1px solid #d1d5db', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', fontWeight: '600', color: '#374151' }}>
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" width="18" alt="google logo" />
          Continue with Google
        </button>

        <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '14px', color: '#4b5563' }}>
          New to Hirvanta? <Link href="/signup" style={{ color: '#4f46e5', fontWeight: 'bold', textDecoration: 'none' }}>Create an account</Link>
        </p>
      </div>
    </div>
  );
}

const labelStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#374151',
  display: 'block',
  marginBottom: '5px'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
  fontSize: '15px',
  outline: 'none',
  boxSizing: 'border-box' as 'border-box'
};

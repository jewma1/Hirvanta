'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPassword() {
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  const [sent, setSent] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif', padding: '20px' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '450px', textAlign: 'center' }}>
        
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>🔑</div>
        <h1 style={{ color: '#1e3a8a', fontSize: '26px', fontWeight: 'bold', margin: '0 0 10px 0' }}>Reset Password</h1>
        
        {!sent ? (
          <>
            <p style={{ color: '#6b7280', marginBottom: '25px' }}>Enter your details and we'll send you a link to get back into your account.</p>
            
            <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '4px', borderRadius: '12px', marginBottom: '25px' }}>
              <button onClick={() => setMethod('email')} style={{ ...tabStyle, backgroundColor: method === 'email' ? 'white' : 'transparent' }}>Email</button>
              <button onClick={() => setMethod('phone')} style={{ ...tabStyle, backgroundColor: method === 'phone' ? 'white' : 'transparent' }}>Phone</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
              {method === 'email' ? (
                <input type="email" placeholder="Enter your email" style={inputStyle} />
              ) : (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ padding: '12px', backgroundColor: '#f8fafc', border: '1px solid #d1d5db', borderRadius: '8px', color: '#6b7280' }}>+91</span>
                  <input type="tel" placeholder="Mobile Number" style={{ ...inputStyle, flex: 1 }} />
                </div>
              )}
              
              <button onClick={() => setSent(true)} style={buttonStyle}>
                Send Reset Link
              </button>
            </div>
          </>
        ) : (
          <div style={{ padding: '20px 0' }}>
            <div style={{ color: '#10b981', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Check your {method}!</div>
            <p style={{ color: '#6b7280', marginBottom: '25px' }}>We have sent a recovery {method === 'email' ? 'email' : 'SMS code'} to your device.</p>
            <button onClick={() => setSent(false)} style={{ ...buttonStyle, backgroundColor: '#f3f4f6', color: '#1e3a8a' }}>Try another way</button>
          </div>
        )}

        <div style={{ marginTop: '30px' }}>
          <Link href="/login" style={{ color: '#4f46e5', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px' }}>← Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

const tabStyle = { flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', outline: 'none', boxSizing: 'border-box' as 'border-box' };
const buttonStyle = { backgroundColor: '#1e3a8a', color: 'white', padding: '14px', borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', width: '100%' };

'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function UserProfile() {
  // These will eventually come from your backend/database
  const [name, setName] = useState('Jewma Ramchiary');
  const [email, setEmail] = useState('jewma@example.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [editing, setEditing] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navigation */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#1e3a8a', fontWeight: 'bold' }}>← Back to Dashboard</Link>
        <div style={{ fontWeight: '900', color: '#111827' }}>📄 Hirvanta Account</div>
      </nav>

      <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#111827', marginBottom: '30px' }}>Your Profile</h1>

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* Left Side: Avatar & Plan Info */}
          <div style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #e5e7eb', textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', backgroundColor: '#e0e7ff', borderRadius: '50%', margin: '0 auto 20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', color: '#4338ca', fontWeight: 'bold' }}>
              {name.charAt(0)}
            </div>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '20px' }}>{name}</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>Aerospace Student & Founder</p>
            
            <div style={{ backgroundColor: '#fff7ed', border: '1px solid #ffedd5', padding: '15px', borderRadius: '12px' }}>
              <p style={{ margin: '0 0 5px 0', fontSize: '12px', color: '#9a3412', fontWeight: 'bold', textTransform: 'uppercase' }}>Current Plan</p>
              <p style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: '900', color: '#c2410c' }}>Free Plan</p>
              <Link href="/pricing">
                <button style={{ backgroundColor: '#c2410c', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' }}>Upgrade to Lifetime</button>
              </Link>
            </div>
          </div>

          {/* Right Side: Account Details */}
          <div style={{ flex: '2 1 450px', backgroundColor: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
              <h3 style={{ margin: 0 }}>Account Information</h3>
              <button 
                onClick={() => setEditing(!editing)}
                style={{ backgroundColor: 'transparent', border: '1px solid #d1d5db', padding: '6px 15px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>
                {editing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input 
                  type="text" 
                  value={name} 
                  disabled={!editing} 
                  onChange={(e) => setName(e.target.value)} 
                  style={{...inputStyle, backgroundColor: editing ? 'white' : '#f9fafb'}} 
                />
              </div>
              
              <div>
                <label style={labelStyle}>Email Address (Verified)</label>
                <input 
                  type="email" 
                  value={email} 
                  disabled={!editing} 
                  onChange={(e) => setEmail(e.target.value)} 
                  style={{...inputStyle, backgroundColor: editing ? 'white' : '#f9fafb'}} 
                />
              </div>

              <div>
                <label style={labelStyle}>Phone Number (OTP Enabled)</label>
                <input 
                  type="tel" 
                  value={phone} 
                  disabled={!editing} 
                  onChange={(e) => setPhone(e.target.value)} 
                  style={{...inputStyle, backgroundColor: editing ? 'white' : '#f9fafb'}} 
                />
              </div>

              {editing && (
                <button style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '14px', borderRadius: '10px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
                  Save Changes
                </button>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

const labelStyle = { fontSize: '13px', fontWeight: 'bold', color: '#6b7280', display: 'block', marginBottom: '6px', textTransform: 'uppercase' as 'uppercase' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', boxSizing: 'border-box' as 'border-box' };

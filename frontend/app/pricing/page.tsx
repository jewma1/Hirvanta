'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#1e3a8a', fontSize: '22px', fontWeight: 'bold' }}>📄 Hirvanta</Link>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#4b5563', fontWeight: '600' }}>Back to App</Link>
      </nav>

      <main style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#111827', marginBottom: '15px' }}>Pricing for Every Future</h1>
          <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '700px', margin: '0 auto' }}>
            Whether you are a student or a professional, we have a budget-friendly plan for you. Start for the price of a snack!
          </p>
        </header>

        {/* Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginBottom: '80px' }}>
          
          <PriceCard 
            title="Free" 
            price="₹0" 
            desc="Perfect for trying out Hirvanta" 
            features={["3 Resumes", "2 Cover Letters", "2 Voice Interviews", "Unlimited Job Search"]} 
            buttonText="Current Plan"
            dark={false}
          />

          <PriceCard 
            title="Weekly" 
            price="₹7" 
            desc="One week of career boost" 
            features={["10 Resumes", "10 Cover Letters", "10 Voice Interviews", "Unlimited Chat Support"]} 
            buttonText="Get Weekly"
            dark={false}
          />

          <PriceCard 
            title="Monthly" 
            price="₹99" 
            desc="Our most popular plan" 
            features={["40 Resumes", "30 Cover Letters", "25 Voice Interviews", "AI Career Assistant (Ltd)"]} 
            buttonText="Get Monthly"
            dark={false}
          />

          <PriceCard 
            title="Lifetime" 
            price="₹299" 
            desc="Forever access to everything" 
            features={["Unlimited Everything", "Full Human-Voice Mentor", "Premium ATS Templates", "Future Feature Access"]} 
            buttonText="Buy Lifetime"
            dark={true}
            highlight={true}
          />
        </div>

        {/* COMPARISON TABLE */}
        <section style={{ backgroundColor: 'white', borderRadius: '24px', border: '1px solid #e5e7eb', padding: '40px', overflowX: 'auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Compare Features</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                <th style={tableHeaderStyle}>Feature</th>
                <th style={tableHeaderStyle}>Free</th>
                <th style={tableHeaderStyle}>Weekly (₹7)</th>
                <th style={tableHeaderStyle}>Lifetime (₹299)</th>
              </tr>
            </thead>
            <tbody>
              <TableRow feature="AI Resume Builder" free="3" weekly="10" lifetime="Unlimited" />
              <TableRow feature="Voice Mock Interviews" free="2" weekly="10" lifetime="Unlimited" />
              <TableRow feature="Chat Coaching" free="Unlimited" weekly="Unlimited" lifetime="Unlimited" />
              <TableRow feature="Human-Voice Mentor" free="❌" weekly="❌" lifetime="✅ Full Access" />
              <TableRow feature="Skill Gap Analysis" free="❌" weekly="❌" lifetime="✅ Detailed" />
              <TableRow feature="Salary Guidance" free="❌" weekly="❌" lifetime="✅ Included" />
            </tbody>
          </table>
        </section>

        {/* RAZORPAY TRUST SECTION */}
        <div style={{ marginTop: '60px', textAlign: 'center', padding: '40px', backgroundColor: '#eff6ff', borderRadius: '20px' }}>
          <h3 style={{ marginBottom: '20px' }}>Secure Payments with Razorpay</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', opacity: 0.7 }}>
            <span>UPI</span> • <span>Google Pay</span> • <span>PhonePe</span> • <span>Cards</span> • <span>Netbanking</span>
          </div>
          <p style={{ marginTop: '20px', fontSize: '14px', color: '#1e40af' }}>Refund Policy: 24-hour money-back guarantee if you're not satisfied.</p>
        </div>
      </main>
    </div>
  );
}

// Sub-components
function PriceCard({ title, price, desc, features, buttonText, dark, highlight }) {
  return (
    <div style={{ 
      backgroundColor: dark ? '#1e3a8a' : 'white', 
      color: dark ? 'white' : '#111827',
      padding: '40px', 
      borderRadius: '24px', 
      border: highlight ? '3px solid #3b82f6' : '1px solid #e5e7eb',
      position: 'relative',
      boxShadow: highlight ? '0 20px 25px -5px rgba(59, 130, 246, 0.2)' : 'none'
    }}>
      {highlight && <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#3b82f6', color: 'white', padding: '4px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>BEST VALUE</div>}
      <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{title}</h3>
      <div style={{ fontSize: '42px', fontWeight: '900', marginBottom: '10px' }}>{price}</div>
      <p style={{ fontSize: '14px', opacity: 0.7, marginBottom: '25px' }}>{desc}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', textAlign: 'left', fontSize: '14px' }}>
        {features.map((f, i) => <li key={i} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>✅ {f}</li>)}
      </ul>
      <button style={{ 
        width: '100%', 
        padding: '14px', 
        borderRadius: '12px', 
        border: 'none', 
        fontWeight: 'bold', 
        cursor: 'pointer',
        backgroundColor: dark ? 'white' : '#1e3a8a',
        color: dark ? '#1e3a8a' : 'white'
      }}>
        {buttonText}
      </button>
    </div>
  );
}

function TableRow({ feature, free, weekly, lifetime }) {
  return (
    <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
      <td style={tableCellStyle}><strong>{feature}</strong></td>
      <td style={tableCellStyle}>{free}</td>
      <td style={tableCellStyle}>{weekly}</td>
      <td style={{ ...tableCellStyle, color: '#1e3a8a', fontWeight: 'bold' }}>{lifetime}</td>
    </tr>
  );
}

const tableHeaderStyle = { padding: '15px', color: '#64748b', fontSize: '14px', textTransform: 'uppercase' as 'uppercase' };
const tableCellStyle = { padding: '15px', fontSize: '15px', color: '#334155' };

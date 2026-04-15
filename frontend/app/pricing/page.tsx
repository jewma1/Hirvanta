import Link from 'next/link';

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'system-ui, sans-serif', padding: '40px 20px' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', color: '#111827', marginBottom: '16px' }}>
          Simple, Transparent Pricing
        </h1>
        <p style={{ fontSize: '18px', color: '#4b5563' }}>Choose the plan that fits your career goals.</p>
      </div>

      {/* Pricing Cards Container */}
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Weekly Plan */}
        <PriceCard 
          title="Weekly" 
          price="₹7" 
          period="/week" 
          features={["10 Resumes", "10 Cover Letters", "Unlimited Chat Interview", "10 Voice Interviews"]} 
        />

        {/* Monthly Plan */}
        <PriceCard 
          title="Monthly" 
          price="₹99" 
          period="/month" 
          highlight={true}
          features={["40 Resumes", "30 Cover Letters", "Unlimited Chat Interview", "25 Voice Interviews", "AI Career Assistant"]} 
        />

        {/* Lifetime Plan */}
        <PriceCard 
          title="Lifetime" 
          price="₹299" 
          period="one-time" 
          bestValue={true}
          features={["Everything Unlimited", "Premium Templates", "Lifetime Support", "Future Features Access"]} 
        />
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link href="/" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none' }}>← Back to Home</Link>
      </div>
    </div>
  );
}

function PriceCard({ title, price, period, features, highlight = false, bestValue = false }) {
  return (
    <div style={{ 
      flex: '1 1 300px', 
      backgroundColor: 'white', 
      padding: '40px', 
      borderRadius: '24px', 
      border: highlight ? '2px solid #4f46e5' : '1px solid #e5e7eb', 
      boxShadow: highlight ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)' : 'none',
      position: 'relative'
    }}>
      {bestValue && (
        <span style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#fbbf24', color: '#78350f', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
          BEST VALUE
        </span>
      )}
      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: '0 0 10px 0' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '24px' }}>
        <span style={{ fontSize: '40px', fontWeight: '900', color: '#111827' }}>{price}</span>
        <span style={{ color: '#6b7280' }}>{period}</span>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', textAlign: 'left' }}>
        {features.map((f, i) => (
          <li key={i} style={{ marginBottom: '12px', color: '#4b5563', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#10b981' }}>✓</span> {f}
          </li>
        ))}
      </ul>
      <button style={{ 
        width: '100%', 
        backgroundColor: highlight || bestValue ? '#1e3a8a' : '#f3f4f6', 
        color: highlight || bestValue ? 'white' : '#111827', 
        border: 'none', 
        padding: '14px', 
        borderRadius: '12px', 
        fontWeight: 'bold', 
        cursor: 'pointer' 
      }}>
        Get Started
      </button>
    </div>
  );
}

export default function Pricing() {
  const plans = [
    { name: 'Free', price: '0', sub: 'Active' },
    { name: 'Weekly', price: '7', sub: '/week' },
    { name: 'Monthly', price: '99', sub: '/mo', popular: true },
    { name: 'Lifetime', price: '299', sub: 'once', best: true }
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '36px', fontWeight: '900' }}>Upgrade to Hirvanta Pro</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '40px' }}>
        {plans.map(plan => (
          <div key={plan.name} style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '24px', border: plan.popular ? '2px solid #2563EB' : '1px solid #E2E8F0', position: 'relative' }}>
            {plan.best && <span style={{ position: 'absolute', top: '-12px', left: '25%', backgroundColor: '#10B981', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '10px', fontWeight: '900' }}>BEST VALUE</span>}
            <h3 style={{ margin: 0 }}>{plan.name}</h3>
            <h2 style={{ fontSize: '32px', margin: '15px 0' }}>₹{plan.price}<span style={{ fontSize: '16px', color: '#94A3B8' }}>{plan.sub}</span></h2>
            <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#1E3A8A', color: '#fff', fontWeight: '700', cursor: 'pointer' }}>Get Started</button>
          </div>
        ))}
      </div>

      <table style={{ width: '100%', marginTop: '60px', borderCollapse: 'collapse', backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
        <thead style={{ backgroundColor: '#F8FAFC' }}>
          <tr style={{ textAlign: 'left' }}>
            <th style={{ padding: '20px' }}>Premium Features</th>
            <th style={{ padding: '20px' }}>Free</th>
            <th style={{ padding: '20px' }}>Lifetime</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'left' }}>
          <tr style={{ borderTop: '1px solid #F1F5F9' }}>
            <td style={{ padding: '16px 20px' }}>Resume Generations</td>
            <td style={{ padding: '16px 20px' }}>3</td>
            <td style={{ padding: '16px 20px', fontWeight: '700', color: '#10B981' }}>Unlimited</td>
          </tr>
          <tr style={{ borderTop: '1px solid #F1F5F9' }}>
            <td style={{ padding: '16px 20px' }}>Voice Mock Interviews</td>
            <td style={{ padding: '16px 20px' }}>2</td>
            <td style={{ padding: '16px 20px', fontWeight: '700', color: '#10B981' }}>Unlimited</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

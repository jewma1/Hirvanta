export default function InterviewPage() {
  return (
    <div style={{ maxWidth: '900px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '800' }}>AI Interview Coach</h1>
      <p style={{ color: '#64748B', marginBottom: '32px' }}>Role-specific practice with real-time feedback.</p>

      <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
        <p style={{ fontWeight: '700', marginBottom: '16px' }}>Interview Mode</p>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <button style={{ flex: 1, padding: '20px', border: '2px solid #1E3A8A', borderRadius: '12px', background: '#F8FAFC', fontWeight: '700' }}>⌨️ Chat Interview</button>
          <button style={{ flex: 1, padding: '20px', border: '1px solid #E2E8F0', borderRadius: '12px', background: '#fff', color: '#64748B' }}>🎙️ Voice Interview</button>
        </div>

        <label style={{ fontWeight: '700', display: 'block', marginBottom: '8px' }}>Role / Position</label>
        <input type="text" placeholder="e.g. Mechanical Project Engineer" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '24px' }} />

        <label style={{ fontWeight: '700', display: 'block', marginBottom: '8px' }}>Job Description</label>
        <textarea placeholder="Paste requirements here..." style={{ width: '100%', height: '160px', padding: '14px', borderRadius: '10px', border: '1px solid #E2E8F0', marginBottom: '30px' }} />

        <button style={{ backgroundColor: '#1E3A8A', color: '#fff', padding: '16px 40px', borderRadius: '10px', border: 'none', fontWeight: '800', cursor: 'pointer' }}>
          Start AI Coaching Session →
        </button>
      </div>
    </div>
  );
}

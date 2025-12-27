const Footer = () => {
  return (
    <footer className="no-print" style={{
      background: 'linear-gradient(90deg, #1f2937 0%, #111827 100%)',
      color: 'white',
      marginTop: 'auto',
      padding: '1.5rem 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '0.875rem',
            marginBottom: '0.25rem'
          }}>
            Generator Surat Jalan - Generated Automatically
          </p>
          <p style={{
            fontSize: '0.75rem',
            color: '#9ca3af',
            marginTop: '0.25rem'
          }}>
            © 2025 nuansalegal.id. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
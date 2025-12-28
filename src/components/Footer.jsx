const Footer = () => {
  return (
    <footer className="no-print" style={{
      background: 'var(--gradient-primary)',
      color: 'white',
      marginTop: 'auto',
      padding: '1.5rem 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '0.875rem',
            marginBottom: '0.25rem',
            color: 'var(--text-dark)'
          }}>
            Generator Surat Jalan - Generated Automatically
          </p>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--gray-600)',
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
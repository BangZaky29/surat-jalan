import { FileText } from 'lucide-react';

const Header = () => {
  return (
    <header className="no-print" style={{
      background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              background: 'white',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#d97706'
            }}>
              <FileText size={40} />
            </div>
            <div>
              <h1 style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                color: 'white',
                marginBottom: '0.25rem'
              }}>
                Generator Surat Jalan
              </h1>
              <p style={{
                fontSize: '0.875rem',
                color: '#fef3c7'
              }}>
                Buat surat jalan pengiriman barang dengan mudah
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
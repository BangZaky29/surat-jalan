import LogoNuansaLegal from '../assets/NS_white_01.png';

const Header = () => {
  return (
    <header className="no-print" style={{
      background: 'var(--gradient-primary)',
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
              padding: '0.5rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <a href="https://www.nuansalegal.id/" target="_blank" rel="noopener noreferrer">
                <img 
                  src={LogoNuansaLegal} 
                  alt="Nuansa Legal" 
                  style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '0.375rem' }} 
                />
              </a>
            </div>
            <div>
              <h1 style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                color: 'var(--text-dark)',
                marginBottom: '0.25rem'
              }}>
                Generator Surat Jalan
              </h1>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--gray-600)'
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

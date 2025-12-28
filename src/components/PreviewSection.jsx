import { Printer } from 'lucide-react';

const PreviewSection = ({ formData }) => {
  const handlePrint = () => {
    window.print();
  };

  const calculateTotalBerat = () => {
    return formData.items.reduce((total, item) => {
      const berat = parseFloat(item.berat) || 0;
      const qty = parseInt(item.qty) || 0;
      return total + (berat * qty);
    }, 0).toFixed(2);
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = date.getDate();
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="preview-column">
      <div className="preview-container">
        <div className="preview-header no-print">
          <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937' }}>
            Preview Surat Jalan
          </h2>
          <div className="preview-badge">
            <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--blue-400)' }}>
              Live Preview
            </span>
          </div>
        </div>

        {/* Preview Content */}
        <div className="preview-content">
          {/* Header dengan Border */}
          <div className="surat-header-box">
            <div className="company-info">
              {formData.companyInfo.logo && (
                <img 
                  src={formData.companyInfo.logo} 
                  alt="Logo" 
                  className="company-logo"
                />
              )}
              <div className="company-details">
                <h2>{formData.companyInfo.nama || '[Nama Perusahaan]'}</h2>
                <p>{formData.companyInfo.alamat || '[Alamat Perusahaan]'}</p>
                <p>Telp. {formData.companyInfo.telp || '[Telepon]'} / {formData.companyInfo.telp2 || '[Telepon 2]'}</p>
                <p>{formData.companyInfo.website || '[Website]'}</p>
              </div>
            </div>
          </div>

          {/* Judul */}
          <h1 className="surat-title">SURAT JALAN</h1>

          {/* Info Grid */}
          <div className="info-grid">
            {/* Info Kiri */}
            <div className="info-section">
              <p><strong>Kepada Yth.</strong></p>
              <p><strong>Nama:</strong> {formData.recipient.nama || '[Nama Penerima]'}</p>
              <p><strong>No. Telp:</strong> {formData.recipient.telp || '[No. Telepon]'}</p>
              <p><strong>Alamat:</strong> {formData.recipient.alamat || '[Alamat Penerima]'}</p>
            </div>

            {/* Info Kanan */}
            <div className="info-section">
              <p><strong>No. Invoice:</strong> {formData.recipient.invoice || '[No. Invoice]'}</p>
              <p><strong>Tanggal:</strong> {formatDate(formData.recipient.tanggal) || '[Tanggal]'}</p>
              <p><strong>Expedisi:</strong> {formData.recipient.expedisi || '[Expedisi]'}</p>
            </div>
          </div>

          {/* Tabel Barang */}
          <table className="surat-table">
            <thead>
              <tr>
                <th>Nama Barang</th>
                <th style={{ width: '60px' }}>Qty</th>
                <th style={{ width: '80px' }}>Berat</th>
                <th style={{ width: '80px' }}>Jml Berat</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {formData.items.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.nama || '[Nama Barang]'}</td>
                  <td style={{ textAlign: 'center' }}>{item.qty || '0'}</td>
                  <td style={{ textAlign: 'center' }}>{item.berat || '0'}</td>
                  <td style={{ textAlign: 'center' }}>
                    {((parseFloat(item.berat) || 0) * (parseInt(item.qty) || 0)).toFixed(1)}
                  </td>
                  <td>{item.keterangan || '-'}</td>
                </tr>
              ))}
              {/* Empty rows jika < 3 items */}
              {formData.items.length < 3 && [...Array(3 - formData.items.length)].map((_, i) => (
                <tr key={`empty-${i}`}>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Berat & Catatan */}
          <div style={{ marginBottom: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Total Berat: {calculateTotalBerat()} Kg
            </p>
            <p><strong>Catatan:</strong></p>
            <p style={{ fontSize: '10px', marginLeft: '1rem' }}>
              {formData.catatan || '-'}
            </p>
          </div>

          {/* Perhatian */}
          <div style={{ 
            border: '1px solid #000', 
            padding: '0.5rem', 
            marginBottom: '1rem',
            fontSize: '10px'
          }}>
            <p><strong>PERHATIAN:</strong></p>
            <p>1. Surat Jalan ini merupakan bukti resmi penerimaan barang</p>
            <p>2. Surat Jalan ini bukan bukti penjualan</p>
            <p>3. Surat Jalan ini akan dianggap invoice sebagai bukti penjualan</p>
          </div>

          {/* Disclaimer */}
          <p style={{ fontSize: '9px', fontStyle: 'italic', marginBottom: '1rem' }}>
            BARANG SUDAH DITERIMA DALAM KEADAAN BAIK DAN CUKUP oleh:<br />
            (tanda tangan dan cap (stempel) perusahaan)
          </p>

          {/* Signature Section */}
          <div className="signature-section">
            <div className="signature-box">
              <p>Penerima / Pembeli</p>
              <div className="signature-line">
                <p>___________________</p>
              </div>
            </div>

            <div className="signature-box">
              <p>Bagian Pengiriman</p>
              <div className="signature-line">
                <p>___________________</p>
              </div>
            </div>

            <div className="signature-box">
              <p>Petugas Gudang</p>
              <div className="signature-line">
                <p>___________________</p>
              </div>
            </div>
          </div>
        </div>

        {/* Print Button */}
        <button onClick={handlePrint} className="btn-primary no-print mobile-hidden md:flex" style={{ marginTop: '1rem' }}>
          <Printer size={20} />
          <span>Cetak / Simpan PDF</span>
        </button>
      </div>
    </div>
  );
};

export default PreviewSection;

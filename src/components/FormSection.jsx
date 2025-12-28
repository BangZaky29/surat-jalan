import { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  User, 
  Package, 
  FileText,
  Plus,
  Trash2,
  Upload
} from 'lucide-react';

const FormSection = ({ formData, setFormData }) => {
  const [expandedSections, setExpandedSections] = useState({
    company: false,
    recipient: false,
    items: false,
    notes: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => {
      const next = {
        company: false,
        recipient: false,
        items: false,
        notes: false
      };
      next[section] = !prev[section];
      return next;
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          companyInfo: {
            ...formData.companyInfo,
            logo: reader.result
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        {
          id: Date.now(),
          nama: '',
          qty: '',
          berat: '',
          keterangan: ''
        }
      ]
    });
  };

  const handleRemoveItem = (id) => {
    if (formData.items.length > 1) {
      setFormData({
        ...formData,
        items: formData.items.filter(item => item.id !== id)
      });
    }
  };

  const handleItemChange = (id, field, value) => {
    setFormData({
      ...formData,
      items: formData.items.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    });
  };

  return (
    <div className="form-column">
      {/* Informasi Perusahaan */}
      <div className="form-section">
        <button
          onClick={() => toggleSection('company')}
          className="section-header"
        >
          <div className="section-header-left">
            <Building2 size={20} />
            <h2>Informasi Perusahaan</h2>
          </div>
          {expandedSections.company ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {expandedSections.company && (
          <div className="section-body">
            {/* Logo Upload */}
            <div className="form-group">
              <label className="form-label">Logo Perusahaan (PNG/JPG)</label>
              <div className="logo-upload-container">
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={handleLogoUpload}
                  style={{ display: 'none' }}
                  id="logo-upload"
                />
                <label htmlFor="logo-upload" style={{ cursor: 'pointer' }}>
                  {formData.companyInfo.logo ? (
                    <img
                      src={formData.companyInfo.logo}
                      alt="Logo"
                      className="logo-preview"
                    />
                  ) : (
                    <div>
                      <Upload size={32} style={{ margin: '0 auto', color: 'var(--blue-500)' }} />
                      <p style={{ marginTop: '0.5rem', color: 'var(--blue-500)' }}>
                        Klik untuk upload logo
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Nama Perusahaan/Toko *</label>
              <input
                type="text"
                value={formData.companyInfo.nama}
                onChange={(e) => setFormData({
                  ...formData,
                  companyInfo: { ...formData.companyInfo, nama: e.target.value }
                })}
                className="form-input"
                placeholder="Butik Indah"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Alamat Lengkap *</label>
              <textarea
                value={formData.companyInfo.alamat}
                onChange={(e) => setFormData({
                  ...formData,
                  companyInfo: { ...formData.companyInfo, alamat: e.target.value }
                })}
                className="form-textarea"
                rows="2"
                placeholder="Jl. Manyar Duluk No. 28 B"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Telepon *</label>
                <input
                  type="text"
                  value={formData.companyInfo.telp}
                  onChange={(e) => setFormData({
                    ...formData,
                    companyInfo: { ...formData.companyInfo, telp: e.target.value }
                  })}
                  className="form-input"
                  placeholder="0857 3010 8503"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Website</label>
                <input
                  type="text"
                  value={formData.companyInfo.website}
                  onChange={(e) => setFormData({
                    ...formData,
                    companyInfo: { ...formData.companyInfo, website: e.target.value }
                  })}
                  className="form-input"
                  placeholder="www.pusatdot.com"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Informasi Penerima */}
      <div className="form-section">
        <button
          onClick={() => toggleSection('recipient')}
          className="section-header"
        >
          <div className="section-header-left">
            <User size={20} />
            <h2>Informasi Penerima</h2>
          </div>
          {expandedSections.recipient ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {expandedSections.recipient && (
          <div className="section-body">
            <div className="form-group">
              <label className="form-label">Nama Penerima *</label>
              <input
                type="text"
                value={formData.recipient.nama}
                onChange={(e) => setFormData({
                  ...formData,
                  recipient: { ...formData.recipient, nama: e.target.value }
                })}
                className="form-input"
                placeholder="M. Basri"
              />
            </div>

            <div className="form-group">
              <label className="form-label">No. Telepon *</label>
              <input
                type="text"
                value={formData.recipient.telp}
                onChange={(e) => setFormData({
                  ...formData,
                  recipient: { ...formData.recipient, telp: e.target.value }
                })}
                className="form-input"
                placeholder="085767234564"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Alamat Penerima *</label>
              <textarea
                value={formData.recipient.alamat}
                onChange={(e) => setFormData({
                  ...formData,
                  recipient: { ...formData.recipient, alamat: e.target.value }
                })}
                className="form-textarea"
                rows="3"
                placeholder="Jl. Tanah Merah 17 Surabaya"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">No. Invoice *</label>
                <input
                  type="text"
                  value={formData.recipient.invoice}
                  onChange={(e) => setFormData({
                    ...formData,
                    recipient: { ...formData.recipient, invoice: e.target.value }
                  })}
                  className="form-input"
                  placeholder="201304280001"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Tanggal *</label>
                <input
                  type="date"
                  value={formData.recipient.tanggal}
                  onChange={(e) => setFormData({
                    ...formData,
                    recipient: { ...formData.recipient, tanggal: e.target.value }
                  })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Expedisi</label>
              <input
                type="text"
                value={formData.recipient.expedisi}
                onChange={(e) => setFormData({
                  ...formData,
                  recipient: { ...formData.recipient, expedisi: e.target.value }
                })}
                className="form-input"
                placeholder="POS"
              />
            </div>
          </div>
        )}
      </div>

      {/* Daftar Barang */}
      <div className="form-section">
        <button
          onClick={() => toggleSection('items')}
          className="section-header"
        >
          <div className="section-header-left">
            <Package size={20} />
            <h2>Daftar Barang</h2>
          </div>
          {expandedSections.items ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {expandedSections.items && (
          <div className="section-body">
            {formData.items.map((item, index) => (
              <div key={item.id} className="item-card">
                <div className="item-card-header">
                  <strong>Barang #{index + 1}</strong>
                  {formData.items.length > 1 && (
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="btn-remove"
                    >
                      <Trash2 size={16} />
                      Hapus
                    </button>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">Nama Barang *</label>
                  <input
                    type="text"
                    value={item.nama}
                    onChange={(e) => handleItemChange(item.id, 'nama', e.target.value)}
                    className="form-input"
                    placeholder="Casing iPhone 12"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Qty *</label>
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) => handleItemChange(item.id, 'qty', e.target.value)}
                      className="form-input"
                      placeholder="1"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Berat (kg) *</label>
                    <input
                      type="number"
                      step="0.1"
                      value={item.berat}
                      onChange={(e) => handleItemChange(item.id, 'berat', e.target.value)}
                      className="form-input"
                      placeholder="0.5"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Keterangan</label>
                  <input
                    type="text"
                    value={item.keterangan}
                    onChange={(e) => handleItemChange(item.id, 'keterangan', e.target.value)}
                    className="form-input"
                    placeholder="Warna merah"
                  />
                </div>
              </div>
            ))}

            <button onClick={handleAddItem} className="btn-add">
              <Plus size={18} />
              <span>Tambah Barang</span>
            </button>
          </div>
        )}
      </div>

      {/* Catatan */}
      <div className="form-section">
        <button
          onClick={() => toggleSection('notes')}
          className="section-header"
        >
          <div className="section-header-left">
            <FileText size={20} />
            <h2>Catatan & Perhatian</h2>
          </div>
          {expandedSections.notes ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {expandedSections.notes && (
          <div className="section-body">
            <div className="form-group">
              <label className="form-label">Catatan</label>
              <textarea
                value={formData.catatan}
                onChange={(e) => setFormData({
                  ...formData,
                  catatan: e.target.value
                })}
                className="form-textarea"
                rows="3"
                placeholder="Catatan tambahan..."
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSection;
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import PreviewSection from './components/PreviewSection';
import './App.css';
import './mobile.css';

function App() {
  const handlePrint = () => window.print();
  const [formData, setFormData] = useState({
    companyInfo: {
      logo: '',
      nama: '',
      alamat: '',
      telp: '',
      telp2: '',
      website: ''
    },
    recipient: {
      nama: '',
      telp: '',
      alamat: '',
      invoice: '',
      tanggal: new Date().toISOString().split('T')[0],
      expedisi: ''
    },
    items: [
      {
        id: 1,
        nama: '',
        qty: '',
        berat: '',
        keterangan: ''
      }
    ],
    catatan: ''
  });

  return (
    <div className="app-wrapper">
      <Header />

      <main className="main-content">
        <div className="md:hidden mx-auto w-full max-w-[375px] px-3">
          <div className="flex flex-col gap-3">
            <section className="no-print">
              <FormSection formData={formData} setFormData={setFormData} />
            </section>
            <section className="preview-wrapper bg-white border border-yellow-200 rounded-lg shadow-sm p-3">
              <PreviewSection formData={formData} />
            </section>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="container">
            <div className="content-grid">
              <div className="no-print">
                <FormSection formData={formData} setFormData={setFormData} />
              </div>
              <PreviewSection formData={formData} />
            </div>
          </div>
        </div>
      </main>

      <div className="no-print fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur border-t border-gray-200 p-3">
        <button onClick={handlePrint} className="btn-primary w-full">
          Cetak / Simpan PDF
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;

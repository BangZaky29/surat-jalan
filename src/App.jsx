import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FormSection from './components/FormSection';
import PreviewSection from './components/PreviewSection';
import './App.css';
import './mobile.css';
import SubscriptionGuard from './SubscriptionGuard';

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
    <SubscriptionGuard featureSlug="surat-jalan">
      <div className="app-wrapper">
        <Header />

        <main className="main-content">
          {/* MOBILE LAYOUT - DIPERBAIKI */}
          <div className="md:hidden mx-auto w-full max-w-[425px] px-3">
            <div className="flex flex-col gap-3">
              {/* Form Section */}
              <section className="no-print">
                <FormSection formData={formData} setFormData={setFormData} />
              </section>

              {/* Preview Section dengan wrapper yang lebih baik */}
              <section className="preview-wrapper bg-white border border-yellow-200 rounded-lg shadow-sm p-2 overflow-hidden">
                <PreviewSection formData={formData} />
              </section>
            </div>
          </div>

          {/* DESKTOP/TABLET LAYOUT */}
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

        {/* Fixed Print Button Mobile - dengan safe area */}
        <div className="no-print fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 shadow-lg">
          <button onClick={handlePrint} className="btn-primary w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Cetak / Simpan PDF
          </button>
        </div>

        <Footer />
      </div>
    </SubscriptionGuard>
  );
}

export default App;
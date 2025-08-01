import React, { useState } from 'react';
import './JoinPage.css';

const JoinPage = ({ onGoToHome }) => {
  const [formData, setFormData] = useState({
    whatsapp_bot: '',
    whatsapp_owner: '',
    email: '',
    package: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const packageOptions = [
    { value: '', label: 'Pilih Paket' },
    { value: 'gratis', label: 'Free (7 hari trial)', price: 'Gratis' },
    { value: 'staf', label: 'Staf - Rp 3.000', price: 'Rp 3.000' },
    { value: 'basic', label: 'Basic - Rp 5.000 (POPULER)', price: 'Rp 5.000' },
    { value: 'premium', label: 'Premium - Rp 12.000', price: 'Rp 12.000' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Web3Forms submission
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'd7c0a514-d442-438c-becc-09effa6e101a');
      formDataToSend.append('name', `VZ Botz - ${formData.whatsapp_bot}`);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', `Pendaftaran Bot WhatsApp - Paket ${formData.package}`);
      formDataToSend.append('message', `
Pendaftaran Baru VZ Botz Indonesia:

📱 Nomor WhatsApp Bot: ${formData.whatsapp_bot}
👤 Nomor WhatsApp Owner: ${formData.whatsapp_owner}
📧 Email: ${formData.email}
📦 Paket Dipilih: ${formData.package}
💬 Pesan Tambahan: ${formData.message || 'Tidak ada pesan tambahan'}

Dikirim dari website VZ Botz Indonesia
      `);
      formDataToSend.append('from_name', 'VZ Botz Indonesia');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
          setFormData({
            whatsapp_bot: '',
            whatsapp_owner: '',
            email: '',
            package: '',
            message: ''
          });
        }, 5000);
      } else {
        throw new Error('Gagal mengirim form');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Terjadi kesalahan saat mengirim form. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="join-page">
      <header className="header">
        <nav className="container">
          <div className="logo">
            <i className="fas fa-robot"></i>
            <span className="header-text">VZ Botz Indonesia</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={onGoToHome}>Beranda</a></li>
            <li><a href="#features">Fitur</a></li>
            <li><a href="#pricing">Harga</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Create Your WhatsApp Bot</h1>
              <p>Bergabunglah dengan VZ Botz Indonesia dan dapatkan bot WhatsApp terbaik untuk bisnis Anda</p>
              <div className="hero-features">
                <div className="feature-item">
                  <i className="fas fa-lightning-bolt"></i>
                  <span>Setup Cepat</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Aman & Terpercaya</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-headset"></i>
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Form Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="form-container">
              <div className="form-header">
                <h2 className="section-title">Join Now</h2>
                <h3 className="section-subtitle">Create Bot</h3>
                <p className="form-description">Isi form di bawah ini untuk memulai journey bot WhatsApp Anda</p>
              </div>

              <div className="contact-form">
                {showSuccess && (
                  <div className="success-message" id="successMessage">
                    <i className="fas fa-check-circle"></i>
                    Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
                  </div>
                )}
                
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="whatsapp1">
                      <i className="fab fa-whatsapp"></i> 
                      Nomor WhatsApp Bot:
                    </label>
                    <input 
                      type="tel" 
                      id="whatsapp1" 
                      name="whatsapp_bot" 
                      placeholder="Contoh: 628123456789" 
                      value={formData.whatsapp_bot}
                      onChange={handleInputChange}
                      required 
                    />
                    <small>Nomor ini akan digunakan untuk bot WhatsApp Anda</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="whatsapp2">
                      <i className="fab fa-whatsapp"></i> 
                      Nomor WhatsApp Owner:
                    </label>
                    <input 
                      type="tel" 
                      id="whatsapp2" 
                      name="whatsapp_owner" 
                      placeholder="Contoh: 628987654321" 
                      value={formData.whatsapp_owner}
                      onChange={handleInputChange}
                      required 
                    />
                    <small>Nomor pemilik (khusus paket Menengah ke atas)</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="fas fa-envelope"></i> 
                      Email:
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="example@gmail.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="package">
                      <i className="fas fa-box"></i> 
                      Paket yang Dipilih:
                    </label>
                    <select 
                      id="package" 
                      name="package"
                      value={formData.package}
                      onChange={handleInputChange}
                      required
                    >
                      {packageOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="fas fa-comment"></i> 
                      Pesan (Opsional):
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i> 
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Package Pricing Display */}
            <div className="pricing-showcase">
              <h3>Pilihan Paket Tersedia</h3>
              <div className="pricing-grid">
                <div className="pricing-card">
                  <h4>Free Trial</h4>
                  <div className="price">Gratis</div>
                  <p>7 hari trial</p>
                </div>
                <div className="pricing-card featured">
                  <h4>Basic</h4>
                  <div className="price">Rp 5.000</div>
                  <p>Fitur dasar (POPULER)</p>
                </div>
                <div className="pricing-card">
                  <h4>Premium</h4>
                  <div className="price">Rp 12.000</div>
                  <p>Fitur lengkap</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JoinPage;
import React from 'react';
import './HomePage.css';

const HomePage = ({ onGoToJoin }) => {
  const toggleMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header>
        <nav className="container">
          <div className="logo">
            <i className="fas fa-robot"></i>
            <span>VZ Botz Indonesia</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Beranda</a></li>
            <li><a href="#features" onClick={() => scrollToSection('features')}>Fitur</a></li>
            <li><a href="#pricing" onClick={() => scrollToSection('pricing')}>Harga</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>Tentang</a></li>
            <li><a href="#contact" onClick={onGoToJoin}>Kontak</a></li>
          </ul>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>VzBotz Indonesia</h1>
          <p>Web Hosting Bot WhatsApp Gratis Deploy - Solusi Terdepan untuk Bisnis Anda</p>
          <button onClick={onGoToJoin} className="cta-button">
            <i className="fas fa-rocket"></i> Mulai Deploy Bot Anda
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container">
        <div className="features-section">
          <div className="info-header">
            <i className="fas fa-star"></i>
            <h2>Mengapa Memilih VzBotz Indonesia?</h2>
          </div>
          <p>Dapatkan layanan hosting bot WhatsApp terbaik dengan berbagai pilihan paket yang sesuai dengan kebutuhan Anda. Mulai dari paket gratis hingga enterprise.</p>

          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-clock"></i>
              <h3>Deploy Cepat</h3>
              <p>Bot Anda akan aktif dalam hitungan menit setelah setup</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Keamanan Terjamin</h3>
              <p>Data dan nomor WhatsApp Anda aman dengan enkripsi tingkat enterprise</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-headset"></i>
              <h3>Support 24/7</h3>
              <p>Tim support siap membantu Anda kapan saja melalui WhatsApp</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-chart-line"></i>
              <h3>Performa Optimal</h3>
              <p>Server berkualitas tinggi untuk memastikan bot selalu responsif</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Paket Hosting Bot WhatsApp</h2>
          <p className="section-subtitle">Pilih paket yang sesuai dengan kebutuhan dan budget Anda</p>
          <div className="pricing-grid">

            {/* Paket Trial */}
            <div className="pricing-card">
              <div className="price">FREE</div>
              <div className="price-description">Paket Trial</div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 7 hari trial</li>
                <li><i className="fas fa-check"></i> Hanya untuk nomor WhatsApp berbeda-beda</li>
                <li><i className="fas fa-check"></i> Bayar jika ingin lanjut full</li>
                <li><i className="fas fa-star"></i> Perform basic</li>
                <li><i className="fas fa-wifi"></i> Internet User</li>
              </ul>
              <button onClick={onGoToJoin} className="btn">
                <i className="fas fa-gift"></i> Mulai Gratis
              </button>
            </div>

            {/* Paket Staf */}
            <div className="pricing-card">
              <div className="price">Rp 3.000</div>
              <div className="price-description">Paket Staf</div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 15 hari aktif</li>
                <li><i className="fas fa-shield-alt"></i> Garansi 4 hari</li>
                <li><i className="fas fa-star"></i> Perform basic</li>
                <li><i className="fas fa-wifi"></i> Internet User</li>
              </ul>
              <button onClick={onGoToJoin} className="btn">
                <i className="fas fa-shopping-cart"></i> Pilih Paket
              </button>
            </div>

            {/* Paket Basic */}
            <div className="pricing-card">
              <div className="price">Rp 5.000</div>
              <div className="price-description">Paket Basic</div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 27 hari aktif</li>
                <li><i className="fas fa-shield-alt"></i> Garansi 20 hari</li>
                <li><i className="fas fa-star"></i> Perform basic</li>
                <li><i className="fas fa-wifi"></i> Internet User</li>
              </ul>
              <button onClick={onGoToJoin} className="btn">
                <i className="fas fa-shopping-cart"></i> Pilih Paket
              </button>
            </div>

            {/* Paket Menengah */}
            <div className="pricing-card featured">
              <div className="price">Rp 8.000</div>
              <div className="price-description">Paket Menengah</div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 60 hari aktif</li>
                <li><i className="fas fa-shield-alt"></i> Garansi 40 hari</li>
                <li><i className="fas fa-star"></i> Perform menengah</li>
                <li><i className="fas fa-wifi"></i> Syarat: internet dari user</li>
              </ul>
              <button onClick={onGoToJoin} className="btn">
                <i className="fas fa-crown"></i> Pilih Paket
              </button>
            </div>

            {/* Paket Premium */}
            <div className="pricing-card">
              <div className="price">Rp 12.000</div>
              <div className="price-description">Paket Premium</div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 60 hari aktif</li>
                <li><i className="fas fa-desktop"></i> Akses panel</li>
                <li><i className="fas fa-edit"></i> Bisa rename tipis-tipis bot</li>
                <li><i className="fas fa-shield-alt"></i> Garansi full</li>
                <li><i className="fas fa-star"></i> Perform atas</li>
                <li><i className="fas fa-wifi"></i> Tetap butuh internet user</li>
                <li><i className="fas fa-tools"></i> Gratis Nomor WhatsApp</li>
              </ul>
              <button onClick={onGoToJoin} className="btn">
                <i className="fas fa-diamond"></i> Pilih Paket
              </button>
            </div>

            {/* Paket Full */}
            <div className="pricing-card featured">
              <div className="price">Rp 23.000</div>
              <div className="price-description">Full Paket</div>
              <ul className="features">
                <li><i className="fas fa-clock"></i> 70 hari aktif</li>
                <li><i className="fas fa-check"></i> Semua fitur dari Rp12.000</li>
                <li><i className="fas fa-phone"></i> Nomor dari web (non-pribadi)</li>
                <li><i className="fas fa-infinity"></i> Unlimited RAM & memori</li>
                <li><i className="fas fa-globe"></i> Tanpa internet user</li>
                <li><i className="fas fa-crown"></i> Fitur premium lengkap</li>
                <li><i className="fas fa-rocket"></i> Performa maksimal</li>
              </ul>
              <button onClick={onGoToJoin} className="btn">
                <i className="fas fa-rocket"></i> Pilih Paket
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Tentang VzBotz Indonesia</h2>
              <p>VzBotz Indonesia adalah penyedia layanan hosting bot WhatsApp terpercaya yang dikembangkan oleh Hoshizora Group. Kami berkomitmen memberikan solusi hosting bot yang stabil, aman, dan mudah digunakan untuk semua kebutuhan bisnis Anda.</p>
              <p>Dengan pengalaman bertahun-tahun di bidang teknologi dan hosting, kami menyediakan berbagai paket yang sesuai dengan kebutuhan mulai dari personal hingga enterprise.</p>
              <p>Tim kami siap membantu Anda 24/7 untuk memastikan bot WhatsApp Anda berjalan dengan optimal dan memberikan performa terbaik.</p>
            </div>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Bot Aktif</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2025</span>
                <span className="stat-label">Since</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Super</span>
                <span className="stat-label">Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="logo">
              <i class="fas fa-robot"></i>
              <span>VZ Botz Indonesia</span>
            </div>
            <div class="social-links">
              <a href="#"><i class="fab fa-whatsapp"></i></a>
              <a href="#"><i class="fab fa-telegram"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <p>&copy; 2025 VzBotz Indonesia by Hoshizora Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
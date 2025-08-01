import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Layanan Kami",
      description: "Kami membuat produk digital, Chatbot untuk membantu dan menghibur semua orang serta mengembangkan dunia digital.",
      icon: "fas fa-handshake",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Fitur Multifungsi",
      description: "Bot ini memiliki 300+ fitur yang terdiri dari Menu group, tools, downloader, search, sticker yang cocok untuk hiburan maupun mengatur komunitas mu.",
      icon: "fas fa-layer-group",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Kostumisasi Penuh",
      description: "Anda dapat mengubah struktur bot mulai dari respon, menu, pengaturan perintah, tampilan dan lainnya. KHUSUS FULL PAKET",
      icon: "fas fa-paint-brush",
      gradient: "from-pink-500 to-red-600"
    },
    {
      id: 4,
      title: "Waktu Nyata",
      description: "Bot dapat berinteraksi dengan pengguna secara realtime, Online 24 Jam.",
      icon: "fas fa-bolt",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 5,
      title: "Mudah Digunakan",
      description: "Tampilan yang modern dan mudah dimengerti, sehingga kamu dapat berinteraksi dengan dashboard hanya dengan menekan tombol sudah dapat membuat Whatsapp Bot.",
      icon: "fas fa-hand-pointer",
      gradient: "from-teal-500 to-blue-600"
    },
    {
      id: 6,
      title: "Terkini",
      description: "Bot akan dikembangkan secara rutin oleh developer sehingga fiturnya akan selalu up to date.",
      icon: "fas fa-rocket",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 7,
      title: "Potensi Jual Ulang",
      description: "Kamu dapat menjual kembali bot mu dengan cara menyewakannya dan menjual versi premium, sistem ini sudah menyediakan fitur tambah sewa & tambah pengguna premium.",
      icon: "fas fa-chart-line",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kenapa Memilih
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Kami?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why thousands of businesses trust VZ Botz Indonesia for their WhatsApp automation needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3">
            <i className="fas fa-star text-yellow-500"></i>
            <span className="text-gray-700 font-semibold">Trusted by 1000+ businesses worldwide</span>
            <i className="fas fa-star text-yellow-500"></i>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
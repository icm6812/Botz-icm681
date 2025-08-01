import React from 'react';

const FeaturesSectionMinimal = () => {
  const features = [
    {
      id: 1,
      title: "Layanan Kami",
      description: "Kami membuat produk digital, Chatbot untuk membantu dan menghibur semua orang serta mengembangkan dunia digital.",
      icon: "fas fa-handshake",
      color: "text-blue-600"
    },
    {
      id: 2,
      title: "Fitur Multifungsi",
      description: "Bot ini memiliki 300+ fitur yang terdiri dari Menu group, tools, downloader, search, sticker yang cocok untuk hiburan maupun mengatur komunitas mu.",
      icon: "fas fa-layer-group",
      color: "text-purple-600"
    },
    {
      id: 3,
      title: "Kostumisasi Penuh",
      description: "Anda dapat mengubah struktur bot mulai dari respon, menu, pengaturan perintah, tampilan dan lainnya. KHUSUS FULL PAKET",
      icon: "fas fa-paint-brush",
      color: "text-pink-600"
    },
    {
      id: 4,
      title: "Waktu Nyata",
      description: "Bot dapat berinteraksi dengan pengguna secara realtime, Online 24 Jam.",
      icon: "fas fa-bolt",
      color: "text-green-600"
    },
    {
      id: 5,
      title: "Mudah Digunakan",
      description: "Tampilan yang modern dan mudah dimengerti, sehingga kamu dapat berinteraksi dengan dashboard hanya dengan menekan tombol sudah dapat membuat Whatsapp Bot.",
      icon: "fas fa-hand-pointer",
      color: "text-teal-600"
    },
    {
      id: 6,
      title: "Terkini",
      description: "Bot akan dikembangkan secara rutin oleh developer sehingga fiturnya akan selalu up to date.",
      icon: "fas fa-rocket",
      color: "text-orange-600"
    },
    {
      id: 7,
      title: "Potensi Jual Ulang",
      description: "Kamu dapat menjual kembali bot mu dengan cara menyewakannya dan menjual versi premium, sistem ini sudah menyediakan fitur tambah sewa & tambah pengguna premium.",
      icon: "fas fa-chart-line",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi WhatsApp Bot terbaik dengan fitur lengkap dan dukungan profesional
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group p-6 lg:p-8 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-6">
                <i className={`${feature.icon} ${feature.color} text-3xl group-hover:scale-110 transition-transform duration-300`}></i>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">300+</div>
            <div className="text-gray-600">Fitur Tersedia</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600">Online Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">1000+</div>
            <div className="text-gray-600">Pengguna Aktif</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionMinimal;
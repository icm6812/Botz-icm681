// Mock API service for form submissions
export const mockFormSubmission = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Log the form data (in real app, this would be sent to backend)
  console.log('📧 Form submitted with data:', {
    ...formData,
    timestamp: new Date().toISOString(),
    status: 'submitted'
  });
  
  // Mock successful response
  return {
    success: true,
    message: 'Form berhasil dikirim',
    id: Math.random().toString(36).substr(2, 9)
  };
};

// Mock package data
export const getPackageInfo = (packageType) => {
  const packages = {
    gratis: {
      name: 'Free Trial',
      price: 0,
      duration: '7 hari',
      features: ['Basic bot functionality', 'Limited responses', 'Community support']
    },
    staf: {
      name: 'Staf',
      price: 3000,
      duration: '1 bulan',
      features: ['Enhanced bot features', 'Priority support', 'Custom responses']
    },
    basic: {
      name: 'Basic',
      price: 5000,
      duration: '1 bulan',
      features: ['Full bot functionality', 'Analytics dashboard', 'Email support']
    },
    menengah: {
      name: 'Menengah',
      price: 8000,
      duration: '1 bulan',
      features: ['Advanced features', 'Multi-device support', 'Webhook integration']
    },
    premium: {
      name: 'Premium',
      price: 12000,
      duration: '1 bulan',
      features: ['Premium features', 'Custom branding', '24/7 support']
    },
    full: {
      name: 'Full Paket',
      price: 25000,
      duration: '1 bulan',
      features: ['All features included', 'Dedicated support', 'Custom development']
    }
  };
  
  return packages[packageType] || null;
};
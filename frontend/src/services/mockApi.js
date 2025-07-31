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
      features: ['Basic bot functionality', 'Limited responses', 'Community support'],
      available: true
    },
    staf: {
      name: 'Staf',
      price: 3000,
      duration: '15 hari',
      features: ['Enhanced bot features', 'Priority support', 'Custom responses'],
      available: true
    },
    basic: {
      name: 'Basic',
      price: 5000,
      duration: '27 hari',
      features: ['Full bot functionality', 'Analytics dashboard', 'Email support'],
      available: true,
      popular: true
    },
    menengah: {
      name: 'Menengah',
      price: 8000,
      duration: '60 hari',
      features: ['Advanced features', 'Multi-device support', 'Webhook integration'],
      available: false
    },
    premium: {
      name: 'Premium',
      price: 12000,
      duration: '60 hari',
      features: ['Premium features', 'Custom branding', '24/7 support'],
      available: true
    },
    full: {
      name: 'Full Paket',
      price: 23000,
      duration: '70 hari',
      features: ['All features included', 'Dedicated support', 'Custom development'],
      available: false
    }
  };
  
  return packages[packageType] || null;
};
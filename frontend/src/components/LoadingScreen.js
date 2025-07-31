import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="logo-container">
          <i className="fas fa-robot loading-logo"></i>
          <h1 className="brand-name">VZ Botz Indonesia</h1>
          <p className="brand-tagline">WhatsApp Bot Hosting Platform</p>
        </div>
        
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Initializing your bot experience...</p>
        </div>
        
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      {/* Background animated elements */}
      <div className="bg-animation">
        <div className="floating-icon floating-icon-1">
          <i className="fas fa-cog"></i>
        </div>
        <div className="floating-icon floating-icon-2">
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="floating-icon floating-icon-3">
          <i className="fas fa-bolt"></i>
        </div>
        <div className="floating-icon floating-icon-4">
          <i className="fas fa-cloud"></i>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
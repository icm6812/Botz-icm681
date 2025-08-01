import React from 'react';
import FeaturesSection from './components/FeaturesSection';
import FeaturesSectionMinimal from './components/FeaturesSectionMinimal';

// Example usage in your main App component
const App = () => {
  return (
    <div className="App">
      {/* Use the premium version with gradients and animations */}
      <FeaturesSection />
      
      {/* OR use the minimal clean version */}
      {/* <FeaturesSectionMinimal /> */}
      
      {/* Your other components */}
    </div>
  );
};

export default App;
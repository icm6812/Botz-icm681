import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import JoinPage from './components/JoinPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? <LoadingScreen /> : <JoinPage />}
    </div>
  );
}

export default App;
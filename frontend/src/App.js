import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './components/HomePage';
import JoinPage from './components/JoinPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Show loading screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const goToJoin = () => {
    setCurrentPage('join');
  };

  const goToHome = () => {
    setCurrentPage('home');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <HomePage onGoToJoin={goToJoin} />
      ) : (
        <JoinPage onGoToHome={goToHome} />
      )}
    </div>
  );
}

export default App;
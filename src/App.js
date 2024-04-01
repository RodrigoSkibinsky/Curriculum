import React, { useState, useEffect } from 'react';
import './App.css';
import Desktop from './Desktop.js';

function App() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    const onTouchStart = () => {
      setIsTouchScreen(true);
      window.removeEventListener('touchstart', onTouchStart);
    };

    window.addEventListener('touchstart', onTouchStart);

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  return (
    <div className="App-Holder">
      <Desktop />
    </div>
  );
}

export default App;
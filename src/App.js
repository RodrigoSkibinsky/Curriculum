import React, { useState, useEffect } from 'react';
import Desktop from './Desktop.js';
import DesktopMobile from './DesktopMobile.js';

function App() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    const checkTouchScreen = () => {
      setIsTouchScreen(navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
    };

    checkTouchScreen();

    return () => {
      window.removeEventListener('touchstart', checkTouchScreen);
    };
  }, []);

  return (
    <div className="App-Holder">
      {isTouchScreen ? <DesktopMobile /> : <Desktop />}
    </div>
  );
}

export default App;
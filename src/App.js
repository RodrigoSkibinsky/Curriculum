import React, { useState, useEffect } from 'react';
import Desktop from './Desktop.js';
import DesktopMobile from './DesktopMobile.js';

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
      {isTouchScreen ? <DesktopMobile /> : <Desktop />}
    </div>
  );
}

export default App;
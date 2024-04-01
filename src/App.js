import React, { useState, useEffect } from 'react';
import './App.css';
import Desktop from './Desktop.js';

function App() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const OSInfo = () => {
  
    useEffect(() => {
      const userAgent = window.navigator.userAgent;
      const isMobileOS = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsTouchScreen(isMobileOS);
    }, []);
  }
  return (
    <div className="App-Holder">
      <Desktop />
      <div>
        <p style={{color:'#000', textAlign: 'center'}}>¿Dispositivo táctil?: {isTouchScreen ? 'Sí' : 'No'}</p>
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import Desktop from './Desktop.js';

function App() {
  const [isTouchScreen, setIsTouchScreen] = useState(false);
  const OSInfo = () => {
  
    useEffect(() => {
      const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
      setIsTouchScreen(isTouchDevice);
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
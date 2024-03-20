import logo from './logo-kali.svg';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import './App.css';
import Clock from './Clock.js';
import React, { useState, useEffect } from 'react';
import Screen from './Screen.js';

function getTerminalName(image) {
  switch (image) {
    case terminalDefault:
      return "Terminal Emulator";
    case terminalRoot:
      return "Root Terminal Emulator";
    case terminalUser:
      return "PowerShell";
    default:
      return "";
  }
}

function getTerminalTitle(image) {
  switch (image) {
    case terminalDefault:
      return "kali@kali:~";
    case terminalRoot:
      return "root@kali:~";
    case terminalUser:
      return "PS> kali@kali:home/kali";
    default:
      return "";
  }
}

function getTerminalSubTitle(image) {
  switch (image) {
    case terminalDefault:
      return "kali@kali:~ ";
    case terminalRoot:
      return "root@kali:# ";
    case terminalUser:
      return "kali@kali:PS> ";
    default:
      return "";
  }
}

function getTerminalColor(image) {
  if (image === terminalRoot) {
    return "#e44";
  } else {
    return "#3060ff";
  }
}


function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selection, setSelection] = useState(terminalDefault);
  const [noSelection1, setNoSelection1] = useState(terminalRoot);
  const [noSelection2, setNoSelection2] = useState(terminalUser);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isWindowHidden, setWindowHidden] = useState(false);
  const [isScreenHidden, setIsScreenHidden] = useState(false);
  const [isScreenClosed, setIsScreenClosed] = useState(false);
  const [buttonDragEnabled, setButtonDragEnabled] = useState(true);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [terminalText, setTerminalText] = useState("File");
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const initialHeight = window.innerHeight * 0.75;
  const initialWidth = window.innerWidth * 0.6;
  const windowWidth = 30;
  const windowHeight = 50;
  const initialX = (screenWidth - windowWidth) / 2;
  const initialY = (screenHeight - windowHeight) / 2;

  const handleTerminalItemClick = (text) => {
    setTerminalText(text);
  };
  
  const toggleScreenVisibility = () => {
    setIsScreenHidden(!isScreenHidden);
  };

  const handleDisplayClick = () => {
    setMenuVisible(!menuVisible);
  };

  const openScreen = () => {
    if (isScreenClosed) {
      setIsScreenClosed(false);
      setHeight(initialHeight);
      setWidth(initialWidth);
      setWindowPosition({ x: initialX, y: initialY });
      handleTerminalItemClick("File")
    }
    if (isScreenHidden) {
        setIsScreenHidden(false);
    }
  };

  const handleSelection = (image) => {//solo se usa en el menu dentro de barra
    var img = image;
    if (img === noSelection1) {
      setNoSelection1(selection);
    } else if (img === noSelection2) {
      setNoSelection2(noSelection1);
      setNoSelection1(selection);
    } else {
      setNoSelection1(terminalRoot);
      setNoSelection2(terminalUser);
    }
    setSelection(image);
    openScreen();
    setMenuVisible(false);
  };

  useEffect(() => {
    setWindowPosition({ x: initialX, y: initialY });
  }, []);
  
  useEffect(() => {
    setHeight(initialHeight);
    setWidth(initialWidth);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="barraTareas">
          <div className="barra barra1">
            <div className="icon-holder">
              <img src={logo} className="icon Menu" alt="logo" />
            </div>
            <div className="icon-holder">
              <img src={selection} className="icon Terminal" alt="logo" onClick={openScreen}/> 
            </div>
            <div
              className="icon-holder"
              onClick={handleDisplayClick}
              onMouseDown={() => setButtonDragEnabled(false)} // Deshabilitar el arrastre de la ventana al hacer clic en los botones
              onMouseUp={() => setButtonDragEnabled(true)} // Habilitar el arrastre de la ventana al soltar el clic de los botones
            >
              <p className='icon display-terminal'> {'>'} </p>
              {menuVisible && (
                <div className="menu">
                  <div className="menu-item" onClick={() => handleSelection(noSelection1)}>
                    <img src={noSelection1} className="icon Terminal" alt="logo" />
                    <p>{getTerminalName(noSelection1)}</p>
                  </div>
                  <div className="menu-item" onClick={() => handleSelection(noSelection2)}>
                    <img src={noSelection2} className="icon Terminal" alt="logo" />
                    <p>{getTerminalName(noSelection2)}</p>
                  </div>
                </div>
              )}
            </div>
            <div className='vertical-line'></div>
            <div className={`frame ${isScreenHidden ? '' : 'selected'} ${isScreenClosed ? 'oculto' : ''}`} onClick={toggleScreenVisibility}>
                <img src={terminalDefault} className="open-icon app-small" alt="logo"/> 
            </div>
          </div>
          <div className="barra barra2">
            <p>¿Quién es Rodrigo Sacramento?</p>
          </div>
          <div className="barra barra3">
            <Clock />
          </div>
        </div>
      </header>
      <Screen />
    </div>
  );
}

export default App;

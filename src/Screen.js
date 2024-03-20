import React, { useState, useEffect } from 'react';
import logo from './logo-kali.svg';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import Presentacion from './Presentacion.js';
import Experiencia from './Experiencia.js';
import Estudios from './Estudios.js';
import './App.css';

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

function Screen() {
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
    

    const handleTerminalItemClick = (text) => {
      setTerminalText(text);
    };

    const closeScreen = () => {//Solo se usa dentro de screen
      setIsScreenHidden(true);
      setIsScreenClosed(true);
    };
    
    const minimize = () => {//Solo se usa dentro de screen
      setIsScreenHidden(true);
    }

    const handleMouseDown = (e) => {//Solo se usa dentro de screen
      if (!buttonDragEnabled) {
        return;
      }
      setDragging(true);
      setOffset({
        x: e.clientX - windowPosition.x,
        y: e.clientY - windowPosition.y
      });
    };  
    const maximize = () => {//Solo se usa dentro de screen
      const maxHeight = window.innerHeight - 32;
      const maxWidth = window.innerWidth;
      if (height === window.innerHeight*0.75) {
        setHeight(maxHeight);
        setWidth(maxWidth);
        setWindowPosition({ x: 769, y: 375});
      } else {
        setHeight(initialHeight);
        setWidth(initialWidth);
      }
    };  
    const handleMouseMove = (e) => {//Solo se usa dentro de screen
      if (dragging) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        let newX = e.clientX - offset.x;
        let newY = e.clientY - offset.y;
        newX = Math.max((width/2), Math.min(screenWidth-(width/2), newX));
        newY = Math.max((height/2)+2, Math.min(screenHeight-((height/2)+32), newY)); // <- Aquí estaba el error, se debía restar el tamaño de la ventana
        setWindowPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {//Solo se usa dentro de screen
      setDragging(false);
    };

    return(
        <div 
        className={`screen ${isScreenHidden ? 'oculto' : ''}`}
        onMouseMove={handleMouseMove} 
        onMouseUp={handleMouseUp}
      >
        <div className="window" 
          style={{ 
            top: windowPosition.y + 'px', 
            left: windowPosition.x + 'px',
            height: height,
            width: width,
          }} >
          <div className="top" 
            style={{
             cursor: dragging ? 'all-scroll' : 'default' 
            }} onMouseDown={handleMouseDown}
          >
            <div className='top-top'>
              <div className='top-space top-left'>
              <img src={terminalDefault} className="app-small" alt="logo"/>
              </div>
              <div className='top-space top-middle'>
                <p>{getTerminalTitle(selection)}</p>
              </div>
              <div className='top-space top-right'>
                <div className='button minimize' onClick={minimize}>
                  -
                </div>
                <div className='button maximize' onClick={maximize}>
                  <div className='maximize-square'>
                  </div>
                </div>
                <div className='button close' onClick={closeScreen}>
                  x
                </div>
              </div>
            </div>
            <div className='top-bottom'>
              <div className='top-space top-left'>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("File")}>File</p>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("Action")}>Action</p>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("Edit")}>Edit</p>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("View")}>View</p>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("Help")}>Help</p>
              </div>
              <div className='top-space top-middle'></div>
              <div className='top-space top-right'></div>
            </div>
          </div>
          <div className="line"></div>
          <div className="content" style={{
            overflowY: 'auto',
            maxHeight: `${height - 100}px`,
          }}>
            {(() => {
              switch (terminalText) {
                case "Action":
                  return <Experiencia name={getTerminalSubTitle(selection)} textColor={getTerminalColor(selection)} />;
                case "Edit":
                  return <Estudios name={getTerminalSubTitle(selection)} textColor={getTerminalColor(selection)} />;
                default:
                  return <Presentacion name={getTerminalSubTitle(selection)} textColor={getTerminalColor(selection)} />;
              }
            })()}
          </div>
        </div>
      </div>
    )
}

export default Screen
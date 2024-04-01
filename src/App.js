import React, { useState, useEffect } from 'react';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import './App.css';
import BarraTareas from './BarraTareas.js';
import Menu from './Menu.js';
import Terminal from './Terminal/Terminal.js';
import Inicio from './Terminal/Inicio.js';
import Presentacion from './Terminal/Presentacion.js';
import Experiencia from './Terminal/Experiencia.js';
import Estudios from './Terminal/Estudios.js';

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

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [indexVisible, setIndexVisible] = useState(false);

  const [selection, setSelection] = useState(terminalDefault);
  const [noSelection1, setNoSelection1] = useState(terminalRoot);
  const [noSelection2, setNoSelection2] = useState(terminalUser);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  // const [isWindowHidden, setWindowHidden] = useState(false);
  const [isTerminalHidden, setisTerminalHidden] = useState(false);
  const [isTerminalClosed, setisTerminalClosed] = useState(false);
  const [buttonDragEnabled, setButtonDragEnabled] = useState(true);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [terminalText, setTerminalText] = useState("Inicio");

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  const initialHeight = screenHeight * 0.65;
  const initialWidth = screenWidth * 0.5;
  
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const [currentWidth, setCurrentWidth] = useState(initialWidth);

  const minHeight = screenHeight * 0.45;
  const minWidth = screenWidth * 0.3;
  
  const windowHeight = 50;
  const windowWidth = 30;

  const initialX = (screenWidth - windowWidth) / 2;
  const initialY = (screenHeight - windowHeight) / 2;

  const handleTerminalItemClick = (text) => {
    if (isTerminalClosed) {
      setisTerminalClosed(false);
    }
    if (isTerminalHidden) {
        setisTerminalHidden(false);
    }
    setTerminalText(text);
  };
  
  const toggleScreenVisibility = () => {
    setisTerminalHidden(!isTerminalHidden);
  };

  const handleDisplayClick = () => {
    setMenuVisible(!menuVisible);
    if (indexVisible) {
      setIndexVisible(false)
    }
  };

  const handleIndexMouseEnter = () => {
    setIndexVisible(true);
    setMenuVisible(false);
    setMenuOption0Visible(false);
    setMenuOption1Visible(false);
  };
  
  const handleIndexClick = () => {
    setIndexVisible(!indexVisible);
    if (menuVisible) {
      setMenuVisible(false);
    }
    if (!indexVisible) {
      setMenuOption0Visible(false);
      setMenuOption1Visible(false);
    }
  };  

  const closeTerminal = () => {//solo se usa dentro de screen
    const maxHeight = screenHeight - 32;
    setisTerminalHidden(true);
    setisTerminalClosed(true);
    if (height === maxHeight) {
      maximize()
    }
  };

  const openTerminal = () => {
    if (isTerminalClosed) {
      setisTerminalClosed(false);
      setHeight(initialHeight);
      setWidth(initialWidth);
      setWindowPosition({ x: initialX, y: initialY });
      handleTerminalItemClick("File")
    }
    if (isTerminalHidden) {
        setisTerminalHidden(false);
    }
  };

  const minimize = () => {//solo se usa dentro de screen
    setisTerminalHidden(true);
  }

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
    openTerminal();
    setMenuVisible(false);
    setIndexVisible(false);
  };

  const handleMouseDown = (e) => {//solo se usa dentro de screen
    if (!buttonDragEnabled) {
      return;
    }
    setDragging(true);
    setOffset({
      x: e.clientX - windowPosition.x,
      y: e.clientY - windowPosition.y
    });
  };

  useEffect(() => {
    setWindowPosition({ x: initialX, y: initialY });
  }, []);

  const maximize = () => {//solo se usa dentro de screen
    const maxHeight = screenHeight - 32;
    const maxWidth = screenWidth;
    if (height !== maxHeight) {
      setHeight(maxHeight);
      setWidth(maxWidth);
      setWindowPosition({ x: 769, y: 375});
    } else {
      setHeight(currentHeight);
      setWidth(currentWidth);
    }
  };
  
  useEffect(() => {
    setHeight(initialHeight);
    setWidth(initialWidth);
  }, []);
  

  const handleMouseMove = (e) => {//solo se usa dentro de screen
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
  
  const handleMouseUp = () => {//solo se usa dentro de screen
    setDragging(false);
  };

  const handleSelectionPlus = (image, ItemClick) => {
    handleSelection(image);
    handleTerminalItemClick(ItemClick);
  }

  const imagenesMenu0 = [terminalDefault, terminalDefault, terminalDefault];
  const functionsMenu0 = [() => menu0click("File"), () => menu0click("Action"), () => menu0click("Edit")]; // Corrige la declaración de las variables
  const textoMenu0 = ["Sobre Mi", "Experiencia Laboral", "Trayectoria Académica"];
  
  const menu0click = (text) => {
    handleTerminalItemClick(text);
    setIndexVisible(false);
  }

  ////////////////////////////////////////////////////////////////////////
                                                                        //
  const [menuOption0Visible, setMenuOption0Visible] = useState(false);  //
  const [menuOption1Visible, setMenuOption1Visible] = useState(false);  //
                                                                        //
  const handleOption0Click = (e) => {                                   //
    e.stopPropagation(); // Detener la propagación del evento           //
    setMenuOption0Visible(!menuOption0Visible);                         //
    setMenuOption1Visible(false);                                       //
  };                                                                    //
                                                                        //
  const handleOption1Click = (e) => {                                   //
    e.stopPropagation(); // Detener la propagación del evento           //
    setMenuOption1Visible(!menuOption1Visible);                         //
    setMenuOption0Visible(false);                                       //
  };                                                                    //
                                                                        //
  const handleOption0MouseEnter = (e) => {                              //
    e.stopPropagation(); // Detener la propagación del evento           //
    setMenuOption0Visible(!menuOption0Visible);                         //
    setMenuOption1Visible(false);                                       //
  };                                                                    //
                                                                        //
  const handleOption1MouseEnter = (e) => {                              //
    e.stopPropagation(); // Detener la propagación del evento           //
    setMenuOption1Visible(!menuOption1Visible);                         //
    setMenuOption0Visible(false);                                       //
  };                                                                    //
  ////////////////////////////////////////////////////////////////////////

  return (
    <div className="App">
      <header className="App-header">
        <BarraTareas isTerminalHidden={isTerminalHidden} isTerminalClosed={isTerminalClosed} openTerminal={() => openTerminal()}selection={selection} noSelection1={noSelection1} noSelection2={noSelection2} menuVisible={menuVisible} seleccionarDefault={() => handleSelection(terminalDefault)}seleccionarNoSelec1={() => handleSelection(noSelection1)}seleccionarNoSelec2={() => handleSelection(noSelection2)}terminalNameDefault={getTerminalName(terminalDefault)} terminalNameNoSelec1={getTerminalName(noSelection1)} terminalNameNoSelec2={getTerminalName(noSelection2)} textoMenu0={textoMenu0} functionsMenu0={functionsMenu0} imagenesMenu0={imagenesMenu0} indexVisible={indexVisible} handleDisplayClick={() => handleDisplayClick()}handleIndexClick={() => handleIndexClick()}setButtonDragEnabled={setButtonDragEnabled}toggleScreenVisibility={toggleScreenVisibility}
        />
      </header>
      <div 
        className={`screen ${isTerminalHidden ? 'oculto' : ''}`}
        onMouseMove={handleMouseMove} 
        onMouseUp={handleMouseUp}
      >
        <div className="window" 
          style={{ 
            top: windowPosition.y + 'px', 
            left: windowPosition.x + 'px',
            height: height,
            width: width,
          }}
        >
          <Terminal title={getTerminalTitle(selection)} selected={selection} altura={height} textoTerminal={terminalText} dragging={dragging} handleMouseDown={handleMouseDown} handleTerminalItemClick={handleTerminalItemClick} minimize={minimize} maximize={maximize} closeTerminal={closeTerminal} terminalTitle={getTerminalTitle(selection)} />
        </div>
      </div>
    </div>
  );
}

export default App;

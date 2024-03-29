import logo from './logo-kali.svg';
import fotoPerfil from './foto-perfil-cv.jpg';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import './App.css';
import Clock from './Clock.js';
import React, { useState, useEffect } from 'react';
import Presentacion from './Presentacion.js';
import Experiencia from './Experiencia.js';
import Estudios from './Estudios.js';
import Menu from './Menu.js';

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
  const [indexVisible, setIndexVisible] = useState(false);

  const [menuOption0Visible, setMenuOption0Visible] = useState(false);
  const [menuOption1Visible, setMenuOption1Visible] = useState(false);

  const [selection, setSelection] = useState(terminalDefault);
  const [noSelection1, setNoSelection1] = useState(terminalRoot);
  const [noSelection2, setNoSelection2] = useState(terminalUser);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isWindowHidden, setWindowHidden] = useState(false);
  const [isTerminalHidden, setisTerminalHidden] = useState(false);
  const [isTerminalClosed, setisTerminalClosed] = useState(false);
  const [buttonDragEnabled, setButtonDragEnabled] = useState(true);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [terminalText, setTerminalText] = useState("File");

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
  
  const handleOption0MouseEnter = (e) => {
    e.stopPropagation(); // Detener la propagación del evento
    setMenuOption0Visible(!menuOption0Visible);
    setMenuOption1Visible(false);
  };
  
  const handleOption1MouseEnter = (e) => {
    e.stopPropagation(); // Detener la propagación del evento
    setMenuOption1Visible(!menuOption1Visible);
    setMenuOption0Visible(false);
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
  
  const handleOption0Click = (e) => {
    e.stopPropagation(); // Detener la propagación del evento
    setMenuOption0Visible(!menuOption0Visible);
    setMenuOption1Visible(false);
  };
  
  const handleOption1Click = (e) => {
    e.stopPropagation(); // Detener la propagación del evento
    setMenuOption1Visible(!menuOption1Visible);
    setMenuOption0Visible(false);
  };
  

  const closeTerminal = () => {//solo se usa dentro de screen
    setisTerminalHidden(true);
    setisTerminalClosed(true);
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

  // const handleResizeMouseMove = (e) => {
  //   if (dragging) {
  //     const newWidth = e.clientX - offset.x;
  //     const newHeight = e.clientY - offset.y;
  //     if (newWidth >= minWidth && newHeight >= minHeight) {
  //       setWidth(newWidth);
  //       setHeight(newHeight);
  //       setCurrentWidth(newWidth); // Actualiza la variable currentWidth
  //       setCurrentHeight(newHeight); // Actualiza la variable currentHeight
  //     }
  //   }
  // };  
  
  // const handleResizeMouseDown = (e) => {
  //   e.preventDefault(); // Prevenir el comportamiento predeterminado del mouse
  //   // setDragging(true);
  //   // No actualices la posición de la ventana aquí
  //   setOffset({
  //     x: e.clientX - width,
  //     y: e.clientY - height
  //   });
  //   setCurrentWidth(width); // Actualiza la variable currentWidth con el ancho actual de la ventana
  //   setCurrentHeight(height); // Actualiza la variable currentHeight con la altura actual de la ventana
  // }; 
  
  // const handleResizeMouseUp = () => {
  //   setDragging(false);
  // };
  
  
  const imagenesMenu0 = [terminalDefault, terminalDefault, terminalDefault];
  const functionsMenu0 = [() => handleTerminalItemClick("File"), () => handleTerminalItemClick("Action"), () => handleTerminalItemClick("Edit")]; // Corrige la declaración de las variables
  const textoMenu0 = ["Sobre Mi", "Experiencia Laboral", "Trayectoria Académica"];

  const imagenesMenu1 = [terminalDefault, terminalDefault];
  const functionsMenu1 = [() => handleSelection(imagenesMenu1[0]), () => handleSelection(imagenesMenu0[1])];
  const textoMenu1 = ["... 1 ...", "... 2 ..."];

  return (
    <div className="App">
      <header className="App-header">
        <div className="barraTareas">
          <div className="barra barra1">
            <div className="icon-holder" onClick={handleIndexClick}>
              <img src={logo} className="icon menu-icon" alt="logo" />
              {indexVisible && (
                <div className="index-menu" style={{
                  opacity: 1
                }}>
                  <div className="index-menu-item" onClick={() => {
                      handleSelection(terminalDefault);
                      openTerminal();
                    }}>
                  </div>
                  <div className='icon-holder-holder'>
                    <div className="index-menu-item" onClick={handleIndexClick}>
                      <img src={terminalDefault} className="icon Terminal" alt="logo" />
                      <p>{getTerminalName(terminalDefault)}</p>
                    </div>
                    <div className="icon-holder" onClick={handleOption0Click} onMouseEnter={handleOption0MouseEnter}>
                      <p className='icon display-app-options'>{'>'}</p>
                      <Menu visible={menuOption0Visible} indiceMenu={0} num={3} img={imagenesMenu0} functionArray={functionsMenu0} textoArray={textoMenu0} />
                    </div>
                  </div>
                  <div className='icon-holder-holder'>
                    <div className="index-menu-item" onClick={handleIndexClick}>
                      <img src={logo} className="icon Terminal" alt="logo" />
                      <p>Proyectos</p>
                    </div>
                    <div className="icon-holder" onClick={handleOption1Click} onMouseEnter={handleOption1MouseEnter}>
                      <p className='icon display-app-options'>{'>'}</p>
                      {/* <Menu visible={menuOption1Visible} indiceMenu={1} num={2} img={imagenesMenu1} functionArray={functionsMenu1} textoArray={textoMenu1} /> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="icon-holder" onClick={openTerminal}>
              <img src={selection} className="icon Terminal" alt="logo"/>
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
            <div className={`frame ${isTerminalHidden ? '' : 'selected'} ${isTerminalClosed ? 'oculto' : ''}`} onClick={toggleScreenVisibility}>
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
                <div className='button close' onClick={closeTerminal}>
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
            <div>
                <img className='profilePicture' src={fotoPerfil} alt='Profile Picture'/>
            </div>
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
            {/* <div
              className="resize-handle"
              style={{ 
                bottom: 0, 
                right: 0,
                position: 'absolute',
                height: '10px',
                width: '10px',
                cursor: 'nwse-resize',
              }}
              onMouseDown={handleResizeMouseDown}
              onMouseMove={handleResizeMouseMove}
              onMouseUp={handleResizeMouseUp}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

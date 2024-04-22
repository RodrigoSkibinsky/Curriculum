import React, { useState, useEffect } from 'react';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import './App.css';
import BarraTareas from './BarraTareas.js';
import Terminal from './Terminal/Terminal.js';
import Spanish from './bandera-espaniol.png';
import English from './bandera-usa.jpg';

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Desktop() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [indexVisible, setIndexVisible] = useState(false);

  const [selection, setSelection] = useState(terminalDefault);
  const [noSelection1, setNoSelection1] = useState(terminalRoot);
  const [noSelection2, setNoSelection2] = useState(terminalUser);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isTerminalHidden, setisTerminalHidden] = useState(false);
  const [isTerminalClosed, setisTerminalClosed] = useState(false);
  const [buttonDragEnabled, setButtonDragEnabled] = useState(true);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [terminalText, setTerminalText] = useState("Inicio");

  const [language, setLanguage] = useState("English");
  const [menuLangVisible, setMenuLangVisible] = useState(false);

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

  const handleLanguage = (lang) => {
    setLanguage(lang)
  };

  const handleMenuLangVisibility = () => {
    setMenuLangVisible(!menuLangVisible)
    if (indexVisible) {
      setIndexVisible(false);
    }
    if (menuVisible) {
      setMenuVisible(false);
    }
  };

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
    if (menuLangVisible) {
      setMenuLangVisible(false);
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
    if (menuLangVisible) {
      setMenuLangVisible(false);
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

  const maximize = () => {
    const maxHeight = screenHeight - 32;
    const maxWidth = screenWidth;
    let newX = windowPosition.x;
    let newY = windowPosition.y;
    if (currentHeight > maxHeight) {
      newY = (screenHeight - currentHeight) / 2;
    }
    if (currentWidth > maxWidth) {
      newX = (screenWidth - currentWidth) / 2;
    }
    if (height !== maxHeight) {
      setHeight(maxHeight);
      setWidth(maxWidth);
      setWindowPosition({ x: newX, y: newY });
    } else {
      setHeight(initialHeight);
      setWidth(initialWidth);
    }
  };  
  
  useEffect(() => {
    setHeight(initialHeight);
    setWidth(initialWidth);
  }, []);

  useEffect(() => {
    sobreMiLang();
    experienciaLaboralLang();
    trayectoriaAcademicaLang();
  }, [language])
  

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

  const [sobreMi, setSobreMi] = useState("Sobre Mi")
  const [experienciaLaboral, setExperienciaLaboral] = useState("Experiencia Laboral")
  const [trayectoriaAcademica, setTrayectoriaAcademica] = useState("Trayectoria Académica")  

  const sobreMiLang = () => {
    if (language === "English") {
      setSobreMi("About Me")
    } else {
      setSobreMi("Sobre Mi")
    }
  }
  const experienciaLaboralLang = () => {
    if (language === "English") {
      setExperienciaLaboral("Work Experience")
    } else {
      setExperienciaLaboral("Experiencia Laboral")
    }
  }
  const trayectoriaAcademicaLang = () => {
    if (language === "English") {
      setTrayectoriaAcademica("Academic Background")
    } else {
      setTrayectoriaAcademica("Trayectoria Académica")
    }
  }  

  const numElem0 = 3;
  const imagenesMenu0 = [terminalDefault, terminalDefault, terminalDefault];
  const functionsMenu0 = [() => menu0click("File"), () => menu0click("Action"), () => menu0click("Edit")]; // Corrige la declaración de las variables
  const textoMenu0 = [sobreMi, experienciaLaboral, trayectoriaAcademica];
  
  const menu0click = (text) => {
    handleTerminalItemClick(text);
    setIndexVisible(false);
  }

  const Menu0 = [numElem0, imagenesMenu0, functionsMenu0, textoMenu0];

  const numElemLang = 2;
  const imagenesMenuLang = [Spanish, English];
  const functionsMenuLang = [() => menu0Langclick("Español"), () => menu0Langclick("English")]; // Corrige la declaración de las variables
  const textoMenuLang = ["Español", "English"];

  const menu0Langclick = (text) => {
    handleLanguage(text);
    setMenuLangVisible(false);
  }

  const MenuLang = [numElemLang, imagenesMenuLang, functionsMenuLang, textoMenuLang];

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
        <BarraTareas 
          language={language}
          isTerminalHidden={isTerminalHidden}
          isTerminalClosed={isTerminalClosed}
          openTerminal={() => openTerminal()}
          handleMenuLangVisibility={() => handleMenuLangVisibility()}
          menuLangVisible={menuLangVisible}
          numElemLang={MenuLang[0]}
          imagenesMenuLang={MenuLang[1]}
          functionsMenuLang={MenuLang[2]}
          textoMenuLang={MenuLang[3]}
          selection={selection}
          noSelection1={noSelection1}
          noSelection2={noSelection2}
          menuVisible={menuVisible} 
          seleccionarDefault={() => handleSelection(terminalDefault)}
          seleccionarNoSelec1={() => handleSelection(noSelection1)}
          seleccionarNoSelec2={() => handleSelection(noSelection2)}
          terminalNameDefault={getTerminalName(terminalDefault)}
          terminalNameNoSelec1={getTerminalName(noSelection1)}
          terminalNameNoSelec2={getTerminalName(noSelection2)}
          numElem0={Menu0[0]}
          imagenesMenu0={Menu0[1]}
          functionsMenu0={Menu0[2]}
          textoMenu0={Menu0[3]}
          indexVisible={indexVisible}
          handleDisplayClick={() => handleDisplayClick()}
          handleIndexClick={() => handleIndexClick()}
          setButtonDragEnabled={setButtonDragEnabled}
          toggleScreenVisibility={toggleScreenVisibility}
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
          <Terminal 
            language={language}
            title={getTerminalTitle(selection)} 
            selected={selection} 
            altura={height} 
            textoTerminal={terminalText} 
            dragging={dragging} 
            handleMouseDown={handleMouseDown} 
            handleTerminalItemClick={handleTerminalItemClick} 
            minimize={minimize} 
            maximize={maximize} 
            closeTerminal={closeTerminal} 
            terminalTitle={getTerminalTitle(selection)}
          />
        </div>
      </div>
    </div>
  );
}

export default Desktop;
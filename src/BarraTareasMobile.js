import React, { useState, useEffect } from 'react';
import logo from './logo-kali.svg';
import Proyectos from './proyectos.png';
import terminalDefault from './terminal-default-icon.png';
import './AppMobile.css';
import Clock from './Clock.js';
import MenuMobile from './MenuMobile.js';
import languageIcon from './languaje.png';

function BarraTareasMobile({
  language,
  isTerminalHidden, 
  isTerminalClosed, 
  menuVisible, 
  handleDisplayClick,
  handleMenuLangVisibility,
  menuLangVisible,
  numElemLang, 
  imagenesMenuLang, 
  functionsMenuLang, 
  textoMenuLang,
  numElem0, 
  imagenesMenu0, 
  functionsMenu0, 
  textoMenu0, 
  indexVisible, 
  handleIndexClick, 
  toggleScreenVisibility, 
  openTerminal, 
  terminalNameDefault, 
  terminalNameNoSelec1, 
  terminalNameNoSelec2, 
  selection, 
  noSelection1, 
  noSelection2, 
  seleccionarDefault, 
  seleccionarNoSelec1, 
  seleccionarNoSelec2 
}) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 380);
      };
    
      // Manejador de eventos para cambiar el estado cuando se redimensiona la ventana
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize); // Agregar listener para cambio de orientación
    
      // Limpieza del manejador de eventos cuando el componente se desmonta
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('orientationchange', handleResize); // Quitar listener para cambio de orientación
      };
    }, 1000); // Ejecutar cada 1000 milisegundos (1 segundo)

    return () => {
      clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
    };
  }, []);  

  let whoIsRodrigoText;
  switch (language) {
    case 'Español':
      whoIsRodrigoText = '¿Quién es Rodrigo Sacramento?';
      break;
    case 'English':
      whoIsRodrigoText = '¿Who is Rodrigo Sacramento?';
      break;
    default:
      whoIsRodrigoText = '¿Quién es Rodrigo Sacramento?'; // Por si acaso
      break;
  }

    const [menuOption0Visible, setMenuOption0Visible] = useState(false);
    const [menuOption1Visible, setMenuOption1Visible] = useState(false);
  
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

    return(
        <div className="barraTareasMobile">
          <div className="barra barra1-mobile">
            <div className={`frame-movile ${indexVisible ? 'selected2' : ''}`} onClick={handleIndexClick}>
              <img src={logo} className="icon menu-icon TerminalMobile" alt="logo" />
              {indexVisible && (
                  <div className="index-menu-mobile" style={{
                      opacity: 1
                    }}>
                  <div className='icon-holder-holder-mobile'>
                    <div className="index-menu-item" onClick={handleIndexClick} onMouseEnter={() => setMenuOption0Visible(false)}>
                      <img src={terminalDefault} className="icon TerminalMobile" alt="logo" />
                      <p>{terminalNameDefault}</p>
                    </div>
                    <div className="icon-holder" onClick={handleOption0Click}>
                      <p className='icon display-app-options'>{'>'}</p>
                      <MenuMobile left={1} visible={menuOption0Visible} indiceMenu={1} num={numElem0} img={imagenesMenu0} functionArray={functionsMenu0} textoArray={textoMenu0} />
                    </div>
                  </div>
                  <div className='icon-holder-holder-mobile'>
                    <div className="index-menu-item" onClick={handleIndexClick}>
                      <img src={Proyectos} className="icon TerminalMobile" alt="logo" />
                      <p>Proyectos</p>
                    </div>
                    <div className="icon-holder" onClick={handleOption1Click}>
                      <p className='icon display-app-options'>{'>'}</p>
                      {/* <MenuMobile visible={menuOption1Visible} indiceMenu={1} num={2} img={imagenesMenu1} functionArray={functionsMenu1} textoArray={textoMenu1} /> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={`frame-movile ${menuLangVisible ? 'selected2' : ''}`} style={{margin: '0px 10px 0px 5px'}}  onClick={handleMenuLangVisibility}>
              <img src={languageIcon} className="icon TerminalMobile" alt="logo"/>
              <p className='icon display-terminal'> {'>'} </p>
              <MenuMobile left={0} visible={menuLangVisible} indiceMenu={0} num={numElemLang} img={imagenesMenuLang} functionArray={functionsMenuLang} textoArray={textoMenuLang}/>
            </div>
            <div className="frame-movile" onClick={openTerminal}>
              <img src={selection} className="icon TerminalMobile" alt="logo"/>
            </div>
            <div
              className={`frame-movile ${menuVisible ? 'selected2' : ''}`}
              onClick={handleDisplayClick}>
              <p className='icon display-terminal'> {'>'} </p>
              {menuVisible && (
                  <div className="menu-mobile">
                  <div className="menu-item" onClick={() => seleccionarNoSelec1()}>
                    <img src={noSelection1} className="icon TerminalMobile" alt="logo" />
                    <p>{terminalNameNoSelec1}</p>
                  </div>
                  <div className="menu-item" onClick={() => seleccionarNoSelec2()}>
                    <img src={noSelection2} className="icon TerminalMobile" alt="logo" />
                    <p>{terminalNameNoSelec2}</p>
                  </div>
                </div>
              )}
            </div>
            <div className='vertical-line'></div>
            <div className={`frame-movile ${isTerminalHidden ? '' : 'selected'} ${isTerminalClosed ? 'oculto' : ''}`} onClick={toggleScreenVisibility}>
                <img src={terminalDefault} className="open-icon app-small-mobile" alt="logo"/> 
            </div>
          </div>
          <div className="barra barra2">
              {isMobile ? null : <p>{whoIsRodrigoText}</p>}
          </div>
          <div className="barra barra3">
            <Clock />
          </div>
        </div>
    )
}


export default BarraTareasMobile
import React, { useState, useEffect } from 'react';
import logo from './logo-kali.svg';
import Proyectos from './proyectos.png';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import './App.css';
import Clock from './Clock.js';
import Menu from './Menu.js';
import languageIcon from './languaje.png';

function BarraTareas({
  language,
  setButtonDragEnabled, 
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

  let Idioma;
  if (language === 'English') {
    Idioma = 'Language'
  } else {
    Idioma = 'Idioma'
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

    return(
        <div className="barraTareas">
          <div className="barra barra1">
            <div className="icon-holder" onClick={handleIndexClick}>
              <img src={logo} className="icon menu-icon" alt="logo" />
              {indexVisible && (
                  <div className="index-menu" style={{
                      opacity: 1
                    }}>
                  <div className="index-menu-item" onClick={() => {
                      seleccionarDefault();
                      openTerminal();
                    }}>
                  </div>
                  <div className='icon-holder-holder'>
                    <div className="index-menu-item" onClick={handleIndexClick} onMouseEnter={() => setMenuOption0Visible(false)}>
                      <img src={terminalDefault} className="icon Terminal" alt="logo" />
                      <p>{terminalNameDefault}</p>
                    </div>
                    <div className="icon-holder" onClick={handleOption0Click} onMouseEnter={handleOption0MouseEnter}>
                      <p className='icon display-app-options'>{'>'}</p>
                      <Menu left={1} visible={menuOption0Visible} indiceMenu={0} num={numElem0} img={imagenesMenu0} functionArray={functionsMenu0} textoArray={textoMenu0} />
                    </div>
                  </div>
                  <div className='icon-holder-holder'>
                    <div className="index-menu-item" onClick={handleIndexClick}>
                      <img src={Proyectos} style={{width: '15px', marginRight: '10px'}} className="icon Terminal" alt="logo" />
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
            <div className="icon-holder" style={{margin: '0px 10px 0px 5px'}}  onClick={handleMenuLangVisibility}>
              <img style={{ width: '20px'}} src={languageIcon} className="icon Terminal" alt="logo"/>
              <p style={{marginLeft: '10px'}}>{Idioma}</p>
              <Menu left={0} visible={menuLangVisible} indiceMenu={0} num={numElemLang} img={imagenesMenuLang} functionArray={functionsMenuLang} textoArray={textoMenuLang}/>
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
                  <div className="menu-item" onClick={() => seleccionarNoSelec1()}>
                    <img src={noSelection1} className="icon Terminal" alt="logo" />
                    <p>{terminalNameNoSelec1}</p>
                  </div>
                  <div className="menu-item" onClick={() => seleccionarNoSelec2()}>
                    <img src={noSelection2} className="icon Terminal" alt="logo" />
                    <p>{terminalNameNoSelec2}</p>
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
            <p>{whoIsRodrigoText}</p>
          </div>
          <div className="barra barra3">
            <Clock />
          </div>
        </div>
    )
}


export default BarraTareas
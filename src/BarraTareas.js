import React, { useState, useEffect } from 'react';
import logo from './logo-kali.svg';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import './App.css';
import Clock from './Clock.js';
import Menu from './Menu.js';

function BarraTareas({ toggleScreenVisibility, openTerminal, terminalNameDefault, terminalNameNoSelec1, terminalNameNoSelec2, selection, noSelection1, noSelection2, seleccionarDefault, seleccionarNoSelec1, seleccionarNoSelec2 }) {
     
    
    const [menuVisible, setMenuVisible] = useState(false);
    const [indexVisible, setIndexVisible] = useState(false);

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
                      seleccionarDefault;
                      openTerminal;
                    }}>
                  </div>
                  <div className='icon-holder-holder'>
                    <div className="index-menu-item" onClick={handleIndexClick}>
                      <img src={terminalDefault} className="icon Terminal" alt="logo" />
                      <p>{terminalNameDefault}</p>
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
                  <div className="menu-item" onClick={() => seleccionarNoSelec1}>
                    <img src={noSelection1} className="icon Terminal" alt="logo" />
                    <p>{terminalNameNoSelec1}</p>
                  </div>
                  <div className="menu-item" onClick={() => seleccionarNoSelec2}>
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
            <p>¿Quién es Rodrigo Sacramento?</p>
          </div>
          <div className="barra barra3">
            <Clock />
          </div>
        </div>
    )
}


export default BarraTareas
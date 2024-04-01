import React, { useState, useEffect } from 'react';
import fotoPerfil from './foto-perfil-cv.jpg';
import './../App.css';
import Clock from '../Clock.js';
import Presentacion from './Presentacion.js';
import Experiencia from './Experiencia.js';
import Estudios from './Estudios.js';
import Inicio from './Inicio.js';

import terminalDefault from './../terminal-default-icon.png'
import terminalRoot from './../terminal-root-icon.png'
import terminalUser from './../terminal-user-icon.png'

function getTerminalSubTitle(image) {
  switch (image) {
    case terminalDefault:
      return "kali@kali:~ ";
    case terminalRoot:
      return "root@kali:# ";
    case terminalUser:
      return "kali@kali:PS> ";
    default:
      return "ejemplo ";
  }
}

function getTerminalColor(image) {
  if (image === terminalRoot) {
    return "#e44";
  } else {
    return "#3060ff";
  }
}

function TerminalContent({ selected, altura, textoTerminal }) {
    return(
          <div className="content" style={{
            overflowY: 'auto',
            maxHeight: `${altura - 100}px`,
          }}>
            <div>
                <img className='profilePicture' src={fotoPerfil} alt='Profile Picture'/>
            </div>
            {(() => {
              switch (textoTerminal) {
                case "Inicio":
                  return <Inicio name={getTerminalSubTitle(selected)} textColor={getTerminalColor(selected)} />;
                case "Action":
                  return <Experiencia name={getTerminalSubTitle(selected)} textColor={getTerminalColor(selected)} />;
                case "Edit":
                  return <Estudios name={getTerminalSubTitle(selected)} textColor={getTerminalColor(selected)} />;
                default:
                  return <Presentacion name={getTerminalSubTitle(selected)} textColor={getTerminalColor(selected)} />;
              }
            })()}
          </div>
    )
}

export default TerminalContent
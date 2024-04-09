import React, { useState } from 'react';
import fotoPerfil from './foto-perfil-cv.jpg';
import './../App.css';
import Presentacion from './Presentacion.js';
import Experiencia from './Experiencia.js';
import Estudios from './Estudios.js';
import Inicio from './Inicio.js';

import terminalDefault from './../terminal-default-icon.png';
import terminalRoot from './../terminal-root-icon.png';
import terminalUser from './../terminal-user-icon.png';

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
  return image === terminalRoot ? "#e44" : "#3060ff";
}

function TerminalContent({ language, selected, altura, textoTerminal }) {
  const [startY, setStartY] = useState(null);
  const [startScrollTop, setStartScrollTop] = useState(null);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setStartScrollTop(e.target.scrollTop);
  };

  const handleTouchMove = (e) => {
    if (!startY || !startScrollTop) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    e.target.scrollTop = startScrollTop - deltaY;
  };

  const handleTouchEnd = () => {
    setStartY(null);
    setStartScrollTop(null);
  };

  return (
    <div
      className="content"
      style={{
        overflowY: 'auto',
        maxHeight: `${altura - 90}px`,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div>
        <img className='profilePicture' src={fotoPerfil} alt='' />
      </div>
      {(() => {
        switch (textoTerminal) {
          case "Inicio":
            return <Inicio language={language} name={getTerminalSubTitle(selected)} textColor={getTerminalColor(selected)} />;
          case "Action":
            return <Experiencia language={language} name={getTerminalSubTitle(selected)} textColor={getTerminalColor(selected)} />;
          case "Edit":
            return <Estudios language={language} name={getTerminalSubTitle(selected)} textColor={getTerminalColor(selected)} />;
          default:
            return <Presentacion language={language} name={getTerminalSubTitle(selected)} textColor={getTerminalColor(selected)} />;
        }
      })()}
    </div>
  );
}

export default TerminalContent;

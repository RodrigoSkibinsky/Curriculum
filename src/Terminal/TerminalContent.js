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
  if (image === terminalRoot) {
    return "#e44";
  } else {
    return "#3060ff";
  }
}

function TerminalContent({ language, selected, altura, textoTerminal }) {
  const contentRef = useRef(null);

  const handleTouchStart = (e) => {
    const startY = e.touches[0].clientY;
    const content = contentRef.current;
    let startScrollTop = content.scrollTop;

    const onTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;

      content.scrollTop = startScrollTop - deltaY;
    };

    const onTouchEnd = () => {
      content.removeEventListener('touchmove', onTouchMove);
      content.removeEventListener('touchend', onTouchEnd);
    };

    content.addEventListener('touchmove', onTouchMove);
    content.addEventListener('touchend', onTouchEnd);
  };

  return (
    <div className="content"
      style={{
        overflowY: 'auto',
        maxHeight: `${altura - 90}px`,
      }}
      ref={contentRef}
      onTouchStart={handleTouchStart}>
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
import React, { useState, useEffect } from 'react';

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

function Content({ selected }) {
    return(
          <div className="content" style={{
            overflowY: 'auto',
            maxHeight: `${height - 100}px`,
          }}>
            <div>
                <img className='profilePicture' src={fotoPerfil} alt='Profile Picture'/>
            </div>
            {(() => {
              switch (terminalText) {
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

export default Content
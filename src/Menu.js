import logo from './logo-kali.svg';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import './App.css';
import Clock from './Clock.js';
import React, { useState, useEffect } from 'react';
import Presentacion from './Presentacion.js';
import Experiencia from './Experiencia.js';
import Estudios from './Estudios.js';

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

function Menu({ visible, indiceMenu, num, img, functionArray }) {
    return (
      visible && (
        <div className="option-menu" style={{
          marginLeft: '17.5px',
          marginTop: 41 * indiceMenu + 'px',
        }}>
          {Array.from({ length: num }).map((_, i) => (
            <div key={i} className="menu-item" onClick={() => functionArray[i]()}>
              <img src={img[i]} className="icon Terminal" alt="logo" />
              <p>... {i + 1} ...</p>
            </div>
          ))}
        </div>
      )
    );
  };  

export default Menu;
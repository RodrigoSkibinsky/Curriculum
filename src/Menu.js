import React, { useState, useEffect } from 'react';
import './App.css';

const terminalDefault = 'img/terminal-default-icon.png'
const terminalRoot = 'img/terminal-root-icon.png'
const terminalUser = 'img/terminal-user-icon.png'

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

function Menu({ left, visible, indiceMenu, num, img, functionArray, textoArray }) {
    return (
      visible && (
        <div className="option-menu" style={{
          marginLeft: left*17.5 + 'px',
          marginTop: 41 * indiceMenu + 'px',
        }}>
          {Array.from({ length: num }).map((_, i) => (
            <div key={i} className="menu-item" onClick={() => functionArray[i]()}>
              <img src={img[i]} className="icon Terminal" alt="logo" />
              <p>{textoArray[i]}</p>
            </div>
          ))}
        </div>
      )
    );
  };  

export default Menu;
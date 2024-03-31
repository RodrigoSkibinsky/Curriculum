import React, { useState, useEffect } from 'react';
import terminalDefault from './terminal-default-icon.png';
import './App.css';
import Menu from './Menu.js';
import Inicio from './Inicio.js';

function TerminalTop({ selected }) {
    const [menuVisible, setMenuVisible] = useState(false);
  const [indexVisible, setIndexVisible] = useState(false);

  const [menuOption0Visible, setMenuOption0Visible] = useState(false);
  const [menuOption1Visible, setMenuOption1Visible] = useState(false);

  const [selection, setSelection] = useState(terminalDefault);
  const [noSelection1, setNoSelection1] = useState(terminalRoot);
  const [noSelection2, setNoSelection2] = useState(terminalUser);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isWindowHidden, setWindowHidden] = useState(false);
  const [isTerminalHidden, setisTerminalHidden] = useState(false);
  const [isTerminalClosed, setisTerminalClosed] = useState(false);
  const [buttonDragEnabled, setButtonDragEnabled] = useState(true);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [terminalText, setTerminalText] = useState("Inicio");

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

    const handleTerminalItemClick = (text) => {
        if (isTerminalClosed) {
          setisTerminalClosed(false);
        }
        if (isTerminalHidden) {
            setisTerminalHidden(false);
        }
        setTerminalText(text);
      };

      const minimize = () => {//solo se usa dentro de screen
        setisTerminalHidden(true);
      }

    const maximize = () => {//solo se usa dentro de screen
      const maxHeight = screenHeight - 32;
      const maxWidth = screenWidth;
      if (height !== maxHeight) {
        setHeight(maxHeight);
        setWidth(maxWidth);
        setWindowPosition({ x: 769, y: 375});
      } else {
        setHeight(currentHeight);
        setWidth(currentWidth);
      }
    };

    const closeTerminal = () => {//solo se usa dentro de screen
      setisTerminalHidden(true);
      setisTerminalClosed(true);
    };

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

    return(
        <div className="top" 
          style={{
           cursor: dragging ? 'all-scroll' : 'default' 
          }} onMouseDown={handleMouseDown}
        >
            <div className='top-top'>
              <div className='top-space top-left'>
              <img src={terminalDefault} className="app-small" alt="logo" style={{
                marginLeft: '10px',
              }}/>
              </div>
              <div className='top-space top-middle'>
                <p>{getTerminalTitle(selected)}</p>
              </div>
              <div className='top-space top-right'>
                <div className='button minimize' onClick={minimize}>
                  -
                </div>
                <div className='button maximize' onClick={maximize}>
                  <div className='maximize-square'>
                  </div>
                </div>
                <div className='button close' onClick={closeTerminal}>
                  x
                </div>
              </div>
            </div>
            <div className='top-bottom'>
              <div className='top-space top-left'>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("File")}>File</p>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("Action")}>Action</p>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("Edit")}>Edit</p>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("View")}>View</p>
                <p className='terminal-item' onClick={() => handleTerminalItemClick("Help")}>Help</p>
              </div>
              <div className='top-space top-middle'></div>
              <div className='top-space top-right'></div>
            </div>
        </div>
    )
}

export default TerminalTop
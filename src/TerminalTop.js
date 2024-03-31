import React, { useState, useEffect } from 'react';
import terminalDefault from './terminal-default-icon.png';
import './App.css';
import Menu from './Menu.js';
import Inicio from './Inicio.js';

function TerminalTop() {

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
                <p>{getTerminalTitle(selection)}</p>
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
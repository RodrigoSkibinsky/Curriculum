import React from 'react';
import './../App.css';

import terminalDefault from './../terminal-default-icon.png'

function TerminalTopMobile({ dragging, handleTerminalItemClick, handleMouseDown, minimize, closeTerminal, terminalTitle }) {
  
    return(
        <div className="top-mobile">
            <div className='top-top'>
              <div className='top-space top-left'>
              <img src={terminalDefault} className="app-small-mobile" alt="logo" style={{
                marginLeft: '10px',
              }}/>
              </div>
              <div className='top-space top-middle'>
                <p>{terminalTitle}</p>
              </div>
              <div className='top-space top-right'>
                <div className='button minimize' onClick={minimize}>
                  -
                </div>
                <div className='button maximize'>
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

export default TerminalTopMobile
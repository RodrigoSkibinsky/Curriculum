import React, { useState, useEffect } from 'react';
import terminalDefault from './terminal-default-icon.png';
import terminalRoot from './terminal-root-icon.png';
import terminalUser from './terminal-user-icon.png';
import './App.css';
import TerminalContent from './TerminalContent.js';
import TerminalTop from './TerminalTop.js';

function Terminal({ dragging, handleTerminalItemClick, handleMouseDown, minimize, maximize, closeTerminal, terminalTitle, selected, altura, textoTerminal }) {
    return(
        <div>
            <TerminalTop dragging={dragging} handleMouseDown={handleMouseDown} handleTerminalItemClick={handleTerminalItemClick} minimize={minimize} maximize={maximize} closeTerminal={closeTerminal} terminalTitle={getTerminalTitle(selection)} />
            <div className="line"></div>
            <TerminalContent selected={selection} altura={height} textoTerminal={terminalText}/>
        </div>
    )
}

export default Terminal
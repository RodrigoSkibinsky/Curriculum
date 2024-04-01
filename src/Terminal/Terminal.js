import React, { useState, useEffect } from 'react';
import './../App.css';
import TerminalContent from './TerminalContent.js';
import TerminalTop from './TerminalTop.js';

function Terminal({ title, dragging, handleTerminalItemClick, handleMouseDown, minimize, maximize, closeTerminal, terminalTitle, selected, altura, textoTerminal }) {
    return(
        <div>
            <TerminalTop dragging={dragging} handleMouseDown={handleMouseDown} handleTerminalItemClick={handleTerminalItemClick} minimize={minimize} maximize={maximize} closeTerminal={closeTerminal} terminalTitle={title} />
            <div className="line"></div>
            <TerminalContent selected={selected} altura={altura} textoTerminal={textoTerminal}/>
        </div>
    )
}

export default Terminal
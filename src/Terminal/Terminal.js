import React from 'react';
import './../App.css';
import TerminalContent from './TerminalContent.js';
import TerminalTop from './TerminalTop.js';

function Terminal({ language, title, dragging, handleTerminalItemClick, handleMouseDown, minimize, maximize, closeTerminal, terminalTitle, selected, altura, textoTerminal }) {
    return(
        <div>
            <TerminalTop dragging={dragging} handleMouseDown={handleMouseDown} handleTerminalItemClick={handleTerminalItemClick} minimize={minimize} maximize={maximize} closeTerminal={closeTerminal} terminalTitle={title} />
            <div className="line"></div>
            <TerminalContent language={language} selected={selected} altura={altura} textoTerminal={textoTerminal}/>
        </div>
    )
}

export default Terminal
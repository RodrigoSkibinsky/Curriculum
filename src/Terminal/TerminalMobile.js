import React from 'react';
import './../App.css';
import TerminalContent from './TerminalContent.js';
import TerminalTopMobile from './TerminalTopMobile.js';

function TerminalMobile({ language, title, dragging, handleTerminalItemClick, minimize, closeTerminal, terminalTitle, selected, altura, textoTerminal }) {
    return(
        <div>
            <TerminalTopMobile dragging={dragging} handleTerminalItemClick={handleTerminalItemClick} minimize={minimize} closeTerminal={closeTerminal} terminalTitle={title} />
            <div className="line"></div>
            <TerminalContent language={language} selected={selected} altura={altura} textoTerminal={textoTerminal}/>
        </div>
    )
}

export default TerminalMobile
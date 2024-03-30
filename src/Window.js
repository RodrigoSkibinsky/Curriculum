import React, { useState, useEffect } from 'react';

function Window({ name, textColor }) {
    return(
    <div className="window" 
          style={{ 
            top: windowPosition.y + 'px', 
            left: windowPosition.x + 'px',
            height: height,
            width: width,
          }} >
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
          <div className="line"></div>
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
                  return <Inicio name={getTerminalSubTitle(selection)} textColor={getTerminalColor(selection)} />;
                case "Action":
                  return <Experiencia name={getTerminalSubTitle(selection)} textColor={getTerminalColor(selection)} />;
                case "Edit":
                  return <Estudios name={getTerminalSubTitle(selection)} textColor={getTerminalColor(selection)} />;
                default:
                  return <Presentacion name={getTerminalSubTitle(selection)} textColor={getTerminalColor(selection)} />;
              }
            })()}
            {/* <div
              className="resize-handle"
              style={{ 
                bottom: 0, 
                right: 0,
                position: 'absolute',
                height: '10px',
                width: '10px',
                cursor: 'nwse-resize',
              }}
              onMouseDown={handleResizeMouseDown}
              onMouseMove={handleResizeMouseMove}
              onMouseUp={handleResizeMouseUp}
            /> */}
          </div>
        </div>
    )
}

export default Window
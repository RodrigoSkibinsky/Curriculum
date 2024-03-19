import React, { useState, useEffect } from 'react';

function Estudios({ name, textColor }) {
    return(
        <div className='plain-text'>
            <p className='terminal-sub-title'><b style={{color: textColor,}}>{name}</b>Trayectoria Académica:</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Estudios Terciarios:</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>MAR 2021 - Actualidad: Ingeniería en Computación - UDELAR</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Escolaridad disponible <a href='../src/Escolaridad.pdf' target='_blank'>aquí</a></p>
        </div>
    );
}

export default Estudios

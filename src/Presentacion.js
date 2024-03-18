import React, { useState, useEffect } from 'react';

function Presentacion(name, textColor) {
    return(
        <div className='plain-text'>
            <p className='sub-title'><b style={{color: textColor,}}>{name}</b>Sobre mi:</p>
            <p><b style={{color: textColor,}}>{name}</b>Soy un profesional motivado en el desarrollo frontend, con sólida formación en Ingeniería en Computación.</p>
            <p><b style={{color: textColor,}}>{name}</b>Mi compromiso es aportar al equipo mis habilidades técnicas y mi entusiasmo por el aprendizaje continuo.</p>
            <p><b style={{color: textColor,}}>{name}</b>Con dominio en desarrollo frontend y en proceso de dominar ReactJs,</p>
            <p><b style={{color: textColor,}}>{name}</b>estoy preparado para contribuir al éxito de sus proyectos con responsabilidad y dedicación.</p>
        </div>
    );
}

export default Presentacion

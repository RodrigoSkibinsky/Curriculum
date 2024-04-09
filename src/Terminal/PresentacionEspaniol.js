import React from 'react';

function PresentacionEspaniol({ name, textColor }) {
    return(
        <div className='plain-text'>
            <p className='terminal-sub-title'><b style={{color: textColor,}}>{name}</b>Sobre mi:</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Soy un desarrollador frontend, con sólida formación en la carrera de Ingeniería en Computación(aún en curso).</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Mi compromiso es aportar al equipo mis habilidades técnicas y mi entusiasmo por el aprendizaje continuo.</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Con dominio en desarrollo frontend y en proceso de dominar ReactJs.</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Estoy preparado para contribuir al éxito de sus proyectos con responsabilidad y dedicación.</p>
        </div>
    );
}

export default PresentacionEspaniol

import React, { useState, useEffect } from 'react';

function Estudios({ name, textColor }) {
    return(
        <div className='plain-text'>
            <p className='terminal-sub-title'><b style={{color: textColor,}}>{name}</b>Bienvenido/a a mi Curriculum Online</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Mi nombre es Rodrigo Sacramento  y soy un Desarrollador FrontEnd en proceso de perfeccionar mis habilidades de BackEnd</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Siéntase libre de explorar esta página y sus funciones ocultas.</p>
            <p className='terminal-sub-title'><b style={{color: textColor,}}>{name}</b>Puede acceder a mi información a través de las opciones de la terminal o sino mediante el menu de inicio en la esquina superior izquierda.</p>
        </div>
    );
}

export default Inicio

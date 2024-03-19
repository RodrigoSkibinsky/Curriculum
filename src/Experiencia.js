import React, { useState, useEffect } from 'react';

function Experiencia({ name, textColor }) {
    return(
        <div className='plain-text'>
            <p className='terminal-sub-title'><b style={{color: textColor,}}>{name}</b>Experiencia Laboral:</p>
            <p></p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>MAR 2020 - MAR 2021: Banco República(brou)</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Rol: Pasante</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Tareas Desempeñadas:</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Gestión de inventario</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Atención al público</p>           
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Asistir a clientes en tramites bancarios(remoto y presencial)</p>   
            <p></p>
            <p></p>
            <p className='terminal-sub-title'><b style={{color: textColor,}}>{name}</b>Habilidades:</p>
            <p></p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>HTML</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>CSS</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>JavaScript</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>C/C++</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Java</p>           
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>ReactJs</p>   
        </div>
    );
}

export default Experiencia

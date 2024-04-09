import React from 'react';

function ExperienciaEnglish({ name, textColor }) {
    return(
        <div className='plain-text'>
            <p className='terminal-sub-title'><b style={{color: textColor }}>{name}</b>Work Experience:</p>
            <p className='oculto'>Enter</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>MAR 2020 - MAR 2021:</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Banco República (BROU)</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Role:</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Intern</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Tasks Performed:</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Inventory management</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Customer service</p>           
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Assisting clients with banking procedures (remote and in-person)</p>   
            <p className='oculto'>Enter</p>
            <p className='oculto'>Enter</p>
            <p className='terminal-sub-title'><b style={{color: textColor }}>{name}</b>Skills:</p>
            <p className='oculto'>Enter</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>HTML</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>CSS</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>JavaScript</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>C/C++</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Java</p>           
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>ReactJs</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Object-Oriented Programming</p>           
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>MVC Architecture</p>     
        </div>
    );
}

export default ExperienciaEnglish
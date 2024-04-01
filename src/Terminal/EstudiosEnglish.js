import React from 'react';

function EstudiosEnglish({ name, textColor }) {
    return(
        <div className='plain-text'>
            <p className='terminal-sub-title'><b style={{color: textColor }}>{name}</b>Academic Background:</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Tertiary Studies:</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>MAR 2021 - Present: Computer Engineering - UDELAR</p>
            <p className='terminal-text oculto'><b style={{color: textColor }}>{name}</b>Schooling available <a href='/Escolaridad1.pdf' target='_blank'>here</a></p>
            {/* <p className='oculto'>Enter</p> */}
            <p className='terminal-sub-title'><b style={{color: textColor }}>{name}</b>Languages:</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>English - Level B2</p>
            <p className='terminal-text'><b style={{color: textColor }}>{name}</b>Portuguese - Intermediate Level</p>
        </div>
    );
}

export default EstudiosEnglish
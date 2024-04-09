import React from 'react';

function PresentacionEnglish({ name, textColor }) {
    return(
        <div className='plain-text'>
            <p className='terminal-sub-title'><b style={{color: textColor}}>{name}</b>About Me:</p>
            <p className='terminal-text'><b style={{color: textColor}}>{name}</b>I'm a frontend developer, with a solid background in Computer Engineering (still in progress).</p>
            <p className='terminal-text'><b style={{color: textColor}}>{name}</b>My commitment is to bring to the team my technical skills and my enthusiasm for continuous learning.</p>
            <p className='terminal-text'><b style={{color: textColor}}>{name}</b>Proficient in frontend development and currently mastering ReactJS.</p>
            <p className='terminal-text'><b style={{color: textColor}}>{name}</b>I'm prepared to contribute to the success of your projects with responsibility and dedication.</p>
        </div>
    );
}

export default PresentacionEnglish

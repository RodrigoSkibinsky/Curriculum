import React from 'react';

function InicioEnglish({ name, textColor }) {
    return(
        <div className='plain-text'>
            <p className='terminal-sub-title'><b style={{color: textColor,}}>{name}</b>Welcome to my Online Resume</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>My name is Rodrigo Sacramento, and I am a Frontend Developer in the process of refining my Backend skills.</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>Feel free to explore this page and its hidden features.</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b>You can access my information through the terminal options (File, Action, and Edit) or through the start menu in the top left corner.</p>
            <p className='oculto'>Enter</p>
            <p className='terminal-text'><b style={{color: textColor,}}>{name}</b><i style={{ color: 'red', fontSize: 15}}>Warning: Currently, this page is not optimized for mobile devices or touch screens.</i></p>
        </div>
    );
}

export default InicioEnglish;

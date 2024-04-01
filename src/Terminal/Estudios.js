import React, { useState, useEffect } from 'react';
import EstudiosEspaniol from './EstudiosEspaniol';
import EstudiosEnglish from './EstudiosEnglish';

function Estudios({ language, name, textColor }) {
    if (language === 'English') {
        return(
            <EstudiosEnglish name={name} textColor={textColor}/>
        );
    } else {
        return(
            <EstudiosEspaniol name={name} textColor={textColor}/>
        );
    }
}

export default Estudios

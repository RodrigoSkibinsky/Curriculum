import React from 'react';
import ExperienciaEspaniol from './ExperienciaEspaniol';
import ExperienciaEnglish from './ExperienciaEnglish';

function Experiencia({ language, name, textColor }) {
    if (language === 'English') {
        return(
            <ExperienciaEnglish name={name} textColor={textColor}/>
        );
    } else {
        return(
            <ExperienciaEspaniol name={name} textColor={textColor}/>
        );
    }
}

export default Experiencia
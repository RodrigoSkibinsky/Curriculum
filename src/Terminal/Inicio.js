import React from 'react';
import InicioEspaniol from './InicioEspaniol';
import InicioEnglish from './InicioEnglish';

function Inicio({ language, name, textColor }) {
        if (language === 'English') {
            return(
                <InicioEnglish name={name} textColor={textColor}/>
            );
        } else {
            return(
                <InicioEspaniol name={name} textColor={textColor}/>
            );
        }
}

export default Inicio

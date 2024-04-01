import React, { useState, useEffect } from 'react';
import PresentacionEspaniol from './PresentacionEspaniol';
import PresentacionEnglish from './PresentacionEnglish';

function Presentacion({ language, name, textColor }) {
    if (language === 'English') {
        return(
            <PresentacionEnglish name={name} textColor={textColor}/>
        );
    } else {
        return(
            <PresentacionEspaniol name={name} textColor={textColor}/>
        );
    }
}

export default Presentacion

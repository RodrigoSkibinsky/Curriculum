import React from 'react';
import './AppMobile.css';

function MenuMobile({ left, visible, indiceMenu, num, img, functionArray, textoArray }) {
    return (
      visible && (
        <div className="option-menu-mobile" style={{
          marginTop: 82 * indiceMenu + 'px',
        }}>
          {Array.from({ length: num }).map((_, i) => (
            <div key={i} className="menu-item" onClick={() => functionArray[i]()}>
              <img src={img[i]} className="icon TerminalMobile" alt="logo" />
              <p>{textoArray[i]}</p>
            </div>
          ))}
        </div>
      )
    );
  };  

export default MenuMobile;
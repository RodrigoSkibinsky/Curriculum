import React from 'react';
import './App.css';

function Menu({ left, visible, indiceMenu, num, img, functionArray, textoArray }) {
    return (
      visible && (
        <div className="option-menu" style={{
          marginLeft: left * 17.5 + 'px',
          marginTop: 41 * indiceMenu + 'px',
        }}>
          {Array.from({ length: num }).map((_, i) => (
            <div key={i} className="menu-item" onClick={() => functionArray[i]()}>
              <img src={img[i]} className="icon Terminal" alt="logo" />
              <p>{textoArray[i]}</p>
            </div>
          ))}
        </div>
      )
    );
  };  

export default Menu;
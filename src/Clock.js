import React, { useState, useEffect } from 'react';

function Clock() {
  const [horaActual, setHoraActual] = useState('');

  function obtenerAbreviacionMes(mes) {
    const meses = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return meses[mes - 1];
  }
  
  function actualizarHora() {
    const fechaHora = new Date();
    const hora = fechaHora.getHours();
    const minutos = fechaHora.getMinutes();
    const dia = fechaHora.getDate();
    const mes = fechaHora.getMonth() + 1;
    
    const minutosFormateados = (minutos < 10 ? '0' : '') + minutos;
    
    setHoraActual(obtenerAbreviacionMes(mes) + dia + " " + hora + ':' + minutosFormateados);
  }
  
  useEffect(() => {
    actualizarHora();
    const intervalId = setInterval(actualizarHora, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      {horaActual}
    </div>
  );
}

export default Clock;

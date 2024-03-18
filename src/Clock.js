import React, { useState, useEffect } from 'react';

function Clock() {
  const [horaActual, setHoraActual] = useState(''); // Estado para almacenar la hora actual

  // Función para obtener la abreviación del mes
  function obtenerAbreviacionMes(mes) {
    const meses = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return meses[mes - 1];
  }

  // Función para actualizar la hora
  function actualizarHora() {
    const fechaHora = new Date();
    const hora = fechaHora.getHours();
    const minutos = fechaHora.getMinutes();
    const dia = fechaHora.getDate();
    const mes = fechaHora.getMonth() + 1;

    // Formatea los minutos con un cero delante si es menor a 10
    const minutosFormateados = (minutos < 10 ? '0' : '') + minutos;

    // Actualiza el estado con la hora actual formateada
    setHoraActual(obtenerAbreviacionMes(mes) + dia + " " + hora + ':' + minutosFormateados);
  }

  // Actualiza la hora al montar el componente
  useEffect(() => {
    actualizarHora();
    const intervalId = setInterval(actualizarHora, 1000); // Llama a actualizarHora cada segundo
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar

  return (
    <div className="clock">
      {horaActual}
    </div>
  );
}

export default Clock;

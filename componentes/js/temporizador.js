let tiempo;
let descontarTiempo;
let duracion;
let pausar = false;

const puntosElement = document.querySelector('.puntos')
const puntosSegundosElement = document.querySelector('.puntos-segundos')
const horasElement = document.querySelector('.horas');
const minutosElement = document.querySelector('.minutos');
const segundosElement = document.querySelector('.segundos');
const mensajeElement = document.querySelector('.mensaje')
mensajeElement.style.display = 'none';

function iniciarTemporizador() {
    duracion = parseInt(prompt("Ingrese el tiempo en segundos para el temporizador:"));
  
    if (!isNaN(duracion) && duracion > 0) {
      tiempo = duracion;
      mostrarTiempo();
      ejecutarTemporizador();
    } else {
      alert("Por favor, ingrese un número válido de segundos.");
    }
  }

  function ejecutarTemporizador() {
    clearInterval(descontarTiempo); // Limpia cualquier temporizador previo
    descontarTiempo = setInterval(actualizarTemporizador, 1000);
  }
  
  function pausarTiempo() {
    clearInterval(descontarTiempo);
    descontarTiempo = null;
    pausar = true;
  }

  function continuarTiempo() {
    if (pausar && !descontarTiempo) {
      descontarTiempo = setInterval(actualizarTemporizador, 1000);
      pausar = false;
    }
  }
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
document.getElementById("btnPausar").disabled = true;
document.getElementById("btnContinuar").disabled = true;
document.getElementById("btnRestablecer").disabled = true;

function iniciarTemporizador() {
    duracion = parseInt(prompt("Ingrese el tiempo en segundos para el temporizador:"));

    if (!isNaN(duracion) && duracion > 0) {
        tiempo = duracion;
        mostrarTiempo();
        ejecutarTemporizador();
        document.getElementById("btnIniciar").disabled = true;
        document.getElementById("btnPausar").disabled = false;
        document.getElementById("btnRestablecer").disabled = false;
        document.getElementById("btnContinuar").disabled = true;
    } else {
        alert("Por favor, ingrese un número válido de segundos.");
    }
}

function ejecutarTemporizador() {
    clearInterval(descontarTiempo);
    descontarTiempo = setInterval(actualizarTemporizador, 1000);
}

function mostrarTiempo() {
    puntosElement.style.display = 'inline';
    puntosSegundosElement.style.display = 'inline';
    horasElement.style.display = 'inline';
    minutosElement.style.display = 'inline';
    segundosElement.style.display = 'inline';
    mensajeElement.style.display = 'none';
}

function pausarTiempo() {
    clearInterval(descontarTiempo);
    descontarTiempo = null;
    pausar = true;
    document.getElementById("btnPausar").disabled = true;
    document.getElementById("btnContinuar").disabled = false;

}

function continuarTiempo() {
    if (pausar && !descontarTiempo) {
        descontarTiempo = setInterval(actualizarTemporizador, 1000);
        pausar = false;
        document.getElementById("btnPausar").disabled = false;
        document.getElementById("btnContinuar").disabled = true;
    }
}

function reestablecer() {
    clearInterval(descontarTiempo);
    descontarTiempo = null;
    tiempo = duracion;
    pausar = false;
    mostrarTiempo();
    actualizarDisplay(0, 0, 0);
    document.getElementById("btnIniciar").disabled = false;
    document.getElementById("btnPausar").disabled = true;
    document.getElementById("btnContinuar").disabled = true;
    document.getElementById("btnRestablecer").disabled = true;
}

function actualizarDisplay(horas, minutos, segundos) {
    horasElement.textContent = horas < 10 ? "0" + horas : horas;
    minutosElement.textContent = minutos < 10 ? "0" + minutos : minutos;
    segundosElement.textContent = segundos < 10 ? "0" + segundos : segundos;
}

function actualizarTemporizador() {
    let horas = Math.floor(tiempo / 3600);
    let minutos = Math.floor((tiempo % 3600) / 60);
    let segundos = tiempo % 60;

    actualizarDisplay(horas, minutos, segundos);

    if (--tiempo < 0) {
        mostrarMensajeFin();
        clearInterval(descontarTiempo);

        setTimeout(() => {
            if (confirm("¿Deseas ingresar un nuevo valor para el temporizador?")) {
                iniciarTemporizador();
                document.getElementById("btnIniciar").disabled = false;
                document.getElementById("btnPausar").disabled = true;
                document.getElementById("btnContinuar").disabled = true;
                document.getElementById("btnRestablecer").disabled = true;
            } else {
                document.getElementById("btnIniciar").disabled = true;
                document.getElementById("btnPausar").disabled = true;
                document.getElementById("btnContinuar").disabled = true;
                document.getElementById("btnRestablecer").disabled = false;
            }
        }, 1000);
    }
}

function mostrarMensajeFin() {
    puntosElement.style.display = 'none';
    puntosSegundosElement.style.display = 'none';
    horasElement.style.display = 'none';
    minutosElement.style.display = 'none';
    segundosElement.style.display = 'none';
    mensajeElement.style.display = 'inline';
}

document.getElementById("btnIniciar").addEventListener("click", iniciarTemporizador);
document.getElementById("btnPausar").addEventListener("click", pausarTiempo);
document.getElementById("btnContinuar").addEventListener("click", continuarTiempo);
document.getElementById("btnRestablecer").addEventListener("click", reestablecer);
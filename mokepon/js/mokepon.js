//funcion que ejecutara
function seleccionarMascotaJugador(){
  alert('SELECCIONASTE TU MASCOTA')
}

// se le va asigna el elemento por id,
let botonMascotaJugador = document.getElementById('boton-mascota')
// cuando se escucha el evento click se llama la funcion
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
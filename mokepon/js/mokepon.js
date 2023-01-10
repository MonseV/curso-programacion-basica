function iniciarJuego() {

  // se le va asigna el elemento por id,
  let botonMascotaJugador = document.getElementById('boton-mascota')

  // cuando se escucha el evento click se llama la funcion
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

//funcion que ejecutara
function seleccionarMascotaJugador() {
  if((document.getElementById('hipodoge').checked) == true) {
    alert('SELECCIONASTE A HIPODOGE COMO TU MASCOTA')
  } else if ((document.getElementById('capipepo').checked) == true) {
    alert('SELECCIONASTE A CAPIPEPO COMO TU MASCOTA')
  } else if ((document.getElementById('ratigueya').checked) == true) {
    alert('SELECCIONASTE A RATIGUEYA COMO TU MASCOTA')
  }
  else{
    alert("NO SELECCIONASTE TU MASCOTA")
  }
}

// cuando se escucha el evento cargar(carga todo el HTML) se llama la funcion
window.addEventListener('load', iniciarJuego)


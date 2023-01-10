function iniciarJuego() {

  // se le va asigna el elemento por id,
  let botonMascotaJugador = document.getElementById('boton-mascota')

  // cuando se escucha el evento click se llama la funcion
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
}

//funcion que ejecutara
function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById('hipodoge')
  let inputCapipepo = document.getElementById('capipepo')
  let inputRatigueya = document.getElementById('ratigueya')

  // si hipodoge fue seleccionado
  if (inputHipodoge.checked) {
    alert('Seleccionaste a Hipodoge')
  } else if (inputCapipepo.checked) {
    alert('Seleccionaste a Capipepo')
  } else if (inputRatigueya.checked) {
    alert('Seleccionaste a Ratigueya')
  }
  else {
    alert("Selecciona una mascota")
  }
}

// cuando se escucha el evento cargar(carga todo el HTML) se llama la funcion
window.addEventListener('load', iniciarJuego)


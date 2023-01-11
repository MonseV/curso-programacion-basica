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
  let spanMascotaJugador = document.getElementById('mascota-jugador')

  // si hipodoge fue seleccionado
  if (inputHipodoge.checked) {
    //innerHTML nos ayuda a insertar contenido en el html
    spanMascotaJugador.innerHTML = 'Hipodoge'
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo'
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya'
  }
  else {
    alert("Selecciona una mascota")
  }
  seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
  let mascota = aleatorio(1,3)
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

  if (mascota == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
  } else if (mascota == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo'
  } else if (mascota == 3) {
    seleccionarMascotaEnemigo.innerHTML = 'Ratigueya'
  }
}

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min +1) + min)
}

// cuando se escucha el evento cargar(carga todo el HTML) se llama la funcion
window.addEventListener('load', iniciarJuego)


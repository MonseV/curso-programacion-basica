//varible global -> se puede utilizar en cualquier parte del codigo
let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {

  // se le va asigna el elemento por id,
  let botonMascotaJugador = document.getElementById('boton-mascota')

  // cuando se escucha el evento click se llama la funcion
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

  // aqui van los event listener de los botones de los ataques
  let botonFuego = document.getElementById('boton-fuego')
  botonFuego.addEventListener('click', ataqueFuego)

  let botonAgua = document.getElementById('boton-agua')
  botonAgua.addEventListener('click', ataqueAgua)

  let botonTierra = document.getElementById('boton-tierra')
  botonTierra.addEventListener('click', ataqueTierra)
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
  let mascotaAleatoria = aleatorio(1, 3)
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo'
  } else {
    seleccionarMascotaEnemigo.innerHTML = 'Ratigueya'
  }
}

function ataqueFuego() {
  ataqueJugador = 'FUEGO'
  ataqueAleatorioEnemigo()
}

function ataqueAgua() {
  ataqueJugador = 'AGUA'
  ataqueAleatorioEnemigo()
}

function ataqueTierra() {
  ataqueJugador = 'TIERRA'
  ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3)

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = 'FUEGO'
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'AGUA'
  } else {
    ataqueEnemigo = 'TIERRA'
  }

  /* cuando ya tenemos los dos ataques se llama*/
  crearMensaje()
}

function crearMensaje() {

  // se obtiene el elemento donde se insertara el parrafo por id
  let sectionMensajes = document.getElementById('mensajes')

  // crea un nuevo parrafo
  let parrafo = document.createElement('p')
  // añade texto al parrafo creado
  parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + (combate(ataqueJugador, ataqueEnemigo))

  // añade el elemento creado al DOM
  sectionMensajes.appendChild(parrafo)
}

function combate(jugador, enemigo) {
  let resultado = ''
  if ((jugador == 'FUEGO' && enemigo == 'FUEGO') || (jugador == 'AGUA' && enemigo == 'AGUA') || (jugador == 'TIERRA' && enemigo == 'TIERRA')) {
    resultado = "EMPATE 😐"
  } else if ((jugador == 'AGUA' && enemigo == 'FUEGO') || (jugador == 'TIERRA' && enemigo == 'FUEGO') || (jugador == 'TIERRA' && enemigo == 'AGUA')) {
    resultado = "GANASTE 🏆"
  } else {
    resultado = "PERDISTE 😞"
  }
  return resultado
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// cuando se escucha el evento cargar(carga todo el HTML) se llama la funcion
window.addEventListener('load', iniciarJuego)


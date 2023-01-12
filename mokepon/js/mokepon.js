//varible global -> se puede utilizar en cualquier parte del codigo
let ataqueJugador

function iniciarJuego() {

  // se le va asigna el elemento por id,
  let botonMascotaJugador = document.getElementById('boton-mascota')

  // cuando se escucha el evento click se llama la funcion
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

  // aqui van los event listener de los botones de los ataques
  let botonFuego = document.getElementById('boton-fuego')
  botonFuego.addEventListener('click',ataqueFuego)

  let botonAgua = document.getElementById('boton-agua')
  botonAgua.addEventListener('click',ataqueAgua)

  let botonTierra = document.getElementById('boton-tierra')
  botonTierra.addEventListener('click',ataqueTierra)
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
  let ataqueAleatorio = aleatorio(1,3)
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

  if (ataqueAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
  } else if (ataqueAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo'
  } else {
    seleccionarMascotaEnemigo.innerHTML = 'Ratigueya'
  }
}

function ataqueFuego () {
  ataqueJugador = 'FUEGO'
  alert(ataqueJugador)
  alert(ataqueEnemigo())
}

function ataqueAgua () {
  ataqueJugador = 'AGUA'
  alert(ataqueJugador)
  alert(ataqueEnemigo())
}

function ataqueTierra () {
  ataqueJugador = 'TIERRA'
  alert(ataqueJugador)
  alert(ataqueEnemigo())
}

function ataqueEnemigo (){
  let ataqueAleatorioEnemigo = aleatorio(1,3)
  if (ataqueAleatorioEnemigo == 1) {
    ataque = 'FUEGO'
  } else if (ataqueAleatorioEnemigo == 2) {
    ataque = 'AGUA'
  } else {
    ataque = 'TIERRA'
  }
}

function aleatorio(min, max){
  return Math.floor(Math.random() * (max - min +1) + min)
}

// cuando se escucha el evento cargar(carga todo el HTML) se llama la funcion
window.addEventListener('load', iniciarJuego)


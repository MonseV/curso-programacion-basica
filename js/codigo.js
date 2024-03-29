//declaración de función de numero aleatorio
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//declaración de función eleccion
function eleccion(jugada) {
  let resultado = ""
  if (jugada == 1) {
    resultado = "Piedra 🪨"
  } else if (jugada == 2) {
    resultado = "Papel 📄"
  } else if (jugada == 3) {
    resultado = "Tijera ✂️"
  } else {
    resultado = "MAL ELEGIDO"
  }
  return resultado
}

//declaración de función quien gana
function combate(pc, jugador) {
  let ganador = ""
  if (pc == jugador) {
    ganador = "EMPATE 😐"
    empates = empates + 1
  } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
    ganador = "GANASTE 🏆"
    triunfos = triunfos + 1;
  } else {
    ganador = "PERDISTE 😞"
    perdidas = perdidas + 1;
  }
  return ganador
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
//invocación de función para que el pc eliga aleatoriamente
let pc = 0
let triunfos = 0
let perdidas = 0
let empates = 0

//CICLO
// mientras triunfos y perdidas sean menor que 3
while (triunfos < 3 && perdidas < 3) {
  // cada vez que entra tienen que elegir otra opcion
  pc = aleatorio(1, 3)
  jugador = prompt("Elige: 1 para 🪨, 2 para 📄, 3 para ✂️")

  //invocación de la elección del PC
  alert("PC elige: " + eleccion(pc));
  //invocación de la elección del USUARIO
  alert("Tu eliges: " + eleccion(jugador));

  //invocación del COMBATE
  alert(combate(pc, jugador));
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. Empates " + empates + " veces.")
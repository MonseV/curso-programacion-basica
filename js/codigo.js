//declaraci贸n de funci贸n de numero aleatorio
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//declaraci贸n de funci贸n eleccion
function eleccion(jugada) {
  let resultado = ""
  if (jugada == 1) {
    resultado = "Piedra 馃"
  } else if (jugada == 2) {
    resultado = "Papel 馃搫"
  } else if (jugada == 3) {
    resultado = "Tijera 鉁傦笍"
  } else {
    resultado = "MAL ELEGIDO"
  }
  return resultado
}

//declaraci贸n de funci贸n quien gana
function combate(pc, jugador) {
  let ganador = ""
  if (pc == jugador) {
    ganador = "EMPATE 馃槓"
    empates = empates + 1
  } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
    ganador = "GANASTE 馃弳"
    triunfos = triunfos + 1;
  } else {
    ganador = "PERDISTE 馃槥"
    perdidas = perdidas + 1;
  }
  return ganador
}

// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
//invocaci贸n de funci贸n para que el pc eliga aleatoriamente
let pc = 0
let triunfos = 0
let perdidas = 0
let empates = 0

//CICLO
// mientras triunfos y perdidas sean menor que 3
while (triunfos < 3 && perdidas < 3) {
  // cada vez que entra tienen que elegir otra opcion
  pc = aleatorio(1, 3)
  jugador = prompt("Elige: 1 para 馃, 2 para 馃搫, 3 para 鉁傦笍")

  //invocaci贸n de la elecci贸n del PC
  alert("PC elige: " + eleccion(pc));
  //invocaci贸n de la elecci贸n del USUARIO
  alert("Tu eliges: " + eleccion(jugador));

  //invocaci贸n del COMBATE
  alert(combate(pc, jugador));
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces. Empates " + empates + " veces.")
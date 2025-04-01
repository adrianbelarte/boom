let nJugador = 0;
let nOrdenador = 0;
let contador = 5;
let inicio = false;
const userInput = document.getElementById(`userInput`)
const countdown = document.getElementById(`countdown`)
const result = document.getElementById(`result`)
const restart = document.getElementById(`restart`)

// generar numero aleatorio del 1 al 3 y cuenta atras de 5s
function nRamdom(){
    return Math.floor(Math.random() * 3 + 1);
}


//comparar numero aleatorio con el numero introducido por el jugador
function resultado(nJ, nO) {
    if (nJ === nO) {
      result.innerHTML = `
        <p class="green">¡Has salvado el mundo!</p>
        <p>nIntroducido: ${nJugador}, nBomba: ${nOrdenador}</p>
      `;
    } else {
      result.innerHTML = `
        <p class="red">¡La bomba ha explotado!</p>
        <p>nIntroducido: ${nJugador}, nBomba: ${nOrdenador}</p>
      `;
    }
  }
  
//Si coinciden, se muestra un mensaje de "¡Has salvado el mundo!", de lo contrario, 
// se muestra "La bomba ha estallado"
function iniciarJuego(){
    if(nJugador >= 1 && nJugador <= 3 && !inicio){
        inicio = true;
        cuentaAtras();
    }
}
//mostrar los 2 numeros pasado 5s
function cuentaAtras(){
    countdown.innerText = contador;
    nOrdenador = nRamdom();
    
    const intervalo = setInterval(() => {
        countdown.innerText = contador;
        if(contador === 0){
            clearInterval(intervalo);
            resultado(nJugador, nOrdenador);
        }
        contador--;
    }, 1000);
}

// juego
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        this.blur();
    }
});
document.getElementById("userInput").addEventListener("blur", function() {
    nJugador = parseInt(this.value);
    iniciarJuego();
});

//reiniciar el juego con el botono reiniciar juego
restart.addEventListener("click", function() {
    nJugador = 0;
    nOrdenador = 0;
    contador = 5;
    inicio = false;
    userInput.value = "";
    countdown.innerText = "";
    result.innerText = "";
});
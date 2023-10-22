console.log("Hola a todos!! :)")
//Capturamos los botones de dados
const dado1 = document.querySelector("#dado1")
const dado2 = document.querySelector("#dado2")
dado1.addEventListener("click", moverFicha1)
dado2.addEventListener("click", moverFicha2)

// Asignamos el valor de la casilla donde han de empezar
let numCasillaF1 = 1
let numCasillaF2 = 1

// Estas son las fichas
ficha1=`<div class="ficha jugador1"></div>`
ficha2=`<div class="ficha jugador2"></div>`

//Creamos la funcion para tirar dado1
function tirarDado1(){
    //Creamos numero aleatorio
    let randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)
    // Sumamos el numero aleatorio al numero que teniamos
    numCasillaF1 = numCasillaF1 + randomNumber
    console.log(numCasillaF1)
}

//Creamos la funcion para tirar dado2
function tirarDado2(){
    //Creamos numero aleatorio
    let randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)
    // Sumamos el numero aleatorio al numero que teniamos
    numCasillaF2 = numCasillaF2 + randomNumber
    console.log(numCasillaF2)
}

//Creamos la funcion para mover la ficha 1
function moverFicha1(){
    // Creamos una variable para calcular cuantas casillas has de volver atras (la usamos mas adelante)
    let diferencia = 1
    // Creamos una variable que se usa para resetear tu casilla
    reset1= `#casillas1 #c${numCasillaF1}`
    reset2= `#casillas2 #c${numCasillaF2}`

    // seleccionamos casilla actual
    selector= `#casillas1 #c${numCasillaF1}`
    //quitamos la ficha de donde esta actualmente
    document.querySelector(selector).innerHTML=''
    // llamamos a la funcion
    tirarDado1()
    // si casilla es menor que 20 que se pinte la ficha
    if(numCasillaF1<20){
        // pintamos la ficha
        selector= `#casillas1 #c${numCasillaF1}`
        document.querySelector(selector).innerHTML = ficha1
    }

    // si la casillaf1 llega a la de su rival, su rival vuelve al inicio
    if(numCasillaF1==numCasillaF2){
        //hacemos volver a la ficha rival al inicio
        selector= `#casillas2 #c${numCasillaF2}`
        document.querySelector(selector).innerHTML=''
        numCasillaF2 = 1
        selector= `#casillas2 #c${numCasillaF2}`
        document.querySelector(selector).innerHTML = ficha2
    }

    // si nos pasamos de la casilla 20 nos hace volver
    if(numCasillaF1>20){
        // pintamos la casilla
        diferencia = numCasillaF1 - 20
        numCasillaF1 = 20 - diferencia
        selector= `#casillas1 #c${numCasillaF1}`
        document.querySelector(selector).innerHTML = ficha1
    }

    // si la casilla cae en 20 directamente has ganado
    if(numCasillaF1==20){
        // Quitamos las fichas de donde estaban en el tablero
        document.querySelector(reset1).innerHTML=''
        document.querySelector(reset2).innerHTML=''
        if(confirm("Felicidades Jugador 1, Has ganado!!! Quieres reiniciar partida?") == true){
            // reseteamos las casillas al inicio en caso de darle que si
            numCasillaF1 = 1
            numCasillaF2 = 1
            reset1= `#casillas1 #c${numCasillaF1}`
            reset2= `#casillas2 #c${numCasillaF2}`
            document.querySelector(reset1).innerHTML = ficha1
            document.querySelector(reset2).innerHTML = ficha2
        }
    }   
}

//Creamos la funcion para mover ficha 2
function moverFicha2(){
    // Creamos una variable para calcular cuantas casillas has de volver atras (la usamos mas adelante)
    let diferencia = 1
    // Creamos una variable que se usa para resetear tu casilla
    reset1= `#casillas1 #c${numCasillaF1}`
    reset2= `#casillas2 #c${numCasillaF2}`

    // seleccionamos casilla actual
    selector= `#casillas2 #c${numCasillaF2}`
    document.querySelector(selector).innerHTML=''
    tirarDado2()
    if(numCasillaF2<20){
        selector= `#casillas2 #c${numCasillaF2}`
        document.querySelector(selector).innerHTML = ficha2
    }

    if(numCasillaF2==numCasillaF1){
        selector= `#casillas1 #c${numCasillaF1}`
        document.querySelector(selector).innerHTML=''
        numCasillaF1 = 1
        selector= `#casillas1 #c${numCasillaF1}`
        document.querySelector(selector).innerHTML = ficha1
    }

    if(numCasillaF2>20){
        diferencia = numCasillaF2 - 20
        numCasillaF2 = 20 - diferencia
        selector= `#casillas2 #c${numCasillaF2}`
        document.querySelector(selector).innerHTML = ficha2
    }

    if(numCasillaF2==20){
        document.querySelector(reset1).innerHTML=''
        document.querySelector(reset2).innerHTML=''
        if(confirm("Felicidades Jugador 2, Has ganado!!! Quieres reiniciar partida?") == true){
            numCasillaF1 = 1
            numCasillaF2 = 1
            reset1= `#casillas1 #c${numCasillaF1}`
            reset2= `#casillas2 #c${numCasillaF2}`
            document.querySelector(reset1).innerHTML = ficha1
            document.querySelector(reset2).innerHTML = ficha2
        }
    }
}

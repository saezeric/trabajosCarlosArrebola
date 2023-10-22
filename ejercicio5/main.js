console.log("Hola a todos!! :)")

const dado1 = document.querySelector("#dado1")
const dado2 = document.querySelector("#dado2")
dado1.addEventListener("click", moverFicha1)
dado2.addEventListener("click", moverFicha2)

let numCasillaF1 = 1
let numCasillaF2 = 1

ficha1=`<div class="ficha jugador1"></div>`
ficha2=`<div class="ficha jugador2"></div>`

function tirarDado1(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)
    numCasillaF1 = numCasillaF1 + randomNumber
    console.log(numCasillaF1)
}

function tirarDado2(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    console.log(randomNumber)
    numCasillaF2 = numCasillaF2 + randomNumber
    console.log(numCasillaF2)
}

function moverFicha1(){
    let diferencia = 1
    reset1= `#casillas1 #c${numCasillaF1}`
    reset2= `#casillas2 #c${numCasillaF2}`


    selector= `#casillas1 #c${numCasillaF1}`
    document.querySelector(selector).innerHTML=''
    tirarDado1()
    if(numCasillaF1<20){
        selector= `#casillas1 #c${numCasillaF1}`
        document.querySelector(selector).innerHTML = ficha1
    }

    if(numCasillaF1==numCasillaF2){
        selector= `#casillas2 #c${numCasillaF2}`
        document.querySelector(selector).innerHTML=''
        numCasillaF2 = 1
        selector= `#casillas2 #c${numCasillaF2}`
        document.querySelector(selector).innerHTML = ficha2
    }

    if(numCasillaF1>20){
        diferencia = numCasillaF1 - 20
        numCasillaF1 = 20 - diferencia
        selector= `#casillas1 #c${numCasillaF1}`
        document.querySelector(selector).innerHTML = ficha1
    }

    if(numCasillaF1==20){
        document.querySelector(reset1).innerHTML=''
        document.querySelector(reset2).innerHTML=''
        if(confirm("Felicidades Jugador 1, Has ganado!!! Quieres reiniciar partida?") == true){
            numCasillaF1 = 1
            numCasillaF2 = 1
            reset1= `#casillas1 #c${numCasillaF1}`
            reset2= `#casillas2 #c${numCasillaF2}`
            document.querySelector(reset1).innerHTML = ficha1
            document.querySelector(reset2).innerHTML = ficha2
        }
    }   
}

function moverFicha2(){
    diferencia = 1
    reset1= `#casillas1 #c${numCasillaF1}`
    reset2= `#casillas2 #c${numCasillaF2}`


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
console.log("HOLA MUNDO!!")

// Captamos el boton de enviar de los numeros aleatorios
const btnNumeroAleatorio = document.querySelector("#btnNumeroAleatorio")

// Captamos el evento click al darle al boton enviar en numero aleatorio
btnNumeroAleatorio.addEventListener("click", aleatorio)

// FUNCION DE NUMERO ALEATORIO

function aleatorio(){
    // captamos el valor del primer input
    const num1 = document.querySelector("#num1").value
    
    // captamos el valor del segundo input
    const num2 = document.querySelector("#num2").value

    // transformo a integer mis numeros
    numero1 = parseInt(num1)
    numero2 = parseInt(num2)

    // Creamos un numero aleatorio con num1 y num2
    let randomNumber = Math.floor(Math.random() * (numero2 - (numero1-1))) + numero1

    // Mostramos el numero aleatorio por pantalla
    document.querySelector("#numeroAleatorio").innerHTML = randomNumber
}
// Captamos el boton Convertir Mayusculas
const btnMayus = document.querySelector("#mayus")

// Captamos el evento click al darle al boton Convertir Mayusculas
btnMayus.addEventListener("click", mayusculas)

// Conversion de letra normal a mayuscula
function mayusculas(){
    // Capto los caracteres de la caja de texto
    const texto = document.querySelector("#texto").value;

    // Capturamos texto que indica cuantas palabras hemos escrito
    const pLength = document.querySelector("#palabrasLength").textContent

    // Convertimos a mayusculas
    const txtMayus = texto.toUpperCase();

    // Captamos cuantas palabras hemos escrito
    const contPalabras = texto.split(" ").length
    // Captamos espacios entre palabras
    const cantPalabras = txtMayus.split(" ")

    // Dejamos que solo aparezcan 10 palabras
    if (contPalabras > 10){
        resPalabras = cantPalabras.slice(0, 10).join(" ")
        // Insertamos el texto en minusculas en el html
        document.querySelector("#resumen").innerHTML = resPalabras
    }else{
        // Insertamos el texto en minusculas en el html
        document.querySelector("#resumen").innerHTML = txtMayus
    }

    // Creamos la linea de codigo que muestra cuantas palabras hemos escrito

    const pintaPalabras = pLength.replaceAll(pLength, `El texto contiene <strong>${contPalabras}</strong> palabras`)

    // Mostramos cuantas palabras hemos escrito
    document.querySelector("#palabrasLength").innerHTML = pintaPalabras

    // Insertamos el texto en mayusculas en el html
    document.querySelector("#texto").innerHTML = txtMayus
    document.querySelector("#txtBusqueda").innerHTML = txtMayus
}

// Captamos el boton Minusculas
const btnMinus = document.querySelector("#minus")

// Captamos el click del boton y enviamos la orden a la funcion
btnMinus.addEventListener("click", minusculas)

// Creamos la funcion que transforma el texto en minusculas
function minusculas(){
    // Capto los caracteres de la caja de texto
    const texto = document.querySelector("#texto").value;

    // Capturamos texto que indica cuantas palabras hemos escrito
    const pLength = document.querySelector("#palabrasLength").textContent

    // Convertimos a minusculas
    const txtMinus = texto.toLowerCase();
    
    // Captamos cuantas palabras hemos escrito
    const contPalabras = texto.split(" ").length
    // Captamos espacios entre palabras
    const cantPalabras = txtMinus.split(" ")

    // Dejamos que solo aparezcan 10 palabras
    if (contPalabras > 10){
        resPalabras = cantPalabras.slice(0, 10).join(" ")
        // Insertamos el texto en minusculas en el html
        document.querySelector("#resumen").innerHTML = resPalabras
    }else{
        // Insertamos el texto en minusculas en el html
        document.querySelector("#resumen").innerHTML = txtMinus
    }

    // Creamos la linea de codigo que muestra cuantas palabras hemos escrito
    const pintaPalabras = pLength.replaceAll(pLength, `El texto contiene <strong>${contPalabras}</strong> palabras`)

    // Mostramos cuantas palabras hemos escrito
    document.querySelector("#palabrasLength").innerHTML = pintaPalabras

    // Insertamos el texto en minusculas en el html
    document.querySelector("#texto").innerHTML = txtMinus
    document.querySelector("#txtBusqueda").innerHTML = txtMinus    
}


// Buscador de palabras que coincidan

// Captamos en boton buscar
const btnBuscar = document.querySelector("#btnBuscar")

// Captamos el evento click del boton buscar
btnBuscar.addEventListener("click", buscador)

// Creamos la funcion buscador que buscara las coincidencias que nostros busquemos
function buscador(){
    // Captamos el valor del input
    const captarCoincidencia = document.querySelector("#buscarCoincidencia").value

    // Captamos el texto de ejemplo Lorem ipsum
    const txtBusqueda = document.querySelector("#txtBusqueda").textContent

    // Captamos el texto que nos indica cuantas coincidencias ha captado
    const numeroCoincidencias = document.querySelector("#coincidenciasLength").textContent

    // Captamos cuantas coincidencias hay
    const contCoincidencias = (txtBusqueda.split(captarCoincidencia).length) - 1

    // Subrallamos las coincidencias
    const pintaCoincidencias = txtBusqueda.replaceAll(captarCoincidencia, `<span class="bg-primary text-light">${captarCoincidencia}</span>`)

    // Pintamos el html para mostrar cuales son las coincidencias
    document.querySelector("#txtBusqueda").innerHTML = pintaCoincidencias


    // Creamos la linea de codigo para que muestre cuantas coincidencias ha encontrado
    const pNumeroCoincidencias = numeroCoincidencias.replaceAll(numeroCoincidencias, `He encontrado <strong>${contCoincidencias}</strong> coincidencias`)

    // Pintamos el HTML para mostrar cuantas coincidencias tenemos
    document.querySelector("#coincidenciasLength").innerHTML = pNumeroCoincidencias
}

// Captamos el boton nombre
const btnNombre = document.querySelector("#btnNombre")
// Captamos el boton fecha
const btnFecha = document.querySelector("#btnFecha")

// Escuchamos el evento click de nuestro boton nombre
btnNombre.addEventListener("click", nombreGuion)

// Creamos la funcion que cambia los espacios por guiones
function nombreGuion(){
    const nombrePersona = document.querySelector("#nombrePersona").value

    // Cambiamos todos los espacios por guiones
    nConGuiones = nombrePersona.replaceAll(" ", "-")

    // Imprimimos el nombre con guiones
    const nConvertido = nombrePersona.replaceAll(nombrePersona, `Nombre convertido: <strong>${nConGuiones}</strong>`)

    document.querySelector("#nombreConvertido").innerHTML = nConvertido
}

// Escuchamos el evento click del boton fecha
btnFecha.addEventListener("click", fechaGuion)

// Creamos la funcion de fecha que cambia las / por guiones 
function fechaGuion(){
    const fDate = document.querySelector("#fechaDate").value
    const partirFecha = fDate.split("/")

    // Creamos un array de dia mes y año
    const dia = partirFecha[0]
    const mes = partirFecha[1]
    const anio = partirFecha[2]

    // Creamos la variable que capta la fecha
    const fNueva = new Date(anio, mes, dia)

    // Imprimimos la fecha por pantalla
    const fConvertida = `Fecha convertida: <strong>${fNueva.getDate()}-${fNueva.getMonth()}-${fNueva.getFullYear()}</strong>`
    document.querySelector("#fechaConvertida").innerHTML = fConvertida
}

// Captamos el boton de generar contraseña
const btnPass = document.querySelector("#btnPass")

// Escuchamos el evento click de generar contraseña
btnPass.addEventListener("click", contraseñaAuto)

// Creamos una funcion que crea constraseñas automaticas
function contraseñaAuto(){
    // Contador no mas de 10
    const cont = 10
    // Creamos una variable modificable vacia 
    let passwd = ""

    // Iteracion para introducir contraseña
    for (let i = 0; i < cont; i++){
        // Multiplicamos por el numero de caracteres
        const letraRand = Math.floor(Math.random() * 26)
        // Seleccionamos en 50/50 si queremos que sea Mayus o Minus
        const mayus = Math.random() < 0.5
        // Seleccionamos entre el incio del codePointA y el codePointZ
        const letraRandSelec = mayus ? 65 : 97
        // Guardamos contraseña
        passwd += String.fromCodePoint(letraRand + letraRandSelec)
    }

    // Imprimimos contraseña
    console.log(passwd)
    document.querySelector("#contraseña").innerHTML = passwd
}

// Captamos el boton emoji
const btnEmoji = document.querySelector("#btnEmoji")
// Escuchamos el evento click de btnEmoji
btnEmoji.addEventListener("click", emojiAuto)

// Creamos la funcion que mostrara un emoji Random
function emojiAuto(){
    const emoInicial = 0x1F600
    const emoFinal = 0x1F64F

    const emojiRand = Math.floor(Math.random() * (emoFinal - emoInicial + 1)) + emoInicial
    const emojiFinal = String.fromCodePoint(emojiRand)

    const emojiDiv = `${emojiFinal}`
    document.querySelector("#emojiDiv").innerHTML = emojiDiv
}
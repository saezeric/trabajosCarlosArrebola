console.log("Bienvenidos a Historia 2!!!")
// Creamos la variable nick y la declaramos vacía
const nick = ""

// Creamos la funcion modificaNick que nos transforma el texto con _ y MAYUS
function modificaNick(nick){
    // Hacemos un if para dar valor nulo si no hay info, y en case de tener info devolverla transformada
    if(nick != ""){
        // Eliminamos los espacios en blaco del principio y del final
        nick = nick.trim()
        // Reemplazamos los espacios centrales por barras bajas
        nick = nick.replace(" ","_")
        // Convertimos todo el texto a Mayus
        nick = nick.toUpperCase()
        // Devolvemos la variable utilizada
        return nick
    }else{
        // Alert para indicar que hay que escribir un Nick y no dejarlo en blanco
        alert("El nick no pot estar en blanc, escriba un Nick")
        // Devolvemos nulo
        return null
    }
}

const data = ""

function meses(numMes){
    // Declaramos todos los meses existentes
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    // Devolvemos los valores
    return meses[numMes]
}

function modificaData(data){
    // Dividimos el contenido que este a cada lado de T y hacemos un array para saber cual es cada parte  
    const partes = data.split("T");
    // Dividimos el contenido para distinguirlo por cada barra que haya y lo almacenamos en una variable con diferente nombre
    const fechas = partes[0].split("/");
    // Dividimos el contenido para distinguirlo por cada : que haya y lo almacenamos en una variable con diferente nombre
    const horas = partes[1].split(":");
    // Mostramos el contenido a traves de lo que almacenamos en fechas
    const año = `${fechas[0]}`;
    // Convertimos meses a integer y le restamos 1 para que los meses en vez de ser 1-12 sean 0-11
    const mes = meses(parseInt(fechas[1])-1);
    // Añadimos de fechas el dia
    const dia = fechas[2];
    // Añadimos la hora del array horas
    const hora = horas[0];
    // Añadimos los minutos del array horas
    const minutos = horas[1];
    // Añadimos los segundos del array segundos
    const segundos = horas[2];
    // Creamos el contenido final ya formado y lo devolvemos para mostrarlo
    const fechaFormateada = `${dia} ${mes} ${año} - ${hora}:${minutos}:${segundos}`;
    return fechaFormateada;
}

// Creo la variable objecteDate con una fecha dentro para mostrar el contenido mas adelante
const objecteDate = new Date("2023/08/12 12:12:12")

// Creamos la funcion que modifica la segunda fecha
function modificaData2(objecteDate){
    // Creamos la funcion que nos mostrara el resultado por pantalla
    const result = `${objecteDate.getFullYear()}/${(objecteDate.getMonth()).toString()}/${objecteDate.getDate()}T${objecteDate.getHours()}:${objecteDate.getMinutes()}:${objecteDate.getSeconds()}`;
    // Devuelvo el resultado para mostrarlo
    return result
}

// Declaro la variable dataText en vacio para añadirla yo mas tarde por consola
const dataText = ""

// Creo la funcion que me dice los dias de diferencia entre una fecha y la fecha actual
function dias(dataText) {
    // Pasamos la fecha a milisegundos con Date.parse, todo ello para calcular la diferencia de dias mas adelante
    const date = new Date(Date.parse(dataText));
    // Si date es diferente de date, es decir, que es nulo o indefinido, aparecera lo siguiente:
    if (!date) {
    // Devuelve el contenido de su interior
      return {
        // Hace que el valor de error sea verdadero
        error: true,
        // Muestra un mensaje por pantalla
        missatge: "El format no és correcte"
      }
    }
    // Calculamos la diferencia entre la fecha de hoy y la fecha que le hemos dado
    const diff = Date.now() - date.getTime();
    // Devolvemos los valores despues de haber redondeado a la baja, y haber dividido la diferencia entre el numero de milisegundos en un día
    // 1000 = milisegundos, 60 = segundos, 60 = minutos, 24 = horas
    diasDiff = Math.floor(diff / (1000 * 60 * 60 * 24))
    return diasDiff + " días"
}

// Creo el objeto dades
dades = {
    // Creo el objeto partidas
    // Definimos la información de las partidas
    partidas : [
        {	
            avata: 'imagen1.png',
            nick: 'MANOLO',
            puntuacion: 124561,
            fecha: '23/12/05T12:12:00'
        },
        {
            avatar: 'imagen2.png',
            nick: 'PEDRA',
            puntuacion: 1561,
            fecha: '23/09/05T13:12:00'
        }
    ],
    // Creo el objeto ranking
    // Definimos la información de los rankings
    ranking : [
        {	
            avatar: 'imagen1.png',
            nick: 'MANOLO',
            puntuacion: 124561
        },
        {
            avatar: 'imagen2.png',
            nick: 'PEDRA',
            puntuacion: 1561
        }
    ],
}


// Creamos un objeto ls que contiene lo siguiente:
const ls = {
    // Defino objeto setDades que introduce dades dentro de un JSON
    setDades: function(dades) {
        // Convierto dades a formato JSON y lo guardo en una variable jsonIfy para guardarlo en localStorage
        const jsonIfy = JSON.stringify(dades)
        // Guardo en localStorage
        localStorage.setItem('tetris_dades', jsonIfy);
        // Devuelvo true para confirmar que la operacion se ha realizado correctamente
        return true;
    },
    // Definimos el método getDades
    getDades: function() {
        // Obtenemos el valor tetris_dades del localStorage
        const tDades = localStorage.getItem('tetris_dades');
        if (!tDades){
            // Devolvemos un valor vacio ya que no hemos captado tDades
            return {}
        }else{
            // Si esta tDades en el localStorage, la convertimos de JSON a objeto y devolvemos.
            const jDades = JSON.parse(tDades)
            // Devuelvo la información captada
            return jDades
        }
    }
}

partida = {
    avatar: 'imagen3.png',
    nick: 'MIGUEL',
    puntuacion: 1430,
    fecha: '22/08/05T11:11:50'
}

function registrePartidas(partida){
    // Obtenemos los datos de nuestro localStorage
    const datos = ls.getDades()
    // Empujamos el contenido de partidas dentro del objeto datos.partidas
    datos.partidas.push(partida)
    // Metemos en localStorage el contenido que teniamos antes, mas el nuevo que hemos añadido
    ls.setDades(datos)
    console.log(datos)
    if (datos){
        return true
    }else{
        return {}
    }    
}
    
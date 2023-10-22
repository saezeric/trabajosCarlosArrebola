console.log("Hola a todos!!")

// Creo un boton para captar los valores y usar la función pintatabla
const btn = document.querySelector("#btn")
// Capto evento click de Boton
btn.addEventListener("click", pintaTabla)

// Array bd creado
let bd = []

// creamos una funcion que inserta los datos en DB
function insertData(){
    // captamos todos los valores
    const nombre = document.querySelector("#name").value
    const ap1 = document.querySelector("#ap1").value
    const ap2 = document.querySelector("#ap2").value
    const dni = document.querySelector("#dni").value
    const urlImagen = document.querySelector("#url").value

    // Unimos los apellidos y el nombre
    const apFull = `${ap1} ${ap2}`
    const nameFull = `${nombre} ${ap1} ${ap2}`

    // Creamos array usuario
    let usuario = 
        {
            urlImagen,
            nombre,
            apFull,
            dni
        }

    // Empujamos el array usuario a BD
    bd.push(usuario)

    // Mostramos los valores
    document.querySelector("#fullName").innerHTML = nameFull
    document.querySelector("#fullDni").innerHTML = dni
    document.querySelector("img").setAttribute("src", urlImagen)
}

// Creamos la funcion
function pintaTabla(event){
    event.preventDefault()
    // insertamos la funcion anterior para tener los valores
    insertData();

    // Creamos una id para despues iterar con ella
    let id = 1
    // Empezamos a insertar HTML
    let tabla = ``

    //Iteramos para meter en la tabla a las diferentes personas
    bd.forEach(element =>{
        // Terminamos de insertar HTML
        tabla += `<tr><td>${id++}</td>
        <td><img width="30" src="${element.urlImagen}" alt=""></td>
        <td>${element.nombre}</td>
        <td>${element.apFull}</td>
        <td>${element.dni}</td></tr>`
    })
    // Pintamos la tabla en la pantalla
    document.querySelector("#tBody").innerHTML = tabla
}


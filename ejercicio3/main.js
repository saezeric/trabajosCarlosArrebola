console.log("Hola a todos!!")

// Creo un boton para captar los valores y usar la función pintatabla
const btn = document.querySelector("#btn")
btn.addEventListener("click", pintaTabla)

let bd = []

function insertData(){
    
    const nombre = document.querySelector("#name").value
    const ap1 = document.querySelector("#ap1").value
    const ap2 = document.querySelector("#ap2").value
    const dni = document.querySelector("#dni").value
    const urlImagen = document.querySelector("#url").value
    
    const apFull = `${ap1} ${ap2}`
    const nameFull = `${nombre} ${ap1} ${ap2}`

    let usuario = 
        {
            urlImagen,
            nombre,
            apFull,
            dni
        }

    bd.push(usuario)

    document.querySelector("#fullName").innerHTML = nameFull
    document.querySelector("#fullDni").innerHTML = dni
    document.querySelector("img").setAttribute("src", urlImagen)
}

function pintaTabla(event){
    event.preventDefault()
    insertData();

    let id = 1
    let tabla = ``

    bd.forEach(element =>{
        tabla += `<tr><td>${id++}</td>
        <td><img width="30" src="${element.urlImagen}" alt=""></td>
        <td>${element.nombre}</td>
        <td>${element.apFull}</td>
        <td>${element.dni}</td></tr>`
    })

    document.querySelector("#tBody").innerHTML = tabla
}


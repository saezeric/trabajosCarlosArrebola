console.log("Hola a todos!!")

function pintaRanking(){
let ranking= `
<h2 class="text-center text-light">Ranking</h2>
    <table class="table table-dark align-middle">
        <theader>
            <tr class="bg-dark">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </theader>
        <tbody>
            <tr>
                <td class="fs-2">1</td>
                <td><img width="50" src="https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg" alt="avatar" /></td>
                <td>ANDER</td>
                <td>5500</td>
            </tr>
            <tr>
                <td class="fs-2">2</td>
                <td><img width="50" src="https://www.svgrepo.com/show/384683/account-avatar-profile-user-8.svg" alt="avatar" /></td>
                <td>MARIANO</td>
                <td>4200</td>
            </tr>
            <tr>
                <td class="fs-2">3</td>
                <td><img width="50" src="https://www.svgrepo.com/show/384671/account-avatar-profile-user-14.svg" alt="avatar" /></td>
                <td>CLARA</td>
                <td>4000</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
`

document.querySelector("#ranking").innerHTML = ranking
}

const partidas = [{
    avatar: "https://www.svgrepo.com/show/384679/account-avatar-profile-user-3.svg",
    nick: "Eric",
    puntos: 1990,
    fecha: "01 OCTUBRE 2023"
},
{
    avatar: "https://www.svgrepo.com/show/384684/account-avatar-profile-user-15.svg",
    nick: "Angel",
    puntos: 1923,
    fecha: "29 SEPTIEMBRE 2023"
},
{
    avatar: "https://www.svgrepo.com/show/384682/account-avatar-profile-user-10.svg",
    nick: "Mari Carmen",
    puntos: 2039,
    fecha: "10 Agosto 2023"
}]

function pintaTabla(partidas){
    let tabla=`
    <h2 class="text-center text-light">Partidas</h2>
        <div class="input-group mb-3">
            <input
                type="text"
                class="form-control"
                placeholder="Buscador"
                aria-label="Buscador"
                aria-describedby="button-addon2"
            />
            <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
            >
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <table class="table table-dark">
            <theader>
                <tr>
                    <td></td>
                    <td>Nick <i class="bi bi-arrow-up-square"></i></td>
                    <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
                    <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
                </tr>
            </theader>
            <tbody>`
                    
        partidas.forEach(element => {
            tabla+=`
            <tr>
                <td><img width="50" src="${element.avatar}" alt="avatar" /></td>
                <td>${element.nick}</td>
                <td>${element.puntos}</td>
                <td>${element.fecha}</td>
            </tr>
            `
        });
                    
            tabla+= `
            </tbody>
            <tfoot></tfoot>
        </table>
    `
document.querySelector("#partidas").innerHTML = tabla
console.log(tabla)
}

const datosEjemploPartida = {
    avatar:"https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg",
    nick: "MANUEL",
    puntos: 100,
    fecha:"21 MAYO 2023"
}

function insertaNuevaPartida(partidas){
    console.log("Guardando partida")
    partidas.push(datosEjemploPartida)
    console.log(partidas)
}

function pintaDatosPartida(partidas){
    if (confirm("Quieres GUARDAR PARTIDA?") == true) {
        
        insertaNuevaPartida(partidas)
        pintaTabla(partidas)

      } else {
        pintaTabla(partidas)
        console.log("No se ha guardado ninguna partida :D");
      }
}

console.log(pintaRanking())
console.log(pintaDatosPartida(partidas))
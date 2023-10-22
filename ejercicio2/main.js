// Capto el boton
const boton = document.querySelector("#boton")
// Escucho el click de boton
boton.addEventListener("click", enviar)

// Creamos la funcion
function enviar(event) {
  event.preventDefault()
  // Captamos el nombre
  const nombre = document.querySelector("#name")
  // Capto el valor de nombre
  const valName = nombre.value
  console.log(valName)

  // Captamos el apellido
  const ap1 = document.querySelector("#ap1")
  // Captamos el valor de apellido
  const valAp1 = ap1.value
  console.log(valAp1)

  // Captamos el 2 apellido
  const ap2 = document.querySelector("#ap2")
  // Captamos el valor del 2 apellido
  const valAp2 = ap2.value
  console.log(valAp2)

  // Captamos el DNI
  const dni = document.querySelector("#dni")
  // Captamos el valor de DNI
  const valDni = dni.value
  console.log(valDni)

  // Captamos la URL
  const url = document.querySelector("#url")
  // Captamos el valor de la URL
  const valUrl = url.value
  console.log(valUrl)

  // Juntamos todo el nombre para hacer un nombre completo
  const nameFull = `${valName} ${valAp1} ${valAp2}`

  // Imprimimos por pantalla los valores
  document.querySelector("#fullName").innerHTML = nameFull
  document.querySelector("#fullDni").innerHTML = valDni
  document.querySelector("img").setAttribute("src", valUrl)
}

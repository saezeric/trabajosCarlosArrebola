// Capto los valores

const boton = document.querySelector("#boton")

boton.addEventListener("click", enviar)

function enviar(event) {
  event.preventDefault()
  const nombre = document.querySelector("#name")
  const valName = nombre.value
  console.log(valName)

  const ap1 = document.querySelector("#ap1")
  const valAp1 = ap1.value
  console.log(valAp1)

  const ap2 = document.querySelector("#ap2")
  const valAp2 = ap2.value
  console.log(valAp2)

  const dni = document.querySelector("#dni")
  const valDni = dni.value
  console.log(valDni)

  const url = document.querySelector("#url")
  const valUrl = url.value
  console.log(valUrl)

  const nameFull = `${valName} ${valAp1} ${valAp2}`


  document.querySelector("#fullName").innerHTML = nameFull
  document.querySelector("#fullDni").innerHTML = valDni
  document.querySelector("img").setAttribute("src", valUrl)
}

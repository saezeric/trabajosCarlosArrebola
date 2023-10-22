// console.log('Hola desde main.js');

// Capturo el elemento input
const input1 = document.querySelector("#num1");
// Capturo su valor
const valorInput1 = input1.value;

const input2 = document.querySelector("#num2");
const valorInput2 = input2.value;

// Capturar el boton
const botonSumar = document.querySelector("#botonSumar");

// Capturar evento click del boton y llamamos a una funcion

botonSumar.addEventListener("click", sumar);

// Funcion sumar: suma valores de los inputs y los muestra por consola

function sumar() {
  // Capturo el elemento input
  const input1 = document.querySelector("#num1");
  // Capturo su valor
  const valorInput1 = input1.value;
  // Cambio su valor por integer
  const valorInput1Num = parseInt(valorInput1);
  // Capto el contenido de input2
  const input2 = document.querySelector("#num2");
  // Capto su valor
  const valorInput2 = input2.value;
  // Cambio su valor a integer
  const valorInput2Num = parseInt(valorInput2);
  // Sumo los valores
  const res = valorInput1Num + valorInput2Num;
  // Muestro el valor
  const mostrarRes = document.querySelector("#resultado");
  mostrarRes.value = res;
}
// Escucho el evento click de BOTON RESTAR
botonRestar.addEventListener("click", restar);
// Creo la funcion restar
function restar() {
  // Capturo el elemento input
  const input1 = document.querySelector("#num1");
  // Capturo su valor
  const valorInput1 = input1.value;
  // Cambio su valor por integer
  const valorInput1Num = parseInt(valorInput1);
  // Capto el contenido de input2
  const input2 = document.querySelector("#num2");
  // Capturo su valor
  const valorInput2 = input2.value;
  // Cambio su valor por integer
  const valorInput2Num = parseInt(valorInput2);

  // Resto los valores
  const res = valorInput1Num - valorInput2Num;
  
  // Muestro los valores
  const mostrarRes = document.querySelector("#resultado");
  mostrarRes.value = res;
}

// Eschuco el evento click del boton Multiplicar
botonMultiplicar.addEventListener("click", multiplicar);

function multiplicar() {
  // Capto valor input1
  const input1 = document.querySelector("#num1");
  // Capturo su valor
  const valorInput1 = input1.value;
  // Cambio su valor por integer
  const valorInput1Num = parseInt(valorInput1);
  
  // Capto valor input2
  const input2 = document.querySelector("#num2");
  // Capturo su valor
  const valorInput2 = input2.value;
  // Cambio su valor por integer
  const valorInput2Num = parseInt(valorInput2);

  // Multiplico los valores
  const res = valorInput1Num * valorInput2Num;
  // Muestro resultado
  const mostrarRes = document.querySelector("#resultado");
  mostrarRes.value = res;
}

// Escucho el evento click de boton dividir
botonDividir.addEventListener("click", dividir);

function dividir() {
  // Capto valor input1
  const input1 = document.querySelector("#num1");
  // Capturo su valor
  const valorInput1 = input1.value;
  // Cambio su valor por integer
  const valorInput1Num = parseInt(valorInput1);
  // Capto valor input2
  const input2 = document.querySelector("#num2");
  // Capturo su valor
  const valorInput2 = input2.value;
  // Cambio su valor por integer
  const valorInput2Num = parseInt(valorInput2);

  // Multiplico los valores
  const res = valorInput1Num / valorInput2Num;
  // Muestro resultado
  const mostrarRes = document.querySelector("#resultado");
  mostrarRes.value = res;
}

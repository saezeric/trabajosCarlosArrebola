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
  const valorInput1Num = parseInt(valorInput1);

  const input2 = document.querySelector("#num2");
  const valorInput2 = input2.value;
  const valorInput2Num = parseInt(valorInput2);

  const res = valorInput1Num + valorInput2Num;

  const mostrarRes = document.querySelector("#resultado");
  mostrarRes.value = res;
}

botonRestar.addEventListener("click", restar);

function restar() {
  const input1 = document.querySelector("#num1");
  const valorInput1 = input1.value;
  const valorInput1Num = parseInt(valorInput1);

  const input2 = document.querySelector("#num2");
  const valorInput2 = input2.value;
  const valorInput2Num = parseInt(valorInput2);

  const res = valorInput1Num - valorInput2Num;

  const mostrarRes = document.querySelector("#resultado");
  mostrarRes.value = res;
}

botonMultiplicar.addEventListener("click", multiplicar);

function multiplicar() {
  const input1 = document.querySelector("#num1");
  const valorInput1 = input1.value;
  const valorInput1Num = parseInt(valorInput1);

  const input2 = document.querySelector("#num2");
  const valorInput2 = input2.value;
  const valorInput2Num = parseInt(valorInput2);

  const res = valorInput1Num * valorInput2Num;

  const mostrarRes = document.querySelector("#resultado");
  mostrarRes.value = res;
}

botonDividir.addEventListener("click", dividir);

function dividir() {
  const input1 = document.querySelector("#num1");
  const valorInput1 = input1.value;
  const valorInput1Num = parseInt(valorInput1);

  const input2 = document.querySelector("#num2");
  const valorInput2 = input2.value;
  const valorInput2Num = parseInt(valorInput2);

  const res = valorInput1Num / valorInput2Num;

  const mostrarRes = document.querySelector("#resultado");
  mostrarRes.value = res;
}

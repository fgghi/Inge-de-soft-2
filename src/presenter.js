import sumar from "./sumador";
import multiplicar from "./multiplicador";
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const third = document.querySelector("#tercer-numero");
const fourth = document.querySelector("#cuarto-numero");
const form = document.querySelector("#sumar-form");
const multform = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");
const multdiv = document.querySelector("#resultadomult-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
multform.addEventListener("submit", (event) => {
  event.preventDefault();

  const thirdNumber = Number.parseInt(third.value);
  const fourthNumber = Number.parseInt(fourth.value);

  multdiv.innerHTML = "<p>" + multiplicar(thirdNumber, fourthNumber) + "</p>";
});

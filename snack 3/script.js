// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// I DUE NUMERI INDICANO DUE INDICI 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa
//  tra i due numeri. Non usare i metodi di array di JS 
const form = document.querySelector(".form");
const fistInput = document.querySelector(".first");
const lastInput = document.querySelector(".last");
const resultText = document.querySelector(".result-text");
const resultArray = document.querySelector(".result-array");
const ogArray = document.querySelector(".number-array");
const desc = document.querySelector(".desc");

const numbers = [];
const genRandom = () => Math.floor(Math.random() * 10) + 1;
for (let i = 0; i < 20; i++) {
  numbers.push(genRandom());
};
ogArray.innerHTML = numbers;

const filterByIndex = (array, first, last) => {
  if (last < first) {
    alert("il primo numero deve essere inferiore al secondo");
  }
  else if (last > array.length) {
    alert(`il secondo numero deve essere inferiore a ${array.length}`);
  }
  else {
    result = [];
    for (let i = first; i <= last; i++) {
      result.push(array[i]);
    }
    return result
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstIndex = parseInt(fistInput.value);
  const lastIndex = parseInt(lastInput.value);
  form.classList.add("d-none");
  const fileteredArray = filterByIndex(numbers, firstIndex, lastIndex);
  resultArray.innerHTML = fileteredArray;
  desc.innerHTML = "";
  resultText.classList.remove("d-none");
});

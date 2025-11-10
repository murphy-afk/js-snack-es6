// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// I DUE NUMERI INDICANO DUE INDICI 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa
//  tra i due numeri. Non usare i metodi di array di JS 

const ex = [1, 2, 3, 4, 5, 6, 7];
const num1 = 2;
const num2 = 5;
// const newEx = [];
// for (let i = 0; i < ex.length; i++) {
//   if (i >= num1 && i < num2) {
//     newEx.push(ex[i])
//   }
// }
// console.log(newEx);

const filterByIndex = (array, first, last) => {
  if (last > first) {
    result = [];
    for (let i = first; i <= last; i++) {
      result.push(array[i]);
    }
  }
  else {
    alert("il primo numero deve essere inferiore al secondo");
  }
  return result
};

console.log(filterByIndex(ex, num1, num2));

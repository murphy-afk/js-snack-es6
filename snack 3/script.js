// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// I DUE NUMERI INDICNAO DUE INDICI 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa
//  tra i due numeri. Non usare i metodi di array di JS 

const ex = [1, 2, 3, 4, 5, 6, 7];
const newEx = [];
const num1 = 2;
const num2 = 5;
for (let i = 0; i < ex.length; i++) {
  if (i >= num1 && i < num2) {
    newEx.push(ex[i])
  }
}
console.log(newEx);

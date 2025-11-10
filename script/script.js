// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
//  e stampiamo tutto in console.

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa
//  tra i due numeri. Non usare i metodi di array di JS 

const bicycles = [
  { name: "Pinarello Dogma F", weight: 6.7 },
  { name: "Trek Émonda SLR", weight: 6.8 },
  { name: "Specialized Tarmac SL8", weight: 6.9 },
  { name: "Canyon Aeroad CF SLX", weight: 7.1 },
  { name: "Bianchi Oltre RC", weight: 6.5 }
];

let lightestWeight = bicycles[0].weight;
let lightestBike;
for (let i = 1; i < bicycles.length; i++) {
  let curBike = bicycles[i];
  if (lightestWeight > curBike.weight) {
    lightestWeight = curBike.weight;
    lightestBike = curBike;
  }
};
console.log(lightestBike);



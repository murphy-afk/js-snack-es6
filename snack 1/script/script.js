// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

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
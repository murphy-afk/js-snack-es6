// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
//  e stampiamo tutto in console.

const genRandom = () => Math.floor(Math.random() * 10) + 1;

const teams = [
  { name: "Milan", goals: 0, fouls: 0 },
  { name: "Inter", goals: 0, fouls: 0 },
  { name: "Roma", goals: 0, fouls: 0 },
  { name: "Lazio", goals: 0, fouls: 0 },
  { name: "Manchester", goals: 0, fouls: 0 },
  { name: "Juventus", goals: 0, fouls: 0 }
];

const teamsFouls = [];
for (let i = 0; i < teams.length; i++) {
  teams[i].goals = genRandom();
  teams[i].fouls = genRandom();
  teamsFouls.push({ name: teams[i].name, fouls: teams[i].fouls });
}

console.log(teamsFouls);
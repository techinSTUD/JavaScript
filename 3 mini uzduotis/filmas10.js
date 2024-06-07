"use strict";


let movieHours = +prompt("Filmo pradzia: valandos");
let movieMin = +prompt("Filmo pradzia: minutes");
let movieTimeHours = +prompt("Filmo trukme: Valandos");
let movieTimeMin = +prompt("Filmo trukme: minutes");
let advertise = 3 * 10;
let endTime = (movieHours * 60) + movieMin;
let endTimeHours = endTime / 60
let endTimeMinutes = movieMin%60;
let hours = Math.floor(endTimeHours) % 24;


console.log(`Ivesta: Filmo pradzia ${movieHours}:${movieMin}, trukme ${movieTimeHours}:${movieTimeMin}.`);
console.log(`Gauta: Filmas pasibaigs ${hours+movieTimeHours}:${movieMin+movieTimeMin+advertise} .`);

document.querySelector(`#data`).innerHTML = `Gauta: Filmas pasibaigs ${hours+movieTimeHours}:${movieMin+movieTimeMin+advertise} .`;
"use strict";

let timeToGo, cars, remainder, ferrySize;

cars = +prompt("Automobiliu skaicius: ")
ferrySize = +prompt("I kelta telpa automobiliu: ")

timeToGo = cars / ferrySize
remainder = cars % ferrySize

console.log(`Perkels per kartu: ${Math.floor (timeToGo)}`);
console.log(`Liks neperkelta: ${remainder}`);




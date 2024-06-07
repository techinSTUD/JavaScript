"use strict";

let hour = +prompt("Iveskite valandas");
let min = +prompt("Iveskite minutes");
let sec = +prompt("Iveskite sekundes");
// if (sec > 60) {
//   const pridetiMin = Math.floor(sec / 60);
//   const pridetiSec = sec % 60;
//   console.log(pridetiMin);
//   console.log(pridetiSec);
//   min += pridetiMin;
//   sec = pridetiSec;
// }
// if (min > 60) {
//   const pridetiVal = Math.floor(min / 60);
//   const pridetiMin = min % 60;
//   console.log(pridetiVal);
//   console.log(pridetiMin);
//   hour += pridetiVal;
//   min = pridetiMin;
// }

console.log(`Ivesta: ${hour}:${min}:${sec}`);
console.log(`Gauta: ${hour}:${min}:${sec+5}`);

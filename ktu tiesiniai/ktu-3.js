"use strict";

let ct5 = +prompt("Kiek yra monetu po 5 ct? ");
let ct20 = +prompt("Kiek yra monetu po 20 ct? ");
let lt2 = +prompt("Kiek yra monetu po 2Lt? ");
let total = ct5*0.05+ct20*0.2+lt2*2
let num = total.toFixed(2)
console.log(`Taupykleje yra  ${num}  Lt.`);
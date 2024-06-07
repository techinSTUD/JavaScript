"use strict";

let cup, pack, remainder;

cup = +prompt("Puodeliu, kuriuos reikia supakuoti skaicius: ");

pack = cup / 3;
remainder = cup % 3



console.log(`Pilnu dezuciu skaicius: ${Math.floor(pack)} `);
console.log(`Nesupakuotu puodeliu skaicius: ${remainder} `);
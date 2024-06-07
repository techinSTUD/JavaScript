"use strict";

let n = +prompt("Iveskite degtuku kieki");

if (n % 4 ==0 && n>=4) {
    console.log(`Ivesta: ${n}`);
    console.log(`Gauta: Kvadrata sudaryti galima`);
}
else {
    console.log(`Kvadrato sudaryti negalima`);
}
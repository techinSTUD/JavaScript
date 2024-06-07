"use strict";

let start, spragt, ploja;

start = +prompt("Kiek zingsniu bus?");
spragt = 0;
ploja = 0;

for (let i = 1; i <= start; i++) {
  if (i % 5 === 0 && i % 10 !==0) {
    spragt += 1;
  }
  if (i % 10 === 0) {
    ploja += 1;
  }
}

console.log(`Suplojimu bus: ${ploja}`);
console.log(`Spragtelejimu bus: ${spragt}`);

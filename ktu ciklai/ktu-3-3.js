"use strict";

let snow, totalSnowFlakes, currentSnowFlakes;

currentSnowFlakes = +prompt("Kiek snaigiu nukrito per pirma sekunde?");
snow = +prompt("Kiek sekundziu snigo?");

totalSnowFlakes = 0;

for (let i = 1; i <= snow; i++) {
    totalSnowFlakes = totalSnowFlakes + currentSnowFlakes;
    currentSnowFlakes = currentSnowFlakes * 2;
}
console.log(`${totalSnowFlakes}`);



"use strict";

let aukstis, ilgis, kaina, plytuKaina, aukstisCm, ilgisCm, plytos;

aukstis = +prompt("Sienos aukstis");
ilgis = +prompt("Sienos ilgis?");
kaina = +prompt("Plytos kaina?");
aukstisCm = aukstis * 100 / 10;
ilgisCm = ilgis * 100 / 20;
plytos = aukstisCm * ilgisCm
plytuKaina = plytos * kaina
console.log(`Plytu kiekis: ${plytos} `);
console.log(`Plytos kainuos ${plytuKaina.toFixed(2)} Lt`);




"use strict";

let pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis, pamsk, pamoka;
pirmadienis = +prompt("Kiek pamoku pirmadieni?");
antradienis = +prompt("Kiek pamoku antradieni?");
treciadienis = +prompt("Kiek pamoku treciadieni?");
ketvirtadienis  = +prompt("Kiek pamoku ketvirtadieni?");
penktadienis  = +prompt("Kiek pamoku penktadieni?");
pamsk = pirmadienis+antradienis+treciadienis+ketvirtadienis+penktadienis;
pamoka = 45*pamsk;
console.log("Pamoku skaicius: " + pamsk);
console.log("Tai sudaro minuciu: " + pamoka);


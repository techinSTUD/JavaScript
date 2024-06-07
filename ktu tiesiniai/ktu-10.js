"use strict";

let nSaldainiai, aSuvalgo, kLikeDienu, dDraugai, aRinkinys, sLikutis;

nSaldainiai = +prompt("Kiek saldainiu gauna Marius?");
aSuvalgo = +prompt("Kiek suvalgo saldainiu?");
kLikeDienu = +prompt("Kiek dienu like iki kaledu?");


aRinkinys = Math.floor((nSaldainiai-aSuvalgo)*(kLikeDienu))/aSuvalgo
sLikutis = ((nSaldainiai - aSuvalgo) * (kLikeDienu)) % nSaldainiai

console.log(`${Math.floor(aRinkinys)}`);
console.log(`${sLikutis}`);
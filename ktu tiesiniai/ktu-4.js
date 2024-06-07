"use strict";



let tunnel, speed, v, final;
tunnel = 264;

speed = +prompt("Koks auto greitis?")
v = speed * 1000/3600
final = tunnel/v
console.log(`Automobilis tuneli pravaziuos per ${final.toFixed(2)} s`);
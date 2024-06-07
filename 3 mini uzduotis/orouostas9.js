"use strict";

let takeOfHours = +prompt("Lektuvo pakilimas: Valandos");
let takeOfMinutes = +prompt("Lektuvo pakilimas: minutes");
let tripDuration = +prompt("Kiek truks kelione minutemis?");

let landingTime = takeOfHours * 60 + takeOfMinutes + tripDuration;
let landingHours = landingTime / 60;
let landingMinutes = landingTime % 60;


let hours = Math.floor(landingHours) % 24;

console.log(`${hours}:${landingMinutes}`);

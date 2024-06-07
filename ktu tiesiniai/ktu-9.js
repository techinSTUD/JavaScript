"use strict";

let cookies, friends, peoples, allcookies, cookiesForPeople , remainder;

cookies = +prompt("Kiek sausainiu iskepe Tautvydas?");
friends = +prompt("Keli draugai dar atsinese po tiek pat sausainiu?");
peoples = +prompt("Kiek zmoniu is viso dalyvavo sventeje?");

allcookies = cookies * friends + cookies;
cookiesForPeople = allcookies / peoples;
remainder = allcookies % peoples;

console.log(`Kiekvienas gavo po ${Math.floor(cookiesForPeople)} `);
console.log(`Tautvydui papildomai gavo ${remainder}`);

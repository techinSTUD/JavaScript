"use strict";

let hAukstis, tLaikas, g,ttt   ;

hAukstis = +prompt("Is kokio aukscio issoko?");
tLaikas = +prompt("Per kiek laiko issiskleis parasiutas?");
g = 9.8;
ttt = Math.sqrt (2 * hAukstis / g);


if (tLaikas < 
    ttt) {
    console.log(`Parasiutas Issiskleis`);
} else {
    console.log(`Parasiutas neissiskleis`);
}



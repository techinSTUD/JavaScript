"use strict";

let start, end, tShirts ;

start = +prompt(`Iveskite intervalo pradzia?`);
end = +prompt(`Iveskite intervalo pabaiga?`);
tShirts = 0;

for (let i = start; i<=end; i++ ) {
    if (i % 6 === 0) {
        tShirts +=1
        
    }
}
    console.log(`Reikalingu marskineliu skaicius: ${tShirts}`);

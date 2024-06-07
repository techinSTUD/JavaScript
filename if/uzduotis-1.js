"use strict";
let sk = +prompt("Iveskite skaiciu:");
sk = Math.sqrt(sk)
if (sk >= 0) {
  console.log("Gauta: " + sk);
} else {
    console.log("Gauta: Saknies istraukti negalima, nes ivestas neigiamas skaicius");
}

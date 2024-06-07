

let price = +prompt("Iveskite prekiu kaina");
let unit = +prompt("Iveskite prekiu kieki");
let withDiscount = price * unit * 0.8;
 

if (unit >= 3) {
  console.log("Ivesta: " + price + " ir vnt. = " + unit );
  console.log("Gauta: Suma su nuolaida: " + withDiscount.toFixed(2));
}
else {
    console.log("Ivesta: " + price + " ir vnt. = " + unit );
    console.log("Gauta: Suma be nuolaidos: " + (price * unit));
}

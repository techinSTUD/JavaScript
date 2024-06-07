"use strict";


let value1,value2,value3, value4, value5, sum, overall;

value1 = +prompt("Koki 1 pazymi gavo Petriukas?");
value2 = +prompt("Koki 2 pazymi gavo Petriukas?");
value3 = +prompt("Koki 3 pazymi gavo Petriukas?");
value4 = +prompt("Koki 4 pazymi gavo Petriukas?");
value5 = +prompt("Koki 5 pazymi gavo Petriukas?");

sum = value1+value2+value3+value4+value5

overall = sum/5

if (overall > 9) {
    console.log(`Petriukas gaus 3 saldainius`);
}
else if (overall >= 7 && overall <= 9) {
    console.log(`Petriukas gaus 2 saldainius`);
}
else {
    console.log(`Petriukas gaus viena saldaini`);

}

// 5 pazymiai per pusmeti
// 9 ir daugiau  gaus 3 saldainius
// 7 ir 9  iskaitant po du saldainius
// visi like po 1 saldaini
"use strict";

let mSveria, nStebi, vSveria, bSvoris;

mSveria = +prompt("Kiek sveria varle?");
nStebi = +prompt("Kiek varliu norima stebti?");
vSveria = 5000;
bSvoris = mSveria * nStebi;


if (bSvoris > vSveria) {
  console.log(`Varliu stebejimui pakanka`);
} else {
  console.log(`Varliu stebejimui per mazai`);
}

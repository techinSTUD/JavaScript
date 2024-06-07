function calcBMI(weightKG, heightM) {
    const BMI = weightKG / heightM ** 2;
    return BMI;
}

let w = +prompt(`Iveskite  svori kilogramais`);
let h = +prompt(`Iveskite ugi metrais`);

const result = calcBMI(w, h);

console.log(Math.floor(result));
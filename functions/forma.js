// duomenu paeimimas is formos ir grazinimas html

// const bmiCalcHandler = () => {
//   let weight = +document.querySelector("#weight").value;
//   let height = +document.querySelector("#height").value;

//   let bmi = weight / height**2;

//   document.querySelector("#result").innerHTML = bmi;
// };

// const bmiForm = document.querySelector("#bmi-form");

// bmiForm.addEventListener("submit",(event) =>{
    //   event.preventDefault();
    //   bmiCalcHandler()
    // });
    
    
    const numberGeneratorHandler = () => {
        let number = document.querySelector("#number").value;
        let randomNumber = () => Math.random();
        // for (let i = 0; i < number; i++) {
        //     answer=randomNumber().toFixed(n)} ;
            document.querySelector("#result").innerHTML = answer;
        };
        
        const numGenerator = document.querySelector("num-generator");
        numGenerator.addEventListener("submit", (event) =>{
        
    event.preventDefault();
    numberGeneratorHandler()
  });


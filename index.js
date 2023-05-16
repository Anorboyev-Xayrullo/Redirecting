divisionentById ("btn").AddEvenListener("click", function (){
    let btn = document.querySelector(".submit")
let sum = document.querySelector("h2")
let summer = document.querySelector(".select0p")
let number1 = document.querySelector(".num1")
let number2 = document.querySelector(".num2")
console.log(summer);

switch (summer) {
    case "plus":
        sum.innerHTML = Number (number1) + Number (number2) 
        break;
        case "minus":
        sum.innerHTML = Number (number1) - Number (number2) 
        break;
        case "increase":
        sum.innerHTML = Number (number1) * Number (number2) 
        break;
        case "division":
        sum.innerHTML = Number (number1) / Number (number2) 
        break;
}
})
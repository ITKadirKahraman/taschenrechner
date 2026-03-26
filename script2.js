let calculationWay = document.getElementById('calculationWay');
let result = document.getElementById('result');
let buttons = document.querySelectorAll('.btn');
let operator = document.querySelectorAll('.operator');
let number = document.getElementById('number');

let firstNumber = "";
let secondNumber = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.dataset.value;
        input(value);
    })
});

function deleteLastElement() {
    calculationWay.value = calculationWay.value.slice(0, -1);
}

function clearCalculationWay() {
    document.getElementById('calculationWay').value = "";
}

function clearDisplay(){
    document.getElementById('calculationWay').value = "";
    document.getElementById('result').value = "";
}

function calculatorFor2Numbers() {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let subtotal;
    switch(operator){
        case "+":
            subtotal = num1 + num2;
            calculationWay.value = subtotal;
            break;
        case "-":
            subtotal = num1 - num2;
            calculationWay.value = subtotal;
            break;
        case "÷":
            subtotal = num1 / num2;
            calculationWay.value = subtotal;
            break;
        case "x":
            subtotal = num1 * num2;
            calculationWay.value = subtotal;
            break;
        case "%":
            subtotal = num1 * num2 / 100;
            calculationWay.value = subtotal;
            break;
        case "=":
            result.value = subtotal;
            break;
    }

    result.value = subtotal;
    firstNumber = result.toString();
    secondNumber = "";
}

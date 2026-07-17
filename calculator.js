let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.dataset.value;
        handleInput(value);
    });
});

function handleInput(value) {
    
    // clean full Display with AC
    if(value === "AC"){
        resetCalculator();
        return;
    }

    // clean last Element
    if(value === "←"){
        deleteLastElement();
        return;
    }

    if(!isNaN(value)){
        addNumber(value);
        return;
    }

    // set a operator
    switch(value){
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
        case "+/-":
            setOperator(value);
            break;
    }

    // result 
    if(value === "="){
        calculator();
        return;
    }
}

function addNumber(value) {
    if(!isSecondNumber){
        firstNumber += value;
        display.value = firstNumber;
    }else {
        secondNumber += value;
        display.value = secondNumber;
    }
}

function setOperator(value) {
    operator = value;
    isSecondNumber = true;
}

function calculator() {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    let result;

    switch(operator)
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 * num2 / 100;
            break;
    }

    display.value = result;
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isSecondNumber = false;
}

function resetCalculator() {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isSecondNumber = false;
}

function deleteLastElement() {
    if(!isSecondNumber){
        firstNumber = firstNumber.slice(0 , -1);
        display.value = firstNumber;
    }else {
        secondNumber = secondNumber.slice(0, -1);
        display.value = secondNumber;
    }
}

function deleteLastElement2() {
    display.value = display.value.slice(0, -1);
}
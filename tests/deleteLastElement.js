export function deleteLastElementFromCalculator(firstNumber, secondNumber, target) {
    switch(target) {
        case "firstNumber":
            return firstNumber.slice(0, -1);
        case "secondNumber":
            return secondNumber.slice(0, -1);
        default:
            break;
    }
}
/*
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
*/
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
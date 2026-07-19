export function deleteElementFromCalculator(firstNumber, secondNumber, isSecondNumber) {
    if(isSecondNumber) {
        return secondNumber.slice(0, -1);
    }

    return firstNumber.slice(0, -1);
}
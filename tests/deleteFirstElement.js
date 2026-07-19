export function deleteFirstFromCalculator(firstNumber, secondNumber, isSecondNumber) {
    if(isSecondNumber) {
        return secondNumber.slice(1);
    }

    return firstNumber.slice(1);
}
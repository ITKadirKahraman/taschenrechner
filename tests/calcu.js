export function calcu(firstNumber, lastNumber, operator) {
    let num1 = Number(firstNumber);
    let num2 = Number(lastNumber);
    let result;
    
    switch(operator) {
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
        default:
            break; 
    }

    return result;
}
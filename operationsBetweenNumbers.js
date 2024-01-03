function operationsBetweenNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operartor = input[2];

    switch (operartor) {
        case '+':
            if ((firstNumber + secondNumber) % 2 === 0) {
                console.log(`${firstNumber} + ${secondNumber} = ${(firstNumber + secondNumber)} - even`);
            } else {
                console.log(`${firstNumber} + ${secondNumber} = ${(firstNumber + secondNumber)} - odd`);
            }
            break;
        case '-':
            if ((firstNumber - secondNumber) % 2 === 0) {
                console.log(`${firstNumber} - ${secondNumber} = ${(firstNumber - secondNumber)} - even`);
            } else {
                console.log(`${firstNumber} - ${secondNumber} = ${(firstNumber - secondNumber)} - odd`);
            }
            break;
        case '*':
            if ((firstNumber * secondNumber) % 2 === 0) {
                console.log(`${firstNumber} * ${secondNumber} = ${(firstNumber * secondNumber)} - even`);
            } else {
                console.log(`${firstNumber} * ${secondNumber} = ${(firstNumber * secondNumber)} - odd`);
            }
            break;
        case '/':
            if (secondNumber === 0) {
                console.log(`Cannot divide ${firstNumber} by zero`);
            } else {
                console.log(`${firstNumber} / ${secondNumber} = ${(firstNumber / secondNumber).toFixed(2)}`);
            }
            break;
        case '%':
            if (secondNumber === 0) {
                console.log(`Cannot divide ${firstNumber} by zero`);
            } else {
                console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
            }
            break;
    }

}
operationsBetweenNumbers(["10",

    "12",

    "+"
]);
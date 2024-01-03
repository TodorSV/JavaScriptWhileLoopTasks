function specialNumber(input) {
    let specialNum = Number(input[0]);
    let output = '';

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (specialNum % i === 0   // Делим процентно с остатък равен на нула, за да получим псециалното число
                        && specialNum % j === 0
                        && specialNum % k === 0
                        && specialNum % l === 0) {
                        output += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(output.trim());
}
specialNumber(["3"]);

// · N да се дели на всяка една от неговите цифри без остатък.

// Пример: при N = 16, 2418 е специално число:

// · 16 / 2 = 8 без остатък

// · 16 / 4 = 4 без остатък

// · 16 / 1 = 16 без остатък

// · 16 / 8 = 2 без остатък
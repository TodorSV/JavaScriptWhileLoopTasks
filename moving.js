function moving(input) {
    let widthSpace = Number(input[0]);
    let lengthSpace = Number(input[1]);
    let heightSpace = Number(input[2]);
    let boxDimensions = widthSpace * lengthSpace * heightSpace;

    let index = 3;
    let command = input[index];
    let countPieces = 0;

    while (command !== "Done") {
        let currentBoxMove = Number(command);
        countPieces += currentBoxMove;
        if (countPieces >= boxDimensions) {
            console.log(`No more free space! You need ${countPieces - boxDimensions} Cubic meters more.`)
            break;
        }
        index++; // повишчваме индекса с 1
        command = input[index]; // вземаме следващият индекс от командата
    }
    if ( command === "Done" || countPieces <= boxDimensions){
        console.log(`${boxDimensions - countPieces} Cubic meters left.`);
    }
}

moving(["10", "1", "2",

    "4",

    "6",

    "Done"]);


// function cake(input) {
//     let width = Number(input[0]);
//     let length = Number(input[1]);
//     let cakeSize = length * width; // вземаме размера на тортата

//     let index = 2;
//     let command = input[index];
//     let countPieces = 0;

//     while (command !== 'STOP') {
//         let cakeGiven = Number(command); // Броя на раздадените парчета
//         countPieces += cakeGiven;  // събираме броя парчета, които до монета са 0 + Броя на раздадените парчета
//         if (countPieces > cakeSize) { // проверяваме дали броя на парчетата е по голям от размера на тортата
//             console.log(`No more cake left! You need ${countPieces - cakeSize} pieces more.`);
//             break;
//         }
//         index++; // повишчваме индекса с 1
//         command = input[index]; // вземаме следващият индекс от командата
//     }
//     if (command === 'STOP' && countPieces <= cakeSize) {
//         console.log(`${cakeSize - countPieces} pieces are left.`);
//     }
// }
// cake[("10", "2",
//     "2", "4", "6", "STOP")];
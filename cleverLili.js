function cleverLili(input) {
    let liliAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let stolenMoney = 0;
    let savedMoney = 0;
    let toysCounter = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= liliAge; currentAge++) {
        if (currentAge % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else {
            toysCounter++;
        }
    }
    let totalMoneyFromToys = singleToyPrice * toysCounter;
    
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney; 

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }


}

cleverLili(["10",

    "170.00",

    "6"]);
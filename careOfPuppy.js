function careOfPuppy(input) {
    let amountFoodForPuppyKg = Number(input[0]);
    let amountOfFoodPurchased = amountFoodForPuppyKg * 1000;
    let foodSum = 0; 
    let index = 1;
    let command = (input[index]);
    

    while (command !== "Adopted") { 
        let puppyEveryMeal = Number[command];
        foodSum += puppyEveryMeal;

        if (amountOfFoodPurchased < totalFood) {
            console.log(`Food is not enough. You need ${totalFood - amountOfFoodPurchased} grams more.`);
        }
        index++;
        command = input[index];
        if (amountOfFoodPurchased >= totalFood) {
            console.log(`Food is enough! Leftovers: ${amountOfFoodPurchased - totalFood} grams.`);
        }
    }

}

careOfPuppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]);

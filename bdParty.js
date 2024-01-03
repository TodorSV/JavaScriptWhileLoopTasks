
function catWallking(input) {

    let minutesWalkPerDay = Number(input[0]); // Минути разходка на ден
    let countWalkingsDaily = Number(input[1]); // брой разходки на ден
    let caloriesPerDay = Number(input[2]);

    let totalCatWalkingDaily = minutesWalkPerDay * countWalkingsDaily;// Броя на сумарните дневни разходки, минути разходка на ден по броя разходки на ден
    let totalBunredCalories = totalCatWalkingDaily * 5; // Броя на изгорените калории. сумарните дневни разходки по 5, (толкова калории гори на минута)
    // 450 калории

    let percentageCallories = caloriesPerDay / 2; //Разходката е достатъчна, ако котката изграря 50% от приетите калории. разделяме ги на две за да вземем 50 %


    if (totalBunredCalories >= percentageCallories) { // Проверяваме сбора на изгорените калории дали е по голям от приетите калории раздлено на две(50% таргет)
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBunredCalories}.`);
    } else if (totalBunredCalories < caloriesPerDay) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBunredCalories}.`);
    }
}

catWallking(["30",
"3",
"600"]);

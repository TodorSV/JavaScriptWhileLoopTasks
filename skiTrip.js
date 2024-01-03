function skiTrip(input) {
    let daysStay = Number(input[0] - 1);
    let typeOfRoom = input[1];
    let evaluation = input[2];

    let totalRentPrice = 0;

    switch (typeOfRoom) {
        case 'room for one person':
            totalRentPrice = daysStay * 18.00;
            break;
        case 'apartment':
            totalRentPrice = daysStay * 25.00;
            if (daysStay < 10) {
                totalRentPrice = totalRentPrice * 0.70;
            } else if (daysStay >= 10 && daysStay <= 15) {
                totalRentPrice = totalRentPrice * 0.65;
            } else if (daysStay > 15) {
                totalRentPrice = totalRentPrice * 0.50;
            }
            break;
        case 'president apartment':
            totalRentPrice = daysStay * 35.00;
            if (daysStay < 10) {
                totalRentPrice = totalRentPrice * 0.90;
            } else if (daysStay >= 10 && daysStay <= 15) {
                totalRentPrice = totalRentPrice * 0.85;
            } else if (daysStay > 15) {
                totalRentPrice = totalRentPrice * 0.80;
            }
            break;
    }
    if (evaluation === 'positive') {
        totalRentPrice = totalRentPrice * 1.25;
    } else {
        totalRentPrice = totalRentPrice * 0.90;
    }
    console.log(totalRentPrice.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
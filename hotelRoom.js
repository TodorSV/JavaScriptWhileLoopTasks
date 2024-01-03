function hotelRoom(input) {
    let month = input[0];
    let numberDays = Number(input[1]);

    let studioPrice = 0;
    let aptPrice = 0;

    if (month === 'May' || month === 'October') {
        studioPrice = numberDays * 50;
        aptPrice = numberDays * 65;
        if (numberDays > 7 && numberDays <= 14) {
            studioPrice = studioPrice * 0.95;
        } else if (numberDays > 14) {
            studioPrice = studioPrice * 0.70;
            aptPrice = aptPrice * 0.90;
        }
    }
    if (month === 'June' || month === 'September') {
        studioPrice = numberDays * 75.20;
        aptPrice = numberDays * 68.70;
        if (numberDays > 14) {
            studioPrice = studioPrice * 0.80;
            aptPrice = aptPrice * 0.90;
        }
    }
    if (month === 'July' || month === 'August') {
        studioPrice = numberDays * 76;
        aptPrice = numberDays * 77;
        if (numberDays > 14) {
            aptPrice = aptPrice * 0.90;
        }
    }
    console.log(`Apartment: ${aptPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May",

    "15"
]);

// not finish
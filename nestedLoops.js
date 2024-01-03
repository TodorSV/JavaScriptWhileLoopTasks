function cinemaTickets(input) {
    let index = 0;
    let command = input[index];

    let studentCounter = 0; // Броячи за всеки деин вид билети
    let kidCounter = 0;
    let standartCounter = 0;
    let totalTicketCounter = 0;  // Брояч за всички билети

    while (command !== "Finish") { // Този външен цикъл ще се грижи за преминаването през всички филми

        let name = command; // Вземаме index 0 името което е Taxi i проверяваме taxi различно ли е от Finish
        index++; // повишаваме индекса за да вземем следващият, броя на свободните места

        let freeSpaces = Number(input[index]); // 10
        index++; // Повишаваме индеска за да вземем вида билет

        let ticketType = input[index]; // Първият вид билет е "standard"
        let ticketCounter = 0; // Брояча на вида билет който ще броим

        while (ticketType !== "End") { // Ще търсим типа билети, и което е различно от "End"
            ticketCounter++; // повишаваме брояча ,все едно има един купен билет вече
            switch (ticketType) { // Проверяваме дали имаме свободно място в залата

                case "student": studentCounter++; break;  // Проверяваме вида билет и добавяме към брояча
                case "standard": standartCounter++; break;
                case "kid": kidCounter++; break;
            }
            if (ticketCounter >= freeSpaces){
                break;
            }
            index++;
            ticketType = input[index]; // вземаме следващият билет
        }
        totalTicketCounter += ticketCounter; // събираме броя на билетите
        let resultSingleFilm = ticketCounter / freeSpaces * 100; // Вземаме процента за всеки един филм колко са заетите места

        console.log(`${name} - ${resultSingleFilm.toFixed(2)}% full.`);
        // След всеки филм да се отпечата, колко процента от кино залата е пълна
        command = input[++index]; // повишаваме командата отново с един индекс

    }
    console.log(`Total tickets: ${totalTicketCounter}`); // общият брой закупени билети за всички филми
    console.log(`${(studentCounter / totalTicketCounter * 100).toFixed(2)}% student tickets.`); // процент на студентските билети
    console.log(`${(standartCounter / totalTicketCounter * 100).toFixed(2)}% standard tickets.`); // процент на стандартните билети
    console.log(`${(kidCounter / totalTicketCounter * 100).toFixed(2)}% kids tickets.`); // процент на детските билети
    // вземаме процента като съответният брояч го делим на броя на всики билети умножено по 100

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6",
 "student", "student", "student", "student", "student", "student", "Finish"]);
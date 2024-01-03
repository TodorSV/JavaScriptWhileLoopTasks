
function salary(input) {
    let openTabs = Number(input[0]);
    let workSalary = Number(input[1]);

    for (let index = 2; index < input.length; index++) {
        let currentTab = input[index];

        switch (currentTab) {
            case 'Facebook':
                workSalary -= 150;
                break;
            case 'Instagram':
                workSalary -= 100;
                break;
            case 'Reddit':
                workSalary -= 50;
                break;
        }
        if (workSalary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (workSalary > 0) {
        console.log(Math.floor(workSalary));
    }
}

salary(["10", "750",

    "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);




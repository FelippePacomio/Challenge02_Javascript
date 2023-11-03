
let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 18; // define a idade do corredor

if (runnerAge > 18) {
    registeredEarly = true; // define se o corredor se registrou cedo ou não
    raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
    console.log(`Corredor com número de corrida ${raceNumber} correrá às 9h30.`);
}

else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Corredor com número de corrida ${raceNumber} correrá às 11h00.`);
}

else if (runnerAge < 18) {
    console.log(`Corredor com número de corrida ${raceNumber} correrá às 12h30.`);
}

else if (runnerAge === 18) {
    console.log(`Corredor com número de corrida ${raceNumber} comparecer à mesa de registro.`);
}
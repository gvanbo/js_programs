let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;
let runnersAge = 15;

if (earlyRegistration && runnersAge > 17) {
    raceNumber += 1000}

if (runnersAge > 17 && earlyRegistration) {
    alert(`Your race begins at 9:30 am, your race number is ${raceNumber}`);
}  else if (runnersAge > 18 && earlyRegistration === false) {
    alert(`Late registered race begins at 11:00am.  Your race number is ${raceNumber}`);
} else {
    alert(`Youth race begins at 12:30 pm. Your race number is ${raceNumber}`)
}

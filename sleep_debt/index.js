function sleepHoursPerNight(day) {
    switch (day) {
        case 'Sunday':
            return 8;
            break;
        case 'Monday':
            return 7;
            break;
        case 'Tuesday':
            return 5;
            break;
        case 'Wednesday':
            return 7;
            break;
        case 'Thursday':
            return 5;
            break;
        case 'Friday':
            return 9;
            break;
        case 'Saturday':
            return 8;
            break;
        default:
            break;
    }
}

function simpleHoursPerNight(day, hours) {
    return `${day} gave you ${hours} of sleep`;
}

function getActualSleepHours() {
    let totalSleepHours = 0;
    totalSleepHours += sleepHoursPerNight('Sunday');
    totalSleepHours += sleepHoursPerNight('Monday');
    totalSleepHours += sleepHoursPerNight('Tuesday');
    totalSleepHours += sleepHoursPerNight('Wednesday');
    totalSleepHours += sleepHoursPerNight('Thursday');
    totalSleepHours += sleepHoursPerNight('Friday');
    totalSleepHours += sleepHoursPerNight('Saturday');
    return totalSleepHours;
}

function getIdealSleepHours() {
    const idealHours = 7.5
    return idealHours * 7
}

function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()

    if ( actualSleepHours == idealSleepHours) {
        return `That's the perfect amount of sleep`
    } else if (actualSleepHours > idealSleepHours) {
        return `You are getting more sleep than you need`
    } else {
        return `You are not getting enough sleep.` 
    }
}
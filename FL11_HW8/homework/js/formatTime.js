function formatTime(i) {
    const check = 60;
    const checkDay = 1440;
    let day = 0;
    let hours = 0;
    let minutes = 0;
    let msg;

    if (i >= checkDay) {
        day = Math.floor(i / checkDay);
        hours = i % checkDay;
        if ((hours % check) === 0 && hours <= checkDay || (hours % check) !== 0 && hours <= checkDay) {
            minutes = hours % check;
            hours = Math.floor(hours / check);
            msg = `${day} day(s) ${hours} hour(s) ${minutes} minute(s)`;
        }
    } else if (i < checkDay) {
        minutes = i % check;
        hours = Math.floor(i / check);
        msg = `${day} day(s) ${hours} hour(s) ${minutes} minute(s)`;
    }

    return msg;
}

formatTime(120);
formatTime(59);
formatTime(3601);
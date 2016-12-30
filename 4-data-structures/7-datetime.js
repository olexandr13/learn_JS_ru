function getWeekDay(date) {
    var day = date.getDay();
    if (day == 0) return 'нд';
    if (day == 1) return 'пн';
    if (day == 2) return 'вт';
    if (day == 3) return 'ср';
    if (day == 4) return 'чт';
    if (day == 5) return 'пт';
    if (day == 6) return 'сб';
}



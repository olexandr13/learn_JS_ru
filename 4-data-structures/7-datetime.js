// Имя дня недели
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


// День указанное количество дней назад
function getDateAgo(date, days) {
    var date2 = new Date(date);
    date2.setDate(date2.getDate() - days);
    return date2.getDate();
    // return date2;
}


// Количество дней в месяце
function getLastDayOfMonth(year, month) {
    var date = new Date(year, month);
    for (var i = 1; i <= 31; i++) {
        var newDate = new Date(date);
        newDate.setDate(newDate.getDate() + i);
        if (newDate.getDate() == 1) {
            return i;
        }
    }
}



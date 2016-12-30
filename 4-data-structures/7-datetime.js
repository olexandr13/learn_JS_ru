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


//Сколько секунд уже прошло сегодня?
function getSecondsToday() {
    var date = new Date();
    return (date.getHours()*3600 + date.getMinutes()*60 + date.getSeconds());
}


//Сколько секунд - до завтра?
function getSecondsToTomorrow() {
    var date = new Date();
    var tomorrowDate = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    return ((tomorrowDate - date)/1000).toFixed(0);
}


//Вывести дату в формате дд.мм.гг
function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    return (day + '.' + month + '.' + year.toString().slice(-2));
}


//Относительное форматирование даты
function formatDate(date) {
    var currentDate = new Date();
    if (currentDate - date < 1000) return 'только что';
    else if (currentDate - date < 60*1000) return (currentDate - date)/1000 + ' сек. назад';
    else if (currentDate - date < 60*60*1000) return (currentDate - date)/(1000*60) + ' мин. назад';
    else {
        var day = date.getDate();
        var month = date.getMonth()+1;
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        hours = (hours < 10) ? '0' + hours : hours;
        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;
        return (day + '.' + month + '.' + year.toString().slice(-2) + ' ' + hours + ':' + minutes);
    }
}
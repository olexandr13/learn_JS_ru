Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1


function min(a,b) {
    return (a <= b) ? a : b;
}


//
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1


function pow(x,n) {
    return Math.pow(x,n);
}
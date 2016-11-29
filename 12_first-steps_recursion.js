/*Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.*/

function sumTo(n) {
    var sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


function sumTo(n) {
    if (n>1) {
        return n + sumTo(n-1);
    }
    else
        return n
}


function sumTo(n) {
    return (1+n)/2*n
}
//Задача – написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.

function factorial(n) {
    if (n>1) {
        return n * factorial(n-1)
    }
    else
        return n
}


//Напишите функцию fib(n), которая возвращает n-е число Фибоначчи

function fib(n) {
    var a = 1;
    var b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
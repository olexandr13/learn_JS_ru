//Напишите интерфейс, который принимает математическое выражение (в prompt) и результат его вычисления через eval.
//При ошибке нужно выводить сообщение и просить переввести выражение.
//Ошибкой считается не только некорректное выражение, такое как 2+, но и выражение, возвращающее NaN, например 0/0.

function interface() {
    var expression = prompt('Enter your expression', '');
    try {
        return eval(expression);
    } catch(e) {
        console.log(e.message);
        expression = prompt('Enter your expression', '');
    } finally {
        return eval(expression);
    }
}
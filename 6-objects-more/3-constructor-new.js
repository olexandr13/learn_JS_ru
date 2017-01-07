//Создать Calculator при помощи конструктора
function Calculator() {
    this.read = function() {
        this.value1 = +prompt('Enter value1');
        this.value2 = +prompt('Enter value2');
    };
    this.sum = function() {
        return this.value1 + this.value2;
    };
    this.mul = function() {
        return this.value1 * this.value2;
    };
}


//Создать Accumulator при помощи конструктора
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.enteredValue = +prompt('Enter number', '');
        this.value += this.enteredValue;
    }
}

var accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
accumulator.value;


//Создайте калькулятор
function Calculator() {
    var methods = {
        '+': function(a, b) {
            return a + b;
        },
        '-': function(a, b) {
            return a - b;
        }
    }
    this.calculate = function(str) {
        this.str = str.split(' ');
        this.a = this.str[0];
        this.b = this.str[2];
        this.operation = this.str[1];
        return methods[this.operation](+a, +b);
    };
    this.addMethod = function(name, func) {
        this[name] = func;
    }
}
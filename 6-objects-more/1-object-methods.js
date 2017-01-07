var calculator = {
    read: function() {
        this.value1 = +prompt('Enter value 1', '');
        this.value2 = +prompt('Enter value 2', '');
    },

    sum: function() {
        return (this.value1 + this.value2);
    },

    mul: function() {
        return (this.value1 * this.value2);
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
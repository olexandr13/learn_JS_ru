//Сумма через замыкание
function sum(a) {
    return function(b) {
        return a + b;

    }
}
sum(a)(b)


//Функция - строковый буфер
function makeBuffer() {
    var bufferValue = '';
    function buffer(value) {
        if (value === undefined){
            return bufferValue;
        }
        else {
            bufferValue += value.toString();
        }
    };

    buffer.clear = function() {
        bufferValue = '';
    }

    return buffer;
}
var buffer = makeBuffer();


//Сортировка
function byField(field) {
    return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }
}


//Фильтрация через функцию
filter(arr, func) {
    var newArr = [];
    arr.forEach(item) {
        if (func(item)) newArr.push(item);
    }
    return newArr;
}

function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    }
}
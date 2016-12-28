var goods = [1,2,3,4,5]
console.log(goods[goods.length-1])


goods.push('computer');


var styles = ['Jazz', 'Blues'];
console.log(styles);
styles.push('rock-n-roll');
console.log(styles);
styles[styles.length-2] = 'clasic';
console.log(styles);
alert(styles.shift());
console.log(styles);
styles.unshift('rap', 'raggy');
console.log(styles);


var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
min = 0;
max = arr.length - 1;
function randomizer() {
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    arr[rand];
}



function arraySum() {
    var array = [];
    var number;
    var convertedNumber;
    do {
        number = prompt('Enter number', '')
        array.push(+number);
    } while (!(number == null || isNaN(+number) || number === ''));
    array.pop();
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}


arr = ["test", 2, 1.5, false];
function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1;
}


function filterRange(arr, a, b) {
    var i;
    var newArray = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}


function getMaxSubSum(arr) {
    var sum;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            sum += arr[j];
        }
    }
}
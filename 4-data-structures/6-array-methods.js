// Добавить класс в строку
var obj = {
    className: 'open menu'
};
function addClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            return;
        }
    }
    arr.push(cls);
    arr = arr.join(' ');
    obj.className = arr;
    return obj;
};


//Перевести текст вида border-left-width в borderLeftWidth
function camelize(str) {
    var arr = str.split('-');
    var newArrayElement;
    var newArray = [];
    newArray.push(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        newArrayElement = arr[i][0].toUpperCase() + arr[i].slice(1);
        newArray.push(newArrayElement);
    }
    return newArray.join('');
};


//Функция removeClass
function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    arr = arr.join(' ');
    obj.className = arr;
};


//Фильтрация массива "на месте"
function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
};


//Сортировать в обратном порядке
function reverse(arr) {
    return arr.reverse();
};

function reverse(arr) {
    var arr2 = [];
    for (var i = arr.length-1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    return arr2;
};


//Скопировать и отсортировать массив
var arr = ["HTML", "JavaScript", "CSS"];
for (var i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
}
arr2.sort();

//Случайный порядок в массиве
var arr = [1, 2, 3, 4, 5];
function compareRandom(a, b) {
    return Math.random() - 0.5;
}
arr.sort(compareRandom);


//Сортировка объектов
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];

var ageArray = [];
for (var i = 0; i < people.length; i++) {
    ageArray.push(people[i]['age']);
}
ageArray.sort();

// теперь people: [vovochka, masha, vasya]
alert(people[0].age) // 6


var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
var sortedArray;
function aclean(arr) {
    for (var i = 0; i < arr.length; i++) {
        lowercaseItem = arr[i].toLowerCase()
        lowercaseItem = lowercaseItem.sort()
        sortedArray.push(lowercaseItem);
    }
}
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
}


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


function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
};


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


var arr = ["HTML", "JavaScript", "CSS"];
for (var i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
}
arr2.sort();


//Сортировка объектов
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];

var numbersArray = [];
for (var i = 0; i < people.length; i++) {
    numbersArray.push(people[i]['age'])
}
function sorting(a,b) {
    return a-b;
}
numbersArray.sort(sorting)
var people2 = [];
for (var i = 0; i < numbersArray.length; i++) {
    for (var j = 0; j < people.length; j++) {
        if (numbersArray[i] == people[j]['age']) {
            people2.push(people[j])
        }
    }
}


//Вывести односвязный список
Вывод списка в цикле

 var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  var tmp = list;

  while (tmp) {
    alert( tmp.value );
    tmp = tmp.next;
  }
}
Можно было бы и бегать по списку, используя входной параметр функции:
function printList(list) {
  while(list) {
    alert( list.value );
    list = list.next;
  }
}
…Но при этом мы в будущем не сможем расширить функцию и сделать со списком что-то ещё,
ведь после окончания цикла начало списка уже нигде не хранится.
Поэтому и используется временная переменная – чтобы сделать код расширяемым, и, кстати, более понятным,
ведь роль tmp – исключительно обход списка, как i в цикле for.
Вывод списка с рекурсией
Рекурсивный вариант printList(list) следует простой логике: вывести текущее значение (1),
а затем пропустить через себя следующее (2):
 var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  alert( list.value ); // (1)
  if (list.next) {
    printList(list.next); // (2)
  }
}

Обратный вывод с рекурсией
Обратный вывод – почти то же самое, что прямой, просто сначала мы обрабатываем следующее значение,
а потом – текущее:

 var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }
  alert( list.value );
}

Обратный вывод без рекурсии
 var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
  var arr = [];
  var tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (var i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}
Обратный вывод без рекурсии быстрее.
По сути, рекурсивный вариант и нерекурсивный работают одинаково: они проходят список и запоминают его элементы,
а потом выводят в обратном порядке.
В случае с массивом это очевидно, а для рекурсии запоминание происходит в стеке
(внутренней специальной структуре данных): когда вызывается вложенная функция,
то интерпретатор сохраняет в стек текущие параметры. Вложенные вызовы заполняют стек,
а потом он выводится в обратном порядке.
При этом, при рекурсии в стеке сохраняется не только элемент списка, а другая вспомогательная информация,
необходимая для возвращения из вложенного вызова. Поэтому тратится больше памяти.
Все эти расходы отсутствуют в варианте без рекурсии, так как в массиве хранится именно то, что нужно.
Преимущество рекурсии, с другой стороны – более короткий и, зачастую, более простой код.


//Оставить уникальные элементы массива
function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    return Object.keys(obj);
}
var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];
console.log( unique(strings) );
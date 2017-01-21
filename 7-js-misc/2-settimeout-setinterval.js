//Вывод чисел каждые 100 мс
function printNumbersInterval() {
  var i = 1;
  var timerId = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timerId);
    i++;
  }, 100);
}

printNumbersInterval();


//Вывод чисел каждые 100 мс, через setTimeout
function printNumbersTimeout20_100() {
  var i = 1;
  var timerId = setTimeout(function go() {
    console.log(i);
    if (i < 20) setTimeout(go, 100);
    i++;
  }, 100);
}

printNumbersTimeout20_100();


//Функция-задержка
function delay(f, ms) {

  return function() {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function() {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}




//Вызов не чаще чем в N миллисекунд
function debounce(f, ms) {
  return function() {
    var savedThis = this;
    var savedArgs = arguments;
    var counter = true;
    var timer = setTimeout(function() {counter = true}, 1000);
    if (counter) {
        setTimeout(function() {
          f.apply(savedThis, savedArgs);
          counter = false;
        }, ms);
    }
  };
}

function f(x) { alert(x) }
var f = debounce(f, 1000);



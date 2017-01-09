function sumArgs() {
  // скопируем reduce из массива
  arguments.reduce = [].reduce;
  return arguments.reduce(function(a, b) {
    return a + b;
  });
}

alert( sumArgs(4, 5, 6) );



function sumArgs() {
  // запустим reduce из массива напрямую
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}





function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}
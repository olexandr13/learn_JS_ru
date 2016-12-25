var counter = 0;
function isEmpty(obj) {
    for (var key in obj) {
        counter++;
    }
    if (counter) return false
    else return true;
}


function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}


function countSalaries(salaries) {
    var sum = 0;
    for (var key in salaries) {
        sum += +salaries[key];
    }
    return sum;
}

var areWorkersPresent = false;
function theRichest(salaries) {
    var theBiggestSalary = 0;
    var name;
    for (var key in salaries) {
        areWorkersPresent = true;
        if (salaries[key] > theBiggestSalary) {
            theBiggestSalary = salaries[key];
            var name = key;
        }
    };
    if (!areWorkersPresent) return 'No workers';
    return name;
}


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
function multiplyNumeric(array) {
    for (var key in array) {
        if (isNumeric(array[key])) {
            array[key] *= 2;
        }
    }
    return array;
}
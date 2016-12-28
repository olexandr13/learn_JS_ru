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
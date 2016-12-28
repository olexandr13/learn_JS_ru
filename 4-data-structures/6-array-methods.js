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



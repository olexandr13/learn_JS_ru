var obj = {
    className: 'open menu'
};
var arr;
function addClass(obj, cls) {
    arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            return;
        }
    }
    arr.push(cls);
    arr = arr.join(' ');
    obj.className = arr;
}
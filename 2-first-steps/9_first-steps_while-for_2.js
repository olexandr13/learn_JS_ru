var simple = true;
for (var i = 2; i<=10; i++) {
    simple = true;
    for (var j = 2; j < i; j++) {
        if (i%j === 0) {
            simple = false;
            break;
        }
    }
    if (simple) {
        alert(i);
    }
}
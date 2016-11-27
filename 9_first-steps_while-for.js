for(var i = 1; i <=10; i++) {
    if(!(i%2)) {
        alert(i);
    }
}


for (var i = 0; i < 3; i++) {
  alert( "номер " + i + "!" );
}

var i = 0;
while (i < 3) {
    alert( "номер " + i + "!" );
    i++;
}


var number;
do {
    number = prompt("Enter number > 100");
}
while (!(number == null) && (number <= 100))

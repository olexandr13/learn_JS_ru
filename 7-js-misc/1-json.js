//Превратите объект в JSON
//Превратите объект в JSON
var leader = {
  name: "Василий Иванович",
  age: 35
};

var json = JSON.stringify(leader, '', 4);

var obj = JSON.parse(json);




var login = prompt("Enter login");
if(login === "Admin") {
    var password = prompt("Enter password");
    if(password === "Black Lord") {
        alert("Welcome")
    }
    else if(password == null) {
        alert("Enter cancelled")
    }
    else {
        alert("Incorrect password")
    }
}
else if(login == null) {
    alert("Login cancelled");
}
else {
    alert("I don't know you");
}
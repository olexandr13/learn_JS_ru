function random(n) {
    return Math.random()*n
}


function random(min, max) {
    number = Math.random()*max
    if (number > min)
        return number
    else
        return random(min, max)
}

function randomInteger(min, max) {
    Math.random()
}
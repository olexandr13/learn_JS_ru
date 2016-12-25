function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function checkSpam(str) {
    str = str.toLowerCase()
    if (~str.indexOf("viagra") || ~str.indexOf("xxx")) {
        console.log('SPAM!')
    }
}


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength-3) + '...';
    } else return str;
}


function extractCurrencyValue(str) {
    return +str.slice(1);
}
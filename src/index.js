module.exports = function reverse (n) {
    let arr = String(n).split('');
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == '-') {
            delete arr[i];
        }
    }
    return arr.reverse().join('');
}

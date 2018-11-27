function additionAsync(a, b, callback) {
    setTimeout(() => {
        callback(a + b)
    }, 100);
}

console.log('before');
additionAsync(1, 2, result => {
    console.log('Result: ' + result) // Nunca se ejecuta
});
console.log('after');


while (true) {
    
}
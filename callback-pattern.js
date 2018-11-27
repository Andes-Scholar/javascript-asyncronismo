/**
 * 
 * Callback function come last
 * 
 */
function additionAsync(a, b, callback) {
    setTimeout(() => {
        callback(null, a + b)
    }, 1);
}

/**
 * error argument come first
 */

additionAsync(1, 2, function (error, result) {
    additionAsync(result, 1, function (error, result) {
        additionAsync(result, 1, function (error, result) {
            additionAsync(result, 1, function (error, result) {
                console.log(result);
            })
        })
    })
})

/**
 * Usar additionAsync para sumar todos los elementos del array
 */

let numbers = [1, 2, 3 ,4 ,5 ,6 ,7 , 8];
for (let i = 0; i < numbers.length; i++) {
    // ?
}
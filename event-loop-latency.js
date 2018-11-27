function additionAsync(a, b, callback) {
    setTimeout(() => {
        callback(a + b)
    }, 1);
}

console.time('eventloop-latency');

additionAsync(1, 2, result => {
    console.timeEnd('eventloop-latency');
});

for(let i = 0; i < 2; i++) {
    for(let i = 0; i < 1000000000; i++) {
    
    }    
}


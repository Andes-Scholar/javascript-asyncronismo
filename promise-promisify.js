function promisify( fn ) {
    return function () {
	let args = arguments;
	return new Promise((resolve, reject) => {
	    const callck = function (error, data) {
	        if (error) return reject(error);
		return resolve(data)
	    };
	    fn.apply(null, [...args, callck]);
	});
    }
}

function additionAsync(a, b, callback) {
    setTimeout(() => {
        callback(null, a + b)
    }, 1);
}

promiseadd = promisify(additionAsync);
promiseadd(1,2).then((r) => {
    return promiseadd(r, 1);
}).then((r) => {
    return promiseadd(r, 1);
}).then((r) => {
    return promiseadd(r, 1);
}).then((result) => {
    console.log(result); // 6
});

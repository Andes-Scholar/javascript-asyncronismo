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

async function main () {
    promiseadd = promisify(additionAsync);
    let result = await promiseadd(1,2);
    result = await promiseadd(result, 1);
    result = await promiseadd(result, 1);
    result = await promiseadd(result, 1);
    console.log(result); // 6
}

main();

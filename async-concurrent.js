function sleep (time) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, time);
    });
}

async function main() {
    console.time('sincrono');
    await sleep(1000);
    await sleep(1000);
    await sleep(1000);
    console.timeEnd('sincrono');
    
    console.time('paralelo');
    let p = [
        sleep(1000),
        sleep(1000),
        sleep(1000)
    ];
    await Promise.all(p);
    console.timeEnd('paralelo');
}

main();
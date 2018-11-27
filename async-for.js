 
function sleep (time) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, time);
    });
}

async function main () {
    let p = [
        1000, 
        1000, 
        1000
    ];
    console.time('for-each');
    p.forEach(async (time) => {
        await sleep(time);
    });
    console.timeEnd('for-each');  


    console.time('for-of');
    for (let time of p) {
        await sleep(time);
    }
    console.timeEnd('for-of');


    console.time('for-map');
    let ps = p.map((time) => {
        return sleep(time);
    });
    await Promise.all(ps);
    console.timeEnd('for-map');


    console.time('for-await');
    let now = Date.now();
    let pss = p.map(sleep);

    for await (let s of pss) {
        console.log('paso', Date.now() - now); 
    }
    console.timeEnd('for-await');

}

main();

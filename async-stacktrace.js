function sleep (time) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, time);
    });
}


sleep(50).then(() => {
    // console.trace('promises');
    return sleep(50);
}).then(()=> {
    return sleep(50);
}).then(() => {
    console.trace('promises');  // Muestra varias funciones anidadas.
});


async function main () {
    await sleep(1);
    await sleep(2);
    await sleep(3);
    console.trace('await'); // Adentro de la función "main"
}

main();
function sleep (time) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, time);
    });
}

sleep(1000).then(() => {
    console.log('después de un segundo')
});


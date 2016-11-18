const timeDelay = function (time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

module.exports = timeDelay;

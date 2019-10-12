global.requestAnimationFrame = function (callback) {
    this.setTimeout(callback, 0);
}
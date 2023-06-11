class Scheuler
{
    static callback;
    static delay;

    static job(callback, ...arg){
        this.callback = callback;
        this.arg = arg;
        this.delay = 0;
        return this;
    }
    static #mainCallback(callback, time, delay, ...arg){
        if (delay > 0) {
            callback(...arg);
        }
        setInterval(callback, time, ...arg);
    }
    static wait(ms){
        this.delay = ms;
        return this;
    }
    static nextTenMinutes(){
        const now = new Date();
        const minutes = now.getMinutes();
        const remainingMinutes = 10 - (minutes % 10);
        const nextTenMinutes = new Date();
        nextTenMinutes.setMinutes(minutes + remainingMinutes);
        nextTenMinutes.setSeconds(0);
        nextTenMinutes.setMilliseconds(0);
        this.delay = nextTenMinutes.getTime() - now.getTime();
        return this;
    }
    static everyMinute(){
        return setTimeout(this.#mainCallback, this.delay, this.callback, 60000, this.delay, ...this.arg);
    }
    static everyHour(){
        return setTimeout(this.#mainCallback, this.delay, this.callback, 3600000, this.delay, ...this.arg);
    }
    static everyFiveMinutes(){
        return setTimeout(this.#mainCallback, this.delay, this.callback, 300000, this.delay, ...this.arg);
    }
    static everyTenMinutes(){
        return setTimeout(this.#mainCallback, this.delay, this.callback, 600000, this.delay, ...this.arg);
    }
}

module.exports = Scheuler;
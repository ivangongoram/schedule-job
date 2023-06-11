class Scheuler
{
    static callback;
    static #delay;

    static job(callback){
        this.callback = callback;
        this.#delay = 0;
        return this;
    }
    static #mainCallback(callback, time){
        if (Scheuler.#delay > 0){
            callback();
        }
        setInterval(callback, time);
    }
    static delay(time){
        this.#delay = time;
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
        this.#delay = nextTenMinutes.getTime() - now.getTime();
        return this;
    }
    static everyHour(){
        return setTimeout(this.#mainCallback, this.#delay, this.callback, 3600000);
    }
}

module.exports = Scheuler;
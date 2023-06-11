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
}

module.exports = Scheuler;
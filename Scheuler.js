class Scheuler
{
    static callback;
    static #delay;

    static job(callback){
        this.callback = callback;
        this.#delay = 0;
        return this;
    }
}

module.exports = Scheuler;
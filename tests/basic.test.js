const Scheuler = require("../Scheuler");

Scheuler.job(test1).everyMinute();
Scheuler.job(test2).wait(5000).everyMinute();
Scheuler.job(test3, 'Hello', 'world!').wait(10000).everyMinute();

function test1() {
    console.log('Test 1');
}
function test2() {
    console.log('Test 2');
}

function test3(msg1, msg2) {
    console.log(msg1, msg2);
}
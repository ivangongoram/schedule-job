const Schedule = require("../Schedule");

Schedule.job(test1).everyMinute();
Schedule.job(test2).wait(5000).everyMinute();
Schedule.job(test3, 'Hello', 'world!').wait(10000).everyFifteenMinutes();
function test1() {
    console.log('Test 1');
}
function test2() {
    console.log('Test 2');
}

function test3(msg1, msg2) {
    console.log(msg1, msg2);
}
const Schedule = require("../Schedule");

Schedule.job(message, 'Test', '1').everyMinute();
Schedule.job(message, 'Test', '2').wait(5000).everyMinute();
Schedule.job(message, 'Test', '3').wait(10000).everyFifteenMinutes();
Schedule.job(message, 'Test', '4').wait(2000).once();

function message(msg1, msg2) {
    console.log(msg1, msg2);
}
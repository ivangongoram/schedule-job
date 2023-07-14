# Schedule Pro

1. [Introduction](#introduction)
2. [Schedule Sync Options](#schedule-sync-options)
3. [Schedule Frequency Options](#schedule-frequency-options)
4. [Examples](#examples)
   - [Execute simple functions](#execute-simple-functions)
   - [Execute functions with multiple arguments](#execute-functions-with-multiple-arguments)
   - [Use sync options](#use-sync-options)
   - [Run once after wait or sync option](#run-once-after-wait-or-sync-option)

## Introduction
Schedule-Pro is a powerful and user-friendly Node.js library designed to effortlessly manage cron jobs. With its intuitive interface,
it simplifies the implementation of scheduling recurring tasks, automating background processes, and executing time-based
operations.

## Schedule Sync Options

| Method            | Description                                           |
|-------------------|-------------------------------------------------------|
| wait( time [ms] ) | The task runs after the waiting time.                 |
| nextTenMinutes()  | Run the task at the beginning of the next 10 minutes. |


## Schedule Frequency Options

| Method                 | Description                         |
|------------------------|-------------------------------------|
| once()                 | Run the task once.                  |
| everyTime( time [ms] ) | Run the task every specified time.  |
| everyMinute()          | Run the task every minute.          |
| everyTwoMinutes()      | Run the task every two minutes.     |
| everyThreeMinutes()    | Run the task every three minutes.   |
| everyFourMinutes()     | Run the task every four minutes.    |
| everyFiveMinutes()     | Run the task every five minutes.    |
| everyTenMinutes()      | Run the task every ten minutes.     |
| everyFifteenMinutes()  | Run the task every fifteen minutes. |
| everyThirtyMinutes()   | Run the task every thirty minutes.  |
| everyHour()            | Run the task every hour.            |
| everyTwoHours()        | Run the task every two hours.       |
| everyThreeHours()      | Run the task every three hours.     |
| everyFourHours()       | Run the task every four hour.       |
| everySixHours()        | Run the task every six hours.       |
| daily()                | Run the task every day.             |

## Examples
Import the library:
```js
const Schedule = require("schedule-pro");
```

### Execute simple functions:
```js
Schedule.job(test).everyMinute();

function test() {
    console.log('Test');
}
```

### Execute functions with multiple arguments:
```js
Schedule.job(message, 'Hello', 'world!').everyMinute();

function message(msg1, msg2) {
   console.log(msg1, msg2);
}
```

### Use sync options
```js
Schedule.job(message, 'Test', '1').wait(5000).everyFiveMinutes();
```

```js
Schedule.job(message, 'Test', '2').nextTenMinutes().everyHour();
```
### Run once after wait or sync option
```js
Schedule.job(message, 'Test', '3').wait(10000).once();
```
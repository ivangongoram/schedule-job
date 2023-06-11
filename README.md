# Schedule Job

1. [Introduction](#introduction)
2. [Schedule Sync Options](#schedule-sync-options)
3. [Schedule Frequency Options](#schedule-frequency-options)
4. [Examples](#examples)

## Introduction
Schedule-Job is a powerful and user-friendly Node.js library designed to effortlessly manage cron jobs. With its intuitive interface,
it simplifies the implementation of scheduling recurring tasks, automating background processes, and executing time-based
operations.

## Schedule Sync Options

| Method            | Description                                           |
|-------------------|-------------------------------------------------------|
| wait( time [ms] ) | The task runs after the waiting time.                 |
| nextTenMinutes()  | Run the task at the beginning of the next 10 minutes. |


## Schedule Frequency Options

| Method             | Description                      |
|--------------------|----------------------------------|
| everyMinute()      | Run the task every minute.       |
| everyFiveMinutes() | Run the task every five minutes. |
| everyTenMinutes()  | Run the task every ten minutes.  |
| everyHour()        | Run the task every hour.         |

## Examples
```js
Schedule.job(test).everyMinute();

function test() {
    console.log('Test');
}
```

```js
Schedule.job(test).wait(5000).everyFiveMinutes();

function test() {
    console.log('Test');
}
```

```js
Schedule.job(test, 'Hello', 'world!').wait(10000).everyTenMinutes();

function test(msg1, msg2) {
   console.log(msg1, msg2);
}
```

```js
Schedule.job(test, 'Hello', 'world!').nextTenMinutes().everyHour();

function test(msg1, msg2) {
    console.log(msg1, msg2);
}
```
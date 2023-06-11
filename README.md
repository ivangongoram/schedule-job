# Scheuler

1. [Introduction](#introduction)
2. [Scheule Sync Options](#scheule-sync-options)
3. [Scheule Frequency Options](#scheule-frequency-options)
4. [Examples](#examples)

## Introduction
Scheuler is a powerful and user-friendly Node.js library designed to effortlessly manage cron jobs. With its intuitive interface,
it simplifies the implementation of scheduling recurring tasks, automating background processes, and executing time-based
operations.

## Scheule Sync Options

| Method            | Description                                           |
|-------------------|-------------------------------------------------------|
| wait( time [ms] ) | The task runs after the waiting time.                 |
| nextTenMinutes()  | Run the task at the beginning of the next 10 minutes. |


## Scheule Frequency Options

| Method             | Description                     |
|--------------------|---------------------------------|
| everyMinute();     | Run the task every minute       |
| everyFiveMinutes() | Run the task every five minutes |
| everyTenMinutes()  | Run the task every ten minutes  |
| everyHour()        | Run the task every hour         |

### Examples
```js
Scheuler.job(test).everyMinute();

function test() {
    console.log('Test');
}
```

```js
Scheuler.job(test).wait(5000).everyFiveMinutes();

function test() {
    console.log('Test');
}
```

```js
Scheuler.job(test, 'Hello', 'world!').wait(10000).everyTenMinutes();

function test(msg1, msg2) {
   console.log(msg1, msg2);
}
```

```js
Scheuler.job(test, 'Hello', 'world!').nextTenMinutes().everyHour();

function test(msg1, msg2) {
    console.log(msg1, msg2);
}
```
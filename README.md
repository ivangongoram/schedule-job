# Scheuler

1. [Introduction](#introduction)
2. [Scheule Frequency Options](#scheule-frequency-options)
    - [Examples](#examples)

## Introduction
Scheuler is a powerful and user-friendly Node.js library designed to effortlessly manage cron jobs. With its intuitive interface,
it simplifies the implementation of scheduling recurring tasks, automating background processes, and executing time-based
operations.

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

function test() {
    console.log('Test');
}
```

```js
Scheuler.job(test, 'Hello', 'world!').nextTenMinutes().everyHour();

function test() {
    console.log('Test');
}
```
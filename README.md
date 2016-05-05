# jasmine leak test

## Running the tests

```sh
npm install
npm test
```

Or, open specRunner.html to run the tests in your browser.

## Observing the leak

```sh
top -O mem # OSX
top -o %MEM # linux
```

On my machine (OSX 10.10.5, 16GB RAM) running Chrome 50.0.2661.94, memory usage for the `Google Chrome` process starts at around 240MB of memory, and climbs linearly to ~450MB until the suite is completed.

## What this looks like in a real test suite

I first noticed this issue in my Angular test suite (~1500 tests). Memory timeline is below:

![](https://raw.githubusercontent.com/bcherny/jasmine-leak-test/master/timeline.png)

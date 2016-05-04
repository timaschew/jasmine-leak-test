# jasmine leak test

## Running the tests

```sh
npm install
npm test
```

## Observing the leak

```
top -O mem # OSX
top -o %MEM # linux
```

On my machine (OSX 10.10.5, 16GB RAM) running Chrome 50.0.2661.94, memory usage for the `Google Chrome` process starts at around 240MB of memory, and climbs linearly to ~450MB until the suite is completed.

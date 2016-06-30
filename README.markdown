# node-bitbuffer

A bit array, backed by node.js Buffer


## Install

	~~npm install bitbuffer~~


## Usage

```js
var BitBuffer = require('bitbuffer');
var b = new BitBuffer(10)
b.get(7) // false
b.set(7, true)
b.get(7) // true
b.toggle(7)
b.get(7) // false
```


## Tests

```bash
npm test
firefox coverage/lcov-report/index.html
```

### Coverage

```
Statements   : 100% ( 11/11 )
Branches     : 100% ( 4/4 )
Functions    : 100% ( 4/4 )
Lines        : 100% ( 11/11 )
```

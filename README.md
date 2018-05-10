# Prototype Storm

Supercharge your Javascript!

```javascript
[18, 25, {name: 'John', age: 32}].average(); // 25
```

```javascript
[1, 2, 3, 4].first({ count: 2 }) // [1, 2]
    .whereGreater({ to: 0 }) // [1, 2]
    .last(); // 2
```

## Summary

- [Installation](#installation)
- [Documentation](https://stellar-labs.github.io/prototype-storm)

## Installation

- [Web](#web)
- [NPM](#npm)

### Web

Use any of the CDN available [on the documentation](https://stellar-labs.github.io/prototype-storm) to use them on your web app.

### NPM

First, run:

```bash
npm install --save prototype-storm@0.*
```

Then, on your file, you can use:

_Node < 8_

```javascript
var prototypeStorm = require('prototype-storm');
```

_Node >= 8_

```javascript
import 'prototype-storm';
import prototypeStorm from 'prototype-storm';
import { first, empty } from 'prototype-storm';
```
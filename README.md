# Prototype Storm

Supercharge your Javascript!

```javascript
[18, 25, {name: 'John', age: 32}].average(); // 25
```

```javascript
[1, 2, 3, 4].first({ count: 2 }) // [1, 2]
    .whereGreater({ than: 0 }) // [1, 2]
    .last(); // 2
```

## Summary

- [Installation](#installation)
- [Documentation](https://stellar-labs.github.io/prototype-storm)

## Installation

- [Web](#web)
- [NPM](#npm)

### Web
```html
<!doctype html>
<html>
  <head>
    <meta charset='utf-8'>
    <script src='https://rawgit.com/stellar-labs/master/dist/prototype-storm.min.js' defer></script>
  </head>
  <body></body>
</html>
```

Use any of the CDN available [on the documentation](https://stellar-labs.github.io/prototype-storm) to use them on your web app.

### NPM

First, run:

```shell
$ npm install --save prototype-storm@0.* # npm
$ yarn add prototype-storm@0.* # Yarn
```

Then, on your file, you can use:

```javascript
require('prototype-storm'); // CommonJS
import 'prototype-storm'; // ES Modules
```

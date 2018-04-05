# Prototype Storm

![Version](https://img.shields.io/badge/version-dev-orange.svg)

Supercharge your JavaScript!

```javascript
var age = document.getElementById('#age').value;

if( ! age.test({ regexp: '/^[\d.]+$/' }) ) {
  alert('Your age should be a number...');
}
```

```javascript
var file_name = document.getElementById('#file-name');

if( ! file_name.endsWith({ match: '.spec.js', caseSensitive: true }) ) {
  alert('The file name should end with ".spec.js"');
}
```

## Summary

- [Installation](#installation)
- [Examples of uses](#examples-of-uses)
- [Methods definitions](#methods-definitions)

## Installation

Browse the [methods definition](#methods-definitions) and choose the prototypes of your choice. 

For example, I want to use `test` and `endsWith`, so my `index.html` will looks like:

```html
<body>
  <!-- ... -->
  <script type="text/javascript" src="https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-test.min.js"></script>
  <script type="text/javascript" src="https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-ends-with.min.js"></script>

  <script type="text/javascript">
    window.addEventListener('load', function() {
      // ...
    });
  </script>
</body>
```

ⓘ If you want to add the whole prototypes, include the global script:

```html
<script type="text/javascript" src="https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm.min.js"></script>
```

## Examples of uses

- String
  - [Using `ellipsis`](#using-ellipsis)
  - [Using `empty`](#using-empty)
  - [Using `nl2br`](#using-nl2br)
  - [Using `shuffle`](#using-shuffle)
  - [Using `stripTags`](#using-striptags)
  - [Using `test`](#using-test)

### Using `ellipsis`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-ellipsis.min.js
```

```javascript
var text1 = 'Hello world, my name is Paul';
var text2 = 'Hey, how are you?';
var text3 = 'Are you James?!';

console.log( text1.ellipsis({ max: 11 }) );
console.log( text2.ellipsis({ max: 17 }) );
console.log( text3.ellipsis({ max: 13, end: '???' }) );
```

Will display:

```
Hello world...
Hey, how are you?
Are you James???
```

### Using `empty`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-empty.min.js
```

```javascript
var text1 = 'Hello world';
var text2 = '';
var text3 = '\n';

console.log( text1.empty() );
console.log( text2.empty() );
console.log( text3.empty() );
```

Will display:

```
false
true
false
```

### Using `nl2br`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-nl2br.min.js
```

```javascript
var text1 = 'Hi!\n\nWelcome to my website!';
var text2 = 'Hey!\nHow are you?';

console.log( text1.nl2br() );
console.log( text2.nl2br({ strict: true }) );
```

Will display:

```
Hi<br><br>Welcome to my website!
Hi<br/>How are you?
```

### Using `shuffle`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-shuffle.min.js
```

```javascript
var text = 'JavaScript';
```

console.log( text.shuffle() );


Will display:

```
tJarciavSp
```

### Using `stripTags`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-stripTags.min.js
```

```javascript
var text = '<h1>Home</h1>Welcome to my website!';

console.log( text.stripTags() );
```

Will display:

```
HomeWelcome to my website!
```

### Using `test`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-test.min.js
```

```javascript
var email = 'test';

console.log( email.test('/.*@.*/') )
```

Will display:

```
false
```

## Methods definitions

- String
  - [`ellipsis`](#ellipsis)
  - [`empty`](#empty)
  - [`nl2br`](#nl2br)
  - [`shuffle`](#shuffle)
  - [`stripTags`](#stripTags)
  - [`test`](#test)

### `ellipsis`

Returns the string with a maximum of character followed by a customizable ending.

```javascript
String.prototype.ellipsis = function(Object): String
```

**Options**

- `max`: required, integer, no default - Set the maximum of character
- `end`: optional, string, default `...` - Set the ending string

### `empty`

Returns true if the string is empty, else returns false.

```javasript
String.prototype.empty = function(): Boolean
```

### `nl2br`

Returns the string and replace the line returns (like `\n`) by html return line `<br />` tag.

```javascript
String.prototype.nl2br = function(Object): String
```

**Options**

- `strict`: optional, boolean, default `false`: if true, it replace the return lines with XHTML compatible `<br />` tag instead of `<br>`

### `shuffle`

Return a randomized version of the string.

```javascript
String.prototype.shuffle = function(): String
```

### `stripTags`

Returns the string and remove all the html tags inside of it.

```javascript
String.prototype.stripTags = function(): String
```

### `test`

Returns true if the string passes the regexp test, else returns false.

```javascript
String.prototype.test = function(Object): Boolean
```

**Options**

- `regexp`: required, string or regexp, no default: The regular expression to test
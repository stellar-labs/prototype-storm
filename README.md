# Prototype Storm

![Version](https://img.shields.io/badge/version-v0.1.0-orange.svg)
![Build](https://img.shields.io/codeship/f4573ce0-1bfe-0136-c362-76579b4514e0.svg) 

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
  - [Using `format`](#using-format)
  - [Using `nl2br`](#using-nl2br)
  - [Using `replaceAll`](#using-replaceall)
  - [Using `shuffle`](#using-shuffle)
  - [Using `stripTags`](#using-striptags)

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

### Using `format`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-format.min.js
```

```javascript
var text1 = 'Hi {name}, welcome to the {page} page.';
var text2 = '<h1>{page}</h1><p>Hi {name}, welcome to the {page} page</p>';
var text3 = 'The nature is a book, and we are burning its pages instead of reading them.';

console.log( text1.format({ name: 'John', page: 'home' }) );
console.log( text2.format({ name: 'Frank', page: 'Configuration' }) );
console.log( text3.format() );
```

Will display:

```
Hi John, welcome to the home page.
<h1>Configuration</h1><p>Hi Frank, welcome to the Configuration page</p>
The nature is a book, and we are burning its pages instead of reading them.
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

### Using `replaceAll`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-replace-all.min.js
```

```javascript
var text = '<brand> model S are the most awesome car of <brand>!';
var brand = 'Tesla';

console.log( text.replace('<brand>', brand) );
console.log( text.replaceAll({ old: '<brand>', new: brand }) );
```

Will display:

```
Tesla model S are the most awesome car of <brand>!
Tesla model S are the most awesome car of Tesla!
```

### Using `shuffle`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-shuffle.min.js
```

```javascript
var text = 'JavaScript';

console.log( text.shuffle() );
```

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

## Methods definitions

- String
  - [`ellipsis`](#ellipsis)
  - [`empty`](#empty)
  - [`nl2br`](#nl2br)
  - [`shuffle`](#shuffle)
  - [`stripTags`](#stripTags)

### `ellipsis`

Returns the string with a maximum of character followed by a customizable ending.

```javascript
String.prototype.ellipsis = function(Object): String
```

**Options**

| property | type    | required | default | possible values | description |
|----------|---------|----------|---------|-----------------|-------------|
| max      | integer | yes      |         |                 |             |
| end      | string  | no       | ...     |                 |             |

---

### `empty`

Returns true if the string is empty, else returns false.

```javascript
String.prototype.empty = function(): Boolean
```

---

### `nl2br`

Returns the string and replace the line returns (like `\n`) by html return line `<br />` tag.

```javascript
String.prototype.nl2br = function(Object): String
```

**Options**

| property | type    | required | default | possible values | description |
|----------|---------|----------|---------|-----------------|-------------|
| strict   | boolean | no       | false   |                 |             |

---

### `shuffle`

Return a randomized version of the string.

```javascript
String.prototype.shuffle = function(): String
```

---

### `stripTags`

Returns the string and remove all the html tags inside of it.

```javascript
String.prototype.stripTags = function(): String
```
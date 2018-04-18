# Prototype Storm

![Version](https://img.shields.io/badge/version-v0.1.0-orange.svg)
![Build](https://img.shields.io/codeship/f4573ce0-1bfe-0136-c362-76579b4514e0.svg) 
[![devDependencies Status](https://david-dm.org/stellar-labs/prototype-storm/dev-status.svg)](https://david-dm.org/stellar-labs/prototype-storm?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/stellar-labs/prototype-storm/badge.svg)](https://snyk.io/test/github/stellar-labs/prototype-storm)

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

- Array
  - [Using `only`](#only)
- RegExp
  - [Using constant `LETTERS`](#using-constant-letters)
  - [Using constant `LOWERCASES`](#using-constant-lowercases)
  - [Using constant `UPPERCASES`](#using-constant-uppercases)
- String
  - [Using `ellipsis`](#using-ellipsis)
  - [Using `empty`](#using-empty)
  - [Using `format`](#using-format)
  - [Using `nl2br`](#using-nl2br)
  - [Using `replaceAll`](#using-replaceall)
  - [Using `shuffle`](#using-shuffle)
  - [Using `stripTags`](#using-striptags)
  - [Using `toAscii`](#using-toascii)
  - [Using `toKebabCase`](#using-tokebabcase)
  - [Using `toSnakeCase`](#using-tosnakecase)

### Using `only`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-only.min.js
```

```javascript
var languages = ['php', 'nodejs', 'python', 'ruby'];

console.log( languages.only({ items: ['nodejs'] }) );
```
Will display

```
['nodejs']
```

### Using constant `LETTERS`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-letters.min.js
```

```javascript
var catch_all_letters = '/[' + RegExp.LETTERS + ']/g'; // /[^a-z-A-Z-...]/g
```

### Using constant `LOWERCASES`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-lowercases.min.js
```

```javascript
var catch_all_lowercases = new RegExp('[' + RegExp.LOWERCASES + ']', 'g');
```

### Using constant `UPPERCASES`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-uppercases.min.js
```

```javascript
var catch_all_uppercases = new RegExp('[' + RegExp.UPPERCASES + ']', 'g');
```

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

### Using `toAscii`

This method do not support the Asian alphabet

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-to-ascii.min.js
```

```javascript
var text1 = 'Hello world, my string is unicode free';
var text2 = 'Voix ambiguë d'un cœur qui, à l'arrivée du zéphyr, préfère les jattes de kiwis.';

console.log( text1.toAscii() );
console.log( text2.toAscii() );
```

Will display:

```
Hello world, my string is unicode free
Voix ambigue d'un coeur qui, a l'arrivee du zephyr, prefere les jattes de kiwis.
```

### Using `toKebabCase`

This method do not support the Asian alphabet.

```javascript
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-to-kebab-case.min.js
```

```javascript
var text1 = 'Hello world';
var text2 = 'snake_case';
var text3 = "Français à l'accent";

console.log( text1.toKebabCase() );
console.log( text2.toKebabCase() );
console.log( text3.toKebabCase() );
```

Will display:

```
hello-world
snake-case
français-à-l-accent
```

**Tips**

Turn this prototype to make slugs by adding [`.toAscii`](#using-toascii) before calling this prototype:

```javascript
var text1 = 'spring/summer 2018';
var text2 = 'printemps/été 2018';

var slug1 = text.toAscii().toKebabCase(); // spring-summer-2018
var slug2 = text.toAscii().toKebabCase(); // printemps-ete-2018
```

### Using `toSnakeCase`

This method do not support the Asian alphabet.

```javascript
var text1 = 'Belle journée le monde';
var text2 = 'Hey, but you was a PHP web dev all the time !!';

console.log( text1.toSnakeCase() );
console.log( text2.toSnakeCase() );
```

Will display:

```
belle_journée_le_monde
hey_but_you_was_a_php_web_dev_all_the_time
```

## Methods definitions

- Array
  - [`only`](#only)
- RegExp
  - [`LETTERS`](#letters)
  - [`LOWERCASES`](#lowercases)
  - [`UPPERCASES`](#uppercases)
- String
  - [`ellipsis`](#ellipsis)
  - [`empty`](#empty)
  - [`format`](#format)
  - [`nl2br`](#nl2br)
  - [`replaceAll`](#replaceall)
  - [`shuffle`](#shuffle)
  - [`stripTags`](#stripTags)
  - [`toAscii`](#toascii)
  - [`toKebabCase`](#tokebabcase)
  - [`toSnakeCase`](#toSnakeCase)

### `only`

Return an array filtered from the values your provided.

```javascript
Array.prototype.only = function(Object): Array
```

**Options**


| property | type   | required | default | possible values | description |
|----------|--------|----------|---------|-----------------|-------------|
| items    | Array  | yes      |         |                 |             |

---

### `LETTERS`

Return the regexp that catches any unicode letters.

```javascript
RegExp.LETTERS = String
```

---

### `LOWERCASES`

Return the regexp that catches any unicode lowercase letters.

```javascript
RegExp.LOWERCASES = String
```

---

Return the regexp that catches any unicode uppercase letters.

```javascript
RegExp.UPPERCASES = String;
```

---

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

### `format`

Returns the text and replace the placeholder of your choice by the associated value.

```javascript
String.prototype.format = function(Object): String
```

**Options**

Key/value pairs.

**Note**

It replaces all the occurences of your placeholders.

**The following prototypes will also be available**

- [`replaceAll`](#replaceall)

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

### `replaceAll`

Returns the string and replace all the occurences of a placeholder by its given value.

```javascript
String.prototype.replaceAll = function(Object): String
```

**Options**

| property | type   | required | default | possible values | description |
|----------|--------|----------|---------|-----------------|-------------|
| old      | string | yes      |         |                 |             |
| new      | string | yes      |         |                 |             |

**The following prototypes depend on this one**

- [`format`](#format)

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

--- 

### `toAscii`

This method do not support the Asian alphabet.

Turn any non-ascii **letters** inside a string to its ascii counterpart and return the new string.

```javascript
String.prototype.toAscii = function(): String
```

---

### `toKebabCase`

This method do not support the Asian alphabet.

Turn any string to kebab-case (dashes separating words).

```javascript
String.prototype.toKebabCase = function(): String
```
---

### `toSnakeCase`

This method do not support the Asian alphabet.

Turn any string to snake_case (underscores separated words).

```javascript
String.prototype.toSnakeCase = function(): String
```
# Prototype Storm

![Version](https://img.shields.io/badge/version-v0.1.0-orange.svg)
[ ![Codeship Status for stellar-labs/prototype-storm](https://app.codeship.com/projects/f4573ce0-1bfe-0136-c362-76579b4514e0/status?branch=master)](https://app.codeship.com/projects/284613)
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
  - [Using `Array.except`](#using-arrayexcept)
  - [Using `Array.isEmpty`](#using-arrayisempty)
  - [Using `Array.last`](#using-arraylast)
  - [Using `Array.only`](#using-arrayonly)
  - [Using `Array.sum`](#using-arraysum)
  - [Using `Array.toConsole`](#using-arraytoconsole)
  - [Using `Array.toJson`](#using-arraytojson)
  - [Using `Array.whereEqual`](#using-arraywhereequal)
  - [Using `Array.whereNotEqual`](#using-arraywherenotequal)
- Function
  - [Using `Function.type`](#using-functiontype)
- RegExp
  - [Using `RegExp.LETTERS`](#using-regexpletters)
  - [Using `RegExp.LOWERCASES`](#using-regexplowercases)
  - [Using `RegExp.UPPERCASES`](#using-regexpuppercases)
- String  
  - [Using `String.ellipsis`](#using-stringellipsis)
  - [Using `String.empty`](#using-stringempty)
  - [Using `String.format`](#using-stringformat)
  - [Using `String.isInteger`](#using-stringisinteger)
  - [Using `String.isJson`](#using-stringisjson)
  - [Using `String.nl2br`](#using-stringnl2br)
  - [Using `String.replaceAll`](#using-stringreplaceall)
  - [Using `String.shuffle`](#using-stringshuffle)
  - [Using `String.stripTags`](#using-stringstriptags)
  - [Using `String.test`](#using-stringtest)
  - [Using `String.toAscii`](#using-stringtoascii)
  - [Using `String.toConsole`](#using-stringtoconsole)
  - [Using `String.toKebabCase`](#using-stringtokebabcase)
  - [Using `String.toSnakeCase`](#using-stringtosnakecase)

### Using `Array.except`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-only.min.js
```

```javascript
var array1 = ['javascript', 'html', 'css', 'nodejs'];
var array2 = [];

console.log( array1.except({ items: ['nodejs'] }) );
console.log( array2.except({ items: ['nodejs'] }) );
```

Will display:

```
[ 'javascript', 'html', 'css' ]
[]
```

### Using `Array.isEmpty`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-only.min.js
```

```javascript
var array1 = [];
var array2 = [1, 2, 3];
var array3 = [null];

console.log( array1.isEmpty() );
console.log( array2.isEmpty() );
console.log( array3.isEmpty() );
```

Will display:

```
true
false
false
```

### Using `Array.last`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-last.min.js
```

```javascript
var array1 = [1, 2, 3, 4];

console.log( array1.last() );
console.log( array1.last({ count: 3 }) );
```

Will display:

```
4
[ 2, 3, 4 ]
```

### Using `Array.only`

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

### Using `Array.sum`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-sum.min.js
```

```javascript
var array1 = [1, 2, 3, 4];
var array2 = [1, 2, 'three', 3, 4];
var array3 = [1, 2, {}, 3, null, 4];

console.log(array1.sum());
console.log(array2.sum());
console.log(array3.sum());
```

Will display:

```
10
10
10
```

### Using `Array.toConsole`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-sum.min.js
```

```javascript
var array = [1, 2, 3, 4];

array.toConsole();
```

Will display:

```
[1, 2, 3, 4]
```

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-to-json.min.js
```

```javascript
var array1 = [1, 2, 3];
var array2 = [{ name: 'John' }, { name: 'Foo' }];

console.log( array1.toJson() );
console.log( array2.toJson() );
```

Will display:

```
[1,2,3]
[{"name": "John"},{"name": "Foo"}]
```

### Using `Array.whereEqual`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-where-equal.min.js
```

```javascript
var input = [1, 2, '2', 3, 4, 5];
var input2 = [];

console.log( input.whereEqual({ value: 2 }) );
console.log( input.whereEqual({ value: 2, strict: true }) );
console.log( input.whereEqual({ value: 2 }) );
```

Will display:

```
[ 2, '2' ]
[ 2 ]
[]
```

### Using `Array.whereNotEqual`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-where-equal.min.js
```

```javascript
var input = [1, 2, '2'];
var input2 = [];

console.log( input.whereNotEqual({ value: 2 }) );
console.log( input.whereNotEqual({ value: 2, strict: true }) );
console.log( input2.whereNotEqual({ value: 2 }) );
```

Will display:

```
[ 1 ]
[ 1, '2' ]
[]
```

### Using `Function.type`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-type.min.js
```

```javascript
var var_null = null;
var var_undefined = undefined;
var var_string = 'hello world';
var var_number = 46.7;
var var_object = {name: "John"};

console.log( type(var_null) );
console.log( type(var_undefined) );
console.log( type(var_string) );
console.log( type(var_number) );
console.log( type(var_object) );
```

Will display (they all are string):

```
null
undefined
String
Number
Object
```

### Using constant `RegExp.LETTERS`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-letters.min.js
```

```javascript
var catch_all_letters = '/[' + RegExp.LETTERS + ']/g'; // /[^a-z-A-Z-...]/g
```

### Using constant `RegExp.LOWERCASES`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-lowercases.min.js
```

```javascript
var catch_all_lowercases = new RegExp('[' + RegExp.LOWERCASES + ']', 'g');
```

### Using constant `RegExp.UPPERCASES`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-uppercases.min.js
```

```javascript
var catch_all_uppercases = new RegExp('[' + RegExp.UPPERCASES + ']', 'g');
```

### Using `String.ellipsis`

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

### Using `String.empty`

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

### Using `String.format`

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

### Using `String.isInteger`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-is-integer.min.js
```

```javascript
var string1 = '1';
var string2 = 'two';
var string3 = '3.3';
var string4 = '-4';
var string5 = '-5.5';

console.log( '"1" is:' );
console.log( string1.isInteger() );
console.log( '"two" is:' );
console.log( string2.isInteger() );
console.log( '"3.3" is:' );
console.log( string3.isInteger() );
console.log( '"-4" is:' );
console.log( string4.isInteger() );
console.log( '"-5.5" is:' );
console.log( string5.isInteger() );
```

Will display:

```
"1" is:
true
"two" is:
false
"3.3" is:
false
"-4" is:
true
"-5.5" is:
false
```

### Using `String.isJson`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-is-json.min.js
```

```javascript
var string1 = '{"name": "John", "age": 21}';
var string2 = 'hello world';

console.log( string1.isJson() );
console.log( string2.isJson() );
```

Will display:

```
true
false
```

### Using `String.nl2br`

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

### Using `String.replaceAll`

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

### Using `String.shuffle`

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

### Using `String.stripTags`

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

### Using `String.test`

```
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-test.min.js
```

```javascript
var text = 'hello world';
var have_letters = /[a-z]/gi;
var does_not_have_number = new RegExp('[^\d+]', 'g');

console.log( text.test({ regexp: have_letters }) );
console.log( text.test({ regexp: does_not_have_numbers }) );
```

Will display:

```
true
true
```


### Using `String.toAscii`

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

### Using `String.toConsole`

```javascript
https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/prototype-storm-to-console.min.js
```

```javascript
var text = 'hello world';

text.toConsole();
```

Will display:

```
hello world
```

### Using `String.toKebabCase`

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

Turn this prototype to make slugs by adding [`String.toAscii`](#using-string-toascii) before calling this prototype:

```javascript
var text1 = 'spring/summer 2018';
var text2 = 'printemps/été 2018';

var slug1 = text.toAscii().toKebabCase(); // spring-summer-2018
var slug2 = text.toAscii().toKebabCase(); // printemps-ete-2018
```

### Using `String.toSnakeCase`

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
  - [`Array.except`](#arrayexcept)
  - [`Array.isEmpty`](#arrayisempty)
  - [`Array.only`](#arrayonly)
  - [`Array.sum`](#arraysum)
  - [`Array.toConsole`](#arraytoconsole)
  - [`Array.toJson`](#arraytojson)
  - [`Array.whereEqual`](#arraywhereequal)
  - [`Array.whereNotEqual`](#arraywherenotequal)
- Function
  - [`Function.type`](#functiontype)
- RegExp
  - [`RegExp.LETTERS`](#regexpletters)
  - [`RegExp.LOWERCASES`](#regexplowercases)
  - [`RegExp.UPPERCASES`](#regexpuppercases)
- String
  - [`String.ellipsis`](#stringellipsis)
  - [`String.empty`](#stringempty)
  - [`String.format`](#stringformat)
  - [`String.isInteger`](#stringisinteger)
  - [`String.isJson`](#stringisjson)
  - [`String.nl2br`](#stringnl2br)
  - [`String.replaceAll`](#stringreplaceall)
  - [`String.shuffle`](#stringshuffle)
  - [`String.stripTags`](#stringstripTags)
  - [`String.test`](#stringtest)
  - [`String.toAscii`](#stringtoascii)
  - [`String.toConsole`](#stringtoconsole)
  - [`String.toKebabCase`](#stringtokebabcase)
  - [`String.toSnakeCase`](#stringtoSnakeCase)

### `Array.except`

Returns the elements (as an Array) that are not included in the provided items.

```javascript
Array.prototype.except = function(Object): Array
```

### `Array.isEmpty`

Returns true if the array does not contains any items, else returns false.

```javascript
Array.prototype.isEmpty = function(): Boolean
```

**Options**

| property | type   | required | default | possible values | description |
|----------|--------|----------|---------|-----------------|-------------|
| items    | Array  | yes      |         |                 |             |

**Note**

It returns false in the case the array contains a `null` or an `undefined` item.

---

### `Array.only`

Return an array filtered from the values your provided.

```javascript
Array.prototype.only = function(Object): Array
```

**Options**


| property | type   | required | default | possible values | description |
|----------|--------|----------|---------|-----------------|-------------|
| items    | Array  | yes      |         |                 |             |

---

### `Array.sum`

Return the sum of all the items in an array.

```javascript
Array.prototype.sum = function(): Number
```

---

### `Array.toConsole`

Display the array on the console.

```javascript
Array.prototype.toConsole = function(): Array
```

**Note**

This prototype returns the array, to help you chain with other Array prototypes.

---

### `Array.toJson`

Returns the JSON reprensentation of the array as a string.

```javascript
Array.prototype.toJson = function(): String
```

---

### `Array.whereEqual`

Returns an array of items that are equal to the provided value.

```javascript
Array.prototype.whereEqual = function(Object): Array
```

**Options**

| property | type     | required | default | possible values | description |
|----------|----------|----------|---------|-----------------|-------------|
| value    | Any      | yes      |         |                 |             |
| strict   | Boolean  | no       | false   |                 |             |

---

### `Array.whereNotEqual`

Returns an array of items that are not equal to the provided value.

```javascript
Array.prototype.whereNotEqual = function(Object): Array
```

**Options**

| property | type     | required | default | possible values | description |
|----------|----------|----------|---------|-----------------|-------------|
| value    | Any      | yes      |         |                 |             |
| strict   | Boolean  | no       | false   |                 |             |

---

### `Function.type`

Return the type of a variable.

```javascript
var type = function(variable): String
```

**Note**

It always returns a string, even for `undefined` or `null` values.

---

### `RegExp.LETTERS`

Return the regexp that catches any unicode letters.

```javascript
RegExp.LETTERS = String
```

**Warning**

UTF-16 characters are not supported.

---

### `RegExp.LOWERCASES`

Return the regexp that catches any unicode lowercase letters.

```javascript
RegExp.LOWERCASES = String
```

**Warning**

UTF-16 characters are not supported.

---

### `RegExp.UPPERCASES`

Return the regexp that catches any unicode uppercase letters.

```javascript
RegExp.UPPERCASES = String;
```

**Warning**

UTF-16 characters are not supported.

---

### `String.ellipsis`

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

### `String.empty`

Returns true if the string is empty, else returns false.

```javascript
String.prototype.empty = function(): Boolean
```

---

### `String.format`

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

### `String.isInteger`

Returns true if the string is an integer, else returns false.

```javascript
String.prototype.isInteger = function(): Boolean
```

---

### `String.isJson`

Returns true if the string is a valid JSON, else returns false.

```javascript
String.prototype.isJson = function(): Boolean
```

---

### `String.nl2br`

Returns the string and replace the line returns (like `\n`) by html return line `<br />` tag.

```javascript
String.prototype.nl2br = function(Object): String
```

**Options**

| property | type    | required | default | possible values | description |
|----------|---------|----------|---------|-----------------|-------------|
| strict   | boolean | no       | false   |                 |             |

---

### `String.replaceAll`

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

### `String.shuffle`

Return a randomized version of the string.

```javascript
String.prototype.shuffle = function(): String
```

---

### `String.stripTags`

Returns the string and remove all the html tags inside of it.

```javascript
String.prototype.stripTags = function(): String
```

--- 

### `String.test`

Returns true if the string matches the regular expression, else returns false.

```javascript
String.prototype.test = function(Object): String
```

**Options**

| property | type   | required | default | possible values | description |
|----------|--------|----------|---------|-----------------|-------------|
| regexp   | RegExp | yes      |         |                 |             |

**Note**

It internally uses [`String.prototype.test`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) native prototype.

---

### `String.toAscii`

This method do not support the Asian alphabet.

Turn any non-ascii **letters** inside a string to its ascii counterpart and return the new string.

```javascript
String.prototype.toAscii = function(): String
```

---

### `String.toConsole`

Display the string in the console.

```javascript
String.prototype.toConsole = function(): String
```

**Note**

It will return the string to help you chain with others string prototypes.

---

### `String.toKebabCase`

This method do not support the Asian alphabet.

Turn any string to kebab-case (dashes separating words).

```javascript
String.prototype.toKebabCase = function(): String
```
---

### `String.toSnakeCase`

This method do not support the Asian alphabet.

Turn any string to snake_case (underscores separated words).

```javascript
String.prototype.toSnakeCase = function(): String
```
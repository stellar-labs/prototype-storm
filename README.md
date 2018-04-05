# Prototype Storm
Supercharge your JavaScript!
## Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/)

## Installation
Copies the project from GitHub & installs all required dependencies.
```shell
$ git clone https://github.com/khalyomede/string && yarn install
```
## Testing
Use Jasmine as the testing engine for javascript files.
```shell
$ yarn jasmine:test
```
## Building
Uses Webpack to minify all files separately and adds a single minified file concatenating all files together.
```shell
$ yarn build
```

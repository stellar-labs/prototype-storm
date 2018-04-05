# Contributing

## Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/) (optionnal)

## Notice
Headers marked with the :exclamation: requires a broadband connection in order to succeed.
## Installation :exclamation:
Copies the project from GitHub & installs all required dependencies.
### Yarn
```shell
$ git clone https://github.com/stellar-labs/prototype-storm && yarn install
```
[Yarn documentation](https://yarnpkg.com/en/docs/cli/install).
### NPM
```shell
$ git clone https://github.com/stellar-labs/prototype-storm && npm install # original syntax
$ git clone https://github.com/stellar-labs/prototype-storm && npm i # short syntax
```
[NPM documentation](https://docs.npmjs.com/cli/install).
## Testing
Uses Jasmine as the testing engine for javascript files.
### Yarn
```shell
$ yarn run jasmine:test # original syntax
$ yarn jasmine:test # short syntax
```
[Yarn documentation](https://yarnpkg.com/lang/en/docs/cli/run/).
### NPM
```shell
$ npm run jasmine:test
```
[NPM Documentation](https://docs.npmjs.com/cli/run-script).
## Building
Uses Webpack to minify all files separately and adds a single minified file concatenating all files together.
### Yarn
```shell
$ yarn run build # original syntax
$ yarn build # short syntax
```
[Yarn documentation](https://yarnpkg.com/lang/en/docs/cli/run/).
### NPM
```shell
$ npm run build
```
[NPM Documentation](https://docs.npmjs.com/cli/run-script).
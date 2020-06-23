# find-file

> Try to find a file in the given folder(s).
> File can have a leading undescore.
> Inspired by SASS @import syntax.

## Usage

```js
const findFile = require('find-file');
const folders = ['jsFiles', 'txtFiles', 'htmlFiles'];

var filePath = findFile('hello', '.txt', folders);

console.log(filePath);
//=> 'htmlFiles\hello.txt';
```

Advised to use it in a wrapper function which using files.
```js

const findFile = require('find-file');
const fs = require('fs');
const folders = ['jsFiles', 'txtFiles', 'htmlFiles'];

const readFile = filePath => {
  const fpath = findFile(filePath, '.html', folders);
  if (fpath !== false) {
    return fs.readFileSync(fpath, 'utf-8');
  }
  return '';
}

// want to read htmlFiles/_head.html
console.log(readFile('head'));
//=> contents of e.g. htmlFiles/_head.html
```

## About


### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test test.js
```

### Author

**Zoltan David**

* [github/davidzoli](https://github.com/davidzoli)

### License

Copyright © 2020, [Zoltan David](https://github.com/davidzoli).
Released under the [MIT License](LICENSE).

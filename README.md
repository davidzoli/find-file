# find-file-in-folders

> Try to find a file in the given folder(s).
> File can have a leading undescore.
> Inspired by SASS @import syntax.

## Parameters

**File name**

File to include. It can contain subfolder segment(s) and extension.

**Default extension**

Default extension can be set for easier file name redirection to the function. 
See wrapper function example.  
If the file name contains extension, set this false. 

**Folders array**

Array of the folders where the file possibly can be found.

## Usage

```js
const findFile = require('find-file-in-folders');
const folders = ['jsFiles', 'txtFiles', 'htmlFiles'];

let filePath = findFile('hello', '.txt', folders);
console.log(filePath);
//=> 'txtFiles\hello.txt';

filePath = findFile('hello.txt', false, folders);
console.log(filePath);
//=> 'txtFiles\hello.txt';

filePath = findFile('partials/head', '.html', folders);
console.log(filePath);
//=> 'htmlFiles\partials\_head.html';

filePath = findFile('partials/head', '.txt', folders);
console.log(filePath);
//=> 'Unable to find filepath "partials/head";
//=> false;
```

Advised to use it in a wrapper function which using files.
```js

const findFile = require('find-file-in-folders');
const fs = require('fs');
const folders = [
    'src/html/components/',
    'src/html/modules/',
    'src/html/sections/',
];

const readFile = filePath => {
  const fpath = findFile(filePath, '.html', folders);
  if (fpath !== false) {
    return fs.readFileSync(fpath, 'utf-8');
  }
  return '';
}

// want to read src/html/modules/_head.html
console.log(readFile('head'));
//=> contents of src/html/modules/_head.html file
```
For more examples check the tests.js file.

## About


### Running tests

Install dependencies and run tests with the following command:

```sh
$ npm install && npm test test.js
```

### Author

**Zoltan David**

* [github/davidzoli](https://github.com/davidzoli)

### License

Copyright © 2020, [Zoltan David](https://github.com/davidzoli).
Released under the [MIT License](LICENSE).

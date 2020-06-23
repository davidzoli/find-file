/*!
 * find-file-in-folders <https://github.com/davidzoli/find-file-in-folders>
 *
 * Copyright (c) 2020, Zoltan David.
 * Released under the MIT License.
 */

'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function findFile(filepath, defaultExt, paths) {
  const fileExt = path.extname(filepath) || false;
  let fpath;
  let exists = false;

  exists = (paths || []).some( p => {
    if (fileExt) {
      fpath = path.join(p, filepath);
      if (fs.existsSync(fpath)) return true;

      fpath = path.join(p, path.dirname(filepath) + '/_' + path.basename(filepath));
      if (fs.existsSync(fpath)) return true;
    } else {
      fpath = path.join(p, filepath + defaultExt);
      if (fs.existsSync(fpath)) return true;

      fpath = path.join(p, path.dirname(filepath) + '/_' + path.basename(filepath) + defaultExt);
      if (fs.existsSync(fpath)) return true;
    }
  });

  if (exists) return fpath;

  console.error('Unable to find filepath "' + filepath + '"');
  return false;
}

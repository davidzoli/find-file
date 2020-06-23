'use strict';

require('mocha');
const path = require('path');
const assert = require('assert');
const findFile = require('./');

describe('.forIn()', function() {
  it('shouldn\'t find any index.txt in test folder.', function() {
    const content = findFile('index.txt', false, ['test']);
    assert.equal(content, false);
  });
  it('should find main.txt file in test folder.', function() {
    const content = findFile('main.txt', false, ['test']);
    const expected = path.join('test', 'main.txt');
    assert.equal(content, expected);
  });
  it('should find main file in test folder with extension .txt.', function() {
    const content = findFile('main', '.txt', ['test']);
    const expected = path.join('test', 'main.txt');
    assert.equal(content, expected);
  });

  it('shouldn\'t find any component.txt in test/modules or test/components folders.', function() {
    const content = findFile('component.txt', false, ['test/modules', 'test/components']);
    assert.equal(content, false);
  });
  it('should find component1.txt file in test/modules or test/components folders.', function() {
    const content = findFile('component1.txt', false, ['test/modules', 'test/components']);
    const expected = path.join('test', 'components', 'component1.txt');
    assert.equal(content, expected);
  });
  it('should find component1 file in test/modules or test/components folders with extension .txt.', function() {
    const content = findFile('component1', '.txt', ['test/modules', 'test/components']);
    const expected = path.join('test', 'components', 'component1.txt');
    assert.equal(content, expected);
  });
  it('should find components/component1 file in test folder with extension .txt.', function() {
    const content = findFile('components/component1', '.txt', ['test']);
    const expected = path.join('test', 'components', 'component1.txt');
    assert.equal(content, expected);
  });

  it('should find _component2 file in test/modules or test/components folders with extension .txt.', function() {
    const content = findFile('component2', '.txt', ['test/modules', 'test/components']);
    const expected = path.join('test', 'components', '_component2.txt');
    assert.equal(content, expected);
  });
  it('should find components/_component2 file in test folder with extension .txt.', function() {
    const content = findFile('components/component2', '.txt', ['test']);
    const expected = path.join('test', 'components', '_component2.txt');
    assert.equal(content, expected);
  });
});

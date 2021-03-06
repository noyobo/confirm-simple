'use strict';
var colors = require('colors-mini')
var util = require('util')

module.exports = function(message, chose, callback) {
  if (!message) {
    throw new Error('message required!')
  };
  if (!chose && !callback) {
    throw new Error('callback required!')
  };
  if (typeof callback === 'undefined') {
    callback = chose;
    chose = ['yes', 'no'];
  };
  if (!util.isArray(chose) || (chose && chose.length !== 2)) {
    throw new Error('chose is not a right array')
  };
  process.stdin.setEncoding('utf8');
  process.stdin.resume();
  var answer = '';
  var ask = colors.red('?');
  var msg = [ask];
  msg.push(colors.grey(message));
  msg.push(colors.yellow('<' + chose.join('|') + '>') + ' : ');

  process.stdout.write(msg.join(' '));
  process.stdin.once('data', function(data) {
    var ok = data.trim() === chose[0];
    try {
      callback(ok);
    } catch (e) {
      throw new Error(e);
    }
    process.stdin.pause();
  })
}

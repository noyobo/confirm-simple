'use strict';
var colors = require('colors')

module.exports = function(message, chose, callback) {
  if (!message) {
    throw new Error('message required!')
  };
  if (!chose && !callback) {
    throw new Error('callback required!')
  };
  if (typeof chose === 'function') {
    callback = chose;
    chose = ['yes', 'no']
  };

  process.stdin.setEncoding('utf8');
  process.stdin.resume();
  var answer = '';
  var msg = ['?'.red];
  msg.push(message.grey);
  msg.push(('<' + chose.join('|') + '>').yellow + ' : ');

  process.stdout.write(msg.join(' '));
  process.stdin.once('data', function(data) {
    var ok = data.trim() === chose[0];
    try {
      callback(ok);
    }catch(e){
        throw new Error(e);
    }
    process.stdin.pause();
  })
}

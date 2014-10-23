var confirm = require('../lib/index.js');
var expect = require('chai').expect;
var Q = require('q')
describe('confirm testing', function() {
  it('confirm is a function', function() {
    expect(typeof confirm).to.string('function');
  });
  it('should throw error callback required', function() {
    expect(function() {
      confirm('hehe')
    }).to.throw(Error, 'callback required!');
  });
  it('should throw error messages required', function() {
    expect(function() {
      confirm()
    }).to.throw(Error, 'message required!');
  });
  it('should throw error chose length', function() {
    expect(function() {
      confirm('haha', ['yes'], function(ok) {
        console.log(ok)
      })
      process.stdin.emit('data', 'yes');
    }).to.throw(/not a right array/)
  });
  it('should throw error chose not a array', function() {
    expect(function() {
      confirm('haha', 'yes', function(ok) {
        console.log(ok)
      })
      process.stdin.emit('data', 'yes');
    }).to.throw(/not a right array/)
  });
  it('should throw error callback not a function yes', function() {
    expect(function() {
      confirm('haha', ['yes', 'no'], 'not function')
      process.stdin.emit('data', 'yes');
    }).to.throw(/not a function/)
  });
  it('should throw error callback not a function no', function() {
    expect(function() {
      confirm('haha', ['yes', 'no'], 'not function')
      process.stdin.emit('data', 'no');
    }).to.throw(/not a function/)
  });
  it('confirm custom chose true', function() {
    var ok = null
    return Q(ok)
      .then(function(ok) {
        confirm('haha', ['yy', 'nn'], function(ask){
          ok = ask
        })
        process.stdin.emit('data', 'yy');
        return ok;
      })
      .then(function(ok) {
        expect(ok).to.be.true;
      });
  });
  it('confirm custom chose false', function() {
    var ok = null
    return Q(ok)
      .then(function(ok) {
        confirm('haha', ['yy', 'nn'], function(ask){
          ok = ask
        })
        process.stdin.emit('data', 'nn');
        return ok;
      })
      .then(function(ok) {
        expect(ok).to.be.false;
      });
  });
  it('callback undefined', function() {
    var ok = null
    return Q(ok)
      .then(function(ok) {
        confirm('haha', function(ask){
          ok = ask
        })
        process.stdin.emit('data', 'yes');
        return ok;
      })
      .then(function(ok) {
        expect(ok).to.be.true;
      });
  });
  it('callback undefined', function() {
    var ok = null
    return Q(ok)
      .then(function(ok) {
        confirm('haha', function(ask){
          ok = ask
        })
        process.stdin.emit('data', 'no');
        return ok;
      })
      .then(function(ok) {
        expect(ok).to.be.false;
      });
  });
});

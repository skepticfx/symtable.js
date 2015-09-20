var assert = require('assert');
var Symtable = require('../index.js');

describe('simple imperative symbol table operations', function(){
  var S;
  var m = new Map();
  m.set('a', 1);
  m.set('b', 2);
  it('create an empty symbol table', function(){
    S = new Symtable();
    assert.equal(S.find('a'), null);
  });

  it('create a symbol table with some globals', function(){
    S = new Symtable(m);
    assert.equal(S.find('a'), 1);
    assert.equal(S.find('b'), 2);
  });

  it('add a symbol', function(){
    S.add('c', '3');
    assert.equal(S.find('c'), 3);
  });

  it('find symbols', function(){
    assert.equal(S.find('a'), 1);
    assert.equal(S.find('b'), 2);
    assert.equal(S.find('c'), 3);
  });

  it('find a non-existing symbol', function(){
    assert.equal(S.find('d'), null);
  });

  it('enter a new scope', function(){
    S.enterScope();
    assert.equal(S.find('a'), null);
    S.add('a', 5);
    assert.equal(S.find('a'), 5);
  });


  it('exit current scope', function(){
    S.exitScope();
    assert.equal(S.find('a'), 1);
  });


});
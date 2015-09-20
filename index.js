var Stack = require('stackjs');


var Symtable = function(global){
  this.scopes = new Stack();
  this.scopes.push(global || new Map());
};

Symtable.prototype.enterScope = function(){
  this.scopes.push(new Map());
};

Symtable.prototype.exitScope = function(){
  if(this.scopes.size() > 0) {
    return this.scopes.pop();
  } else {
    return 0;
  }
};

Symtable.prototype.add = function(key, value){
  if(key.length > 0) {
    this.scopes.peek().set(key, value);
  }
};

Symtable.prototype.find = function(key){
  if(key.length > 0){
    return this.scopes.peek().get(key) || null;
  }
  return null;
};

Symtable.prototype.checkScope = function(key){
  if(this.find(key) !== null){
    return true;
  }
  return false;
};

module.exports = Symtable;
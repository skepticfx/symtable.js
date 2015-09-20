# symtable.js
An imperative symbol table library in Javascript

## Installation
###### Requires ES6.

`npm install symtable.js`

## Usage

```javascript
var Symtable = require('symtable.js');

var globalIds = new Map();
globalIds.set('window', 1);
globalIds.set('document', 2);

// Initialize a new symbol table with a map of symbols in the global scope.
var S = new Symtable(globalIds);

// Start a new nested scope
S.enterScope();

// Add a symbol to the table
S.add('a', '3');
S.add('b', 4);

// Find the value of a Symbol
S.find('a'); // 3
S.find('k'); // null

// Check the current scope for a given symbol
S.checkScope('a'); // true
S.checkScope('window'); // false. Since this exists in the global scope and the current scope.

// Exit the current scope
S.exitScope();

```

## API

* `enterScope()` - Start a new nested scope.

* `add(x, y)` - Add a new symbol `x` with associated data `y`.

* `find(x)` - Finds current `x` in the whole symbol table using the most closely nested rule. Returns `null` otherwise.

* `checkScope(x)` - Returns `true` if `x` is defined in the current scope.

* `exitScope()` - Exit the current scope



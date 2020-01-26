const imports = require('./exports');

console.log(imports.counter(['person 1','person 2', 'person 3']))
console.log(imports.adder(5,6));
console.log('Pi = ',imports.pi);
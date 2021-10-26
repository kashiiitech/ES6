"use strict"

// Generators 
// are basically functions that can be paused and resumed.

function *g1() {
    console.log('Hello');
    yield 'Yield 1 Ran ...';
    console.log('World');
    yield 'Yield 2 Ran ...';
    return 'Returned ..';
}

// g1();

var g = g1();

/*

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next());

*/

for(let val of g) {
    console.log(val);
}

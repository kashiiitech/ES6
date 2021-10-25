"use strict"

let theString = 'Hello, my name is Kashif and I love JavaScript';

// startsWith()
// endsWith()
// includes()

console.log(theString.startsWith('ello')); // 'Hello' pass as argument
console.log(theString.endsWith('JavaScript'));
console.log(theString.includes('my'));  // it checkes the string is included or not

// Hex
console.log(0xFF);
// Binary
console.log(0b101011);
// Octal
console.log(0o543);

console.log(Number.isFinite(Infinity));  // pass 3, -3 you will get true and NaN you will get false
console.log(Number.isNaN(NaN));
console.log(Number.isInteger(2)); // pass -2 and Infinity

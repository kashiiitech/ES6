"use strict"

function greet($greeting) {
    console.log($greeting);
}

greet('Hello');  // Run it without a parameter


function greet($greeting = 'Hello World') {
    console.log($greeting);
}

greet(); // Also pass the parameters


// Spread operator
let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test() {
    console.log(args1+','+args2);
}


test.apply(null, args);
test(...args1, ...args2);

// Spread Operator

let kashiiitech = ["Hi", "my", "name","is","kashif","ali"];
let kashiif = ["Wellcome", "to", "my", "site"];

console.log(kashiiitech);

console.log(...kashiiitech);
console.log(...kashiif);

let kashi = [...kashiiitech, ...kashiif, "This", "is", "ES6","blog"];
console.log(...kashi)
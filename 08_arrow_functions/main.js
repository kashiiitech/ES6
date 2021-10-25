"use strict"

// Arrow functions

// benefits shorter syntax allow you to bind this lexically

function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){ 
    return arr.map((x) => {
        console.log(this.prefix + x);
    });
}


let pre = new Prefixer("Hello ");
pre.prefixArray(['kashi', 'Daniel']);


let add = function(a, b) {
    let sum = a+b;
    console.log(sum);
    return false;
}

// add(2, 2);

// change the above into an Arrow function

let add = (a, b) => {
    let sum = a+b;
    console.log(sum);
    return false;
}

add(10, 2);
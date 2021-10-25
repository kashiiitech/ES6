"use strict"

// Set and Map
/*
let myArray = [11, 22, 34, 65, 34];
let mySet = new Set(myArray);

mySet.add('100');  // It can stores different types of values
mySet.add({a: 1, b:2});
mySet.delete(22);
// mySet.clear();
mySet.add('100');
 
// console.log(mySet);
// console.log(mySet.size);

mySet.forEach(function(val) {
    console.log(val);
});
*/

/*
// Map is a key value pair
let myMap = new Map([['a1', 'Hello'],['b2', 'GoodBye']]);
myMap.set('c3', 'Foo');
myMap.delete('a1');     // delete by the key
console.log(myMap)
console.log(myMap.size);

*/

// WeakSet and WeakMap these have to do with objects

/*

let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

carWeakSet.add(car1);

let car2 = {
    make: 'Toyota',
    model: 'Camry'
}

carWeakSet.add(car2);

carWeakSet.delete(car1);

console.log(carWeakSet);

*/

let carWeakMap = new WeakMap();

let key1 = {
    id: 1
}

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

let key2 = {
    id: 2
}

let car2 = {
    make: 'Toyota',
    model: 'Camry'
}


carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

carWeakMap.delete(key1);

console.log(carWeakMap);
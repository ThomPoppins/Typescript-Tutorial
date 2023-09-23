"use strict";
var greet;
// greet = "hello"; // Error: Type 'string' is not assignable to type '() => void'
greet = function () { return console.log("Hello, again!"); };
greet();
// If a function doesn't return anything, it's return type is void
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
console.log(result);

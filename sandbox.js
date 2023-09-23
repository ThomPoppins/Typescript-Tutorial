// Explicit types
var character;
var age;
var isLoggedIn;
// age = "luigi"; // Error
age = 30;
// isLoggedIn = 25; // Error
isLoggedIn = true;
// Arrays
var ninjas = [];
// ninjas.push(10); // Error
ninjas.push("yoshi");
// Union types
var mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = "123";
uid = 123;
// uid = true; // Error
// Objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = []; // Array is an object
// ninjaOne = "hello"; // Error
var ninjaTwo;
ninjaTwo = { name: "mario", age: 20, beltColor: "black" };
// ninjaTwo = { name: "mario", age: 20 }; // Error
// ninjaTwo = { name: "mario", age: 20, beltColor: "black", skills: ["fighting"] }; // Error

// Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "luigi"; // Error
age = 30;

// isLoggedIn = 25; // Error
isLoggedIn = true;

// Arrays
let ninjas: string[] = [];

// ninjas.push(10); // Error
ninjas.push("yoshi");

// Union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(false);
console.log(mixed);

let uid: string | number;
uid = "123";
uid = 123;
// uid = true; // Error

// Objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = []; // Array is an object
// ninjaOne = "hello"; // Error

let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = { name: "mario", age: 20, beltColor: "black" };
// ninjaTwo = { name: "mario", age: 20 }; // Error
// ninjaTwo = { name: "mario", age: 20, beltColor: "black", skills: ["fighting"] }; // Error

let character = "mario";
let age = 30;
let isBlackBelt = false;

// character = 20; // error
character = "luigi"; // no error

// age = "yoshi"; // error
age = 40; // no error

// isBlackBelt = "yes"; // error
isBlackBelt = true; // no error

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// circ("hello"); // error
console.log(circ(7.5)); // no error

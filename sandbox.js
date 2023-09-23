var character = "mario";
var age = 30;
var isBlackBelt = false;
// character = 20; // error
character = "luigi"; // no error
// age = "yoshi"; // error
age = 40; // no error
// isBlackBelt = "yes"; // error
isBlackBelt = true; // no error
var circ = function (diameter) {
    return diameter * Math.PI;
};
// circ("hello"); // error
console.log(circ(7.5)); // no error

let greet: Function;

// greet = "hello"; // Error: Type 'string' is not assignable to type '() => void'

greet = () => console.log("Hello, again!");
greet();

// If a function doesn't return anything, it's return type is void
const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, 20);

const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7);
console.log(result);

const apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothing: null = null;

let nothingUndefined: undefined = undefined;

// built-in objects

let now: Date = new Date();

// Array
let colors: string[] = 'red green blue'.split(' ');

let myNumbers: number[] = [1, 2, 3, 4, 5];

let flags: boolean[] = [false, false, true];

// Classes
class Car {}

let car: Car;

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use anotations
// 1) Function that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a var on one line and initialize it later

let words = 'red green blue'.split(' ');

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // multi-type (union of sets)

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

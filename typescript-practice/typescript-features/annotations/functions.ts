const add: (a: number, b: number) => number = (
  a: number,
  b: number
): number => {
  return a + b;
};
// ???

const addTwoNumbers = (a: number, b: number): number => {
  return a + b;
};

// always specify return type in case of mistakes in function body
const subtract = (a: number, b: number): number => {
  // mistake such as this will be found -> a - b;
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// the function will never get executed correctly
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

const carMakers = ['ford', 'toyota', 'chevy'];
// const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// 2d arrays
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// or
// carsByMake: string[][] = [];

const toyota = carMakers[1];

const someCar = carMakers.pop();

// prevents incompatible values
// carMakers.push(5);

console.log(carMakers);
// map
const carsMapped = carMakers.map((car: string): string => {
  return car + ' mapped.';
});

console.log(carsMapped);

// Flexible types
const importantDates = [new Date(), '2030-10-10'];

importantDates.push('2020-123-123');
importantDates.push(new Date());

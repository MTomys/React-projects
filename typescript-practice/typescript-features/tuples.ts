const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

// better below
const sprite: Drink = ['clear', true, 100];

const carSpecs: [number, number] = [400, 3354];

// Preferred
const carStats = {
  horsepower: 400,
  weight: 3354,
};

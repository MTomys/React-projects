class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('driving...');
  }

  public honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, horsepower: number) {
    super(color);
    this.horsepower = horsepower;
  }

  horsepower: number;

  displayHorsepower(): void {
    console.log(`Horsepower: ${this.horsepower}`);
  }
}

const vehicle = new Vehicle('green');
const car = new Car('red', 500);

vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

console.log('============');

car.drive();
car.honk();
car.displayHorsepower();
console.log(car.color);

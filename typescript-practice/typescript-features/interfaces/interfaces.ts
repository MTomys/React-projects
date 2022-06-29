interface Reportable {
  summary(): string;
}

interface VehicleInterfaceExample {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic: VehicleInterfaceExample = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}`;
  },
};

const myCar = {
  name: 'lamborghini',
  year: 1995,
  broken: false,
  summary(): string {
    return `Name: ${this.name}, does it work? ${this.broken ? 'No' : 'Yes'}`;
  },
};

const printVehicle = (vehicle: VehicleInterfaceExample): void => {
  console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

const someDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// someDrink, myCar, and oldCivic all are reportable

printVehicle(oldCivic);
printSummary(myCar);

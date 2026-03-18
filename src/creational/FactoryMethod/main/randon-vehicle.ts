import { BycycleFactory } from "../factories/bicycle-fatory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle.ts/vehicle";

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BycycleFactory();

  const car1 = carFactory.getVehicle("Fusca");
  const car2 = carFactory.getVehicle("Celta");
  const bicycle = bicycleFactory.getVehicle("Bicicleta");

  const cars = [car1, car2, bicycle];

  return cars[randomNumbers(cars.length)];
}

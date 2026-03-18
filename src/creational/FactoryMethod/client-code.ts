import { CarFactory } from "./factories/car-factory";
import { randomCarAlgorithm } from "./main/randon-vehicle";
import { randomNumbers } from "./utils/random-numbers";

const carFactory = new CarFactory();
const customerName = ["João", "Maria", "Pedro", "Ana"];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerName[randomNumbers(customerName.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `Novo carro - ${randomNumbers(100)}`);
  newCar.stop();
  console.log("---");
}

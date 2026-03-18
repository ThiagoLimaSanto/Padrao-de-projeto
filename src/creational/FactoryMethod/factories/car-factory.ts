import { Car } from "../vehicle.ts/car";
import { Vehicle } from "../vehicle.ts/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}

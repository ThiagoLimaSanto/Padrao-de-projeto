import { Bycycle } from "../vehicle.ts/bicycle";
import { Vehicle } from "../vehicle.ts/vehicle";
import { VehicleFactory } from "./vehicle-factory";

export class BycycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bycycle(vehicleName);
  }
}

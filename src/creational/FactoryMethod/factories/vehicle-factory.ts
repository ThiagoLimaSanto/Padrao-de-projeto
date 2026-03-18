import { Vehicle } from "../vehicle.ts/vehicle";

// factory Method
export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const vehicle = this.getVehicle(vehicleName);
    vehicle.pickUp(customerName);
    return vehicle;
  }
}

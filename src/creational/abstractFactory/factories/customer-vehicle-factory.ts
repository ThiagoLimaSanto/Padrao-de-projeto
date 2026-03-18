import { Customer } from "../interfaces/customer";
import { Vehicle } from "../interfaces/vehicle";

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}

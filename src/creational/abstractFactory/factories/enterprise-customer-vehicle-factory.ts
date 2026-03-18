import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { Customer } from "../interfaces/customer";
import { Vehicle } from "../interfaces/vehicle";
import { EnterpriseVehicle } from "../vehicle/enterprise-car";

export class EnterPriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, customer);
  }
}

import { Customer } from "../interfaces/customer";

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name = `${name} (EnterPrise)`;
  }
}

import { Vehicle } from "../interfaces/vehicle";

export class IndividualVehicle implements Vehicle {
  constructor(
    public name: string,
    private readonly customer: string,
  ) {}
  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer} (Individual)`);
  }
}

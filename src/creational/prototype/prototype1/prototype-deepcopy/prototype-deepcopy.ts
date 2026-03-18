export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(
    public name: string,
    public age: number,
  ) {}
  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address) {
    this.addresses.push(address);
  }
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address("Rua 1", 10);
const person1 = new Person("Fulano", 30);
person1.addAddress(address1);
console.log(person1);
const person2 = person1.clone();
person1.addresses[0].street = "Rua 2";
person2.name = "Sicrano";
console.log(person2);
console.log(person2.addresses);
console.log(person1);

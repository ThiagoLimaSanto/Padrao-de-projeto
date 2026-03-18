const personPrototype = {
  firstName: "Fulano",
  lastName: "Silva",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

anotherPerson.firstName = "Sicrano";

console.log(anotherPerson.fullName());
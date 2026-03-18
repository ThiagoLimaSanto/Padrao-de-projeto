function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: "Fulano",
  lastName: "Silva",
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);

Person.prototype.constructor = Person;

function subPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = "ola mundo";
}

subPerson.prototype = Object.create(Person.prototype);
subPerson.prototype.constructor = subPerson;

const person1 = new Person("Fulano", "Silva", 30);
console.log(person1);

const person2 = new subPerson("Sicrano", "Oliveira", 53);
console.log(person2);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printNameAndAge() {
    console.log(`The name is ${this.name} and age is ${this.age}`)
  }
}

// Each time new is used, a new instance is created
const anilCredentials = new Person('Anil', 32);

anilCredentials.printNameAndAge();
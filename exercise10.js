// Create a constructor of a Person with 2 properties: name and last name.
//   * Pass arguments as parameters to fill the person’s properties
//   * Create a method on Persons to retrieve their full name
//   * Create another constructor of a Medic to inherit from Person
//     Pass name, last name and specialty as parameters
//   * Write an ajax GET request that sends data from the Person object
class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  get fullName() {
    return this.name + " " + this.lastName;
  }
}

class Medic extends Person {
  constructor(name, lastName, specialty) {
    super(name, lastName);
    this.specialty = specialty;
  }
  get doctorInformation() {
    return this.name + " " + this.lastName + ", " + this.specialty;
  }
}

// Create a new instance of the Medic class
let medic = new Medic("John", "Doe", "Surgeon");

// Send an AJAX GET request using vanilla JavaScript
let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "some.api.com/person?name=" +
    medic.name +
    "&lastName=" +
    medic.lastName +
    "&specialty=" +
    medic.specialty
);
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();

// Given the following object definition, add a method called printName()
// that returns the firstname plus the lastname when invoked.

var candidate = {
  name: {
    firstName: "John",
    lastName: "Galt",
    phone: "123-456-7890",
  },
  printName: function () {
    // For "printName" the -this- keyword is the object itself
    return this.name.firstName + " " + this.name.lastName;
  },
};

let fullName = candidate.printName();
console.log(fullName);

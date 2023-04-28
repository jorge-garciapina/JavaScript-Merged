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

const url = new URL("http://localhost:3000/persons");
const params = new URLSearchParams({
  name: medic.name,
  lastName: medic.lastName,
  specialty: medic.specialty,
});
url.search = params.toString();
console.log(url.search);

// Send an AJAX GET request using the fetch API
fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error("Network error");
    }
  })
  .then((data) => {
    const parsedData = JSON.parse(data)[0];
    const retriveData = document.getElementById("data");
    const personName = document.createElement("h1");
    const personLastName = document.createElement("h1");
    const personSpeciality = document.createElement("h1");
    personName.textContent = "NAME: " + parsedData.name;
    personLastName.textContent = "LAST NAME: " + parsedData.lastName;
    personSpeciality.textContent = "SPECIALITY: " + parsedData.specialty;
    retriveData.appendChild(personName);
    retriveData.appendChild(personLastName);
    retriveData.appendChild(personSpeciality);

    console.log(parsedData.name);
  })
  .catch((error) => console.error("Error:", error));

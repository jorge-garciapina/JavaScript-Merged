// Create a function that will return the properties that
// are different between 2 objects.
let plane = {
  wheels: 4,
  fuel: "Jet A",
  brand: "Boeing",
  seats: 200,
  wingspan: 70,
  airport: "Roma",
};

let jet = {
  wheels: 6,
  fuel: "Jet A-1",
  brand: "Airbus",
  seats: 300,
  wingspan: 70,
  engines: 2,
  altitude: 1700,
};

function differenceFinder(obj1, obj2) {
  let differentProperties = {};
  let propertiesObj1 = Object.getOwnPropertyNames(obj1);
  let propertiesObj2 = Object.getOwnPropertyNames(obj2);
  // 1) Properties of object 1 not present in object 2:
  for (let property in obj1) {
    if (!propertiesObj2.includes(property)) {
      differentProperties[property] = { Object1: obj1[property], Object2: "" };
    }
    //Properties present in both object, but with different values:
    else if (obj1[property] !== obj2[property]) {
      differentProperties[property] = {
        Object1: obj1[property],
        Object2: obj2[property],
      };
    }
  }

  // 2) Properties of object 2 not present in object 1:
  for (let property in obj2) {
    if (!propertiesObj1.includes(property)) {
      differentProperties[property] = { Object1: "", Object2: obj2[property] };
    }
    //Properties present in both object, but with different values:
    else if (obj1[property] !== obj2[property]) {
      differentProperties[property] = {
        Object1: obj1[property],
        Object2: obj2[property],
      };
    }
  }
  return differentProperties;
}

let differentProperties = differenceFinder(plane, jet);
console.log(differentProperties);

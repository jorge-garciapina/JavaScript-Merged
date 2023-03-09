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
  // 1) Properties of object 1
  for (let property in obj1) {
    if (!obj2.hasOwnProperty(property)) {
      differentProperties[property] = {
        Object1: obj1[property],
        Object2: "",
      };
    }
  }

  for (let property in obj2) {
    if (!obj1.hasOwnProperty(property)) {
      differentProperties[property] = {
        Object1: "",
        Object2: obj2[property],
      };
    }
  }

  for (let property in obj1) {
    if (obj2.hasOwnProperty(property) && obj1[property] !== obj2[property]) {
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

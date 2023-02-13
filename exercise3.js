function interseccion(arr1, arr2) {
  // Obtain the intersection of two arrays:
  // As in exercise 2, the code uses the
  // pass-by-references nature of the arrays.
  let output = [];
  for (elmnt of arr1) {
    if (arr2.indexOf(elmnt) !== -1) {
      output.push(elmnt);
    }
  }
  return output;
}

console.log(interseccion([2, 3, 5, 3], [3, 4, 3, 5, 3, 6, 8]));

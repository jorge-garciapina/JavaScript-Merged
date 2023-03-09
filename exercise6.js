function repeatMonths(input) {
  let followingMonth;
  let output = [];
  let inputConvertedToArray = input.split(" ");
  let monthsBeforeRepetition = [];
  let monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Iterate over the elements of the input inputConvertedToArray
  for (let i = 0; i < inputConvertedToArray.length; i++) {
    if (monthsBeforeRepetition.includes(inputConvertedToArray[i])) {
      let lastMonthBeforeRepetition =
        monthsBeforeRepetition[monthsBeforeRepetition.length - 1];

      let indexOfNextMonth = monthsOfTheYear.indexOf(lastMonthBeforeRepetition);
      followingMonth = monthsOfTheYear[(indexOfNextMonth + 1) % 12];
      output.push(followingMonth);
      output.push(inputConvertedToArray[i]);
      monthsBeforeRepetition = [];
    } else {
      output.push(inputConvertedToArray[i]);

      monthsBeforeRepetition.push(inputConvertedToArray[i]);
    }
  }

  output.push(followingMonth);

  return output.join(" ");
}

console.log(repeatMonths("January February March January February March"));
// Output: "January February March April January February March April"

console.log(repeatMonths("February March February March"));
// Output: "February March April February March April"

console.log(repeatMonths("November December November December"));
// Output: "November December January November December January"

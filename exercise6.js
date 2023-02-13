function repeatMonths(input) {
  let months = input.split(" ");
  let repeatMonths = [];
  let monthsArray = [
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
  // Iterates over the elements of the input months
  // it stops when finds a repeated month.
  for (let i = 0; i < months.length; i++) {
    if (!repeatMonths.includes(months[i])) {
      repeatMonths.push(months[i]);
    } else {
      // When a month is repeated, just add the following month
      // of the calendar
      repeatMonths.push(monthsArray[i]);
      break;
    }
  }

  return repeatMonths.concat(repeatMonths);
}

let months = repeatMonths("January February March January February March");

console.log(months);

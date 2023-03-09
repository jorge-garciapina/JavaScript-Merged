function addHoursToDate(date, hours) {
  // Convert the hours to milliseconds
  const milliseconds = hours * 60 * 60 * 1000;

  // Add the milliseconds to the date
  date.setTime(date.getTime() + milliseconds);

  // Return the updated date
  return date;
}

// Create a new date object
let myDate = new Date();

// Call the addHoursToDate function to modify the date
addHoursToDate(myDate, 5); // adds 1 hour to the date

// Output the modified date
console.log(myDate);

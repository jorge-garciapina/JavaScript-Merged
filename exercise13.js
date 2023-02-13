// Create an instance method for Date objects that gives you the next day.

// To make this it is necessary to modify the prototype
// of the Date object:
Date.prototype.tomorrow = function () {
  // In the current context "this" refers to the specific
  // instance of the date object the method was called on,
  // in this case, that instance will be "today"

  // The method -.getTime()- retrieves the number of millisecods
  // elapsed since the "epoch time" (January 1, 1970 00:00:00),
  // Thus: -this.getTime()- returns the number of milliseconds
  // elapsed since the "epoch time" to today.
  const date = new Date(this.getTime());
  // -date.getDate()- returns the day of the month that the code is run.

  // To obtain the date of tomorrow we just add 1 (the next day)
  // to the date
  date.setDate(date.getDate() + 1);
  return date;
};

const today = new Date();

const tomorrow = today.tomorrow();
console.log(tomorrow);

Date.prototype.getFormattedDateTime = function () {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = this.getFullYear();
  var month = months[this.getMonth()];
  var date = this.getDate();
  var hours = this.getHours();
  var minutes = this.getMinutes();
  var seconds = this.getSeconds();
  return (
    date +
    " " +
    month +
    " " +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
};

// With this custom method added, it is possible to use the
// following code to get the date and time in the custom format:
var currentDate = new Date();
console.log(currentDate.getFormattedDateTime());

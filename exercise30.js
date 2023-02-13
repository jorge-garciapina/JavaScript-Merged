$(document).ready(function () {
  // This jQuery selectors selects all p elements
  // whose text content contains the string "Toggle"
  $('p:contains("Toggle")').click(function () {
    $(this).next("p").toggle();
  });
});

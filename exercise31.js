$(document).ready(function () {
  // This selector selects all `p` elements whose text
  // content contains the string "Toggle"
  $("p:contains('Toggle')").click(function () {
    // This selector selects all `p` elements except the
    // one that was clicked
    $("p").not(this).next().hide();
    // This selector selects the next `p` element after
    // the one that was clicked and toggles its visibility
    $(this).next().toggle();
  });
});

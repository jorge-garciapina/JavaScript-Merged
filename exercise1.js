$(document).ready(function () {
  $("#main-container").on({
    mousemove: function (event) {
      $("#cannon").css("top", event.screenY - 70 + "px");
      $("#circle").css("top", event.screenY - 70 + "px");
    },
    click: function (event) {
      $("#circle").animate({
        left: "100vw",
        top: event.screenY - 70 + "px",
      });
    },
  });

  $("#reload").click(function () {
    window.location.reload();
  });
});

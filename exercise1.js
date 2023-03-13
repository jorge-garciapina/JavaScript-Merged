document.addEventListener("DOMContentLoaded", function () {
  const mainContainer = document.getElementById("main-container");
  const cannon = document.getElementById("cannon");
  const circle = document.getElementById("circle");
  let isAnimating = false;

  mainContainer.addEventListener("mousemove", function (event) {
    cannon.style.top = event.screenY - 70 + "px";
    if (!isAnimating) {
      circle.style.top = event.screenY - 70 + "px";
    }
  });

  mainContainer.addEventListener("click", function (event) {
    if (!isAnimating) {
      isAnimating = true;
      circle.animate(
        {
          left: "100vw",
          top: event.screenY - 70 + "px",
        },
        500
      ).onfinish = function () {
        isAnimating = false;
        circle.style.display = "none"; // hide the circle after the animation ends
      };
    }
  });

  const reloadButton = document.getElementById("reload");

  reloadButton.addEventListener("click", function () {
    window.location.reload();
  });
});

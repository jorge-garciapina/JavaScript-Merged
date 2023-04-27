document.addEventListener("DOMContentLoaded", function () {
  const mainContainer = document.getElementById("main-container");
  const cannon = document.getElementById("cannon");
  const circle = document.getElementById("circle");
  let isAnimating = false;

  function moveCannonAndCircle(event) {
    cannon.style.top = event.clientY - 15 + "px";
    if (!isAnimating) {
      circle.style.top = event.clientY - 15 + "px";
    }
  }

  // Set the initial position of the cannon and the ball to match the mouse position
  mainContainer.dispatchEvent(
    new MouseEvent("mousemove", { clientY: window.innerHeight / 2 })
  );

  mainContainer.addEventListener("mousemove", moveCannonAndCircle);

  mainContainer.addEventListener("click", function (event) {
    if (!isAnimating) {
      isAnimating = true;
      circle.animate(
        {
          left: "-100vw",
          // Removed the 'top' property from the animation
        },
        900
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

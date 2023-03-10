document.addEventListener("DOMContentLoaded", function () {
  // Get all p elements on the page
  let paragraphsInPage = document.querySelectorAll("p");

  // Iterate over each p element
  paragraphsInPage.forEach(function (p) {
    // If the text content of the p element contains the word "Toggle"
    if (p.textContent.indexOf("Toggle") !== -1) {
      // Add a click event listener to the p element
      p.addEventListener("click", function () {
        // Get the next sibling of the clicked p element
        let adjacentP = p.nextElementSibling;
        let stylesOfAdjacent = window.getComputedStyle(adjacentP);

        let isHidden = stylesOfAdjacent.display === "none";

        // Hide and Show functionallity
        if (isHidden) {
          adjacentP.style.display = "block";
        } else {
          adjacentP.style.display = "none";
        }
      });
    }
  });
});

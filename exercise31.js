document.addEventListener("DOMContentLoaded", function () {
  // Add a click event listener to the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element is a "Toggle" paragraph
    if (
      event.target.tagName === "P" &&
      event.target.textContent.indexOf("Toggle") !== -1
    ) {
      // Get all content paragraphs
      const contentParagraphs = document.querySelectorAll("p:nth-child(even)");

      // Hide all content paragraphs
      contentParagraphs.forEach((paragraph) => {
        // If the paragraph is not the next sibling of the clicked p element, hide it
        if (paragraph !== event.target.nextElementSibling) {
          paragraph.classList.add("hidden");
        }
      });

      // Get the next sibling of the clicked p element
      let adjacentP = event.target.nextElementSibling;

      // Toggle the "hidden" class on the adjacent p element
      // If it's currently hidden, it will be shown, and vice versa
      adjacentP.classList.toggle("hidden");
    }
  });
});

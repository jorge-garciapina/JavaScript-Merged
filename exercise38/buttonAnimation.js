$(document).ready(function () {
  let weaponTop = 0;
  let counter = 0;

  // ---------- START: Start button ----------
  // Add a click event listener to the start button
  $("#start").click(function () {
    // Animate the start button to move left and fade out
    $(this).animate(
      {
        left: "-=2000", // Move left by 2000px
        opacity: 0, // Fade out to 0 opacity
      },
      1000, // Animation duration of 1000ms
      function () {
        // Remove the start button from the page after the animation is complete
        $(this).remove();
      }
    );

    // ---------- START: Weapon movement ----------
    // Add a mousemove event listener to the document to track the mouse position
    $(document).mousemove(function (event) {
      // Update the weaponTop variable with the mouse's Y position
      weaponTop = event.pageY - $("#weapon").height() / 2;
      // Update the weapon's top position to match the mouse's Y position
      $("#weapon").css({
        top: weaponTop + "px",
      });
    });
    // ---------- END: Weapon movement ----------

    // ---------- START: Bullets ----------
    // Add a keydown event listener to the document to listen for space bar presses
    $(document).keydown(function (event) {
      // If the space bar is pressed
      if (event.keyCode === 32) {
        // Create a new shot
        let shot = $("<div>").addClass("shot");
        // Set the shot's position to be just to the right of the weapon
        shot.css({
          top: weaponTop + $("#weapon").height() / 2 + "px",
          left: $("#weapon").offset().left + $("#weapon").width() + "px",
        });
        // Add the shot to the page
        $("body").append(shot);
        // Animate the shot to move to the right
        shot.animate(
          {
            left: "+=2000", // Move right by 2000px
          },
          1000, // Animation duration of 1000ms
          function () {
            // Remove the shot from the page after the animation is complete
            shot.remove();
          }
        );
      }
    });
    // ---------- END: Bullets ----------

    // ---------- START: Enemies ----------
    // Create an interval to continuously add new enemies to the page
    setInterval(function () {
      // Create a new enemy
      let enemy = $("<div>").addClass("enemy");
      // Set the enemy's position to be off the right of the page
      enemy.css({
        top: Math.random() * $(window).height() + "px",
        left: $(window).width() + "px",
      });
      // Add the enemy to the page
      $("body").append(enemy);
      // Animate the enemy to move to the left
      enemy.animate(
        {
          left: "-=2000", // Move left by 2000px
        },
        5000, // Animation duration of 5000ms
        function () {
          // Remove the enemy from the page after the animation is complete
          enemy.remove();
        }
      );
    }, 500);
    // ---------- END: Enemies ----------

    // ---------- START: Collision Detection ----------
    // This section sets an interval function to run every 10 milliseconds.
    setInterval(function () {
      // The .each function is used to iterate over all elements
      //  with the class "shot".
      $(".shot").each(function () {
        // Here we store the current shot element in the variable "shot".
        let shot = $(this);
        // We use the getBoundingClientRect method to get the position
        // and size of the shot element.
        let shotRect = shot[0].getBoundingClientRect();
        // The .each function is used to iterate over all elements
        // with the class "enemy".
        $(".enemy").each(function () {
          // Here we store the current enemy element in the variable
          // "enemy".
          let enemy = $(this);
          // We use the getBoundingClientRect method to get the
          // position and size of the enemy element.
          let enemyRect = enemy[0].getBoundingClientRect();
          // -We use an if statement to check if the shot and enemy
          //  elements are overlapping.
          // -If the shot is to the right of the enemy's left edge and
          //  to the left of the enemy's right edge, and the shot is
          //  above the enemy's top edge and below the enemy's bottom
          //  edge, then we remove both the shot and enemy elements.
          if (
            shotRect.left + shotRect.width >= enemyRect.left &&
            shotRect.left <= enemyRect.left + enemyRect.width &&
            shotRect.top <= enemyRect.top + enemyRect.height &&
            shotRect.top + shotRect.height >= enemyRect.top
          ) {
            $("#counter").text("Enemies destroyed: " + counter);
            counter++;
            console.log(counter);
            shot.remove();
            enemy.remove();
          }
        });
      });
    }, 10);
    // ---------- END: Collision Detection ----------
  });
  // ----------  END: Start button  ----------
});

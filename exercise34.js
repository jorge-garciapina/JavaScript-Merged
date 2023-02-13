// Write the logic required to represent a bouncing ball.
// The requirements are:
//  - Initial height of the ball should be 10 in.
//  - On first hitting the floor, it should bounce back 9 in.
//  - On the second bounce, it should go up 8 in. and so on.
//  - Animate a ball in HTML/CSS using the written logic
// Initial height of the ball
// Initial height of the ball in pixels
// let height = 400;

// // Keep track of the number of bounces
// let bounceCount = 0;

// $("#activate").click(function () {

//   $("#ball").animate({
//     bottom: "0px",
//   });
// });

// let initial = 400;
// let counter = 1;
// let bounce = [];

// while (initial > 0) {
//   let moveStep = [];
//   if (counter % 2 !== 0) {
//     moveStep.push(initial);
//     moveStep.push(0);
//     console.log(initial, 0);
//     initial -= 40;
//   } else {
//     moveStep.push(0);
//     moveStep.push(initial);
//     console.log(0, initial);
//   }

//   bounce.push(moveStep);
//   counter += 1;
//   //   console.log(initial, counter);
// }

// console.log(bounce);

const element = document.getElementById("ball");
// console.log(element.style);

let x = 0;
let direction = "falling";
function animate() {
  //   console.log(x);
  if (x <= 500 && direction === "falling") {
    x += 5;
    console.log(x);
  }
  if (x === 500) {
    direction = "rising";
    x -= 5;
    console.log("ddfdfdf");
  }
  if (x <= 500 && direction === "rising") {
    x -= 5;
  }
  element.style.transform = `translateY(${x}px)`;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

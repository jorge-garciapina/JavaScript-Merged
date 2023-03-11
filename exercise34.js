let startButton = document.getElementById("start");
let ball = document.getElementById("ball");

function movementIntervalsOfElement(elementToAnimate) {
  let ballHeight = window.getComputedStyle(elementToAnimate).bottom;
  let numericalValueOfHeight = parseFloat(ballHeight);
  const initialHeight = 10;
  let height = initialHeight;
  let isFalling = true;
  let initialPosition;
  let finalPosition;
  let positions = [];

  while (height > 0) {
    let partialPosition = [];
    if (isFalling) {
      initialPosition = height;
      finalPosition = 0;
      isFalling = false;
      partialPosition.push(initialPosition * (numericalValueOfHeight / 10));
      partialPosition.push(finalPosition * (numericalValueOfHeight / 10));
      positions.push(partialPosition);
    } else {
      height -= 1;
      initialPosition = 0;
      finalPosition = height;
      isFalling = true;
      partialPosition.push(initialPosition * (numericalValueOfHeight / 10));
      partialPosition.push(finalPosition * (numericalValueOfHeight / 10));
      positions.push(partialPosition);
    }
  }
  return positions;
}

let movementIntervals = movementIntervalsOfElement(ball);

let intervalTime = 5000 / movementIntervals.length; // 5 seconds divided by the number of intervals
let currentIndex = 0;

function animateUsingIntervals() {
  setTimeout(function () {
    currentIndex++;
    if (currentIndex < movementIntervals.length) {
      ball.style.bottom = movementIntervals[currentIndex][0] + "px";
      setTimeout(animateUsingIntervals, intervalTime);
    }
  }, intervalTime);
}

ball.style.transition = "bottom 0.5s linear";

startButton.onclick = () => {
  animateUsingIntervals();
};

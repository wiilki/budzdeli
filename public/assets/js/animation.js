// animation.js

// Get the HTML element to animate
const textElement = document.getElementById('animated-text');

// Get the <span> element inside animated-text
const animatedSpan = textElement.querySelector('span');

// Define the animation properties
const animationProperties = {
    targets: '.easing-demo .el',
    translateX: 250,
    easing: 'easeInOutExpo'
};

// Create the animation
anime(animationProperties);

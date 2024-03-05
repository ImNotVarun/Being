// Function to trigger the fade-out animation and navigate to the home page
function fadeOutAndNavigate() {
    // Add a class to the body to initiate the fade-out animation
    document.body.classList.add('fade-out-animation');

    // After a delay (matching the animation duration), navigate to the home page
    setTimeout(function() {
        window.location.href = 'index.html'; // Replace 'index.html' with the actual URL of your home page
    }, 1000); // Adjust the delay as needed to match the duration of your animation
}
// Get reference to the circle elements
const circles = document.querySelectorAll('.circle-left, .circle-left2, .circle-left3, .circle-left4');

// Function to handle scroll event
function handleScroll() {
    // Check if the user has scrolled down (you can modify this condition as per your requirement)
    if (window.scrollY > 0) {
        // If scrolled, add the "circle-hidden" class to hide the circles with animation
        circles.forEach(circle => {
            circle.classList.add('circle-hidden');
        });
    } else {
        // If not scrolled or scrolled to the top, remove the "circle-hidden" class to show the circles
        circles.forEach(circle => {
            circle.classList.remove('circle-hidden');
        });
    }
}

// Add scroll event listener to the window
window.addEventListener('scroll', handleScroll);


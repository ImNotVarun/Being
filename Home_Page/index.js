// Function to trigger the fade-out animation and navigate to the home page
function fadeOutAndNavigate() {
    // Add a class to the body to initiate the fade-out animation
    document.body.classList.add('fade-out-animation');

    // After a delay (matching the animation duration), navigate to the home page
    setTimeout(function() {
        window.location.href = 'index.html'; // Replace 'index.html' with the actual URL of your home page
    }, 1000); // Adjust the delay as needed to match the duration of your animation
}

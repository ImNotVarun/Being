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

// Function to handle scroll event and trigger animations
function handleScroll() {
    // Get reference to all category containers
    const categoryContainers = document.querySelectorAll('.category, .category2');
    
    // Loop through each category container
    categoryContainers.forEach(container => {
        // Get the position and dimensions of the container
        const rect = container.getBoundingClientRect();
        
        // Check if the container is in the viewport
        if (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            // If the container is in the viewport, add animation class to the category images
            const categoryImages = container.querySelectorAll('img');
            categoryImages.forEach(image => {
                image.classList.add('animate-category');
            });
        }
    });
    
    // Get the scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;
    
    // Adjust the visibility of the circles based on scroll position
    if (scrollPosition > 0) {
        // If scrolled, hide the circles
        circles.forEach(circle => {
            circle.classList.add('circle-hidden');
        });
    } else {
        // If not scrolled or scrolled to the top, show the circles
        circles.forEach(circle => {
            circle.classList.remove('circle-hidden');
        });
    }
}

// Add scroll event listener to the window
window.addEventListener('scroll', handleScroll);

// Initial call to handleScroll to check for animations when the page loads
handleScroll();


// Function to handle lazy loading of category images
function lazyLoadImages() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          observer.unobserve(image); // Stop observing the image after it's loaded
        }
      });
    });
  
    const categoryImages = document.querySelectorAll('.category img, .category2 img');
    categoryImages.forEach((image) => {
      image.dataset.src = image.src; // Store the original image source
      image.src = ''; // Set the source to an empty string to prevent loading initially
      observer.observe(image); // Start observing the image
    });
  }
  
  // Function to handle scroll event and trigger animations
  function handleScroll() {
    // Get reference to all category containers
    const categoryContainers = document.querySelectorAll('.category, .category2');
  
    // Loop through each category container
    categoryContainers.forEach((container) => {
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
        categoryImages.forEach((image) => {
          image.classList.add('animate-category');
        });
      }
    });
  }
  
  // Call the lazyLoadImages function
  lazyLoadImages();
  
  // Add scroll event listener to the window
  window.addEventListener('scroll', handleScroll);
  
  // Initial call to handleScroll to check for animations when the page loads
  handleScroll();
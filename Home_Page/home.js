document.addEventListener("DOMContentLoaded", function() {
    const taskbarItems = document.querySelectorAll('.taskbar ul li img');
    const containers = document.querySelectorAll('.container2, .container3, .container4, .container5');
    const tmContainer = document.querySelector('.container');

    // Hide all containers except tmContainer on the home page
    if (window.location.pathname === "/Home.html") {
        containers.forEach(function(container) {
            if (container !== tmContainer) {
                container.style.display = 'none';
            }
        });
    }

    // Add event listener to each taskbar item
    taskbarItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            // Hide tm-container
            tmContainer.style.display = 'none';

            // Hide all containers
            containers.forEach(function(container) {
                container.style.display = 'none';
            });

            // Show the corresponding container
            containers[index].style.display = 'flex';
        });
    });
});

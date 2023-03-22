// Get all the navbar links
const navLinks = document.querySelectorAll('.nav-link');

// Add a click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the "active" class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add the "active" class to the clicked link
    link.classList.add('active');
  });
});

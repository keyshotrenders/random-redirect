// Array of URLs to redirect to
const redirectUrls = [
    'https://theupgradeguide.com/web-stories/new-artists-the-top-10/',
    'https://theupgradeguide.com/web-stories/food-stuff/',
    'https://theupgradeguide.com/web-stories/gifts-for-under-20/',
    'https://theupgradeguide.com/contact-us/'
];

// Get the button element from the HTML
const button = document.getElementById('redirectButton');

// Add an event listener for the 'click' event
button.addEventListener('click', () => {
    // Generate a random index number based on the array length
    const randomIndex = Math.floor(Math.random() * redirectUrls.length);

    // Get the randomly selected URL
    const randomUrl = redirectUrls[randomIndex];

    // Redirect the browser to the selected URL
    console.log(`Redirecting to: ${randomUrl}`); // Optional: for debugging
    window.location.href = randomUrl;
});

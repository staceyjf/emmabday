document.addEventListener('DOMContentLoaded', function () {
    const card = document.querySelector('.card');
    const arrow = document.querySelector('#arrow');

    // Function to check if touch events are supported on screens smaller than 600 pixels
    function isTouchDevice() {
        return window.innerWidth < 600 && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
    }

    // Function to handle click or touch event based on device type
    function handleCardInteraction() {
        // Check if it's a touch device and toggle the show-right-card class accordingly
        if (isTouchDevice()) {
            card.classList.toggle('show-right-card');
            card.classList.remove('open');
        } else {
            card.classList.toggle('open');
            card.classList.remove('show-right-card');
        }
    }

    console.log(card, arrow);

    // Add click or touch event listener based on device type
    if (isTouchDevice()) {
        card.addEventListener('touchend', handleCardInteraction);
    } else {
        card.addEventListener('click', handleCardInteraction);
        console.log('event listener added');
    }
});

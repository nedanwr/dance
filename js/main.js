// Remove Context Menu
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
}, false);

// Set Volume
const audio = document.querySelector('audio').volume = 0.75;
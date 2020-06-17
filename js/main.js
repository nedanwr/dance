// Remove Context Menu
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
}, false);

// Play Music
const audio = new Audio('../audio/audio.mp3');

window.onload = audio.play().then(audio.volume = 0.55);
// Remove Context Menu
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
}, false);

// Play Music
const audio = new Audio('https://cdn.dance.sgp1.cdn.digitaloceanspaces.com/audio/audio.mp3');
window.onload = audio.play().then(audio.volume = 0.55).then(audio.loop = true);
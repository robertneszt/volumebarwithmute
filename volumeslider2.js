var diceSound = document.getElementById("dice-sound");
var winningSound = document.getElementById("winning-sound");
var gameMusic = document.getElementById("game-music");
var snakeSound = document.getElementById("snake-sound");
var ladderSound = document.getElementById("ladder-sound");
var muteButton = document.getElementById("mute-button");
var volumeSlider = document.getElementById("volume-slider");
var currentVolume = 50;
var isMuted = false;

// Mute/Unmute button
muteButton.addEventListener("click", function() {
  if(isMuted) {
    // Change button image to unmute
    muteButton.style.backgroundImage = "url('unmute.png')"; //change to: imgs/unmute.png
    // Set volume to previous volume
    volumeSlider.value = currentVolume;
    // Update volume of the game audio
    diceSound.volume = volumeSlider.value / 100;
    winningSound.volume = volumeSlider.value / 100;
    snakeSound.volume = volumeSlider.value / 100;
    ladderSound.volume = volumeSlider.value / 100;
    gameMusic.volume = volumeSlider.value / 100;
    isMuted = false;
  } else {
    // Save current volume
    currentVolume = volumeSlider.value;
    // Change button image to mute
    muteButton.style.backgroundImage = "url('mute.png')"; //change to: imgs/mute.png
    // Set volume to 0
    volumeSlider.value = 0;
    // Update volume of the game audio
    diceSound.volume = 0;
    winningSound.volume = 0;
    ladderSound.volume = 0;
    snakeSound.volume = 0;
    gameMusic.volume = 0;
    isMuted = true;
  }
});

// Volume slider
volumeSlider.addEventListener("input", function() {
  if(volumeSlider.value > 0) {
    muteButton.style.backgroundImage = "url('unmute.png')";
    isMuted = false;
  } else {
    muteButton.style.backgroundImage = "url('mute.png')";
    isMuted = true;
  }
  diceSound.volume = volumeSlider.value / 100;
  winningSound.volume = volumeSlider.value / 100;
  ladderSound.volume = volumeSlider.value / 100;
  snakeSound.volume = volumeSlider.value / 100;
  gameMusic.volume = volumeSlider.value / 100;
});
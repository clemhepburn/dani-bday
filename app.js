const button = document.querySelector('.dani');
const audio = new Audio('./assets/happy.mp3');
const isPlaying = false;

function myPlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

button.addEventListener('click', myPlay);

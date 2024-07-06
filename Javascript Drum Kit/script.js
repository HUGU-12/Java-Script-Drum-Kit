
const keySounds = {
  A: '/Javascript Drum Kit/sounds/clap.wav', 
  S: '/Javascript Drum Kit/sounds/hihat.wav', 
  D: '/Javascript Drum Kit/sounds/kick.wav', 
  F: '/Javascript Drum Kit/sounds/openhat.wav', 
  G: '/Javascript Drum Kit/sounds/boom.wav',
  H: '/Javascript Drum Kit/sounds/ride.wav',
  J: '/Javascript Drum Kit/sounds/snare.wav', 
  K: '/Javascript Drum Kit/sounds/tom.wav',
  L: '/Javascript Drum Kit/sounds/tink.wav'
}

  function handleKeyPress(event, isKeyDown) {
    const pressedKey = event.key.toUpperCase();
    const soundFile = keySounds[pressedKey];
    const keyElement = document.querySelector(`[data-key="${pressedKey}"]`);
  
    if (keyElement) {
      if (isKeyDown) {
        const audio = new Audio(soundFile);
        audio.play();
        keyElement.classList.add('pressed');
      } else {
        keyElement.classList.remove('pressed');
      }
    }
  }
  
  document.addEventListener('keydown', (event) => {
    handleKeyPress(event, true);
  });
  
  document.addEventListener('keyup', (event) => {
    handleKeyPress(event, false);
  });
  



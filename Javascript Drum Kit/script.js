//create an object with keys corresponding to the sound files
const keySounds = {
  clap: 'clap.wav',
  hihat: 'hihat.wav',
  kick: 'kick.wav',
  openhat: 'openhat.wav',
  boom: 'boom.wav',
  ride: 'ride.wav',
  snare: 'snare.wav',
  tom:'tom.wav',
  tink: 'tink.wav'
};

const soundNames = Object.keys(keySounds);

const keys = document.querySelectorAll('.key');//this yields a node list which is iterable

keys.forEach((key,index) =>{
  key.addEventListener('click',() =>{
    const sound = new Audio(`sounds/${keySounds[soundNames[index]]}`);
    sound.play();
  });
});
console.log(soundNames);

function removeTransition(event) {
    // many events get triggered due to border, shadows etc, we want only transform event for transition
    if (event.propertyName != 'transform')
        return;
    this.classList.remove('playing');
}

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); //gives me that exact div according to the key pressed event
    if (!audio) return; // If no audio element with the key, return
    audio.currentTime = 0; // set time of audio to 0 whenever key event occurs, in order to play from beginning
    audio.play();
    //console.log(key);
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);
//cannot use event listener because in an array of keys(events), js cannot listen to each event, so we need to use for each loop and check each one that whose class changed to playing
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

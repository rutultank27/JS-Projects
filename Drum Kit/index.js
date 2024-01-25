// function to play an audio
function playAudio(e) {
    // get the audio element 
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // get the key element
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    // applying transition class of selected key elemet
    key.classList.add('playing');
    // assigning value to selected audio element
    audio.currentTime = 0;
    // play a selected audio
    audio.play();
}

function removeTransition(e) {
    // checks if selected key element has trasform property
    if(e.propertyName != 'transform') return;
    // removes the class from selected key element
    e.target.classList.remove('playing');
}

// selects all key elemets
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playAudio);
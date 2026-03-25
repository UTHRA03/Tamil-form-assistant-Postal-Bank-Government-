function playPauseAudio(id) {
    const audio = document.getElementById(id);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function rewindAudio(id) {
    const audio = document.getElementById(id);
    audio.currentTime = Math.max(0, audio.currentTime - 10);
}

function forwardAudio(id) {
    const audio = document.getElementById(id);
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
}

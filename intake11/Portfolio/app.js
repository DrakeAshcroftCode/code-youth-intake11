let audioElement = document.getElementById('audio-element');
let playButton = document.getElementById('play-button');
let pauseButton = document.getElementById('pause-button');

playButton.addEventListener('click', function() {
    audioElement.play();
});

pauseButton.addEventListener('click', function() {
    audioElement.pause();
});

SecurityPolicyViolationEvent.apply
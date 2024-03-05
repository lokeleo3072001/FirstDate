document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const toggleButton = document.getElementById("audio-player");

    toggleButton.addEventListener("click", function () {
        if (audio.paused) {
            console.log("play");
            document.getElementById("playerVolumeOff").style.display = "none";
            document.getElementById("playerVolumeOn").style.display = null;
            audio.play();
        } else {
            console.log("pause");
            document.getElementById("playerVolumeOff").style.display = null;
            document.getElementById("playerVolumeOn").style.display = "none";
            audio.pause();
        }
    });
});

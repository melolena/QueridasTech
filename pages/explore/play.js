const playPauseButtons = document.querySelectorAll('.play-pause-btn');

playPauseButtons.forEach((button, index) => {
    const audio = new Audio('../../img/song.mp3'); // Substitua por caminhos de áudio individuais se precisar
    const playerIcon = button.querySelector('.player-icon');
    const progressBar = document.querySelectorAll('.audio-progress')[index];

    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playerIcon.src = '../../img/pauseIcon.svg';
        } else {
            audio.pause();
            playerIcon.src = '../../img/playIcon.svg';
        }
    });

    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });

    audio.addEventListener('ended', () => {
        playerIcon.src = '../../img/playIcon.svg';
        progressBar.style.width = '0%';
    });
});

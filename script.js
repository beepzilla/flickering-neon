const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');
const audioSource = document.getElementById('audio-source');

let isPlaying = false;
let currentSongIndex = 0;
const songs = [
    'https://ipfs.io/ipfs/Qma4cKFvWvfqoKXpB3KCPhFsz2ySje5PSNywTBZff8eXT4/stardust-danijel-zambo-main-version-03-13-1372.mp3',
    'https://ipfs.io/ipfs/Qma4cKFvWvfqoKXpB3KCPhFsz2ySje5PSNywTBZff8eXT4/stellar-escape-prigida-main-version-25318-03-02.mp3',
    'https://ipfs.io/ipfs/Qma4cKFvWvfqoKXpB3KCPhFsz2ySje5PSNywTBZff8eXT4/stellar-escape-prigida-main-version-25318-03-02%20(1).mp3',
    'song4.mp3',
    'song5.mp3',
    'song6.mp3',
    'song7.mp3',
    'song8.mp3'
];

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.src = 'https://ipfs.io/ipfs/QmPGj77da8EWd1UBS7FBQwnWHctQVEejHDsHxLdSRLTBzS/360_F_328807197_ZbIU1ugaf36klDytjxL3THxKKhFfWkjw-removebg-preview.png'; // Play button image URL
    } else {
        audioPlayer.play();
        isPlaying = true;
        playBtn.src = 'https://ipfs.io/ipfs/QmVi7BBo9E9RZSik3jCrmnQKsM3g9s7r1uBgBkC5KryzZA/pause-button-removebg-preview.png'; // Pause button image URL
    }
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioSource.src = songs[currentSongIndex];
    audioPlayer.load();
    if (isPlaying) {
        audioPlayer.play();
    }
});

audioPlayer.addEventListener('ended', () => {
    nextBtn.click();
});

const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');
const audioSource = document.getElementById('audio-source');

let isPlaying = false;
let currentSongIndex = 0;
const songs = [
    'https://ipfs.io/ipfs/Qma4cKFvWvfqoKXpB3KCPhFsz2ySje5PSNywTBZff8eXT4/stardust-danijel-zambo-main-version-03-13-1372.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/pencil-crayons-sulyya-main-version-27127-03-10.mp3',
    'https://ipfs.io/ipfs/Qma4cKFvWvfqoKXpB3KCPhFsz2ySje5PSNywTBZff8eXT4/stellar-escape-prigida-main-version-25318-03-02%20(1).mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/game-over-danijel-zambo-main-version-02-03-1394.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/sunset-in-junipero-bach-main-version-19643-03-22.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/easy-arcade-hartzmann-main-version-28392-02-32.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/milky-way-mountaineer-main-version-28369-02-20.mp3',
    'https://ipfs.io/ipfs/QmdcYArSqshxQ5LE6BgWgQQPnz7AWB4AFHXwsbBusqQXfk/space-ranger-moire-main-version-03-04-10814.mp3'
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

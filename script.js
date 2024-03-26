const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const nextBtn = document.getElementById('next-btn');
const audioSource = document.getElementById('audio-source');
const textElement = document.getElementById('text');
const imageContainer = document.getElementById('image-container');

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
    } else {
        audioPlayer.play();
    }
});

pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
});

nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioSource.src = songs[currentSongIndex];
    audioPlayer.load();
    if (isPlaying) {
        audioPlayer.play();
    }
});

audioPlayer.addEventListener('play', () => {
    isPlaying = true;
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
});

audioPlayer.addEventListener('pause', () => {
    isPlaying = false;
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
});

audioPlayer.addEventListener('ended', () => {
    nextBtn.click();
});

document.addEventListener('mousemove', (event) => {
    applyGlowEffect(event, textElement, 'text');
    applyGlowEffect(event, imageContainer, 'image');
});

function applyGlowEffect(event, element, type) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);

    const maxDistance = Math.max(width, height) / 2;
    const intensity = Math.max(0, 1 - distance / maxDistance);

    if (type === 'text') {
        element.style.textShadow = `
            0 0 ${50 * intensity}px #00ff00,
            0 0 ${100 * intensity}px #00ff00,
            0 0 ${200 * intensity}px #00ff00,
            0 0 ${400 * intensity}px #00ff00`;
        element.style.border = `3px solid rgba(22, 182, 212, ${intensity})`;
        element.style.boxShadow = `
            0 0 ${50 * intensity}px rgba(22, 182, 212, ${intensity}),
            0 0 ${100 * intensity}px rgba(22, 182, 212, ${intensity}),
            0 0 ${200 * intensity}px rgba(22, 182, 212, ${intensity})
        `;
    } else if (type === 'image') {
        const startColor = { r: 0, g: 255, b: 0 }; // Green
        const endColor = { r: 128, g: 0, b: 128 }; // Purple
        const color = interpolateColor(startColor, endColor, intensity);
        const rgbColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

        element.style.boxShadow = `
            0 0 ${50 * intensity}px ${rgbColor},
            0 0 ${100 * intensity}px ${rgbColor},
            0 0 ${150 * intensity}px ${rgbColor}
        `;
    }
}

function interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) { 
        factor = 0.5; 
    }
    const result = color1;
    result.r = Math.round(result.r + factor * (color2.r - color1.r));
    result.g = Math.round(result.g + factor * (color2.g - color1.g));
    result.b = Math.round(result.b + factor * (color2.b - color1.b));
    return result;
}

       

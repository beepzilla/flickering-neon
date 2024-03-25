const textElement = document.getElementById('text');
const imageElement = document.getElementById('image-container');

document.addEventListener('mousemove', (event) => {
    applyGlowEffect(event, textElement);
    applyGlowEffect(event, imageElement);
});

function applyGlowEffect(event, element) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);

    const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2) * 2;
    const intensity = Math.max(0, 1 - distance / maxDistance);

    if (element === textElement) {
        element.style.textShadow = `
            0 0 ${10 * intensity}px #00ff00,
            0 0 ${20 * intensity}px #00ff00,
            0 0 ${40 * intensity}px #00ff00,
            0 0 ${80 * intensity}px #00ff00,
            0 0 ${160 * intensity}px #00ff00,
            0 0 ${320 * intensity}px #00ff00,
            0 0 ${640 * intensity}px #00ff00
        `;
    } else if (element === imageElement) {
        element.style.boxShadow = `
            0 0 ${10 * intensity}px #00ff00,
            0 0 ${20 * intensity}px #00ff00,
            0 0 ${40 * intensity}px #00ff00,
            0 0 ${80 * intensity}px #00ff00,
            0 0 ${160 * intensity}px #00ff00,
            0 0 ${320 * intensity}px #00ff00,
            0 0 ${640 * intensity}px #00ff00
        `;
    }
}

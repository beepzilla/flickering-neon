const textElement = document.getElementById('text');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = textElement.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);
    const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
    const intensity = Math.max(0, 1 - distance / maxDistance);
    
    textElement.style.textShadow = `
        0 0 ${10 * intensity}px #00ff00,
        0 0 ${20 * intensity}px #00ff00,
        0 0 ${40 * intensity}px #00ff00,
        0 0 ${80 * intensity}px #00ff00,
        0 0 ${160 * intensity}px #00ff00,
        0 0 ${320 * intensity}px #00ff00,
        0 0 ${640 * intensity}px #00ff00
    `;
});

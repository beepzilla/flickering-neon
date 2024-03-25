const textElement = document.getElementById('text');
const imageElement = document.getElementById('image');

document.addEventListener('mousemove', (event) => {
    applyGlowEffect(event, textElement, 'text');
    applyGlowEffect(event, imageElement, 'image');
});

function applyGlowEffect(event, element, type) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);
    
    const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
    const intensity = Math.max(0, 1 - distance / maxDistance);

    if (type === 'text') {
        // Apply the glowing effect to the text shadow and border
        element.style.textShadow = `
            0 0 ${10 * intensity}px #00ff00,
            0 0 ${20 * intensity}px #00ff00,
            0 0 ${40 * intensity}px #00ff00,
            0 0 ${80 * intensity}px #00ff00
        `;
        element.style.border = `3px solid rgba(22, 182, 212, ${intensity})`;
        element.style.boxShadow = `
            inset 0 0 ${10 * intensity}px rgba(113,213,255, 0.5),
            inset 0 0 ${20 * intensity}px rgba(113,213,255, 0.5),
            0 0 ${10 * intensity}px rgba(113,213,255, 0.3),
            0 0 ${20 * intensity}px rgba(113,213,255, 0.3),
            0 0 ${40 * intensity}px rgba(113,213,255, 0.3)
        `;
    } else if (type === 'image') {
        // Adjust intensity for a subtler effect on the image
        const imageIntensity = intensity * 0.6;
        element.style.filter = `brightness(${1 + imageIntensity})`;
    }
}

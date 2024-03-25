const textElement = document.getElementById('text');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = textElement.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distance = Math.sqrt((clientX - centerX) ** 2 + (clientY - centerY) ** 2);

    // Increase the maxDistance to extend the range of the glow effect
    const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2) * 2; // Adjust this multiplier as needed

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

    // Apply the glowing effect to the border as well
    textElement.style.border = `3px solid rgba(22, 182, 212, ${intensity})`;
    textElement.style.boxShadow = `
        inset 0 0 ${10 * intensity}px rgba(113,213,255, 0.5),
        inset 0 0 ${20 * intensity}px rgba(113,213,255, 0.5),
        0 0 ${10 * intensity}px rgba(113,213,255, 0.3),
        0 0 ${20 * intensity}px rgba(113,213,255, 0.3),
        0 0 ${40 * intensity}px rgba(113,213,255, 0.3),
        0 0 ${80 * intensity}px rgba(113,213,255, 0.3),
        0 0 ${160 * intensity}px rgba(113,213,255, 0.3),
        0 0 ${320 * intensity}px rgba(113,213,255, 0.3)
    `;
});

const textElement = document.getElementById('text');
const imageElement = document.getElementById('image-container');
const image = document.getElementById('image');

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

    // Set different maxDistance factors for text and image
    const maxDistanceFactor = type === 'text' ? 2 : 3;
    const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2) * maxDistanceFactor;
    const intensity = Math.max(0, 1 - distance / maxDistance);

    const glowSize = 10; // Base size for glow effects

    if (type === 'text') {
        // Apply the glowing effect to the text shadow and border
        const borderColor = `rgba(22, 182, 212, ${intensity})`;
        element.style.textShadow = `
            0 0 ${glowSize * intensity}px #00ff00,
            0 0 ${glowSize * 2 * intensity}px #00ff00,
            0 0 ${glowSize * 4 * intensity}px #00ff00
        `;
        element.style.border = `3px solid ${borderColor}`;
        element.style.boxShadow = `0 0 ${glowSize * 8 * intensity}px ${borderColor}`;
    } else if (type === 'image') {
        // Apply a shimmering effect to the image
        const opacity = 0.5 + 0.5 * intensity; // Adjust opacity range as needed
        image.style.opacity = opacity.toString();
        
        // Apply a glow around the image
        const boxShadowIntensity = intensity / 2; // Half intensity for image shadow
        element.style.boxShadow = `
            0 0 ${glowSize * boxShadowIntensity}px #00ff00,
            0 0 ${glowSize * 2 * boxShadowIntensity}px #00ff00,
            0 0 ${glowSize * 4 * boxShadowIntensity}px #00ff00
        `;
    }
}

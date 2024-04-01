const textElement = document.getElementById('text');
const imageContainer = document.getElementById('image-container');

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
                        0 0 ${400 * intensity}px #00ff00
        `;
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

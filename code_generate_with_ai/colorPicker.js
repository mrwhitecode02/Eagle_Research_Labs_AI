document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
    const colorPreview = document.getElementById('color-preview');
    const colorInfo = document.getElementById('color-info');
    const animateButton = document.getElementById('animate-button');
    const copyButton = document.getElementById('copy-button');

    colorPicker.addEventListener('input', () => {
        const selectedColor = colorPicker.value;
        colorPreview.style.backgroundColor = selectedColor;
        colorInfo.textContent = `Selected Color: ${selectedColor}`;
        colorInfo.style.backgroundColor = selectedColor;
    });

    animateButton.addEventListener('click', () => {
        colorPreview.style.animation = 'colorAnimation 1s infinite';
        colorPreview.style.backgroundColor = colorPicker.value;
        setTimeout(() => {
            colorPreview.style.animation = '';
        }, 1000); // Reset animation after 1 second
    });

    copyButton.addEventListener('click', () => {
        const selectedColor = colorPicker.value;
        navigator.clipboard.writeText(selectedColor).then(() => {
            alert(`Color ${selectedColor} copied to clipboard!`);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});

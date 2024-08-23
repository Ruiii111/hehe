document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('surpriseButton');
    const message = document.getElementById('surpriseMessage');

    button.addEventListener('click', () => {
        message.classList.toggle('hidden');
        if (message.classList.contains('hidden')) {
            message.style.display = 'none';
        } else {
            message.style.display = 'inline-block';
        }
    });
});

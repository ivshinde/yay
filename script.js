document.getElementById('yesBtn').addEventListener('click', function() {
    generateConfetti();
});

function generateConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 1 + 's';
        confettiContainer.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 3000); // Remove confetti after 3 seconds
    }
}

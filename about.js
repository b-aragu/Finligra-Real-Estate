// Optionally, you can add dynamic animations or interactions
// For example, scroll animations for team cards
document.addEventListener("DOMContentLoaded", function() {
    const teamCards = document.querySelectorAll('.team-card');
    window.addEventListener('scroll', () => {
        teamCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardPosition < windowHeight - 100) {
                card.classList.add('animate');
            }
        });
    });
});

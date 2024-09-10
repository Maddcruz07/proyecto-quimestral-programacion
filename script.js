// Mostrar el juego y ocultar la introducción cuando se hace clic en "Comenzar"
document.getElementById('startBtn').addEventListener('click', function() {
    document.querySelector('header').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}); 

// Funcionalidad de voltear cartas
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});

// Animar la introducción con GSAP
gsap.from(".intro h1", { duration: 1.5, y: -50, opacity: 0, ease: "bounce" });
gsap.from("#startBtn", { duration: 1.5, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });

document.getElementById('startBtn').addEventListener('click', function() {
    // Ocultar la introducción
    gsap.to(".intro", { duration: 1, y: -100, opacity: 0, display: 'none', onComplete: showGame });
});

function showGame() {
    // Mostrar el juego
    document.getElementById('game').style.display = 'block';
    gsap.from(".card", { duration: 1, y: 50, opacity: 0, stagger: 0.2, ease: "back.out(1.7)" });
}

// Animar el volteo de las cartas con GSAP
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const cardInner = this.querySelector('.card-inner');
        gsap.to(cardInner, { duration: 0.8, rotationY: 180, ease: "power2.out" });
    });
});


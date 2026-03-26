// ==========================================
// RIVELAZIONE CONTENUTI ALLO SCROLL
// ==========================================
const reveals = document.querySelectorAll('.reveal');

// Opzioni: si attiva quando l'elemento è visibile al 10%
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

// Intersection Observer per animare le sezioni man mano che l'utente scende
const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        // Aggiunge la classe 'active' che innesca l'animazione CSS
        entry.target.classList.add('active');
        
        // Smette di osservare l'elemento una volta animato
        observer.unobserve(entry.target);
    });
}, revealOptions);

// Applica l'osservatore a tutti gli elementi con la classe .reveal
reveals.forEach(r => revealOnScroll.observe(r));

// ==========================================
// EFFETTO PARALLAX IMMAGINE STORIA
// ==========================================
const parallaxImg = document.querySelector('.parallax-img');

window.addEventListener('scroll', () => {
    if (parallaxImg) {
        let scroll = window.scrollY;
        // Sposta delicatamente l'immagine sull'asse Y per dare profondità
        parallaxImg.style.transform = `translateY(${scroll * 0.08}px)`;
    }
});

// ==========================================
// SCROLL MORBIDO PER I LINK INTERNI
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Blocca il salto brusco di default
        // Scorre in modo "smooth" fino all'ancora indicata (es: #proposta)
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
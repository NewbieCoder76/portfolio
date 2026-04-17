document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Hamburger & Navigation Logic ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Function to close the menu
    const closeMenu = () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = 'auto';
};

    if (hamburger && navLinks) {
        // Toggle menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when any link is clicked
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
    }

    // --- 2. Scroll Animations ---
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach(el => observer.observe(el));

    // --- 3. Projects Carousel ---
    const carousel = document.getElementById('projectCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (carousel && nextBtn && prevBtn) {
        const scrollAmount = 430; 
        nextBtn.addEventListener('click', () => carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
        prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
    }

    // --- 4. Logo Back to Top ---
    const logoTop = document.getElementById('logo-top');
    if (logoTop) {
        logoTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu(); 
        });
    }

    // --- 5. WhatsApp Form ---
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phoneNumber = "27671684354"; 
            const name = document.getElementById('wa-name').value;
            const email = document.getElementById('wa-email').value;
            const message = document.getElementById('wa-message').value;

            const fullMessage = `Hello Will!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
            window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank').focus();
        });
    }
});
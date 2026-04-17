document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Hamburger & Navigation Logic ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Function to close the menu
    const closeMenu = () => {
        if (hamburger && navLinks) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }
    };

    if (hamburger && navLinks) {
        // Toggle menu on click
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent background scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when any individual link is clicked
        navItems.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // --- 2. Scroll Animations (Intersection Observer) ---
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    animatedElements.forEach(el => observer.observe(el));

    // --- 3. Projects Carousel Logic ---
    const carousel = document.getElementById('projectCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (carousel && nextBtn && prevBtn) {
        const scrollAmount = 430; 
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    // --- 4. Back to Top Logo Logic ---
    const logoTop = document.getElementById('logo-top');
    if (logoTop) {
        logoTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            closeMenu(); // Closes menu if user clicks logo while menu is open
        });
    }

    // --- 5. WhatsApp Form Logic ---
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const phoneNumber = "27671684354"; // Format fixed for API compatibility
            const name = document.getElementById('wa-name').value;
            const email = document.getElementById('wa-email').value;
            const message = document.getElementById('wa-message').value;

            const fullMessage = `Hello Will!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${fullMessage}`;
            window.open(whatsappUrl, '_blank').focus();
        });
    }
});

// Contact form handling
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form submitted:', Object.fromEntries(formData));
    alert('Thank you! Message received (demo).');
    e.target.reset();
});

// Toggle sections via nav (fixed viewport, no scroll)
document.querySelectorAll('a[href^=\"#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection && !targetSection.classList.contains('banner')) {
            // Hide all overlay sections
            document.querySelectorAll('.services, .contact').forEach(sec => {
                sec.style.opacity = '0';
                sec.style.visibility = 'hidden';
            });
            // Show target
            targetSection.style.opacity = '1';
            targetSection.style.visibility = 'visible';
        }
    });
});

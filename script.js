document.addEventListener('DOMContentLoaded', (event) => {
    
    // Script 1: Navbar appears or disappears when you scroll up/down
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.transform = `translateY(-${headerHeight}px)`;
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = Math.max(scrollTop, 0);
    }, false);



    // Script 2: Screen smoothly glides when you click on a navbar section link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    
    // Script 3: Shrinking the Contact section to show section underneath
    const contactSection = document.getElementById('contact');
    let initialWidth = contactSection.offsetWidth - (8 * parseFloat(getComputedStyle(document.documentElement).fontSize));

    window.addEventListener('scroll', () => {
        const rect = contactSection.getBoundingClientRect();            
        let scrollPercentage = (window.innerHeight - rect.top) / rect.height;
        scrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

        if (scrollPercentage > 0.9) {
            const scaleFactor = 0.85 + (0.1 * (1 - scrollPercentage) * 10);
            contactSection.style.width = `${initialWidth * scaleFactor}px`;
            const gapHeight = 300 * (scrollPercentage - 0.9) / 0.1;
            contactSection.style.marginBottom = `${gapHeight}px`;
        } 
        else {
            contactSection.style.width = `${initialWidth}px`;
            contactSection.style.marginBottom = '0px';
        }
    }, false);

    window.addEventListener('resize', () => {
        initialWidth = contactSection.offsetWidth - (8 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    });
});

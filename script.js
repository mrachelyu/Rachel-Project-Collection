console.log("JS loaded!");

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-btn');

    function changeLinkState() {
        let index = sections.length;

        // Find the section that is currently in view
        while(--index && window.scrollY + 200 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        
        if (index >= 0) {
            const id = sections[index].id;
             navLinks.forEach(link => {
                if(link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); //只觸發一次
            }
        });
    }, {
        root: null,
        threshold: 0.15, // 元素出現 15% 時觸發
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
});


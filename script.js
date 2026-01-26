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
                revealObserver.unobserve(entry.target); // 觸發後即停止觀察
            }
        });
    }, {
        root: null,
        threshold: 0.05, // 降低閾值：避免在手機上因區塊過長（內容高度 > Viewport 高度）導致無法觸發 Intersection
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
});


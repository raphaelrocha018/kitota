export default function initAnimaScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop =
                    section.getBoundingClientRect().top - windowMetade;
                console.log(sectionTop);
                if (sectionTop < 0) {
                    section.classList.add("ativo");
                }
            });
        }

        animaScroll();

        window.addEventListener("scroll", animaScroll);
    }
}
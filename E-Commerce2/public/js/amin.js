const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    nav.classList.toggle("sticky-navbar", window.scrollY > 0);
});




const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')
        // console.log(sectionId);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive);
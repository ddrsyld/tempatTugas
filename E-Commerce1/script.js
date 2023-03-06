// navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let amin = document.querySelector('#menu-icon');
let rusdi = document.querySelector('.navbar');

// Navbar Scroll
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

// togggler bar
amin.onclick = () => {
    amin.classList.toggle('bx-x');
    rusdi.classList.toggle('open');
};

window.onscroll = () => {
    amin.classList.remove('bx-x');
    rusdi.classList.remove('open');
};

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.home-text', {
    delay: 200,
    origin: 'top'
});
sr.reveal('.home-img', {
    delay: 300,
    origin: 'top'
});

// display none
const product = document.getElementById('product-content');
const product2 = document.getElementById('product-content2');
// const viewButton = document.getElementById('view');

// viewButton.addEventListener('click', function () {
//     product.style.display = 'grid';
//     product2.style.display = 'grid';
// });

// popub
function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}
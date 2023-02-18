const ukuran = document.querySelectorAll('.ukuran');
const warna = document.querySelectorAll('.warna');
const sepatu = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const sepatuBg = document.querySelector('.shoeBackground');

let prevColor = "biru";
let animationEnd = true;

function gantiUkuran(){
    ukuran.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function gantiWarna(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    warna.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    sepatu.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

ukuran.forEach(size => size.addEventListener('click', gantiUkuran));
warna.forEach(c => c.addEventListener('click', gantiWarna));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = sepatu[0].offsetHeight;
        sepatuBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{   
        sepatuBg.style.height = "475px";
    }
}

changeHeight();
window.addEventListener('resize', changeHeight);
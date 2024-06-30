const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let active = 2;

next.addEventListener('click', () => {
    if (active >= circles.length) return;
    active++;
    update();
});

prev.addEventListener('click', () => {
    if (active <= 1) return;
    active--;
    update();
});

function update() {
    circles.forEach((circle, index) => {
        if (index < active) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    progress.style.width = ((active - 1) / (circles.length - 1)) * 100 + '%';
}

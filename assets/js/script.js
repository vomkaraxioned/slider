/* Author: 

*/

const slides = document.getElementsByClassName("slide");
const prev = document.querySelector(".prev");
const nxt = document.querySelector(".next")
const buttons = document.querySelectorAll(".img");
let prevIndex;
let currentIndex;
let anime;
buttons.forEach((btn, index) => {
    btn.index = index;
    btn.addEventListener('click', () => {
        currentIndex = btn.index;
        slide();
    });
});

prev.addEventListener('click', () => {
    if (currentIndex > 0)
        currentIndex -= 1;
    else
        currentIndex = slides.length - 1;
    anime = "slide-right";
    slide();
});

nxt.addEventListener('click', () => {
    if (currentIndex < slides.length - 1)
        currentIndex += 1;
    else
        currentIndex = 0;
    anime = "slide-left";
    slide();
});

function slide() {
    let active = document.querySelector(".active");
    let activeBtn = document.querySelector(".btn-active");
    active.style.animation = anime;
    active.classList.remove('active');
    activeBtn.classList.remove('btn-active');
    slides[currentIndex].classList.add('active');
    buttons[currentIndex].classList.add('btn-active');
}
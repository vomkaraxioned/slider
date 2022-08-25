/* Author: 

*/

const slides = document.getElementsByClassName("slide");
const prev = document.querySelector(".prev");
const nxt = document.querySelector(".next")
const buttons = document.querySelectorAll(".img");
let currentIndex;
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        slide();
    });
});
prev.addEventListener('click', () => {
    if (currentIndex > 0)
        currentIndex -= 1;
    else
        currentIndex = slides.length - 1;
    slide();
});

nxt.addEventListener('click', () => {
    if (currentIndex < slides.length - 1)
        currentIndex += 1;
    else
        currentIndex = 0;
    slide();
});

function slide() {
    let active = document.querySelector(".active");
    let activeBtn = document.querySelector(".btn-active");
    active.classList.remove('active');
    activeBtn.classList.remove('btn-active');
    slides[currentIndex].classList.add('active');
    buttons[currentIndex].classList.add('btn-active');
}
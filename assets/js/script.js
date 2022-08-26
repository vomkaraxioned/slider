/* Author: 

*/

const slides = document.getElementsByClassName("slide");
const prev = document.querySelector(".prev");
const nxt = document.querySelector(".next")
const buttons = document.querySelectorAll(".btn");
let prevIndex = 0;
let currentIndex = 0;
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentIndex = index;
        slide();
    });
});
prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = slides.length - 1;
    }
    slide();
});

nxt.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    slide();
});

function slide() {
    let active = document.querySelector(".active");
    let activeBtn = document.querySelector(".btn-active");
    let anime;
    active.classList.remove('active');
    activeBtn.classList.remove('btn-active');
    // if (currentIndex > prevIndex) {
    //     slides[prevIndex].classList.toggle("expand-next");
    //     if (prevIndex === 0) {
    //         slides[prevIndex].classList.remove("expand-next");
    //     } else {
    //         slides[prevIndex - 1].classList.remove("expand-next");
    //     }
    //     anime = document.querySelector(".expand-next");
    // } else {
    //     slides[prevIndex].classList.toggle("expand-prev");
    //     anime = document.querySelector(".expand-prev");
    // }
    slides[currentIndex].classList.add('active');
    buttons[currentIndex].classList.add('btn-active');
    prevIndex = currentIndex;
}
/* Author: 

*/

const slides = document.getElementsByClassName("slide");
const prev = document.querySelector(".prev");
const nxt = document.querySelector(".next")
const buttons = document.querySelectorAll(".img");
let prevIndex = 0;
let currentIndex = 0;
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
    alert(currentIndex);
    if (currentIndex > prevIndex) {
        active.classList.add("expand-next");
        setTimeout(() => {
            active.classList.remove("expand-next");
        }, 1000);

    } else {
        active.classList.add("expand-prev");
        setTimeout(() => {
            active.classList.remove("expand-prev");
        }, 1000);

    }
    slides[currentIndex].classList.add('active');
    buttons[currentIndex].classList.add('btn-active');
    prevIndex = currentIndex;
}
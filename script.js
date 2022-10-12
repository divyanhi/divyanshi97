var slide = 0;
const buttons = document.getElementById("tools").getElementsByClassName("buttons")[0];
const nextSlide = document.getElementById("nextSlide");
const previousSlide = document.getElementById("previousSlide");
const restart = document.getElementById("restart");
const chapter = document.getElementsByClassName("chapter")[0];
const chapterLength = parseInt(chapter.style.width.slice(0, -4));
const title = document.querySelector("#titles > span:first-child");


function moveSlide(amount) {
  slide += amount;
  if (slide < 0) {
    slide = 0;
  } else if (slide == chapterLength) {
    slide = chapterLength - 1;
  }
  title.querySelector(".position").innerHTML = slide + 1;
  chapter.style.translate = "-" + slide + "00vw 0";
}

function fadeButtons() {
  buttons.style.opacity = 0.05;
}

function unfadeButtons(e) {
  buttons.style.opacity = 1; 
}

nextSlide.addEventListener("click", (e) => { moveSlide(1) });
previousSlide.addEventListener("click", (e) => { moveSlide(-1) });
restart.addEventListener("click", (e) => { moveSlide(- slide) });
buttons.addEventListener("mouseenter", unfadeButtons);
buttons.addEventListener("mouseleave", fadeButtons);
title.style.display = "inline";
setTimeout(fadeButtons, 2500);

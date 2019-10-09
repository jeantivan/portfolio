"use strict";
const backTop = document.querySelector("#back-top");
const burger = document.querySelector("#burger");

burger.onclick = () => burger.classList.toggle("active");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
};

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

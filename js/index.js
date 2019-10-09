"use strict";
const backTop = document.querySelector("#back-top");
const burger = document.querySelector("#burger");
const links = document.querySelectorAll(".link");

burger.onclick = () => handleToggle();

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

function handleToggle() {
  burger.classList.toggle("active");
  links.forEach(link =>
    link.getAttribute("tabindex") == "-1"
      ? link.setAttribute("tabindex", "1")
      : link.setAttribute("tabindex", "-1")
  );
}

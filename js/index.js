"use strict";
$(document).ready(function() {
  const backTop = $("#back-top");
  const burger = $("#burger");

  burger.click(function() {
    $(this).toggleClass("active");
  });
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };
});

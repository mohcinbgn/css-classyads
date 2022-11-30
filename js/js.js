let barsMenu = document.querySelector(".bars");
let mainNav = document.querySelector(".main-nav");
let xmarkMenu = document.querySelector(".xmark");
console.log(mainNav.classList);

barsMenu.onklick = function () {
  console.log(mainNav.classList);
  mainNav.classList.toggle("active");
};

xmarkMenu.onklick = function () {
  mainNav.classList.toggle("active");
};

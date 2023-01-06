let elModalBox = document.querySelector(".modal-box");
let elBurger = document.querySelector(".site-header__burger");
let elClose = document.querySelector(".close-img");

elClose.addEventListener("click", function() {
    elModalBox.classList.toggle("is-active");
});
elBurger.addEventListener("click", function() {
    elModalBox.classList.toggle("is-active");
});
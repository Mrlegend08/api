let elModalBox = document.querySelector(".modal-box");
let elBurger = document.querySelector(".site-header__burger");
let elClose = document.querySelector(".close-img");
elBurger.addEventListener("click", function() {
    elModalBox.classList.toggle("is-active");
});
elClose.addEventListener("click", function() {
    elModalBox.classList.toggle("is-active");
});
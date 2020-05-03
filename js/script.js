var x = document.querySelector(".burger")
var burger = document.querySelector(".navigation")
x.addEventListener("click", function() {
    x.classList.toggle('active');
    burger.classList.toggle('active');
});
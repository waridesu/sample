var x = document.querySelector(".burger")
var m = document.querySelector(".navigation")
x.addEventListener("click", function() {
    x.classList.toggle('active');
    m.classList.toggle('active');
});
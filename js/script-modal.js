var o = document.querySelector(".poster-gallery")
var mSlider = document.querySelector(".slider")
o.addEventListener("click", function() {
    mSlider.classList.add('active-modal');
    document.querySelector(".burger").style.display = "none";
    document.body.style.overflow = "hidden";
});

var mClose = document.querySelector(".close-modal")
mClose.addEventListener("click", function() {
    mSlider.classList.remove('active-modal');
    document.querySelector(".burger").style.display = "block";
    document.body.style.overflow = "auto";
});
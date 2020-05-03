var o = document.querySelector(".poster-gallery")
var mSlider = document.querySelector(".slider")
o.addEventListener("click", function() {
    document.body.style.overflow = "hidden";
    mSlider.classList.add('active-modal');
    document.querySelector(".burger").style.display = "none";
    
});

var mClose = document.querySelector(".close-modal")
mClose.addEventListener("click", function() {
    document.body.style.overflow = "auto";
    mSlider.classList.remove('active-modal');
    document.querySelector(".burger").style.display = "block";
    
});
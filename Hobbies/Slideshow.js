let index = 1;

show(index);

function moveSlides(x) {
    show(index += x);
}

function numSlide(x) {
    show(index = x);
}

function show(x) {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dots");
    if (x > slides.length) { index =1 }
    if (x < 1) { index = slides.length }
    for (i=0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i< dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += "active";
}
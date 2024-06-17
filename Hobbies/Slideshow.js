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
    if (x > slides.length) { index =1 }
    if (x < 1) { index = slides.length }
    for (i=0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index-1].style.display = "block";
}
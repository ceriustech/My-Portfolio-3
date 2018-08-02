 //<select view>
//<init slideshow container>
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var faCircle = document.getElementsByClassName("fa-circle");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < faCircle.length; i++) {
        faCircle[i].className = faCircle[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    faCircle[slideIndex-1].className += " active";
    setTimeout(showSlides, 7000); // Change image every 4 seconds
}
//</init>
//<select view>
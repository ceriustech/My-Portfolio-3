//Hide Menu On Scroll
//<begin>
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-125px";
  }
  prevScrollpos = currentScrollPos;
}
//</end>

//Slideshow container
//<begin>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var faCircle = document.getElementsByClassName("fa-circle");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < faCircle.length; i++) {
      faCircle[i].className = faCircle[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  faCircle[slideIndex-1].className += " active";
}
//</end>
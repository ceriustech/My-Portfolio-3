$(document).ready(function(){
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

$('#modal').on('click', function( e ) {
   // Instantiate new modal

var modal = new Custombox.modal({
  content: {
    effect: 'makeway',
    target: '#myModal',
    animateFrom: 'left',
    speedIn: 500,
    speedOut: 500, 
    
  },
    
    overlay: {
        speedIn: 500, 
        speedOut: 500, 
    }
});

// Open
modal.open(); 
});
 
});

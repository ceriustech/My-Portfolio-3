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

//Experience Section Hexagonal pattern
//<begin>
$(window).on('resize', hexagonalPattern);

hexagonalPattern();

function hexagonalPattern() {
  var width = $('.experience_container').width();
  var $item = $('.hexa');
  var itemWidth = $item.width()*2;
  var margin = 1;
  var rowLength = Math.floor(width / (itemWidth*3/4+1));

  var itemLength = $item.length;
  var patternLength = Math.floor(itemLength/rowLength);
  var currentRow = 1;

  $item.each(function(index) {
    $(this).removeClass('top');
    if(index+1 > currentRow*rowLength){
      currentRow++;
    }
  
    var indexRow = index+1 - (currentRow-1)*rowLength;

    if(indexRow%2 == 0) {
      $(this).addClass('top');
    }
  });
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
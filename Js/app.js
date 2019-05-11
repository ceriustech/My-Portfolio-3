$(document).ready(function(){
// Mobile menu toggle
// <begin>
$('.menu-toggle').click(function() {
  
    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
    
  })
  // <end>
 
// Smooth Scrolling 
// <begin> 
var headerHeight = $('header').outerHeight(); // Target your header navigation here
	
$('.scroll_btn').click(function(e) {
  
  var targetHref   = $(this).attr('href');
  
$('html, body').animate({
  scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
}, 1000);
  
  e.preventDefault(); 
});
// <end> 

// Code for adding the hover class and toggling it when the viewport is less than 768px
// <begin>
var isMobile = false; //initiate as false
// device detection
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { 
    isMobile = true;
}
if (!isMobile){
    // Services Section
    $('.services_panel').hover(function(){
        $(this).addClass('panel_hover_event_1');
    })
    // Portfolio Section
     $('.panel').hover(function(){
        $(this).addClass('.hovereffect').addClass('.overlay');
    })
    // Blog Section 
     $('.hovereffect-2').hover(function(){
        $(this).addClass('.post');
    })
    console.log("Not Mobile")
} else {
    // Services Section
    $('.services_panel').click(function(){
        $(this).toggleClass('panel_hover_event_1');
    })
    // Portfolio Section 
    $('.panel').click(function(){
        $(this).toggleClass('.hovereffect').toggleClass('.overlay');
    })
    // Blog Section 
     $('.hovereffect-2').hover(function(){
        $(this).toggleClass('.post');
    })
    console.log("Is mobile");
} 
// <end> 

// Code for contact form
// <begin> 
$(".contact_modal_section #submit").click(function(e){
  e.preventDefault();
var name = $("#name").val();
var email = $("#email").val();
var subject = $("#subject").val();
var message = $("#message").val();
var form = new Array({"name": name, "email": email, "subject": subject, "message": message});
// This will reset the submit button to it's state prior to form submission 
$("#submit").prop('disabled', false);

$.ajax({
 type: 'POST',
  url: "contact.php",
  data: ({"action": "contact_modal_section", "form": form})
}).done(function(data) {
      $('#contact_modal .result').html(data);

  $(".contact-form")[0].reset();
});
});
// <end>
});
// This id for the mobile menu
// <begin>
$(document).ready(function(){
var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')

var mobileBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', mobileBtn)
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

});
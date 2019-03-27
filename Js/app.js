$(document).ready(function(){
var menuBtn = document.getElementsByClassName('menu-btn')
var mobileMenu = document.getElementsByClassName('mobile-menu')

var mobileBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', mobileBtn)


var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 768) {
    $('.services_panel').off('mouseenter mouseleave');
	console.log('Success');
} 
    
    
});

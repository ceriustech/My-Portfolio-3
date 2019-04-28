$(document).ready(function(){

$('#contact').on('click', function( e ) {
   // Instantiate new modal

var modal = new Custombox.modal({
  content: {
    effect: 'blur',
    target: '#contact_modal',
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

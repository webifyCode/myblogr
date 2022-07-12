$(document).ready(function() {
  $("#product, #company, #connect").hide();
  
  /*open nav and toggle icon*/
  $("#hamburger img").on('click', function() {
    $("#navlist").slideDown('fast');
    $("#hamburger, #navclose").toggle();
  });
  /*close nav and toggle icon*/
  $("#navclose img").on('click', function() {
    $("#navlist").slideUp('fast');
    $("#hamburger, #navclose").toggle();
  });
  /*/////////
   submenus
  /////////*/
  
  $("#_prod label").on('click', function() {
    $("#product").slideToggle('fast');
    $("#company, #connect").slideUp('fast');
  });
  
  
  
  $("#_comp label").on('click', function() {
    $("#company").slideToggle('fast');
    $("#product, #connect").slideUp('fast');
  });
  
  
  $("#_conn label").on('click', function() {
    $("#connect").slideToggle('fast');
    $("#company, #product").slideUp('fast');
  });
  
  
  
  
  
  
  
  
  
  
});

$(document).ready(function() {
  const product = $('#product');
  const company = $('#company');
  const connect = $('#content');
  const productLabel = $("#_prod label");
  const companyLabel = $("#_comp label");
  const connectLabel = $("#_conn label")
  product.hide();
  company.hide();
  connect.hide();
  
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
  
  productLabel.on('click', function() {
    product.slideToggle('fast');
    company.slideUp('fast');
    connect.slideUp('fast');
  });
  
  
  companyLabel.on('click', function() {
    company.slideToggle('fast');
    product.slideUp('fast');
    connect.slideUp('fast');
  });
  
  
  connectLabel.on('click', function() {
    connect.slideToggle('fast');
    product.slideUp('fast');
    company.slideUp('fast');
  });
 
  
});

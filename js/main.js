$(document).ready(function(){
  $(".owl-carousel").owlCarousel( {
    loop: true,
    items: 1
  });


  $("#1").click(function(e) {
    e.preventDefault()
    $("#ddf").addClass("class");

  });


});

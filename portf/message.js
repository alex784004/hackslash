$(document).ready(function() {
    $("#openMenu").click(function() {
      $("#main").fadeIn(200);
      $("#openMenu").animate({left:'-100px'});
       $("#closeMenu").animate({right:'0%'});
    });
  
    $("#closeMenu").click(function() {
      $("#main").fadeOut(200);
      $("#closeMenu").animate({right:'-100px'});
       $("#openMenu").animate({left:'0%'});
    });
});
$("#menu-button").click(function(){
  $("#menu").slideToggle("slow");

  var inputValue=$("#menu-button").attr('value');

  if (inputValue == "Expand") {
    $('header').animate({height:'190'}, 800);
    $("#menu-button").attr('value','Reduce');
  }
  else if (inputValue == "Reduce"){
    $('header').animate({height:'75px'}, 800);
    $("#menu-button").attr('value','Expand');
  }
});

var windowWidth = $(window).width();
// Resize Event
$(window).resize(function(){
  if ($(window).width() != windowWidth) {
    $('header'). height('30px');
  }
});

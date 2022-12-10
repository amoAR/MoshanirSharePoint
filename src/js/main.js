//Ready function
$("document").ready(function() {
  //Event scroll from top
  $(window).on("scroll touchmove", function () {
      //Animate header & navbar
      $(".sticky").toggleClass("scroll", $(document).scrollTop() > 0);
      
      //Enable back to top button
      if ($(this).scrollTop() > 50) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
      }      
  });

  //100vh(fullscreen) header + slider --> calc slider height
  $(".slider").find("img").css("height", $(window).height() - $(".sticky").height() + 1 + "px");

  //Align slider caption to center of slider
  $(".carousel-caption").css("top", ($(window).height() - $(".sticky").height() - $(".carousel-caption").height()) / 2);
});



//Prevent nav-link color change
$(".nav-link").mouseup(function() {
  $(".nav-link").css("color", "#3e4265");
})



//Dropdown menu main hover & not
$(".dropdown-main *").mouseover(function(){
    $(".sticky").css("opacity", "1");
    $(".darkOverlay-bg").show();
});


$(".dropdown-main *").mouseout(function(){
    $(".darkOverlay-bg").hide();
    $(".sticky").css("opacity", "");
});



//Dropdown menu mobile show & hide
$(".dropdown-mobile").click(function (){
  if ( $(".menu-features-dropdown-mobile").css("display") != "block"){
    $("#menu-features-dropdown-mobile").css("background-color", "#f3f6ff");
    $(".dropdown-icon").toggleClass("rotated180");
    $(".menu-features-dropdown-mobile").show();
  }else{
    $("#menu-features-dropdown-mobile").css("background-color", "#fff");
    $(".dropdown-icon").removeClass("rotated180");
    $(".menu-features-dropdown-mobile").hide();
  }
});



//Scroll to About-project
$("#menu-item-about").click(function () {
  $("body, html").animate({
    scrollTop: $(".slider").height()
  }, 400);
});



//Scroll to Features
$("#menu-item-features").click(function () {
  $("body, html").animate({
    scrollTop: $(".slider").height() + $("#about-project").height() + $(".sticky").height()
  }, 400);
});



//Scroll to Gallery
$("#menu-item-gallery").click(function () {
  $("body, html").animate({
    scrollTop: $(".slider").height() + $("#about-project").height() + $("#features").height() + $(".svg-separator").height()
  }, 500);
});



//Scroll to Coworkers
$("#menu-item-coworkers").click(function () {
  $("body, html").animate({
    scrollTop: $(".slider").height() + $("#about-project").height() + $("#features").height() + $(".svg-separator").height() + $("#gallery").height()
  }, 600);
});



//Back to top button function
$("#back-to-top").click(function () {
  $("body, html").animate({
    scrollTop: 0
  }, 400);
});


//Event click on gallery item
$(".gallery-item").click(function () {

  //Set src image selected by user
  $(".gallery-item-fix-img").attr("src", $(this).find("img").attr("src"))
  $(".gallery-item-fix").fadeIn();

  //Hide overlay
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".gallery-item-fix-img").length === 0) {
        $(".gallery-item-fix").fadeOut();
    }
  });  
});


//Show & hide nav mobile (hamburger menu)
function hamburgerOpen() {

  //Lock screen
  $("body").css("overflow", "hidden");

  //Show overlay
  $(".darkOverlay-bg").show();

  //Hide overlay
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".hamburger-menu").length === 0) {
      $(".menu__btn").click();
      $(".darkOverlay-bg").hide();
      $("body").css("overflow", "auto");
    }
  });
}
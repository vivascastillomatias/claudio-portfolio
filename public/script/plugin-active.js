
$(document).ready(function() {
  // banner slider 
  // sticky header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('body').addClass("sticky");
    } else {
      $('body').removeClass("sticky");
    }
  });
  // smooth scroll
  $(".smooth-scroll").click(function() {
    $('#nav-icon1').trigger("click");
    $("body").removeClass("menu-active");
  });
  $(".logo-smooth-scroll").click(function() {
    $('#nav-icon1').removeClass('open');
    $("body").removeClass("menu-active");
  });
  //menu icon animation
  $('#nav-icon1').click(function() {
    $(this).toggleClass('open');
    $("body").toggleClass("menu-active");
  });
  //menu link click
});
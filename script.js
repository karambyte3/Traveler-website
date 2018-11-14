$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $(".headerBackground").height());
      });
  });
  
$(function (){ 
  $("#btn1").click(function() {
    $('html, body').animate({
        scrollTop: $(".wrapper").offset().top
    }, 1500);
});
});
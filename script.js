$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $(".headerBackground").height());
      });
  });

$(window).scroll(function() {
    if ($(this).scrollTop() >= $(".headerBackground").height()) {   
        $('.goToTop').fadeIn(200);    
    } else {
        $('.goToTop').fadeOut(200);   
    }
});
$('.goToTop').click(function() {      
    $('body,html').animate({
        scrollTop : 0                      
    }, 1000);
});
  
$(function (){ 
    $("#btn1").click(function() {
      $('html, body').animate({
          scrollTop: $(".wrapper").offset().top
      }, 1500);
  });
  });
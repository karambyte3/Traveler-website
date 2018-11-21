// NAV SCRIPT
 
$(document).ready(function () {
	$(".hamburger").click(function () {
		$("li").toggleClass("nav-responsive")
	})
});

$(document).ready(function () {
	$(".hamburger").click(function () {
		$("nav").toggleClass("responsive-nav-height")
	})
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $(".headerBackground").height());
      });
  });

  $(function () {
    $(document).scroll(function () {
        var $nav = $(".responsive-nav-height");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $(".headerBackground").height());
      });
  });

  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

  // GO TO TOP SCRIPT

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
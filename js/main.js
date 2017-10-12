// ========== Typed Animation
$(function() {
  'use strict';
  var typed = new Typed('#typed', {
    stringsElement: '.type-text',
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true, // this is a default
    loop: true
  });
});

// ========== WOW Animation

$(function() {
  // animate on scroll
  'use strict';
  new WOW().init();
});

// ========== Stats
$(function() {
  'use strict';
  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });
});

// ========== Testimonial

$(function() {
  "use strict";
  $('#client-testimonial').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    center: true,
    nav: false,
    dots: false
  });
});

// ========== Navigation
$(function() {
  "use strict";
  $(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
      $('#back-to-top').fadeOut();
    } else {
      $('#back-to-top').fadeIn();
    }
  });
});

// ========== Smooth Scrolling
$(function() {
  "use strict";
$("a.smooth-scroll").click(function (event) {
  event.preventDefault();

  var section = $(this).attr("href");

  $('html, body').animate({
    scrollTop: $(section).offset().top - 70
  }, 1250, 'easeInOutExpo');
});
});

// ========== Mobile Click Close Menu
$(function () {
  "use strict";
  $('.navbar-collapse ul li a').on('click touch', function () {
    $('navbar-toggler').click();
  });
});

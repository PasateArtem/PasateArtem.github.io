'use strict';

requirejs.config({
    baseUrl: './js',
    paths: {
        
    }
});

requirejs([
     'domReady',
    'jquery',
    'jquery-ui',
    'humburgers',
    'slick'
], function(a, $) {
    
     
    $('.slider-example').slick({
        dots: true,
        appendDots: $('.dots'),
        prevArrow:$('.prev'),
        nextArrow:$ ('.next'),
        slidesToShow: 1,
        autoplay: true,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        autoplay: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        autoplay: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
     });

$(".auth_buttons").click(function() {
    $(this).next().slideToggle();
  });
    
     var hamburger = document.querySelector(".hamburger--collapse");
    // On click
    hamburger.addEventListener("click", function() {
      // Toggle class "is-active"
      hamburger.classList.toggle("is-active");
      // Do something else, like open/close menu
    });

    $(".hamburger--collapse").click(function() {
    $(this).next().slideToggle();
  });
});
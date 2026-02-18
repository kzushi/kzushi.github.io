console.log("custom.js çalışıyor");

$(document).ready(function () {

  'use strict';

  /* =====================
     AOS (varsa çalışır)
  ====================== */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true
    });
  }

  /* =====================
     LOADER
  ====================== */
  $(".loader").delay(200).fadeOut("slow");
  $("#overlayer").delay(200).fadeOut("slow");

  /* =====================
     MOBILE MENU CLONE
  ====================== */
  $('.js-clone-nav').each(function () {
    $(this)
      .clone()
      .removeClass('js-clone-nav')
      .addClass('site-nav-wrap')
      .appendTo('.site-mobile-menu-body');
  });

  setTimeout(function () {
    let counter = 0;
    $('.site-mobile-menu .has-children').each(function () {

      const $this = $(this);

      $this.prepend('<span class="arrow-collapse collapsed"></span>');

      $this.find('.arrow-collapse').attr({
        'data-toggle': 'collapse',
        'data-target': '#collapseItem' + counter
      });

      $this.find('> ul').attr({
        'class': 'collapse',
        'id': 'collapseItem' + counter
      });

      counter++;
    });
  }, 500);

  $('body').on('click', '.arrow-collapse', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });

  /* =====================
     MOBILE MENU TOGGLE
  ====================== */
  $('body').on('click', '.js-menu-toggle', function (e) {
    e.preventDefault();
    $('body').toggleClass('offcanvas-menu');
    $(this).toggleClass('active');
  });

  $(document).mouseup(function (e) {
    const container = $(".site-mobile-menu");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('body').removeClass('offcanvas-menu');
      $('.js-menu-toggle').removeClass('active');
    }
  });

  $(window).on('resize', function () {
    if ($(this).width() > 768) {
      $('body').removeClass('offcanvas-menu');
      $('.js-menu-toggle').removeClass('active');
    }
  });

  /* =====================
     OWL CAROUSEL (güvenli)
  ====================== */
 $('.owl-3-slider').owlCarousel({
  loop: true,
  autoplay: true,
  items: 1,
  margin: 10,
  nav: true,
  dots: true,
  smartSpeed: 700,
  navText: [
    '<span class="owl-prev-icon">&#10094;</span>',
    '<span class="owl-next-icon">&#10095;</span>'
  ],
  responsive: {
    768: { items: 2 },
    1100: { items: 3 }
  }
});


  /* =====================
     COUNTER (varsa)
  ====================== */
  if ($.fn.waypoint && $.fn.animateNumber) {
    $('.count-numbers').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated')) {

        $(this.element).addClass('animated');

        $('.counter > span').each(function () {
          const $this = $(this);
          $this.animateNumber(
            { number: $this.data('number') },
            4000
          );
        });
      }
    }, { offset: '90%' });
  }

  /* =====================
     DATE RANGE (varsa)
  ====================== */
  if ($.fn.daterangepicker && $('input[name="daterange"]').length) {
    $('input[name="daterange"]').daterangepicker();
  }

});
// Sticky nav class toggle
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;

  if (window.scrollY > 50) {
    nav.classList.add("sticky-nav");
  } else {
    nav.classList.remove("sticky-nav");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const activeItem = document.querySelector(".site-menu li.active");
  if (activeItem) {
    activeItem.classList.add("active");
  }
});


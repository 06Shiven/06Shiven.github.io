/* -----------------------------------------------
					Js Main
--------------------------------------------------

    Template Name: Baha - Personal Portfolio Template
    Author: Malyarchuk
    Copyright: 2019

--------------------------------------------------

Table of Content

	1. Preloader
	2. Sound Start
	3. Isotope Portfolio Setup
	4. Blogs Masonry Setup
	5. Active Current Link
	6. Mobile Toggle Click Setup
	7. Testimonials OwlCarousel
	8. Chart Setup
	9. Portfolio Tilt Setup
	10. Portfolio Image Link
	11. Portfolio Video Link
	12. Blog Video Link
	13. Validate Contact Form
	14. Google Map
	15. Particles JS

----------------------------------- */
import "./imagesloaded.pkgd.min.js";

$(window).on("load", function () {
  /* -----------------------------------
				1. Preloader
	----------------------------------- */
  $("#preloader").delay(1000).addClass("loaded");

  /* -----------------------------------
			  2. Sound Setup
	----------------------------------- */
  $("body").append(
    '<audio loop autoplay volume="0" id="audio-player"><source src="music.mp3" type="audio/mpeg"></audio>'
  );
  var audio = document.getElementById("audio-player");
  audio.volume = 0.2;

  if ($(window).length) {
    $(".music-bg").css({ visibility: "visible" });
    $("body").addClass("audio-on");
    if ($("body").hasClass("audio-off")) {
      $("body").removeClass("audio-on");
    }
    $(".music-bg").on("click", function () {
      $("body").toggleClass("audio-on audio-off");
      if ($("body").hasClass("audio-off")) {
        audio.pause();
      }
      if ($("body").hasClass("audio-on")) {
        audio.play();
      }
    });
  }

  /* -----------------------------------
			3. Isotope Portfolio Setup
	----------------------------------- */
  if ($(".portfolio-items").length) {
    var $elements = $(".portfolio-items").imagesLoaded(function () {
      console.log("portfolio images loaded");
      $elements.isotope();
    });
    var $filters = $(".portfolio-filter ul li");
    // layout Isotope after each image loads

    $filters.on("click", function () {
      $filters.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).data("filter");
      $(".portfolio-items").isotope({
        filter: selector,
        hiddenStyle: {
          transform: "scale(.2) skew(30deg)",
          opacity: 0,
        },
        visibleStyle: {
          transform: "scale(1) skew(0deg)",
          opacity: 1,
        },
        transitionDuration: ".5s",
      });

      // $elements.imagesLoaded().progress(function () {
      //   console.log("imagesLoaded");
      //   $elements.isotope("layout");
      // });
    });
  }

  /* -----------------------------------
			4. Blogs Masonry Setup
	----------------------------------- */
  // $(".blog-masonry").isotope({ layoutMode: "moduloColumns" });
  var $blog = $(".blog-masonry").imagesLoaded(function () {
    console.log("blog images loaded");
    $blog.isotope({ layoutMode: "moduloColumns" });
  });
});

$(document).ready(function () {
  "use strict";

  /* -----------------------------------
			5. Active Current Link
	----------------------------------- */
  $(".header-main ul li a").on("click", function () {
    if ($(".header-main.on").length) {
      $(".header-main").removeClass("on");
    }
  });

  /* -----------------------------------
		6. Mobile Toggle Click Setup
	----------------------------------- */
  $(".header-toggle").on("click", function () {
    $(".header-main").toggleClass("on");
  });

  /* -----------------------------------
	      7. Testimonials OwlCarousel
	----------------------------------- */
  $(".testimonial .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    smartSpeed: 500,
    responsiveClass: true,
    dots: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  /* -----------------------------------
	      	8. Chart Setup
	----------------------------------- */
  if ($(".chart").length > 0) {
    $(".chart").easyPieChart({
      trackColor: "#0e0f10",
      scaleColor: false,
      easing: "easeOutBounce",
      scaleLength: 4,
      lineCap: "square",
      lineWidth: 5,
      size: 130,
      animate: {
        duration: 2500,
        enabled: true,
      },
    });
  }

  /* -----------------------------------
	      	9. Portfolio Tilt Setup
	----------------------------------- */
  $(".pt-portfolio .portfolio-items .item figure").tilt({
    maxTilt: 3,
    glare: true,
    maxGlare: 0.6,
    reverse: true,
  });

  /* -----------------------------------
	      10. Portfolio Image Link
	----------------------------------- */
  $(".portfolio-items .image-link").magnificPopup({
    type: "image",
  });

  /* -----------------------------------
	      11. Portfolio Video Link
	----------------------------------- */
  $(".portfolio-items .video-link").magnificPopup({
    type: "iframe",
  });

  /* -----------------------------------
	      12. Blog Video Link
	----------------------------------- */
  $(".pt-blog .blog-item .thumbnail .btn-play").magnificPopup({
    type: "iframe",
  });
});

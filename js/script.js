$(document).ready(function() {
  // Toggler BTN
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  // Sticky NAVBAR, less padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 920) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });

  // Smooth Scroll
  $(".nav-item a, .header-link, #back-to-top").click(function(link) {
    link.preventDefault();

    let target = $(this).attr("href");

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 25
        },
        2000
      );
  });

  // Back to Top
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 720) {
      $("#back-to-top").addClass("scrollTop");
    } else {
      $("#back-to-top").removeClass("scrollTop");
    }
  });

  // Ripple Effects
  $("#header, .info").ripples({
    dropRadius: 15,
    perturbance: 0.0
  });

  //   Magnific Popup
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
    // other options
  });
});

// set the date we're counting down to
var countDownDate = new Date("October 16, 2026 00:00:00").getTime();

// update the count down every 1 second
var x = setInterval(function () {
  // get today's date and time
  var now = new Date().getTime();

  // find the distance between now and the count down date
  var distance = countDownDate - now;

  // time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   output the result in an element width id="demo"
  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }

  // if the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }

    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < z.length; i++) {
      g[i].classList.add("offer-expire-text");
    }

    var d = document.getElementsByClassName("offer-expire-text");
    for (var i = 0; i < z.length; i++) {
      d[i].innerHTML =
        "<span class='border badge timer-over'>" +
        "به پایان رسید !" +
        "</span>";
    }

    t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < z.length; i++) {
      t[i].style.filter = "blur(2px)";
    }
  }
}, 1000);

// owl carousel setup
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    rtl: true,
    nav: true,
    slideBy: 2,
    dots: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        slideBy: 1,
      },
      768: {
        items: 4,
        center: true,
        slideBy: 2,
      },
      992: {
        items: 4,
      },
    },
  });
});

$(".brand-carousel").owlCarousel({
  loop: true,
  center: true,
  rtl: true,
  nav: true,
  slideBy: 2,
  dots: false,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 4,
      slideBy: 1,
    },
    768: {
      items: 6,
      center: true,
      slideBy: 2,
    },
    992: {
      items: 8,
    },
  },
});

// products-index $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// introduction collapse
$(document).ready(function () {
  $(".introduction-toggle").click(function () {
    $(".product-page-introduction").toggleClass("introduction-dropdown");
    $(".product-page-introduction span").toggleClass("d-none");
  });
});

// like and bell
$(document).ready(function () {
  $(".like").click(function () {
    $(".like i").toggleClass("d-none");
  });
});
$(document).ready(function () {
  $(".bell").click(function () {
    $(".bell i").toggleClass("d-none");
  });
});

// add and counter shop-basket
$(document).ready(function () {
  let currentQty = 1;

  $(".add-basket").on("click", function () {
    $(this).hide();
    $(".counter-basket").toggleClass("d-none");
  });

  $(".qty-btn.btn-plus").on("click", function () {
    currentQty++;
    $(".qty-number").text(currentQty);
  });

  $(".qty-btn.btn-minus").on("click", function () {
    if (currentQty > 1) {
      currentQty--;
      $(".qty-number").text(currentQty);
    } else {
      $(".counter-basket").toggleClass("d-none");
      $(".add-basket").fadeIn();
    }
  });
});

// analysis collapse
$(document).ready(function () {
  $(".analysis-tab-pane span").click(function () {
    $(".analysis-tab-pane").toggleClass("analysis-dropdown");
    $(".analysis-dropdown span").toggleClass("d-none");
  });
});

// detailes collapse
$(document).ready(function () {
  $(".detailes-tab-pane>span").click(function () {
    $(".detailes-menu").toggleClass("detailes-menu-dropdown");
    $(".detailes-tab-pane>span").toggleClass("d-none");
  });
});

// comment collapse
$(document).ready(function () {
  $(".body-colappse-trigger-1").click(function () {
    $(".body-colappse-trigger-1").toggleClass("comment-body-collapse");
    $(".body-colappse-trigger-1").toggleClass("d-none");
  });
});
$(document).ready(function () {
  $(".body-colappse-trigger-2").click(function () {
    $(".body-colappse-trigger-2").toggleClass("comment-body-collapse");
    $(".body-colappse-trigger-2").toggleClass("d-none");
  });
});
$(document).ready(function () {
  $(".body-colappse-trigger-3").click(function () {
    $(".body-colappse-trigger-3").toggleClass("comment-body-collapse");
    $(".body-colappse-trigger-3").toggleClass("d-none");
  });
});

// zoomy gallery
var urls = [
  "assets/image/product-page-gallery/view-1.webp",
  "assets/image/product-page-gallery/view-2.webp",
  "assets/image/product-page-gallery/view-3.webp",
  "assets/image/product-page-gallery/view-4.webp",
];
$("#my-gallery").zoomy(urls);

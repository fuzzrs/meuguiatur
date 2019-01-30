// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin: 24,
//     autoWidth: true,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:3,
//             nav:true,
//             loop:false
//         }
//     }
// })
// });

$(document).ready(function(){
$('.card-carousel').slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoHeight: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      arrows: false,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

$(document).ready(function(){
$('.banner-carousel').slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoHeight: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 860,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      arrows: false,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});


// $("document").ready(function($){
//     var nav = $('.nav-bar');

//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 500) {
//             nav.addClass("f-nav");
//         } else {
//             nav.removeClass("f-nav");
//         }
//     });
// });
$("document").ready(function($){
    var nav = $('.nav-bar');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
});

// jQuery('.toggle-nav').click(function(e) {
//       jQuery(this).toggleClass('-active');
//       jQuery('.nav-list').toggleClass('-active');
//       e.preventDefault();
//     });


$(function() {
  mobileMenuToggle();
  closeMobileMenu();
  // bCloseMobileMenu();
});

function mobileMenuToggle() {
  $('.toggle-nav').click(function(e) {
    $(this).toggleClass('-active');
    $('.nav-list').toggleClass('-active');
    $('body').toggleClass('mobile-nav-opened');
    e.stopPropagation();
    e.preventDefault();
    return false;
  });
}

function closeMobileMenu() {
  $('.site-content, .site-footer').click(function(e) {
    $('.toggle-nav').removeClass('-active');
    $('.nav-list').removeClass('-active');
    $('body').removeClass('mobile-nav-opened');
    // e.stopPropagation();
    // e.preventDefault();
  });
}

// function bCloseMobileMenu() {
//   $('html').click(function(e) {
//     $('body').removeClass('mobile-nav-opened');
//     e.stopPropagation();
//   });
// }

//LAZY LOAD IMAGES
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})


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
jQuery(document).ready(function($) {
    // hamburgers
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) { hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
    }, false);
    });
}
// hamburgers

//menu
    var pull = jQuery('#pull');
    menu = jQuery('#menu-bg');
    menuHeight  = menu.height();
    jQuery(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(500);
    });
    jQuery(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
    });
//menu



$(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -50);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });



 $( function() {
        $( "#datepicker" ).datepicker();
});

var owl = $('#service-items');
              owl.owlCarousel({
                loop: true,
                autoplay: true,
                margin:30,
                nav: true,
                dots: false,
                 responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                },
              }
              });


    AOS.init({
  duration: 1200,
});



$('.count').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');

  $({countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 3000,
      easing: 'linear',
      step: function() {
        $this.text(Math.floor(this.countNum)+ "+");
      },
      complete: function() {
        $this.text(this.countNum + "+");
        //alert('finished');
      }
    });
});
 



});

 // Facts counter
   

//GALLERY

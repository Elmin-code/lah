$(function(){
    $(window).scroll(function (){



        if($(this).scrollTop()> 400){
            $('.col-lg-4 col-sm-6').css('top','0px');
            $('.col-lg-4 col-sm-6').css('opacity' , '1');
        }
    });
});

var windows = $(window);
var stick = $(".header-sticky");
windows.on('scroll',function() {    
    var scroll = windows.scrollTop();
    if (scroll < 5) {
        stick.removeClass("sticky");
    }else{
        stick.addClass("sticky");
    }
}); 


$('.main-menu nav').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu'
});


$('ul.menu>li').slice(-2).addClass('last-elements');


$('.video-popup').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    zoom: {
        enabled: true,
    }
});

$('.image-popup').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
    }
}); 

$('.slider-owl').owlCarousel({
    loop:true,
    nav:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 2500,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.testimonial-owl').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.owl-banner').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   autoplay:true,
   autoplayHoverPause:true,
   animateOut:'fadeOut',
   smartSpeed:2000,
   autoplayTimeout:3000,
   responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
})

$(document).ready(function(){
    $('.owl-member').owlCarousel({
       loop:true,
       margin:10,
       nav:true,
       autoplay:true,
       autoplayHoverPause:true,
       smartSpeed:1000,
       autoplayTimeout:2000,
       responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
    $( ".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
    $( ".owl-next").html('<i class="fa-solid fa-angle-right"></i>');
});




$('.owl-consert').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   autoplay:true,
   autoplayHoverPause:true,
   smartSpeed:1000,
   autoplayTimeout:2000,
   responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
})


$(window).scroll(function(){
    if ($(this).scrollTop()){  
        $('.header-wrapper').addClass("sticky");
    }
    else{
        $('.header-wrapper').removeClass("sticky");
    }
});



$(document).ready(function(){
    $('.mobile-menu-trigger').click(function(){
        $('.menu-wrapper').addClass("menu-wrapper active");
    })
    $('.cross-btn').click(function(){
        $('.menu-wrapper').removeClass("active");
    })
})




$(document).ready(function(){
    $('.menu-item-has-children').click(function(){
        $('.menu-item-has-children  ul').toggleClass("menu-item-has-children ul active");
    })
    
})

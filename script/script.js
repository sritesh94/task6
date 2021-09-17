$(document).ready(function(){
    var owl = $('#offers');

    owl.owlCarousel({
        loop:true,
        dots:false,
        nav:false,
        items: 1,
        autoplay:true,
        autoplayTimeout:2000
        });

        $('.right-arrow').click(function() {
            owl.trigger('next.owl.carousel');
        });
        $('.left-arrow').click(function() {
            owl.trigger('prev.owl.carousel');
      });

      $("#products").owlCarousel({
        stagePadding:0, 
        loop:true,
        stagePadding:0,
        margin:15,
        dots:false,
        nav:false,
        items: 5,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            },
            1025:{
                items:5
            }
        }
        });

        $('.product-right').click(function() {
            $("#products").trigger('next.owl.carousel');
        });
        $('.product-left').click(function() {
            $("#products").trigger('prev.owl.carousel');
        });

        $("#luxury").owlCarousel({
            stagePadding:0, 
            loop:true,
            stagePadding:0,
            margin:15,
            dots:false,
            nav:false,
            items: 5,
            autoplay:true,
            autoplayTimeout:2000,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:3
                },
                1025:{
                    items:5
                }
            }
            });
    
            $('.luxury-next').click(function() {
                $("#luxury").trigger('next.owl.carousel');
            });
            $('.luxury-prev').click(function() {
                $("#luxury").trigger('prev.owl.carousel');
            });


            $("#slider-products").owlCarousel({
                stagePadding:0, 
                loop:true,
                stagePadding:0,
                margin:15,
                dots:false,
                nav:false,
                items: 5,
                autoplay:true,
                autoplayTimeout:2000,
                responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    1000:{
                        items:3
                    },
                    1025:{
                        items:5
                    }
                }
                });
        
                $('.slider-next').click(function() {
                    $("#slider-products").trigger('next.owl.carousel');
                });
                $('.slider-prev').click(function() {
                    $("#slider-products").trigger('prev.owl.carousel');
                });

                $("#viewed").owlCarousel({
                    stagePadding:0, 
                    loop:true,
                    margin:15,
                    dots:false,
                    nav:false,
                    items: 5,
                    autoplay:true,
                    autoplayTimeout:2000,
                    responsive:{
                        0:{
                            items:1
                        },
                        768:{
                            items:2
                        },
                        1000:{
                            items:3
                        },
                        1025:{
                            items:6
                        }
                    }
                    });
            
                    $('.view-next').click(function() {
                        $("#viewed").trigger('next.owl.carousel');
                    });
                    $('.view-prev').click(function() {
                        $("#viewed").trigger('prev.owl.carousel');
                    });

                    $("#clients").owlCarousel({
                        stagePadding:0, 
                        loop:true,
                        dots:false,
                        nav:false,
                        items: 1,
                        margin:20,
                        autoplay:true,
                        autoplayTimeout:2000,
                    });

           $(".icon-cut").click(function(){
               $(".popup").css("display","none");
           })     
           
           $(".toggle").click(function(){
               $("#headermenu").toggleClass("active");
           })
           $(".nav-toggle").click(function(){
            $(".navmenu").toggle(10);
        })
}); 
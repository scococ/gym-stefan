$(document).ready(function(){
  $('.bxslider').bxSlider();
  
  if($('.slider-list').length>0){
        $('.gallery').owlCarousel({
            loop: true,
            margin: 30,
            
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 50
                    
                },
                768: {
                    items: 2,
                    margin: 75
                },
                992: {
                    items:3

                },
                1400: {
                    items: 5,
                    margin: 50

                }
            }
        });
    
    }
});


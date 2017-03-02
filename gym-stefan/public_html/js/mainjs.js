$(document).ready(function(){
  $('.bxslider').bxSlider();
  
  if($('.slider-list').length>0){
        $('.gallery').owlCarousel({
            loop: true,
            margin: 124,
            
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 50
                    
                },
                768: {
                    items: 3,
                    margin: 75
                },
                992: {
                    items: 4

                },
                1200: {
                    items: 4

                }
            }
        });
    
    }
});


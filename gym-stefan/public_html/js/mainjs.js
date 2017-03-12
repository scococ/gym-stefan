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
                    margin: 10
                    
                },
                470: {
                    items: 2,
                    margin: 75
                },
                900: {
                    items:3

                },
                1200: {
                    items: 4,
                    margin: 50

                }
            }
        });
    
    }
    
    $('.my-breadcrumb a:last-of-type').addClass('inactive');
    $('.my-breadcrumb a:last-of-type').click(function(e){
        e.preventDefault();
    });
    $('#searchbutton').click(function() {
        $('.in-active').css({"display": "inline"});
    });
    
});


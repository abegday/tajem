(function ($){
    $(document).ready(function (){
        $('.banner-slider').slick({
            arrows:false,
            dots:true,
             customPaging : function(slider, i) {
             return ''
            },
        });

        $('.team-description-slider').slick({
            dots:false,
            prevArrow:"<div class='arrow-prev'></div>",
            nextArrow:"<div class='arrow-next'></div>",
            slidesToShow:5,
            centerMode:true,
        });

        
    })
})(jQuery)
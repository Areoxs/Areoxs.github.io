$(document).ready(function () {
    //Карусель
    //Документация: http://owlgraphic.com/owlcarousel/
    var owl = $(".carousel");
    owl.owlCarousel({
        items: 1,
         loop:true,
        autoplay:true,
        lazyLoad:true,
        autoplayHoverPause:true,
        autoplaySpeed:500
    });

   $('.next_btn').click(function() {
    owl.trigger('next.owl.carousel');
});
       $('.prev_btn').click(function() {
    owl.trigger('prev.owl.carousel');
});
    
});

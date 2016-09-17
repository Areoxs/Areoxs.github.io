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
    var owl2=$("#project_many");
    owl2.owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        lazyLoad:true,
        autoplayHoverPause:true,
        autoplaySpeed:1000
    });
      $('.next_btn').click(function() {
    owl.trigger('next.owl.carousel');
          owl2.trigger('next.owl.carousel');
});
       $('.prev_btn').click(function() {
    owl.trigger('prev.owl.carousel');
            owl2.trigger('prev.owl.carousel');
});
});

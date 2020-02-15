$(document).ready(function () {
  
  //referencias


  
    var nav = $('.nav') ,
   toggleCollapse  = $('.toggle-collapse');
 
    toggleCollapse.on('click' , function () {
    nav.toggleClass('collapse');
     
     })

  var owl=   $('.owl-carousel ');
 //owl-carousel for blog
owl.owlCarousel({
     loop: true,
     autoplay : true,
     autoplayTimeut : 3000,
     dots : false,
     nav : true,
     navText : [$('.owl-navigation .owl-nav-prev') , $('.owl-navigation .owl-nav-next')]
 });

 //nav
 
var  nextBtn =  $('#next');
var  prev =  $('#prev');


// Go to the next item
nextBtn.click(function(e) {
    console.log('click next');
    
    e.preventDefault();
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
prev.click(function(e) {
    // With optional speed parameter
    console.log('click prev');
    e.preventDefault();
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

});

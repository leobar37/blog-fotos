const responsive =  {
   0 : {
      items  : 1
   },
    320 : { 
     items  : 1
   },
   520 : { 
     items  : 2
   },
   960 : { 
    items : 3
   }
 }

$(document).ready(function () {
  
     //referencias
  AOS.init();
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
     navText : [$('.owl-navigation .owl-nav-prev') , $('.owl-navigation .owl-nav-next')],
     responsive : responsive
     
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
 
    e.preventDefault();
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

//click to scrooll top

var btnMoveUp = $('.move-up span');
btnMoveUp.on('click' , function () {
      $('html, body').animate( {
           scrollTop : 0
      } , 1000)
 });


});

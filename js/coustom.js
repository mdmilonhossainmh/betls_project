

$(document).ready(function(){
  $('.milonm').slick({
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: "<i class='fa-solid fa-arrow-left slick_left'></i>",
    nextArrow: "<i class='fa-solid fa-arrow-right slick_right'></i>",
  
    milonm:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
   
    
  });
  


// veno box
  new VenoBox({
    selector: '.my-video-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'fold'
});


  // wow 

  new WOW().init();
})
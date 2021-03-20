$(document).ready(function(){

  var tmpMenu;
  var curMenu;

  new daum.roughmap.Lander({
    "timestamp" : "1616225242819",
    "key" : "24xds",
    "mapWidth" : "900",
    "mapHeight" : "620"
  }).render();


  $('ul.tab_title li').on('click', function()
  {

      var $this = $(this);
      var seq = $this.index();

      $('.tab_title li, .tab_content').removeClass("on");
      $this.addClass("on");

      $('.tab_content').eq(seq).addClass("on");

  });

  $('ul.store_list_gong > li').on('click', function(){

      var $this = $(this);

      $('ul.store_list_gong > li').removeClass("on");
      $this.addClass("on");

  })


  $('ul.eng > li').on('mouseover', function()
  {

      curMenu = $(this);
      curMenu.addClass("on");

      curMenu.on('mouseleave', function()
      {

        tmpMenu = curMenu;
        tmpMenu.removeClass("on");

      })

  });


  $('#header').on('mouseover', function()
  {

    $('#header').addClass("open");

    $('#header').on('mouseleave', function()
    {

      $('#header').removeClass("open");

    });

  });




  var mainSlider = $('.bxslider').bxSlider({
    auto: true,
    speed: 1000,
    pause: 4000,
    pager: true,
    infiniteLoop: true,
    pagerCustom: '.bx-pager',
    onSlideAfter: function()
        {
            mainSlider.stopAuto();
            mainSlider.startAuto();
        }


  });

  var mySlider = $('.secslider').bxSlider({
    auto: true,
    speed: 1000,
    pause: 4000,
    pager: false,
    controls: false,
    infiniteLoop: true,

  });

  $('.bx-prev').on('click', function (){
   mainSlider.goToPrevSlide();
   return false;
  });

  $('.bx-next').on('click', function (){
   mainSlider.goToNextSlide();
   return false;
  });

  $('.bx_prev').on('click', function (){
   mySlider.goToPrevSlide();
   return false;
  });

  $('.bx_next').on('click', function (){
   mySlider.goToNextSlide();
   return false;
  });

});

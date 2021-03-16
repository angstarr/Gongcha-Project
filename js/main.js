$(document).ready(function(){

  $('ul.tab_title li').on('click', function()
  {

      var $this = $(this);
      var index = $this.index();

      $('.tab_title li, .tab_content').removeClass("on");
      $this.addClass("on");

      $('.tab_content').eq(index).addClass("on");

  });

  $('ul.eng > li').on('mouseover', function()
  {


      var $this = $(this);
      var menuIndex = $this.index();

      $('ul.eng li').removeClass("on");
      $this.addClass("on");

      $('ul.sub li').on('mouseover', function()
      {

        $('ul.eng > li').closest('ul.eng > li').removeClass("on");
        $('ul.eng > li').eq(menuIndex).addClass("on");

      });

  });


  $('.eng li, .sub').on('mouseover', function()
  {

    $('.sub').addClass("on");

    $('.eng li, .sub').on('mouseleave', function()
    {

      $('.sub').removeClass("on");

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






1

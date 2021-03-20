$(document).ready(function(){


  var tmpMenu;
  var curMenu;

  $('ul.tab_title li').on('click', function()
  {

      var $this = $(this);
      var seq = $this.index();

      $('.tab_title li, .tab_content').removeClass("on");
      $this.addClass("on");

      $('.tab_content').eq(seq).addClass("on");

  });


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

$('ul.store_list_gong > li').on('click', function(){

    var $this = $(this);

    $('ul.store_list_gong > li').removeClass("on");
    $this.addClass("on");

});

var mapContainer = document.getElementById('map');
var mapOption = {
        center: new kakao.maps.LatLng(37.206495, 127.111405),
        level: 3
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var positions = [
    {
        title: '동탄레이크꼬모점',
        latlng: new kakao.maps.LatLng(33.450705, 126.570677)
    },
    {
        title: '동탄북광장',
        latlng: new kakao.maps.LatLng(37.206657, 127.072822)
    },
    {
        title: '동탄영천점',
        latlng: new kakao.maps.LatLng(37.206495, 127.111405)
    },
    {
        title: '동탄솔빛나루점,',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    },
    {
        title: '동탄카림에비뉴점',
        latlng: new kakao.maps.LatLng(37.199059, 127.113224)
    },
    {
        title: '동탄솔빛나루점',
        latlng: new kakao.maps.LatLng(37.205294, 127.069405)
    }
];

var imageSrc = "http://www.gong-cha.co.kr/view/gongcha/images/common/ico_map_store.png";

for (var i = 0; i < positions.length; i ++) {

    var imageSize = new kakao.maps.Size(40, 58);

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        title : positions[i].title,
        image : markerImage
    });
}

function dongTan5() {

    var moveLatLon = new kakao.maps.LatLng(37.199059, 127.113224);

    map.setCenter(moveLatLon);
}

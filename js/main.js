
$(function(){
  var $slider = $('.bx-slider'),
      $firstSlide = $slider.find('li').first() // 첫번째 슬라이드
      .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기

  function PrevSlide(){ // 이전버튼 함수
    stopSlide();startSlide(); //타이머 초기화
    var $lastSlide = $slider.find('li').last() //마지막 슬라이드
    .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기
    $secondSlide = $slider.find('li').eq(1)//두 번째 슬라이드 구하기
    .stop(true).animate({'opacity':0},400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $firstSlide = $slider.find('li').first() //맨 처음 슬라이드 다시 구하기
    .stop(true).animate({'opacity':1},400);//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }

  function NextSlide(){ // 다음 버튼 함수
    stopSlide();startSlide(); //타이머 초기화
    $firstSlide = $slider.find('li').first() // 첫 번째 슬라이드
    .appendTo($slider); // 맨 마지막으로 보내기
    var $lastSlide = $slider.find('li').last() // 맨 마지막으로 보낸 슬라이드
    .stop(true).animate({'opacity':0},400); // fadeOut시키기
    $firstSlide = $slider.find('li').first()// 맨 처음 슬라이드
    .stop(true).animate({'opacity':1},400);// fadeIn 시키기
  }

  $('.bx-next').on('click', function(){ //다음버튼 클릭
    NextSlide();
  });
  $('.bx-prev').on('click', function(){ //이전 버튼 클릭
    PrevSlide();
  });

  startSlide(); // 자동 슬라이드 시작

  var theInterval;

  function startSlide() {
    theInterval = setInterval(NextSlide, 4000); //자동 슬라이드 설정
  }

  function stopSlide() { //자동 멈추기
    clearInterval(theInterval);
  }

});

$(function(){
  var $slider = $('.section4'),
      $firstSlide = $slider.find('li').first()
      .stop(true).animate({'opacity':1},200);

  function PrevSlide(){
    stopSlide();startSlide();
    var $lastSlide = $slider.find('li').last()
    .prependTo($slider);
    $secondSlide = $slider.find('li').eq(1)
    .stop(true).animate({'opacity':0},400);
    $firstSlide = $slider.find('li').first()
    .stop(true).animate({'opacity':1},400);
  }

  function NextSlide(){ // 다음 버튼 함수
    stopSlide();startSlide(); //타이머 초기화
    $firstSlide = $slider.find('li').first() // 첫 번째 슬라이드
    .appendTo($slider); // 맨 마지막으로 보내기
    var $lastSlide = $slider.find('li').last() // 맨 마지막으로 보낸 슬라이드
    .stop(true).animate({'opacity':0},400); // fadeOut시키기
    $firstSlide = $slider.find('li').first()// 맨 처음 슬라이드
    .stop(true).animate({'opacity':1},400);// fadeIn 시키기
  }

  $('.bx_next').on('click', function(){ //다음버튼 클릭
    NextSlide();
  });
  $('.bx_prev').on('click', function(){ //이전 버튼 클릭
    PrevSlide();
  });

  startSlide(); // 자동 슬라이드 시작

  var theInterval;

  function startSlide() {
    theInterval = setInterval(NextSlide, 3000); //자동 슬라이드 설정
  }

  function stopSlide() { //자동 멈추기
    clearInterval(theInterval);
  }

});


$(document).ready(function(){

    $('ul.tab_title li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tab_title li').removeClass('on');
        $('.tab_content').removeClass('on');

        $(this).addClass('on');
        $("#"+tab_id).addClass('on');
    })

});

// 음료 메뉴 탭

$(document).ready(function(){

    $('ul.drink_title li').click(function(){
        var drink_id = $(this).attr('data-drink');

        $('ul.drink_title li').removeClass('on');
        $('.drink_content').removeClass('on');

        $(this).addClass('on');
        $("#"+drink_id).addClass('on');
    })

});

// 음료 자세히보기

$(document).ready(function(){

    $('ul.detail_drink li').click(function(){
        var detail_id = $(this).attr('data-detail');

        $('ul.detail_drink li').removeClass('open');
        $('.detail_content').removeClass('open');

        $(this).addClass('open');
        $("#"+detail_id).addClass('open');
    })

});

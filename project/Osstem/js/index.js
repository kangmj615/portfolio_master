
$(function(){
  /*a성격제거- 올라가지 않음(except '.arrowup a')*/
  $('a[href="#"]').not('#top').on('click',function(e){
    e.preventDefault();
  });
  $('#top').on('click',function(){
    $('html, body').animate({scrollTop:0}, 400);
  });

/*모바일 네비게이션*/
   let wt = $(window).width();
    if(wt < 1024){
      $('.gnb .bar img:nth-child(2)').click(function(){
        $('.gnb .bar img:nth-child(2)').css('display','none');
        $('.gnb .bar img:nth-child(3)').css('display','block');
        $('.gnb .inner').show();
        $('.gnb .inner .detail').hide();
      });
      $('header').mouseleave(function(){
        $('.gnb .bar img:nth-child(2)').css('display','none');
        $('.gnb .bar img:nth-child(1)').css('display','block');
      });
      $('.gnb .bar img:nth-child(3)').click(function(){
        $('.gnb .bar img:nth-child(3)').css('display','none');
        $('.gnb .bar img:nth-child(2)').css('display','block');
        $('.gnb .inner ').hide();
      });  
      }

/*햄버거바*/
  if(wt > 1024){
    $('.gnb .bar img').click(function(){
      $('.gnb .bar img:nth-child(2)').css('display','none');
      $('.gnb .bar img:nth-child(3)').css('display','block');
      $('.gnb .inner .detail').show();
    });
    $('header').mouseleave(function(){
      $('.gnb .bar img:nth-child(2)').css('display','none');
      $('.gnb .bar img:nth-child(1)').css('display','block');
    });
    $('.gnb .bar img:nth-child(3)').click(function(){
      $('.gnb .bar img:nth-child(3)').css('display','none');
      $('.gnb .bar img:nth-child(2)').css('display','block');
      $('.gnb .inner .detail').hide();
    });  
  }
   
/*네비게이션*/
  
  $('header').hover(function(){
    $('header').css('background-color','white');
    $('.gnb .inner > li> a').css('color','black');
    $('.gnb .bar img').css('display','none');
    $('.gnb .bar img:nth-child(2)').css('display','block');
  },function(){
    $(this).css('background','transparent');
    
    $('.gnb .inner > li> a').css('color','white');
    $('.gnb .bar img').css('display','none');
    $('.gnb .bar img:first-child').css('display','block');
  });


/*네비게이션 마지막 페이지 전환- 스크롤*/
  $(window).scroll(function(){
    let scroll_ht = $(window).scrollTop();
    if(scroll_ht >=3000){  

        $('header').css('background-color','white');
        $('.gnb .inner > li> a').css('color','black');
        $('.gnb .bar img').css('display','none');
        $('.gnb .bar img:nth-child(2)').css('display','block');
    }
    else{
      $('header').css('background','transparent');
    
      $('.gnb .inner > li> a').css('color','white');
      $('.gnb .bar img').css('display','none');
      $('.gnb .bar img:first-child').css('display','block');
    }
  });


/*동글이들*/
  $('.circle').not('.circle3').hover(function(){
    $(this).css({'background-color':'turquoise','padding-top':'30px','font-size':'21px','transform':'scale(1.3)'});

  },function(){
    $(this).css({'background-color':'rgba(122, 122, 122, 0.288)','padding-top':'35.5px','font-size':'16px','transform':'scale(1)'});
  });   

  if(wt < 1024){
    $('.circle').hover(function(){
      $(this).css({'background-color':'turquoise','padding-top':'20px','font-size':'15px','transform':'scale(1.2)','padding-top':'25px'});
    },function(){
    $(this).css({'background-color':'rgba(122, 122, 122, 0.288)','padding-top':'25px','font-size':'12px','transform':'scale(1)'});
  });   
  }

/*박스들*/
  $('.boxes').hover(function(){
    $(this).css({'background-color':'orange','transform':'scale(1.1)','margin':'0 40px','transform-origin':'center'});
  },function(){
      $(this).css({'background-color':'rgba(0, 0, 5, 0.55)','transform':'scale(1)','margin':'0 10px'});
  });
});
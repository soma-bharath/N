function startstage() {
    $('#t1').animate({opacity:1, top:'0px'},500);
    setTimeout(function(){
      $('#t1').animate({opacity:0, top:'-5px'},1000);
      setTimeout(function(){
        $('#t2').animate({opacity:1, top:'0px'},500);
      },500);
    }, 3000);
    setTimeout(function(){
      $('#t2').animate({opacity:0, top:'-5px'},1000);
      setTimeout(function(){
        $('#t3').animate({opacity:1, top:'0px'},500);
      },500);
    }, 6000);
    setTimeout(function(){
      $('#t3').animate({opacity:0, top:'-5px'},1000);
      setTimeout(function(){
        $('#t4').animate({opacity:1, top:'0px'},500);
      },500);
    }, 9000);
    setTimeout(function(){
        $('#t4').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t5').animate({opacity:1, top:'0px'},500);
        },500);
      }, 12000);
      setTimeout(function(){
        $('#t5').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t6').animate({opacity:1, top:'0px'},500);
        },500);
      }, 15000);
      setTimeout(function(){
        $('#t6').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t7').animate({opacity:1, top:'0px'},500);
        },500);
      }, 18000);
      setTimeout(function(){
        $('#t7').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t8').animate({opacity:1, top:'0px'},500);
        },500);
      }, 21000);
      setTimeout(function(){
        $('#t8').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t9').animate({opacity:1, top:'0px'},500);
        },500);
      }, 24000);
      setTimeout(function(){
        $('#t9').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t10').animate({opacity:1, top:'0px'},500);
        },500);
      }, 27000);
      setTimeout(function(){
        $('#t10').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t11').animate({opacity:1, top:'0px'},500);
        },500);
      }, 30000);
      setTimeout(function(){
        $('#t11').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t12').animate({opacity:1, top:'0px'},500);
        },500);
      }, 33000);
      setTimeout(function(){
        $('#t12').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t13').animate({opacity:1, top:'0px'},500);
        },500);
      }, 36000);
      setTimeout(function(){
        $('#t13').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t14').animate({opacity:1, top:'0px'},500);
        },500);
      }, 39000);
    setTimeout(function(){
        $('#t14').animate({opacity:0, top:'-5px'},1000);
        setTimeout(function(){
          $('#t15').animate({opacity:1, top:'0px'},500);
        },500);
      }, 39000);
    setTimeout(function(){
      $('#start-btn').addClass('open');
    },42000);
  }
  function roll1(t) {
    mm1 = setInterval(function(){
      n = $('#m1 span').length;
      A = Math.floor(Math.random()*n);
      $('#m1 span.active').removeClass('active').addClass('over');
      $('#m1 span').eq(A).removeClass('over').addClass('active');
      console.log(A);
    },t);
  }
  function roll2(t) {
    mm2 = setInterval(function(){
      n = $('#m2 span').length;
      A = Math.floor(Math.random()*n);
      $('#m2 span.active').removeClass('active').addClass('over');
      $('#m2 span').eq(A).removeClass('over').addClass('active');
    },t);
  }
  $(document).ready(function(){
    setTimeout(function(){
      startstage();
     }, 1000);
    $('#start-btn').click(function(){
      $('#curtain').addClass('open');
      $('#layer-0').addClass('out');
      
      setTimeout(function(){
        $('#container-cake').removeClass('intro');
        $('#layer-0').css({display:'none'});
      },1000);
    });
    setTimeout(function(){
      $('#candle').addClass('end');
      roll1(1000);
      roll2(200);
    }, 1000);
    $('#play').click(function(){
      if($('#play').hasClass('pause')){
        roll1(1000);
        roll2(200);
      }else{
        clearInterval(mm1);
        clearInterval(mm2);
      }
      $('#play').toggleClass('pause');
    });
  });

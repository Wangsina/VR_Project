$(function(){
	
	
/*****************鼠标点击-右侧导航栏出现效果jQuery******************************/
	$(document).on('click',function(e){
		var target = e.target;
		var oNavSide=$('.index_navSide')[0];
		var oNavSideBox=$('.index_navSideBox')[0];
		if(oNavSideBox==null){
	        return;
	    }else{
	    	
	        if((target!=oNavSide)&&(target!=oNavSideBox)&&(!$.contains(oNavSideBox,target))){
	            $('.index_navSideBox').css('display','none');            
	        }else{
	           $('.index_navSideBox').css('display','block');   
	        }
	    }  
	})
	
	
/*****************鼠标点击出现右侧导航条li效果jQuery******************************/		
	$('.index_navSide').click(function(event){
		 $('.index_navSide_li').addClass('animated fadeInUp');
		 setTimeout(()=>{
		  	$('.index_navSide_li').removeClass('animated fadeInUp');
		 },800)
	});
	
	
/*****************鼠标滚动换屏及点击导航条切换效果jQuery******************************/	
	var timer;
	var num=0;
    //点击导航条事件
	$('.index_navBox li').click(function(event){
		var aa = $('.index_navUl').children('li').index(this);
		//console.log(aa);
		num = $(this).index();
		
		//点击时——实现每一页的动画
		if(num==1){
			$('.changjing_boxbig').addClass('animated slideInUp');
			$('.changjing_boxsmall').addClass('cjbswidth');
		}else{
			$('.changjing_boxbig').removeClass('animated slideInUp');
			$('.changjing_boxsmall').removeClass('cjbswidth');
		}	
		if(num==2){  
			$('.aboutUs_title').addClass('animated slideInUp');
			$('.aboutUs_line').addClass('animated slideInUp');
			$('.aboutUs_text').addClass('animated slideInUp');
			$('.aboutUs_learnmore').addClass('animated slideInUp');
		}else{
			$('.aboutUs_title').removeClass('animated slideInUp');
			$('.aboutUs_line').removeClass('animated slideInUp');
			$('.aboutUs_text').removeClass('animated slideInUp');
			$('.aboutUs_learnmore').removeClass('animated slideInUp');
		}
		if(num==3){
			$('.newsInfo_li').addClass('animated slideInUp');
		}else{
			$('.newsInfo_li').removeClass('animated slideInUp');
		}
		if(num==4){
			$('.wonderfulCase_li').addClass('animated slideInUp');
		}else{
			$('.wonderfulCase_li').removeClass('animated slideInUp');
		}
		if(num==5){
			$('#ContactUs_textbg1').addClass('animated slideInRight');
			$('#ContactUs_textbg2').addClass('animated slideInRight');
		}else{
			$('#ContactUs_textbg1').removeClass('animated slideInRight');
			$('#ContactUs_textbg2').removeClass('animated slideInRight');			   
		}
		
		$('section').stop().animate({'top':-100*num+'%'},100);
		$(this).addClass('index_navLi').siblings('li').removeClass('index_navLi');
		$('.index_topBox').addClass('bgc');
		if(aa==0){
			$('.index_topBox').removeClass('bgc');
		}
	});
	
	//鼠标滚动事件
	$(document).mousewheel(function(e,d){
		//alert(d);
		//向下滚动时:d=-1  向上滚动时：d=1
		//setInterval(function(){},500)循环执行
		//setTimeout(function(){},500)一次性定时器，隔500毫秒执行且只执行一次函数内容
		clearTimeout(timer);
		timer= setTimeout(function(){
				num=num-d;
				if(num<0){num = 0}
				if(num>5){num = 5}
				$('section').stop().animate({'top':-100*num+'%'},500);
				$('.index_navUl li').eq(num).addClass('index_navLi').siblings('li').removeClass('index_navLi');
				$('.index_topBox').addClass('bgc');
				if(num==0){
					$('.index_topBox').removeClass('bgc');
				}

				//实现每一页的动画
				if(num==1){
					$('.changjing_boxsmall').addClass('cjbswidth');
					$('.changjing_boxbig').addClass('animated  slideInLeft slideInUp');
				}else{
					$('.changjing_boxsmall').removeClass('cjbswidth');
					$('.changjing_boxbig').removeClass('animated slideInUp slideInLeft');
				}	
				if(num==2){  
					$('.aboutUs_title').addClass('animated slideInUp');
					$('.aboutUs_line').addClass('animated slideInUp');
					$('.aboutUs_text').addClass('animated slideInUp');
					$('.aboutUs_learnmore').addClass('animated slideInUp');
//					(function($) {
//				      $(window).on('resize', function() {
//				      	if($(window).width()<=992){
//				      		$('.aboutUs_pic').addClass('bbbb');
//				      	}
//				      });
//				    })(jQuery);
				}else{
					$('.aboutUs_title').removeClass('animated slideInUp');
					$('.aboutUs_line').removeClass('animated slideInUp');
					$('.aboutUs_text').removeClass('animated slideInUp');
					$('.aboutUs_learnmore').removeClass('animated slideInUp');
				}
				if(num==3){
					$('.newsInfo_li').addClass('animated slideInUp');
				}else{
					$('.newsInfo_li').removeClass('animated slideInUp');
				}
				if(num==4){
					$('.wonderfulCase_li').addClass('animated slideInUp');
				}else{
					$('.wonderfulCase_li').removeClass('animated slideInUp');
				}
				if(num==5){
					$('#ContactUs_textbg1').addClass('animated slideInRight');
					$('#ContactUs_textbg2').addClass('animated slideInRight');
				}else{
					$('#ContactUs_textbg1').removeClass('animated slideInRight');
					$('#ContactUs_textbg2').removeClass('animated slideInRight');			   
				}
			},100)
	})

/*****************鼠标点击导航条li换屏效果jQuery******************************/	
	var num1=0;
	$('.index_navSide_li').click(function(event){
		num1 = $(this).index();
		$('section').stop().animate({'top':-100*num1+'%'},100);
		$('.index_navUl li').eq(num1).addClass('index_navLi').siblings('li').removeClass('index_navLi');
		$('.index_topBox').addClass('bgc');
		if(num1==0){
			$('.index_topBox').removeClass('bgc');
		}
		//点击时——实现每一页的动画
		if(num1==1){
			$('.changjing_boxbig').addClass('animated slideInUp');
			$('.changjing_boxsmall').addClass('cjbswidth');
		}else{
			$('.changjing_boxbig').removeClass('animated slideInUp');
			$('.changjing_boxsmall').removeClass('cjbswidth');
		}	
		if(num1==2){  
			$('.aboutUs_title').addClass('animated slideInUp');
			$('.aboutUs_line').addClass('animated slideInUp');
			$('.aboutUs_text').addClass('animated slideInUp');
			$('.aboutUs_learnmore').addClass('animated slideInUp');
		}else{
			$('.aboutUs_title').removeClass('animated slideInUp');
			$('.aboutUs_line').removeClass('animated slideInUp');
			$('.aboutUs_text').removeClass('animated slideInUp');
			$('.aboutUs_learnmore').removeClass('animated slideInUp');
		}
		if(num1==3){
			$('.newsInfo_li').addClass('animated slideInUp');
		}else{
			$('.newsInfo_li').removeClass('animated slideInUp');
		}
		if(num1==4){
			$('.wonderfulCase_li').addClass('animated slideInUp');
		}else{
			$('.wonderfulCase_li').removeClass('animated slideInUp');
		}
		if(num1==5){
			$('#ContactUs_textbg1').addClass('animated slideInRight');
			$('#ContactUs_textbg2').addClass('animated slideInRight');
		}else{
			$('#ContactUs_textbg1').removeClass('animated slideInRight');
			$('#ContactUs_textbg2').removeClass('animated slideInRight');			   
		}
	});
/***********************应用场景文字轮播jQuery*******************************/
	var oLunbo_box = $('#changjing_bodyul');
    var oLunbo_text = $('.changjing_bodyli');  
	var ochangjing_bgpic = $('.changjing_bgpic');  
	var oleft = $('#left');
	var oright = $('#right');
	var iNow = 0;
	oLunbo_text.eq(1).children().eq(0).removeClass('bigword').addClass('text_span');
	oLunbo_text.eq(1).children().eq(1).show();
	oLunbo_text.eq(2).children().eq(1).hide();
	ochangjing_bgpic.eq(0).fadeTo(0,1);
	function changeText(iNow){
		console.log(iNow);
		var nowleft = -(iNow)*400;
		oLunbo_box.css('left',nowleft+'px');
			
		oLunbo_text.eq(iNow+1).children().eq(0).removeClass('bigword').addClass('text_span');
		oLunbo_text.eq(iNow).children().eq(0).removeClass('text_span').addClass('bigword');
		oLunbo_text.eq(iNow+2).children().eq(0).removeClass('text_span').addClass('bigword');
        
        oLunbo_text.eq(iNow+1).children().eq(1).fadeIn();
        oLunbo_text.eq(iNow).children().eq(1).fadeOut();
        oLunbo_text.eq(iNow+2).children().eq(1).fadeOut();
        
        ochangjing_bgpic.eq(iNow-1).fadeTo(1000,0);
        ochangjing_bgpic.eq(iNow).fadeTo(1000,1);
        ochangjing_bgpic.eq(iNow+1).fadeTo(1000,0);
        
	}
	//向前
	function aa(){
		iNow--;
		if(iNow<0){
			iNow++;
		}else{	
			changeText(iNow);
			
		}
	}
	//向后
	function bb(){
		iNow++;
		if(iNow>oLunbo_text.length-3){
			iNow--;
		}else{
			changeText(iNow);	
		}
	}   
	oleft.click(aa);
	oright.click(bb);
	
	
/*****************新闻资讯鼠标移上和移开的动画效果jQuery******************************/	
    var oNewsLi=$('.newsInfo_li');
    var oNewsboxtext=$('.newsInfo_boxtext');
	for(let i=0;i<oNewsLi.length;i++){
		oNewsLi.eq(i).mouseenter(function(){
			$('.newsInfo_boxpicBorder').eq(i).css('display','block');
			$('.newsInfo_btn').eq(i).fadeIn(300);
			$('.newsInfo_date').eq(i).css('color','#ff6600');
			$('.newsInfo_boxtext').eq(i).animate({'padding-left':10+'px'},500);
			$('.newsInfo_boxpic').eq(i).animate({},function(){
				$('.newsInfo_boxpic').eq(i).css({'transform':'scale(0.97)','transition': 'all 0.5s'});
			});
	    });
	    oNewsLi.eq(i).mouseleave(function(){
			$('.newsInfo_boxpicBorder').eq(i).css('display','none');
	        $('.newsInfo_btn').eq(i).fadeOut(300); 
	        $('.newsInfo_date').eq(i).css('color','#666666');
			$('.newsInfo_boxtext').eq(i).animate({'padding-left':0+'px'},500);
			$('.newsInfo_boxpic').eq(i).animate({},function(){
				$('.newsInfo_boxpic').eq(i).css({'transform':'scale(1)','transition': 'all 0.5s'});
			});
	    });
	}
	
	
/*****************新闻资讯左右键实现分页的效果jQuery******************************/	
	var oNewsul = $('#newsInfo_ul');
    var oNewsli = $('.newsInfo_li');  
	var onewsleft = $('#newsInfo_left');
	var onewsright = $('#newsInfo_right');
	var inewsNow = 0;
	function changeDiv(inewsNow){
//		console.log(inewsNow);
		var w = $('.newsInfo_li').width();
		var newsNowleft = -(inewsNow)*w;
//		console.log(newsNowleft);
		oNewsul.css('left',newsNowleft);      
	}
	//向前
	function left(){
		inewsNow--;
		if(inewsNow<0){
			inewsNow++;
		}else{	
			changeDiv(inewsNow);
			
		}
	}
	//向后
	function right(){
		inewsNow++;
		var aa=$(window).width();
		if(aa<=768){
			if(inewsNow>oLunbo_text.length-2){
				inewsNow--;
			}else{
				changeDiv(inewsNow);	
			}
		}else if(aa<=992){
			if(inewsNow>oLunbo_text.length-3){
				inewsNow--;
			}else{
				changeDiv(inewsNow);	
			}
		}else{
				
			if(inewsNow>oLunbo_text.length-5){
				inewsNow--;
			}else{
				changeDiv(inewsNow);	
			}
		}
		
		
	}  
	//实时监听屏幕大小,当屏幕小于992时,定位到第一个li。解决在大屏点了左右键以后,li摆放混乱的问题！
	(function($) {
      $(window).on('resize', function() {
      	if($(window).width()<992){
      		inewsNow=0;
			changeDiv(inewsNow);
      	}
        
      });
    })(jQuery);
	onewsleft.click(left);
	onewsright.click(right);

/*****************新闻资讯鼠标移上和移开的动画效果jQuery******************************/	
    var oWf_li=$('.wonderfulCase_li');
    console.log(oWf_li);
	for(let i=0;i<oWf_li.length;i++){
		oWf_li.eq(i).mouseenter(function(){
			console.log('aaa')
			$('.wonderfulCase_litop').eq(i).animate({'opacity':0.4},500);
			$('.wonderfulCase_boxpic').eq(i).animate({},function(){
				$('.wonderfulCase_boxpic').eq(i).css({'transform':'scale(1.1)','transition': 'all 0.5s'});
			});
			$('.wf_litopContent').eq(i).css('display','block');
	    });
	    oWf_li.eq(i).mouseleave(function(){
	    	$('.wonderfulCase_litop').eq(i).animate({'opacity':0},500);
			$('.wonderfulCase_boxpic').eq(i).animate({},function(){
				$('.wonderfulCase_boxpic').eq(i).css({'transform':'scale(1)','transition': 'all 0.5s'});
			});
			$('.wf_litopContent').eq(i).css('display','none');
	    });
	}
})

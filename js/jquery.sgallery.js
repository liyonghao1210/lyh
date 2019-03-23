/****************************************************************
 *																*		
 * 						      素材火							*
 *                        www.sucaihuo.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
(function ($) {
$.fn.sGallery = function (o) {
    return  new $sG(this, o);
			//alert('do');
    };

	var settings = {
		thumbObj:null,
		titleObj:null,
		botLast:null,
		botNext:null,
		thumbNowClass:'now',
		slideTime:800,
		autoChange:true,
		changeTime:5000,
		delayTime:100
	};

 $.sGalleryLong = function(e, o) {
    this.options = $.extend({}, settings, o || {});
	var _self = $(e);
	var set = this.options;
	var thumb;
	var size = _self.size();
	var nowIndex = 0; 
	var index;
	var startRun;
	var delayRun;

//初始化
	_self.eq(0).show();

//主切换函数
function fadeAB () {
	if (nowIndex != index) {
		if (set.thumbObj!=null) {
		$(set.thumbObj).removeClass().eq(index).addClass(set.thumbNowClass);}
		_self.eq(nowIndex).stop(false,true).fadeOut(set.slideTime);
		_self.eq(index).stop(true,true).fadeIn(set.slideTime);
		$(set.titleObj).eq(nowIndex).hide();
		$(set.titleObj).eq(index).show();
		nowIndex = index;
		if (set.autoChange==true) {
		clearInterval(startRun);
		startRun = setInterval(runNext,set.changeTime);}
		}
}

//切换到下一个
function runNext() {
	index =  (nowIndex+1)%size;
	fadeAB();
}

//点击任一图片
	if (set.thumbObj!=null) {
	thumb = $(set.thumbObj);
//初始化
	thumb.eq(0).addClass(set.thumbNowClass);
		thumb.bind("mousemove",function(event){
			index = thumb.index($(this));
			fadeAB();
			delayRun = setTimeout(fadeAB,set.delayTime);
			clearTimeout(delayRun);
			event.stopPropagation();
		})
	}

//点击上一个
	if (set.botNext!=null) {
		var botNext = $(set.botNext);
		botNext.mousemove(function () {
			runNext();
			return false;
		});
	}

//点击下一个
	if (set.botLast!=null) {
		var botLast = $(set.botLast);
		botLast.mousemove(function () {
			index = (nowIndex+size-1)%size;
			fadeAB();
			return false;
	});
	}

//自动运行
	if (set.autoChange==true) {
	startRun = setInterval(runNext,set.changeTime);
	}

}

var $sG = $.sGalleryLong;

})(jQuery);

function slide(Name,Class,Width,Height,fun){
	$(Name).width(Width);
	$(Name).height(Height);
	
	if(fun == true){
		$(Name).append('<div class="title-bg"></div><div class="title"></div><div class="change"></div>')
		var atr = $(Name+' div.changeDiv a');
		var sum = atr.length;
		for(i=1;i<=sum;i++){
			var title = atr.eq(i-1).attr("title");
			var href = atr.eq(i-1).attr("href");
			$(Name+' .change').append('<i>'+i+'</i>');
			$(Name+' .title').append('<a href="'+href+'">'+title+'</a>');
		}
		$(Name+' .change i').eq(0).addClass('cur');
	}
	$(Name+' div.changeDiv a').sGallery({
		//对象指向层，层内包含图片及标题
		titleObj:Name+' div.title a',
		thumbObj:Name+' .change i',
		thumbNowClass:Class
	});
	$(Name+" .title-bg").width(Width);
}


//TAB切换
function SwapTab(name,title,content,Sub,cur){
  $(name+' '+title).mouseover(function(){
	  $(this).addClass(cur).siblings().removeClass(cur);
	  $(content+" > "+Sub).eq($(name+' '+title).index(this)).show().siblings().hide();
  });
}
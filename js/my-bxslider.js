$(function(){
	$('.bxslider').bxSlider({
		mode: 'fade', //设置滑动模式，'horizontal':水平, 'vertical':垂直, 'fade':淡入淡出
  		captions: true, //设置显示图片标题，当滑动内容为图片时并设置属性title，可以显示图片标题
  		speed: 500, //内容切换速度，数字，ms
  		startSlide: 0, //初始滑动位置，数字
  		pager: true, //设置是否显示分页，设置为true时，会在滑动内容下方显示分页图标
  		controls: false, //设置是否显示上一副和下一幅按钮
  		auto: true, //设置是否自动滑动
  		autoControls: false, //设置自定义按钮播放暂停
  		pause: 4000, //自动滑动时停留时间，数字，ms
  		autoHover: false, //当鼠标滑向滑动内容上时，是否暂停滑动
	});
});
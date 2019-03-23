$(document).ready(function() {
	// 导航切换效果
	$(".nav li").click(function () { 
		$(this).addClass("activeMenus").siblings().removeClass("activeMenus");
	});


  //导航
  $(".sy1_ul .sy1_li").hover(
    function() {
      var index = $(".sy1_ul .sy1_li").index(this);

      $(this)
        .addClass("sy1_li_bg")
        .find(".sy2_ul")
        .stop(true, true)
        .fadeIn(350);

      //select隐藏（i6下select始终在最上层的问题）

      $(".searchselect").hide();
    },

    function() {
      var index = $(".sy1_ul .sy1_li").index(this);

      $(this)
        .removeClass("sy1_li_bg")
        .find(".sy2_ul")
        .hide();

      //select 恢复显示

      $(".searchselect").show();
    }
  );

  //导航下拉位置样式控制
  $(".sy2_ul .sy2_li").addClass("bod_1");
});

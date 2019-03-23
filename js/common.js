/****************************************************************
 *																*		
 * 						      素材火							*
 *                        www.sucaihuo.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/
//初始化视频播放器需配合ckplayer.js使用
function initCKPlayer(boxId, videoSrc, playerSrc) {
    var flashvars = {
        f: videoSrc,
        c: 0,
        h: 3,
        p: 1,
        wh: '4:3'
    };
    var params = { bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent' };
    var video = [videoSrc + '->video/mp4'];
    CKobject.embed(playerSrc, boxId, 'ckplayer_' + boxId, '100%', '100%', true, flashvars, video, params);
}

//搜索查询
function SiteSearch(send_url, divTgs, channel_name) {
    var strwhere = "";
    if (channel_name !== undefined) {
        strwhere = "&channel_name=" + channel_name
    }
    var str = $.trim($(divTgs).val());
    if (str.length > 0 && str != "输入关健字") {
        window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val()) + strwhere;
    }
    return false;
}


function get_ip(site_id, click) {
    $.ajax({
        type: "POST",
        url: "/tools/submit_ajax.ashx?action=site_statistics&site_id="+site_id+"&click="+click+"",
        dataType: "json",
        timeout: 50000,
        success: function (data) {
            if (data != "") {
                var str = "<li>今日访问：<span>" + data[0].tody + "</span></li>";
                    str += "<li>本月访问：<span>" + data[0].samemonth + "</span></li>";
                    str += "<li>上月访问：<span>" + data[0].lastmonth + "</span></li>";
                    str += "<li>访问总数：<span>" + data[0].total + "</span></li>";
                    $("#statistics").html(str);
            }
            else {
                alert("对不起，查询错误！！");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("查询出错：" + textStatus + ",提示：" + errorThrown);
        }
    });

}

function get_statistics(sendUrl,classId) {
    $.ajax({
        type: "POST",
        url: sendUrl,
        dataType: "json",
        timeout: 50000,
        success: function (data) {
            if (data != "") {
                var str = "<li>今日访问：<span>" + data[0].day + "</span></li>";
                str += "<li>本月访问：<span>" + data[0].month + "</span></li>";
                str += "<li>上月访问：<span>" + data[0].lastmonth + "</span></li>";
                str += "<li>访问总数：<span>" + data[0].count + "</span></li>";
                $("#statistics").html(str);
            }
            else {
               // alert("对不起，查询错误！！");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          // alert("查询出错：" + textStatus + ",提示：" + errorThrown);
        }
    });
}
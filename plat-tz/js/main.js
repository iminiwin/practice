/**
 * Created by Administrator on 2017/6/22.
 */
$(function(){
    $(".checkbox-inline").click(function(){
        var index=$(this).index();
        $(".checkbox-inline span").eq(index).toggleClass("glyphicon-ok");
    });

    Number.prototype.getWeekName = function(){
        switch(parseInt(this)){
            case 0:
                return "星期天";
            case 1:
                return "星期一";
            case 2:
                return "星期二";
            case 3:
                return "星期三";
            case 4:
                return "星期四";
            case 5:
                return "星期五";
            case 6:
                return "星期六";
            default:
                return "unknow";
        }
    };
    var d = new Date();
    document.getElementById("date").innerText = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日 ";
    document.getElementById("week").innerText=d.getDay().getWeekName();

});

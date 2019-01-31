/**
 * Created by Administrator on 2017/5/27.
 */
// var TheDate=new Date();
// var weekString="天一二三四五六";
// var DateString;
// function GetDateString(){
//   var tmp="";
//   var t1=TheDate.getYear();
//   if(t1<1900)
//   t1+=1900;
//   h=TheDate.getHours();
//   var hao;
//   if(h>=0 && h<12) hao="上午好！";
//   if(h>=12 && h<18) hao="下午好！";
//   if(h>=18 && h<=23) hao="晚上好！";
//   tmp+=t1+"年"+(TheDate.getMonth()+1)+"月"+TheDate.getDate()
//          +"日&nbsp;星期"+weekString.charAt(TheDate.getDay())+"&nbsp;&nbsp;"+hao;
//   DateString=tmp;
//   return tmp;
// }
// GetDateString();
// document.getElementById("date").innerHTML = DateString;


/*加入收藏*/
function AddFavorite(sURL, sTitle){
    try{
        window.external.addFavorite(sURL, sTitle);
    }catch (e){
        try{
            window.sidebar.addPanel(sTitle, sURL, "");
        }catch (e){
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

$(document).ready(function () {
    //showTime();

    $('.nav .container').mouseenter(function () {
        $('.nav-list').show();
    });
    $('.nav .container').mouseleave(function () {
        $('.nav-list').hide();
    });
    $('.nav-list').mouseenter(function () {
        $(this).show();
    });
    $('.nav-list').mouseleave(function () {
        $(this).hide();
    });

    $('.nav-list ul').css('height', $('.nav-list').height());

    (function () {
        var asideH=$('.lf.aside').height();
        var detailH=$('.rt.detail').height();
        asideH>detailH ? $('.rt.detail').height(asideH) : $('.lf.aside').height(detailH);
    })();
});

/*to Top*/
$(window).scroll(function(){
    var sc=$(window).scrollTop();
});
$("#top").click(function(){
    var sc=$(window).scrollTop();
    $('body,html').animate({scrollTop:0},1000);
});
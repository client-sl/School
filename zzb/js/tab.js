// JavaScript Document
window.onload=function(){
    var oLi = document.getElementById("tabtitle").getElementsByTagName("a");
    var con = document.getElementById("tabcon").getElementsByTagName("div");
    //var more = document.getElementById("tabmore").getElementsByTagName("a");
    for(var i=0;i<oLi.length;i++){  //循环历遍onclick事件
        oLi[i].index=i; //oLi[0].index=0 index是自定义属性
        oLi[i].onmouseover=function(){
            for(var i=0;i<oLi.length;i++){  //循环历遍去掉button样式和把div隐藏
                oLi[i].className='';
                con[i].style.display='none';
                //more[i].style.display='none';
            }
            this.className='current';  //当前按钮添加样式
            con[this.index].style.display='block';  //div显示 this.index是当前div 即div[0]之类的
            //more[this.index].style.display='block';
        }
    }

    var oLi_1 = document.getElementById("tabtitle_1").getElementsByTagName("a");
    var con_1 = document.getElementById("tabcon_1").getElementsByTagName("div");
    //var more_1 = document.getElementById("tabmore_1").getElementsByTagName("a");
    for(var i=0;i<oLi_1.length;i++){  //循环历遍onclick事件
        oLi_1[i].index=i; //oLi[0].index=0 index是自定义属性
        oLi_1[i].onmouseover=function(){
            for(var i=0;i<oLi_1.length;i++){  //循环历遍去掉button样式和把div隐藏
                oLi_1[i].className='';
                con_1[i].style.display='none';
                //more_1[i].style.display='none';
            }
            this.className='current';  //当前按钮添加样式
            con_1[this.index].style.display='block';  //div显示 this.index是当前div 即div[0]之类的
            //more_1[this.index].style.display='block';
        }
    }
    var oLi_2 = document.getElementById("tabtitle_2").getElementsByTagName("a");
    var con_2 = document.getElementById("tabcon_2").getElementsByTagName("div");
    //var more_1 = document.getElementById("tabmore_1").getElementsByTagName("a");
    for(var i=0;i<oLi_2.length;i++){  //循环历遍onclick事件
        oLi_2[i].index=i; //oLi[0].index=0 index是自2义属性
        oLi_2[i].onmouseover=function(){
            for(var i=0;i<oLi_2.length;i++){  //循环历遍去掉button样式和把div隐藏
                oLi_2[i].className='';
                con_2[i].style.display='none';
                //more_1[i].style.display='none';
            }
            this.className='current';  //当前按钮添加样式
            con_2[this.index].style.display='block';  //div显示 this.index是当前div 即div[0]之类的
            //more_1[this.index].style.display='block';
        }
    }
    var oLi_3 = document.getElementById("tabtitle_3").getElementsByTagName("a");
    var con_3 = document.getElementById("tabcon_3").getElementsByTagName("div");
    //var more_1 = document.getElementById("tabmore_1").getElementsByTagName("a");
    for(var i=0;i<oLi_3.length;i++){  //循环历遍onclick事件
        oLi_3[i].index=i; //oLi[0].index=0 index是自2义属性
        oLi_3[i].onmouseover=function(){
            for(var i=0;i<oLi_3.length;i++){  //循环历遍去掉button样式和把div隐藏
                oLi_3[i].className='';
                con_3[i].style.display='none';
                //more_1[i].style.display='none';
            }
            this.className='current';  //当前按钮添加样式
            con_3[this.index].style.display='block';  //div显示 this.index是当前div 即div[0]之类的
            //more_1[this.index].style.display='block';
        }
    }
    var oLi_5 = document.getElementById("tabtitle_5").getElementsByTagName("a");
    var con_5 = document.getElementById("tabcon_5").getElementsByTagName("div");
    //var more_1 = document.getElementById("tabmore_1").getElementsByTagName("a");
    for(var i=0;i<oLi_5.length;i++){  //循环历遍onclick事件
        oLi_5[i].index=i; //oLi[0].index=0 index是自2义属性
        oLi_5[i].onmouseover=function(){
            for(var i=0;i<oLi_5.length;i++){  //循环历遍去掉button样式和把div隐藏
                oLi_5[i].className='';
                con_5[i].style.display='none';
                //more_1[i].style.display='none';
            }
            this.className='current';  //当前按钮添加样式
            con_5[this.index].style.display='block';  //div显示 this.index是当前div 即div[0]之类的
            //more_1[this.index].style.display='block';
        }
    } 
    var oLi_4 = document.getElementById("tabtitle_4").getElementsByTagName("a");
    var con_4 = document.getElementById("tabcon_4").getElementsByTagName("div");
    //var more_1 = document.getElementById("tabmore_1").getElementsByTagName("a");
    for(var i=0;i<oLi_4.length;i++){  //循环历遍onclick事件
        oLi_4[i].index=i; //oLi[0].index=0 index是自2义属性
        oLi_4[i].onmouseover=function(){
            for(var i=0;i<oLi_4.length;i++){  //循环历遍去掉button样式和把div隐藏
                oLi_4[i].className='';
                con_4[i].style.display='none';
                //more_1[i].style.display='none';
            }
            this.className='current';  //当前按钮添加样式
            con_4[this.index].style.display='block';  //div显示 this.index是当前div 即div[0]之类的
            //more_1[this.index].style.display='block';
        }
    } 


}

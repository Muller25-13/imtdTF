// 页面加载完成之后执行window
window.onload=function(){
    search();
};
function search(){
    var searchBox=document.querySelector('.hm_header_box');
    var bannerBox=document.querySelector('.hm_banner');
    var h=bannerBox.offsetHeight;


    //监听window的滚动事件
    window.onscroll=function(){
        var top=document.body.scrollTop;
        var opacity=0;
        if(top<h){
            opacity=top/h*0.85
        }
        else{
            opacity=0.85
        }
        searchBox.style.background="rgba(201,21,35,"+opacity+")";

        
    }
}
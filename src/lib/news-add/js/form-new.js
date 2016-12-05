$(function(){
    //HTML CSS JS代码块切换
    $(".caption").on("click",function(){
        var ind = $(this).index();
        alert(ind);
        $(this).closest(".box-news").find(".code>textarea").siblings().removeClass("activeText").eq(ind).addClass("activeText");
    })
    
})
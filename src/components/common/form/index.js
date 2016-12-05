//import form1 from './form.vue'
export default {
    props:['labhtml','labcss','labusage','colorstyle'],
//    components: {
//        form1
//    },
    data(){
        return {
        }
    },
    mounted(){
        //HTML CSS JS代码块切换
        $(".caption").unbind("click").on("click",function(){
            var ind = $(this).index();
            $(this).closest(".box-news").find(".code>textarea").siblings().removeClass("activeText").eq(ind).addClass("activeText");
        });
        $(".tools").unbind("click").on("click",function(){
            $(this).parent(".form-input").find(".portlet-body.code").toggle();
            if($(this).parent(".form-input").find(".portlet-body.code").css("display")=="block"){
                $(this).find("a").removeClass("expand").addClass("collapse").css({"background-position":"left"}).html("点击隐藏代码");
                $(this).parent(".form-input").find(".portlet.box>.portlet-title").css({
                    display:'block'
                });
            }else{
                $(this).find("a").removeClass("collapse").addClass("expand").html('').css({
                    "background-position":"center"
                });
                $(this).parent(".form-input").find(".portlet.box>.portlet-title").css({
                    display:'none'
                });
            }

        })
        
//        this.html = HTMLFormat($('.form1').html());
//        console.log(this.colorstyle);
//        $(".box-news").addClass(this.colorstyle)
    }
    
}
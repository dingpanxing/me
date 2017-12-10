
function controladd(){
    $(".title_page").append(tepmt);
    $(".foot_add").append(footerpage);
    $(".slider_add").append(slider_tool);
    $("#sliderbar li").on("mouseover",function(){
        var self=this;
        // $(this).css("background","none")
        $(this).find("span>span").show();
        $(this).find("span>div").removeClass("hidden");
    })
    $("#sliderbar li").on("mouseout",function(){
        var self=this;
        // $(this).css("background","none")
        $(this).find("span>span").hide();
        $(this).find("span>div").addClass("hidden");
    })
    $(".sub-nav").on("mouseover",function(){
        var self=this;
        $(this).find("ul").show();
    })
    $(".sub-nav").on("mouseout",function(){
        var self=this;
        $(this).find("ul").hide();
    })
    $(document).ready(function() {
        //首先将#back-to-top隐藏
        $("#back-to-top").hide();
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        $(function() {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 100) {
                    $("#back-to-top").fadeIn(150);
                } else {
                    $("#back-to-top").fadeOut(150);
                }
            });
            //当点击跳转链接后，回到页面顶部位置
            $("#back-to-top").click(function() {
                $('body,html').animate({
                        scrollTop: 0
                    },
                    1000);
                return false;
            });
        });
    });
}


function text(){
    $(".help_Btn li").on("click",function(){
        var self=this;
        var val=$(this).attr("value");
        $(this).addClass("actiongnow");
        $(this).siblings("li").removeClass("actiongnow");
        $("#"+val).removeClass("hidden").siblings().addClass("hidden")
    })

}


function text(){
    $(".text_de").text(textarry[0]);
    $(".help_Btn li").on("click",function(){
        var self=this;
        var val=$(this).val()-0;
        $(this).addClass("actiongnow");
        $(this).siblings("li").removeClass("actiongnow");
        $(".text_de").text(textarry[val]);
    })

}

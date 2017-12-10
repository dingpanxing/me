function addsearch(){
 $("#navbar li a").click(function(){
    $("#result_search li").text($(this).text());
 })
}
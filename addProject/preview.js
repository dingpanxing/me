
function appendcity() {
    var prov=citylist.citylist;
    for(var i=0;i<prov.length;i++){
        var templt="<option value="+i+">"+prov[i].p+"</option>";
        $("#prov").append(templt);
        console.log(templt)
    }
    for(var j=0;j<prov[0].c.length;j++){
        var templt1="<option>"+prov[0].c[j].n+"</option>";
        $("#city").append(templt1);
    }
    $("#prov").change(function(){
        var checkval=$(this).val();
        var city=prov[checkval].c;
        $("#RegionClassListregion_id_0_city").val(prov[checkval].p);
        $("#RegionClassListregion_id_0_pe").val("请选择");
        $("#city").empty();
        for(var i=0;i<city.length;i++){
            var templt="<option val="+i+">"+city[i].n+"</option>";
            $("#city").append(templt);
        }
    })
    $("#city").change(function(){
        var checkval=$(this).val();
        $("#RegionClassListregion_id_0_pe").val(checkval);
    })
    $("#clos b").click(function () {
       $(".model_box").css("display","none")
    })
    $("#btn_div button").click(function(){
        var val=$(this).val(),
            model_data=model_dato;
        $(".model_box").css("display","block")
        $(".model_read").text(model_data[val]);
    })
    $(".ser_btn").click(function () {
        var textv=$(".model_read").text();
        $(".model_box").css("display","none")
        $(".input_box").text(textv);
    })
    $(".pro_type input").click(function(){
        var val=$(this).val();
        $(this).parent().addClass("actived");
        $(this).parent().siblings().removeClass("actived")
        if(val!="1"&&val!="2"){
            $(".pro_need").css("display","none");
            $(".profress").css("display","none");
        }else{
            $(".pro_need").css("display","block");
            $(".profress").css("display","block");
        }
    });
    $(".publish-form input").on("mousemove",function () {
        $(this).addClass("colorinput");
    })
    $(".publish-form input").on("mouseout",function () {
        $(this).removeClass("colorinput");
    })
    $(".pro_type input").on("mousemove",function () {
        $(this).parent().addClass("hovero");
    })
    $(".pro_type input").on("mouseout",function () {
        $(this).parent().removeClass("hovero");
    })
    $("#second_step").click(function () {
        $("#prew1").addClass("hidden");
        $("#prew2").removeClass("hidden");
        $(".prew1_title").addClass("hidden")
    })
    $(".pre-btn").click(function () {
        $("#prew2").addClass("hidden");
        $("#prew1").removeClass("hidden");
        $(".prew1_title").removeClass("hidden")
    })
}
function prewdate() {
    $(".updateBtn").click(function () {
        debugger;
        var typeval=$("#prew1 .pro_type input[type='radio']:checked ").val();
        var typeval2=$("#prew2 .pro_type  input[type='radio']");
        for(var i=0;i<typeval2.length;i++){
            if($(typeval2[i]).val()==typeval){
                $(this).attr("checked","true")
            }

        }


    })
}
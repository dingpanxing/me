
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
        $("#city").empty();
        for(var i=0;i<city.length;i++){
            var templt="<option val="+i+">"+city[i].n+"</option>";
            $("#city").append(templt);
        }
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
        if(val!="1"&&val!="2"){
            $(".pro_need").css("display","none");
            $(".profress").css("display","none");
        }else{
            $(".pro_need").css("display","block");
            $(".profress").css("display","block");
        }
    });
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
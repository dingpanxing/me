function controladd() {
    $(".title_page").append(tepmt);
    $(".foot_add").append(footerpage);
    $(".slider_add").append(slider_tool);
    $(".log img").attr("src", "../image/logo.jpg");
    $("#sliderbar li").on("mouseover", function() {
        var self = this;
        // $(this).css("background","none")
        $(this).find("span>span").show();
        $(this).find("span>div").removeClass("hidden");
    })
    $("#sliderbar li").on("mouseout", function() {
        var self = this;
        // $(this).css("background","none")
        $(this).find("span>span").hide();
        $(this).find("span>div").addClass("hidden");
    })
    $(".sub-nav").on("mouseover", function() {
        var self = this;
        $(this).find("ul").show();
    })
    $(".sub-nav").on("mouseout", function() {
        var self = this;
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

function controladd1() {
    $(".title_page").append(tepmt1);
    $(".foot_add").append(footerpage);
    $(".slider_add").append(slider_tool);
    $("#sliderbar li").on("mouseover", function() {
        var self = this;
        // $(this).css("background","none")
        $(this).find("span>span").show();
        $(this).find("span>div").removeClass("hidden");
    })
    $("#sliderbar li").on("mouseout", function() {
        var self = this;
        // $(this).css("background","none")
        $(this).find("span>span").hide();
        $(this).find("span>div").addClass("hidden");
    })
    $(".sub-nav").on("mouseover", function() {
        var self = this;
        $(this).find("ul").show();
    })
    $(".sub-nav").on("mouseout", function() {
        var self = this;
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
// $(".exper-bot h4 span")


function changeShow1() {
    var exTab = document.getElementsByClassName("exTab");
    var exTab1 = document.getElementsByClassName("exTab1");
    console.log($(".exper-bot1 ul"));
    exTab1[0].style.display = 'block';
    exTab[0].style.borderWidth = '1px';
    exTab[0].style.borderColor = '#ccc';
    exTab[0].style.borderStyle = 'solid';
    exTab[0].style.borderBottomStyle = 'none';
    exTab[0].style.backgroundColor = '#fe4e00';
    exTab[1].style.backgroundColor = '#f5f5f5';
    exTab[1].style.color = '#000';
    exTab[0].style.color = '#fff';
    exTab1[1].style.display = 'none';
}

function changeShow2() {
    var exTab = document.getElementsByClassName("exTab");
    var exTab1 = document.getElementsByClassName("exTab1");
    console.log($(".exper-bot1 ul"));
    exTab1[0].style.display = 'none';
    exTab1[1].style.display = 'block';
    exTab[1].style.backgroundColor = '#fe4e00';
    exTab[1].style.borderBottomStyle = 'none';
    exTab[0].style.color = '#000';
    exTab[1].style.color = '#fff';
    exTab[0].style.backgroundColor = '#f5f5f5';
}
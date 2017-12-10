$(function($) {
    //弹出登录
    $(".example").hover(function() {
        $(this).stop().animate({
            opacity: '1'
        }, 600);
    }, function() {
        $(this).stop().animate({
            opacity: '0.6'
        }, 1000);
    }).on('click', function() {
        $("body").append("<div id='mask'></div>");
        $("#mask").addClass("mask").fadeIn("slow");
        $("#LoginBox").fadeIn("slow");
    });
    //
    //按钮的透明度
    $("#loginbtn").hover(function() {
        $(this).stop().animate({
            opacity: '1'
        }, 600);
    }, function() {
        $(this).stop().animate({
            opacity: '0.8'
        }, 1000);
    });
    //文本框不允许为空---按钮触发
    $("#loginbtn").on('click', function() {
        var txtName = $("#txtName").val();
        var txtPwd = $("#txtPwd").val();
        if (txtName == "" || txtName == undefined || txtName == null) {
            if (txtPwd == "" || txtPwd == undefined || txtPwd == null) {
                $(".warning").css({
                    display: 'block'
                });
            } else {
                $("#warn").css({
                    display: 'block'
                });
                $("#warn2").css({
                    display: 'none'
                });
            }
        } else {
            if (txtPwd == "" || txtPwd == undefined || txtPwd == null) {
                $("#warn").css({
                    display: 'none'
                });
                $(".warn2").css({
                    display: 'block'
                });
            } else {
                $(".warning").css({
                    display: 'none'
                });
            }
        }
    });
    //文本框不允许为空---单个文本触发
    $("#txtName").on('blur', function() {
        var txtName = $("#txtName").val();
        if (txtName == "" || txtName == undefined || txtName == null) {
            $("#warn").css({
                display: 'block'
            });
        } else {
            $("#warn").css({
                display: 'none'
            });
        }
    });
    $("#txtName").on('focus', function() {
        $("#warn").css({
            display: 'none'
        });
    });
    //
    $("#txtPwd").on('blur', function() {
        var txtName = $("#txtPwd").val();
        if (txtName == "" || txtName == undefined || txtName == null) {
            $("#warn2").css({
                display: 'block'
            });
        } else {
            $("#warn2").css({
                display: 'none'
            });
        }
    });
    $("#txtPwd").on('focus', function() {
        $("#warn2").css({
            display: 'none'
        });
    });
    //关闭
    $(".close_btn").hover(function() {
        $(this).css({
            color: 'black'
        })
    }, function() {
        $(this).css({
            color: '#999'
        })
    }).on('click', function() {
        $("#LoginBox").fadeOut("fast");
        $("#mask").css({
            display: 'none'
        });
    });


    //弹出注册
    $(".example1").hover(function() {
        $(this).stop().animate({
            opacity: '1'
        }, 600);
    }, function() {
        $(this).stop().animate({
            opacity: '0.6'
        }, 1000);
    }).on('click', function() {
        $("body").append("<div id='mask1'></div>");
        $("#mask1").addClass("mask").fadeIn("slow");
        $("#LoginBox1").fadeIn("slow");
    });
    //
    //按钮的透明度
    $("#loginbtn1").hover(function() {
        $(this).stop().animate({
            opacity: '1'
        }, 600);
    }, function() {
        $(this).stop().animate({
            opacity: '0.8'
        }, 1000);
    });
    //文本框不允许为空---按钮触发
    // txtName1
    $("#loginbtn1").on('click', function() {
        var txtName1 = $("#txtName1").val();
        var txtPwd1 = $("#txtPwd1").val();
        if (txtName1 == "" || txtName1 == undefined || txtName1 == null) {
            if (txtPwd1 == "" || txtPwd1 == undefined || txtPwd1 == null) {
                $(".warning").css({
                    display: 'block'
                });
            } else {
                $("#warn1").css({
                    display: 'block',

                });
                $("#warn21").css({
                    display: 'none'
                });
            }
        } else {
            if (txtPwd1 == "" || txtPwd1 == undefined || txtPwd1 == null) {
                $("#warn1").css({
                    display: 'none'
                });
                $(".warn2").css({
                    display: 'block'
                });
            } else {
                $(".warning").css({
                    display: 'none'
                });
            }
        }
    });
    //文本框不允许为空---单个文本触发
    $("#txtName1").on('blur', function() {
        var txtName1 = $("#txtName1").val();
        if (txtName1 == "" || txtName1 == undefined || txtName1 == null) {
            $("#warn1").css({
                display: 'block'
            });
        } else {
            $("#warn1").css({
                display: 'none'
            });
        }
    });
    $("#txtName1").focus(function() {
        $("#txtName1").css({
            border: 'none',
            outline: 'none'
        });
    })
    $("#txtName2").focus(function() {
        $("#txtName2").css({
            border: 'none',
            outline: 'none'
        });
    })
    $("#txtName").focus(function() {
        $("#txtName").css({
            border: 'none',
            outline: 'none'
        });
    })
    $("#txtPwd").focus(function() {
        $("#txtPwd").css({
            border: 'none',
            outline: 'none'
        });
    })
    $("#txtPwd12").focus(function() {
        $("#txtPwd12").css({
            border: 'none',
            outline: 'none'
        });
    })
    $("#txtPwd1").focus(function() {
        $("#txtPwd1").css({
            border: 'none',
            outline: 'none'
        });
    })
    $("#txtName1").on('focus', function() {

        $("#warn1").css({
            display: 'none'
        });
    });
    $("#txtName1").on('focus', function() {

        $("#warn1").css({
            display: 'none'
        });
    });
    $("#txtName1").on('focus', function() {

        $("#warn1").css({
            display: 'none'
        });
    });
    //
    $("#txtPwd1").on('blur', function() {
        var txtName1 = $("#txtPwd1").val();
        if (txtName1 == "" || txtName1 == undefined || txtName1 == null) {
            $("#warn21").css({
                display: 'block'
            });
        } else {
            $("#warn21").css({
                display: 'none'
            });
        }
    });



    $("#txtPwd12").on('blur', function() {
        var txtName12 = $("#txtPwd12").val();
        if (txtName12 == "" || txtName12 == undefined || txtName12 == null) {
            $("#warn212").css({
                display: 'block'
            });
        } else {
            $("#warn212").css({
                display: 'none'
            });
        }
    });


    $("#txtName2").on('blur', function() {
        var txtName121 = $("#txtName2").val();
        if (txtName121 == "" || txtName121 == undefined || txtName121 == null) {
            $("#warn12").css({
                display: 'block'
            });
        } else {
            $("#warn12").css({
                display: 'none'
            });
        }
    });
    $("#txtPwd1").on('focus', function() {
        $("#warn21").css({
            display: 'none'
        });
    });
    //关闭
    $(".close_btn").hover(function() {
        $(this).css({
            color: 'black'
        })
    }, function() {
        $(this).css({
            color: '#999'
        })
    }).on('click', function() {
        $("#LoginBox1").fadeOut("fast");
        $("#mask1").css({
            display: 'none'
        });
    });
});
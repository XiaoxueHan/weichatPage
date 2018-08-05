


$(function(){


    $("#title").load("../html/微信标题.html")
    $("#content").load("../html/微信内容.html")
    $("#menu").load("../html/微信菜单.html")


    //切换
    $(".menu_box").click(function() {

        $("#title").load($(this).data("title"))
        $("#content").load($(this).data("page"))
        $("#menu").load($(this).data("menu"))
    })


})
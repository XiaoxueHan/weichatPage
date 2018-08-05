


$(function(){

    //切换
    $(".menu_box").click(function() {

        $("#title").load($(this).data("title"))
        $("#content").load($(this).data("page"))
        $("#menu").load($(this).data("menu"))
    })


})
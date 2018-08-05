
$(function(){

    //切换
    $("#go_detail").click(function() {

        $("#title").load($(this).data("title"))
        $("#content").load($(this).data("page"))
        $("#menu").hide()
    })


})
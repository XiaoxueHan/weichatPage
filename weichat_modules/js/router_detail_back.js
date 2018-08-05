
$(function(){

    //切换
    $("#title_left").click(function() {

        $("#title").load($(this).data("title"))
        $("#content").load($(this).data("page"))
        $("#friends").load($(this).data("img"))
        $("#menu").show()
    })


})
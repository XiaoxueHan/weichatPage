


$(function(){

    //切换
    $("#py").click(function() {

        $("#title").load($(this).data("title"))
        $("#content").load($(this).data("page"))
        $("#friends").load($(this).data("img"))
        $("#menu").hide()
        $("#content").css({"backgroundColor":"whitesmoke"})
    })


})
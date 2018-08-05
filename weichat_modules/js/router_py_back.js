
$(function(){

    //切换
    $("#title_left").click(function() {

        $("#title").load($(this).data("title"))
        $("#content").load($(this).data("page"))
        $("#content").css({"backgroundColor":"#DCD9D8"})
        $("#friends").load($(this).data("friends"))
        $("#menu").load($(this).data("menu"))
        $("#menu").show()
    })


})
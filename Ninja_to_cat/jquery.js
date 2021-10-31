$(document).ready(function(){
    $("img",this).on("click",function(){
        // console.log(this)
        // console.log($(this).attr("src"))
        var source = $(this).attr("src")
        var alt_source = $(this).attr("second_src")
        // console.log(source)
        // console.log(alt_source)
        $(this).attr("src",alt_source)
        $(this).attr("second_src", source)
    })
})
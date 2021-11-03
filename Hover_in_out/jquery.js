$(document).ready( function(){
    $(".image", this).on("mouseenter", function(){
        var current = $(this).attr("src");
        var altsrc = $(this).attr("altsrc")
        $(this).attr("src",altsrc) 
        $(this).attr("altsrc",current)
    })
    $(".image", this).on("mouseleave", function(){
        var current = $(this).attr("src")
        var altsrc = $(this).attr("altsrc")
        $(this).attr("src",altsrc) 
        $(this).attr("altsrc",current)
    })
})
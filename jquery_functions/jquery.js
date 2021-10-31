$(document).ready(function(){
    $("button.addClass").on("click", function(){
        $("p.addClass").addClass("red");
    })
    $("button.slideToggle").on("click", function(){
        $("div.addClass, p.slideToggle").slideToggle("slow")
    })
    $("button.hide").on('click', function() {
        $("div.hide").hide();
    })
    $("button.show").on("click", function() {
        $("div.hide").show();
    })
    $("button.toggle").on("click", function () {
        $("div.toggle").toggle()
    })
    $("button.slideup").on("click",function() {
        $("div.slide").slideUp("slow")
    })
    $("button.slidedown").on("click",function() {
        $("div.slide").slideDown("slow")
    })
    $("button.fadeOut").on("click",function() {
        $("div.fade").fadeOut()
    })
    $("button.fadeIn").on("click",function() {
        $("div.fade").fadeIn()
    })
    $("button.before").on("click",function(){
        $("p.before").before("<b>HELLO WORLD</b>")
    })
    $("button.after").on("click",function(){
        $("p.before").after("<b>HELLO WORLD</b>")
    })
    $("button.prepend").on("click",function() {
        $("p.pend").prepend("<b>Hola Mundo</b>")
    })
    $("button.append").on("click",function() {
        $("p.pend").append("<b>Hola Mundo</b>")
    })
    $("button.getHTML").on("click",function() {
        var value = $("p.HTML").html();
        console.log(value)
    })
    $("button.changeHTML").on("click", function(){
        $("p.HTML").html("<p>NOW I HAVE COMMENDEERED THIS HTML! MUAHAHAHA</p>")
    })
    $("button.getText").on("click",function() {
        var value = $("p.text").text();
        console.log(value)
    })
    $("button.changeText").on("click", function(){
        $("p.text").text("<p>NOW I HAVE COMMENDEERED THIS HTML! MUAHAHAHA</p>")
    })
    $('button.getAttr').on("click", function(){
        var value = $("p.attr").attr("style")
        console.log(value)
    })
    $('button.setAttr').on("click",function(){
        $('p.attr').attr("style","color:red;")
    })
    $("button.getVal").on("click",function(){
        var value = $("input.valInput").val()
        console.log(value)
    })
    $('button.setVal').on('click', function() {
        $('input.valInput').val("Hello World")
    })
    $('input.valInput').on('blur', function() {
        $('input.valInput').val("The Robot-Overlords Controls Your Fate Puny Human")
    })
    $('button.dp').on('mouseenter',function() {
        $('button.dp').text("no really, don't do it")
    })
    $('button.dp').on('mouseleave',function() {
        $('button.dp').text("Phew.... good call")
    })
    $('button.dp').on('click',function() {
        $(document.body).html("<h1>Now you done did it... It's broked</h1>")
    })
})
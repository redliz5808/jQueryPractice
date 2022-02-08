$(document).ready(function(){
    //$("h1").hide();
    $("#heading1").css("color", "orange");
    $(".para2").css("background-color", "lightgreen");
    $("p span").addClass("callout");
    $("h1").removeClass("heading2");

    $("li:first").css("color", "red");
    $("li:last").css("color", "blue");
    $("li:odd").css("background-color", "lightgrey");
    $("li:even").css("background-color", "grey");
    $("li:nth-child(3)").css("color","white");

    $(":text").hide();
    $("[href]").css("text-decoration", "none");
    $("a[href='http://www.google.com']").css("color", "green");
    $("*").css("font-size", "36px");
});
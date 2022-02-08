$(document).ready(function () {
    $(".para1").css({ color: "red", backgroundColor: "#ccc" });

    $("#btn1").click(() => {
        $(".para2").toggleClass("callout");
    });
    $("#btn2").click(() => {
        $(".para3").addClass("purple");
    });
    $("#btn3").click(() => {
        $(".para3").removeClass("purple");
    });

    $("#div1").text("This is div 1.");
    $("#div2").html("<h1>This is div 2.</h1>");
    console.log($("#div2").text());

    $("#list").append("<li>Appended List Item</li>");
    $("#list").prepend("<li>Prepended List Item</li>");
    $("<span id='span1'>This is a new span being appended to Paragraph 1. </span>").appendTo(".para1");
    $("<span id='span2'>This is a new span being prepended to Paragraph 2. </span>").prependTo(".para2");
    $("#list").before("<h4>List Heading (inserted using 'before')</h4>");
    $("#list").after("<h4>List Closing (inserted using 'after')</h4>");

    $("#empty").empty();
    $("#detach").detach();

    $("a").attr("target", "_blank");
    console.log($("a").attr("href"));
    $("#yahoo").removeAttr("aria-label");

    $("ul").wrap("<div>");
    $("a").wrapAll("<div id='links'>");

    $("#newItem").keyup((e) => {
        e.preventDefault();
        if (e.key === "Enter") {
            $("ul").append(`<li>${e.target.value}</li>`);
        }
    });

    const names = ["Beth", "Joe", "Savannah", "Lily", "Gus"];
    $.each(names, (i, name) => {
        $("#names").append(`<li>${name}</li>`);
    });

    let listItems = $("#list li").toArray();
    console.log(listItems);
});

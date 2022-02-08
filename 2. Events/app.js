$(document).ready(function () {
    $("#btn1").click(() => {
        $(".para1").hide();
    });

    $("#btn2").click(() => {
        $(".para1").show();
    });

    $("#btn3").click(() => {
        $(".para1").toggle();
    });

    $("#btn4").dblclick(() => {
        $(".para1").css("color", "green");
    });

    $(".para1").hover(() => {
        $(".para1").toggle();
    });
    /* The code from lines 18-20 is equal to the following:
        $(".para1").on("mouseenter", () => {
            $(".para1").toggle();
        });
        $(".para1").on("mouseleave", () => {
            $(".para1").toggle();
        });
       !!!---It is not the same as the CSS selector :hover.---!!!
    */

    $(".heading3").on("mousedown", () => {
        $(".para2").toggle();
    });
    $(".heading3").on("mouseup", () => {
        $(".para2").toggle();
    });

    $("#btn5").click((e) => {
        console.log(e.target);
    });

    $(document).on("mousemove", (e) => {
        $("#coords").html(`X: ${e.clientX} Y: ${e.clientY}`);
    });

    $("input").focus(function () {
        $(this).css("background-color", "#ccc");
    });

    $("input").blur(function () {
        $(this).css("background-color", "inherit");
    });

    let name = null;
    let email = null;
    let gender = null;

    $("#name").keyup((e) => {
        console.log(e.target.value);
    });

    $("#gender").change((e) => {
        console.log(e.target.value);
    });

    $("#form").submit((e) => {
        e.preventDefault();
        name = e.currentTarget[0].value;
        email = e.currentTarget[1].value;
        gender = e.currentTarget[2].value;
        $("#submittedForm").show();
        $("#nameField").html(`<strong>Name you entered:</strong> ${name}`);
        $("#emailField").html(`<strong>Email you entered:</strong> ${email}`);
        $("#genderField").html(`<strong>Gender you entered:</strong> ${gender}`);
    })
});

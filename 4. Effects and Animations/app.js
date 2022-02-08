$(document).ready(function () {
    // --- FADING THINGS --- //
    $("#compareFadeOut").click(() => {
        $("#box1").fadeOut();
        $("#box2").fadeOut("fast");
        $("#box3").fadeOut(200);
        $("#box4").fadeOut(200, () => {
            $("#btnFadeOutMsDisable").attr("disabled", true);
            $("#btnFadeOutMsDisable").text("Button is now disabled");
            $("#btnFadeInMsDisable").attr("disabled", false);
            $("#btnFadeInMsDisable").text("Fade In Slow in MS*");
        });
    });
    $("#btnFadeOut").click(() => {
        $("#box1").fadeOut();
    });
    $("#btnFadeOutFast").click(() => {
        $("#box2").fadeOut("fast");
    });
    $("#btnFadeOutFastMs").click(() => {
        $("#box3").fadeOut(200);
    });
    $("#btnFadeOutMsDisable").click(() => {
        $("#box4").fadeOut(200, () => {
            $("#btnFadeOutMsDisable").attr("disabled", true);
            $("#btnFadeOutMsDisable").text("Button is now disabled");
            $("#btnFadeInMsDisable").attr("disabled", false);
            $("#btnFadeInMsDisable").text("Fade In Slow in MS*");
        });
    });

    $("#btnFadeIn").click(() => {
        $("#box1").fadeIn();
    });
    $("#btnFadeInSlow").click(() => {
        $("#box2").fadeIn("slow");
    });
    $("#btnFadeInSlowMs").click(() => {
        $("#box3").fadeIn(2000);
    });
    $("#btnFadeInMsDisable").click(() => {
        $("#box4").fadeIn(2000, () => {
            $("#btnFadeInMsDisable").attr("disabled", true);
            $("#btnFadeInMsDisable").text("Button is now disabled");
            $("#btnFadeOutMsDisable").attr("disabled", false);
            $("#btnFadeOutMsDisable").text("Fade Out Fast in MS*");
        });
    });
    $("#compareFadeIn").click(() => {
        $("#box1").fadeIn();
        $("#box2").fadeIn("slow");
        $("#box3").fadeIn(2000);
        $("#box4").fadeIn(2000, () => {
            $("#btnFadeInMsDisable").attr("disabled", true);
            $("#btnFadeInMsDisable").text("Button is now disabled");
            $("#btnFadeOutMsDisable").attr("disabled", false);
            $("#btnFadeOutMsDisable").text("Fade Out Fast in MS*");
        });
    });

    $("#btnFadeTog").click(() => {
        $("#box5").fadeToggle();
    });

    // --- SLIDING THINGS --- //
    $("#btnSlideDown").click(() => {
        $("#box6").slideDown(2000);
    });

    $("#btnSlideUp").click(() => {
        $("#box6").slideUp(2000);
    });

    $("#btnSlideTog").click(() => {
        $("#box6").slideToggle(5000);
    });

    $("#btnStop").click(() => {
        $("#box6").stop();
    });

    // --- MOVING THINGS --- //
    $("#btnMoveLeft").click(() => {
        $("#box7").animate({
            left: -500
        });
    })

    $("#btnMoveCenter").click(() => {
        $("#box7").animate({
            left: 0
        });
    })
    
    $("#btnMoveRight").click(() => {
        $("#box7").animate({
            left: 500
        });
    });

    $("#btnMoveAround").click(() => {
        let box = $("#box7");
        box.css("background-color", "green")
        box.animate({
            zIndex: 10,
            left: 200,
            opacity: 0.85
        })
        box.animate({
            top: 200,
            opacity: 0.70
        })
        box.animate({
            zIndex: 1,
            left: 0,
            opacity: 0.70
        })
        box.animate({
            left: -200,
            opacity: 0.55
        })
        box.animate({
            top: 0,
            opacity: 0.85
        })
        box.animate({
            zIndex: 1,
            left: 0,
            opacity: 1
        })
    });

    $("#btnResetMove").click(() => {
        $("#box7").css("background-color", "#333")
        $("#box7").animate({
            left: 0
        })
    })

    $("#btnLeftGrow").click(() => {
        $("#box8").animate({
            left: -500,
            height: 120,
            width: 300
        });
    });

    $("#btnLeftShrink").click(() => {
        $("#box8").animate({
            left: -250,
            height: 60,
            width: 175
        });
    });

    $("#btnReset").click(() => {
        $("#box8").animate({
            left: 0,
            width: "225px",
            height: "90px",
            opacity: 1,
            fontSize: "1.5em"
        });
    })

    $("#btnRightFade").click(() => {
        $("#box8").animate({
            left: 250,
            opacity: 0.5
        });
    });

    $("#btnRightGrowFont").click(() => {
        $("#box8").animate({
            left: 500,
            fontSize: "2.5rem"
        });
    });



});

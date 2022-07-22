let aba = true;
let scroll = true;
let checking = true;


$("h2").animate({
    opacity: "1"
}, 500);

setTimeout(function () {
    $("main").animate({
        opacity: "1"
    }, 500);
}, 500);


setTimeout(function () {
    $("#aba").animate({
        opacity: "1"
    }, 500);
}, 1000);


//Animação ABA
$(document).on("click", "#aba", function () {
    aba = false;
    if ($("#aba img").is("#menuIcon")) {

        $("#aba").css("background-color", "#185B12");

        $("#fill").css("display", "block");

        $("#menu").animate({
            left: 0
        }, 800);

        $("#fill").animate({
            opacity: "90%"
        }, 800);

        setTimeout(function () {

            $("#aba img").attr("src", "img/close.png");
            $("#aba img").attr("id", "closeIcon");

            $("#aba img").animate({
                opacity: "100"
            }, 300);
            $("#aba").animate({
                backgroundColor: "#FFFAF2"

            }, 300);

            aba = true;

        }, 800);

    } else {

        $("#aba").css("background-color", "#185B12");

        $("#menu").animate({
            left: -$("#menu").width() - 2 + "px"
        }, 800);

        $("#fill").animate({
            opacity: "0%"
        }, 800);

        setTimeout(function () {

            $("#aba img").attr("src", "img/Menu.png");
            $("#aba img").attr("id", "menuIcon");

            $("#aba img").animate({
                opacity: "100"
            }, 300);

            $("#fill").css("display", "none");

            $("#aba").animate({
                backgroundColor: "#FFFAF2"

            }, 300);

            aba = true;
        }, 800);
    };


});

$(document).on("click", "#fill", function () {

    $("#menu").animate({
        left: "-502px"
    }, 800);

    $("#fill").animate({
        opacity: "0%"
    }, 800);

    setTimeout(function () {

        $("#aba img").attr("src", "img/Menu.png");
        $("#aba img").attr("id", "menuIcon");

        $("#aba img").animate({
            opacity: "100"
        }, 300);

        $("#fill").css("display", "none");

        aba = true;
    }, 800);
});

$(document).on("mouseleave", "#aba", function () {
    if (aba == true) {
        $("#aba").css("background-color", "#FFFAF2");

        if ($("#aba img").is("#menuIcon")) {
            $("#aba img").attr("src", "img/menu.png");
        } else {
            $("#aba img").attr("src", "img/close.png");

        }
    }

});
$(document).on("mouseenter", "#aba", function () {
    if (aba == true) {
        $("#aba").css("background-color", "#185B12");
        if ($("#aba img").is("#menuIcon")) {
            $("#aba img").attr("src", "img/menuClicked.png");
        } else {
            $("#aba img").attr("src", "img/closeClicked.png");

        }
    }
});


$("#home").click(function () {
    CloseAnimation();

    setTimeout(function () {
        location.href = "/";
    }, 1000);


});

$("#anathema").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/anathema.html";
    }, 1000);
});

$("#uparte").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/uparte.html";
    }, 1000);
});

$("#afeicoate").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/afeicoate.html";
    }, 1000);
});

$("#skyTales").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/skytales.html";
    }, 1000);
});

$("#mintInsight").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/mintinsight.html";
    }, 1000);
});

$("#ggwp").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/ggwp.html";
    }, 1000);
});

$("#desenhame").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/desenhameumpoema.html";
    }, 1000);
});

$("#about").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/about.html";
    }, 1000);
});

$("h1").click(function () {
    CloseAnimation();
    setTimeout(function () {
        location.href = "/";
    }, 1000);
});



$(document).on("mouseleave", ".tl", function () {
    if (checking === true) {
        $(this).attr("src", "img/Timeline.png");
    }
});

$(document).on("mouseenter", ".tl", function () {
    if (checking === true) {
        $(this).attr("src", "img/Timeline_Clicked.png");
    }
});

$(document).on("mouseenter", ".about", function () {
    if (checking === true) {
        $(this).attr("src", "img/About_Clicked.png");
    }
});

$(document).on("mouseleave", ".about", function () {
    if (checking === true) {
        $(this).attr("src", "img/About.png");
    }
});

$(document).on("click", ".tl", function () {
    ScrollBotom();
});

$(document).on("click", ".about", function () {
    ScrollTop();
});

function changeName() {
    if ($("#menu").width() <= 310) {

        $("h1").html("Matilde F.");

    } else {
        $("h1").html("Matilde Ferreira");

    }
}

changeName();

$(window).resize(function () {
    changeName();

    $("#menu").css("left", -$("#menu").width() - 2 + "px");

    $("#fill").css("display", "none").css("opacity", "0");
    $("#aba img").attr("src", "img/Menu.png");
    $("#aba img").attr("id", "menuIcon");

    aba = true;


});

$(document).on("mouseleave", ".next", function () {
    if (checking === true) {
        $(this).attr("src", "img/About.png");
    }
});

$(document).on("mouseenter", ".next", function () {
    if (checking === true) {
        $(this).attr("src", "img/About_Clicked.png");
    }

});

$(document).on("click", "h2",
    function () {

        if (scroll = true) {

            $("h2").css("pointer-events", "all");
            checking = false;
            $(".next").attr("src", "img/About_Clicked.png");

            $('html,body').animate({
                scrollTop: $("main").offset().top
            }, 1000, "linear");

            $(".next").css("pointer-events", "none");

            setTimeout(function () {
                $(".next").animate({
                    opacity: 0
                }, 600, "linear");

            }, 600);

            setTimeout(function () {

                $(".next").attr("src", "img/About.png");

                scroll = true;
            }, 1200);
        }

    });
$(document).on("click", ".next", function () {
    checking = false;
    $(".next").attr("src", "img/About_Clicked.png");

    $('html,body').animate({
        scrollTop: $("main").offset().top
    }, 1000, "linear");

    $(".next").css("pointer-events", "none");

    setTimeout(function () {
        $(".next").animate({
            opacity: 0
        }, 600, "linear");

    }, 600);

    setTimeout(function () {

        $(".next").attr("src", "img/About.png");

        scroll = true;
    }, 1200);
});

$(window).on('scroll', function () {

    if ($("#first").offset().top <= $(window).scrollTop() - $("header").height() && scroll === true) {

        checking = true;
        scroll = false;
        $("h2").css("pointer-events", "all");
        $(".next").animate({
            opacity: 1
        }, 400);

        $(".next").css("pointer-events", "all");


    } else if ($("#first").offset().top >= $(window).scrollTop() - $("header").height() && scroll === false) {
        checking = true;
        scroll = true;

        $(".next").animate({
            opacity: 0
        }, 400);

        $(".next").css("pointer-events", "none");
        $("h2").css("pointer-events", "none");

    };

});

function CloseAnimation() {

    $("#menu").animate({
        left: -$("#menu").width() - 2 + "px"
    }, 500);

    $("#fill").animate({
        opacity: 0
    }, 500);


    $("#aba img").attr("src", "img/Menu.png");

    $("#aba img").attr("id", "menuIcon");



    setTimeout(function () {

        $("main, h2").animate({
            opacity: "0"
        }, 500);
    }, 500);

}

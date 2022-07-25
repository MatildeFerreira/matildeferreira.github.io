function ScrollBotom() {
    $(".tl").removeClass("tl").addClass("about");
    checking = false;

    $("figcaption").html("");

    $("h2, figcaption").animate({
        opacity: 0
    }, 250);


    $(".about").attr("src", "img/Timeline_Clicked.png").css("pointer-events", "none");

    setTimeout(function () {
        $(".about").attr("src", "img/About.png").css("pointer-events", "all");
        checking = true;

        $("h2").html("Timeline");
        $("figcaption").html("About");
        $("h2, figcaption").animate({
            opacity: 1
        }, 250);

    }, 600);

    window.scrollTo({
        top: $(document).height(),
        behavior: "smooth"
    });

}

function ScrollTop() {
    $(".about").removeClass("about").addClass("tl");
    checking = false;

    $("figcaption").html("");

    $("h2, figcaption").animate({
        opacity: 0
    }, 250);


    $(".tl").attr("src", "img/About_Clicked.png").css("pointer-events", "none");

    setTimeout(function () {
        $(".tl").attr("src", "img/Timeline.png").css("pointer-events", "all");
        checking = true;

        $("h2").html("About");
        $("figcaption").html("Timeline");
        $("h2, figcaption").animate({
            opacity: 1
        }, 250);

    }, 600);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

$(window).on('scroll', function () {
    if ($(window).width() > 1025) {
       
        var scrollHeight = document.body.offsetHeight - window.innerHeight;
        var scrollPosition = $(window).scrollTop();
        
        var scrollMid = scrollHeight / 2;
        
         console.log(scrollPosition, scrollMid, scrollHeight)

        if (scrollMid < $(window).scrollTop()) {
            if ($("figcaption").html() === "Timeline") {

                $(".tl").removeClass("tl").addClass("about");
                checking = false;

                $("figcaption").html("");

                $("h2, figcaption, .about").animate({
                    opacity: 0
                }, 250);


                setTimeout(function () {
                    $(".about").attr("src", "img/About.png").css("pointer-events", "all");
                    checking = true;

                    $("h2").html("Timeline");
                    $("figcaption").html("About");
                    $("h2, figcaption, .about").animate({
                        opacity: 1
                    }, 250);

                }, 600);
            }

        } else if (scrollMid > $(window).scrollTop()) {
            if ($("figcaption").html() === "About") {
                $(".about").removeClass("about").addClass("tl");
                checking = false;

                $("figcaption").html("");

                $("h2, figcaption, .tl").animate({
                    opacity: 0
                }, 250);


                setTimeout(function () {
                    $(".tl").attr("src", "img/Timeline.png").css("pointer-events", "all");
                    checking = true;

                    $("h2").html("About");
                    $("figcaption").html("Timeline");
                    $("h2, figcaption, .tl").animate({
                        opacity: 1
                    }, 250);

                }, 600);


            }
        }
    }
});

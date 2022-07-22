$(document).ready(function(e) {   
let imgScroll = -$("#imagecontainer img").height();
let imgContainer = $("#imagecontainer").height();
let speed = $("#imagecontainer img").height() * 10;


function loop() {

    $('#imagecontainer img').animate({
        top: imgScroll + imgContainer + "px"

    }, speed, "linear", function () {

        imgScroll = -$("#imagecontainer img").height();
        imgContainer = $("#imagecontainer").height();
        speed = $("#imagecontainer img").height() * 10;

        $('#imagecontainer img').animate({
            top: '0%',
        }, speed, 'linear', function () {
            loop();
        });

    });
}


loop();

$(document).on("click", "#one", function () {
    $(".opened").addClass("notopened").removeClass("opened");
    $(".notopened img").attr('src', "img/circulo.png");
    $("#one").addClass("opened").removeClass("notopened");
    $(".opened img").attr('src', "img/circulo%20preenchido.png");
    $('iframe').attr('src', "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fgy6KKogoyOSmJM5S6naVjI%2FSky-Tales---Prototype%3Fpage-id%3D129%253A46130%26node-id%3D129%253A96626%26viewport%3D790%252C530%252C0.1%26scaling%3Dcontain%26starting-point-node-id%3D129%253A96626")

});

$(document).on("click", "#two", function () {
    $(".opened").addClass("notopened").removeClass("opened");
    $(".notopened img").attr('src', "img/circulo.png");
    $("#two").addClass("opened").removeClass("notopened");
    $(".opened img").attr('src', "img/circulo%20preenchido.png");
    $('iframe').attr('src', "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fgy6KKogoyOSmJM5S6naVjI%2FSky-Tales---Prototype%3Fpage-id%3D129%253A56863%26node-id%3D129%253A96667%26viewport%3D828%252C523%252C0.06%26scaling%3Dscale-down%26starting-point-node-id%3D129%253A96667")

});

$(document).on("click", "#three", function () {
    $(".opened").addClass("notopened").removeClass("opened");
    $(".notopened img").attr('src', "img/circulo.png");

    $("#three").addClass("opened").removeClass("notopened");

    $(".opened img").attr('src', "img/circulo%20preenchido.png");

    $('iframe').attr('src', "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fgy6KKogoyOSmJM5S6naVjI%2FSky-Tales---Prototype%3Fpage-id%3D129%253A77653%26node-id%3D129%253A96743%26viewport%3D867%252C523%252C0.12%26scaling%3Dscale-down%26starting-point-node-id%3D129%253A96743")

});

$(document).on("click", "#four", function () {

    $(".opened").addClass("notopened").removeClass("opened");
    $(".notopened img").attr('src', "img/circulo.png");
    $("#four").addClass("opened").removeClass("notopened");
    $(".opened img").attr('src', "img/circulo%20preenchido.png");
    $('iframe').attr('src', "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fgy6KKogoyOSmJM5S6naVjI%2FSky-Tales---Prototype%3Fpage-id%3D129%253A84123%26node-id%3D129%253A96797%26viewport%3D851%252C523%252C0.09%26scaling%3Dscale-down%26starting-point-node-id%3D129%253A96797")
});
    
     });

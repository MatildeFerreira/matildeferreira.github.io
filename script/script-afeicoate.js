$(window).on("load", function () {
    $('#imagecontainer img').css("top", "0");
    loop();
});

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

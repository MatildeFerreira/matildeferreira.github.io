$(window).on("load", function () {
    $('#imagecontainer img').css("left", "0");
    
    setTimeout(function () {
        loop();
    }, 1000);
});



let imgScroll = -$("#imagecontainer img").width();
let imgContainer = $("#imagecontainer").width();
let speed = $("#imagecontainer img").width() * 3;


function loop() {

    $('#imagecontainer img').animate({
        left: imgScroll + imgContainer + "px"

    }, speed, "linear", function () {

        imgScroll = -$("#imagecontainer img").width();
        imgContainer = $("#imagecontainer").width();
        speed = $("#imagecontainer img").width() * 3;

        $('#imagecontainer img').animate({
            left: '0',
        }, speed, 'linear', function () {
            loop();
        });

    });
}

 $(document).ready(function(e) { 
     
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
            left: '0%',
        }, speed, 'linear', function () {
            loop();
        });

    });
}


loop();

 });

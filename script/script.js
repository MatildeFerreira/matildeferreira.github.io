let checking = true;
// Home Page

changeName();

$(window).on('load', function () {

    setTimeout(function () {

        $("header").animate({
            width: "80%"
        }, 500);
    }, 500);

    setTimeout(function () {
        $("h1, #about").animate({
            opacity: "1"
        }, 500);
    }, 1000);

    setTimeout(function () {
        $("#works").animate({
            opacity: "1",
            marginLeft: "0%"
        }, 1000);

    }, 1500);

    setTimeout(function () {
        $("#menu, #next").animate({
            opacity: "1"
        }, 500);

    }, 1500);

    setTimeout(function () {
        $("footer").animate({
            opacity: "1",
            bottom: "5px"
        }, 500);

    }, 2000);
});

function AnimationsClose() {

    $("#About").animate({
        opacity: "0"
    }, 500);


    $("#works").animate({
        opacity: "0"
    }, 1000);

    $("#menu, #next, #previous").animate({
        opacity: "0%"
    }, 500);
}

$("#About").click(function () {
    $("#About").animate({
        color: "#FFFAF2",
        backgroundColor: "#185B12",
        textDecoration: "none"
    }, 250);

    setTimeout(function () {
        AnimationsClose();
    }, 400);

    setTimeout(function () {
        location.href = "/about.html";
    }, 1500);

});
//Variáveis

//Nr de clicks na seta next
var nrClick = 0;
let left;
//Offset dos trabalhos
var worksOffset;

//Margem do body
let marginBody = parseFloat($('main').css("marginRight").replace("px", ""))

//Margem entre os trabalhos
let worksMargin = parseFloat($('#anathema').css("marginRight").replace("px", ""));

//Posição do anathema 
let anathema = 0;

//Posição do skytales
let skytales = anathema - 2 * $("#anathema").width() - 2 * worksMargin;

//Posição da uparte
let uparte = skytales - 2 * $("#anathema").width() - 2 * worksMargin;

//Posição do desenha-me um poema
let desenhameumpoema = uparte - 2 * $("#anathema").width() - 2 * worksMargin;

let mintinsight = uparte + $("#anathema").width() + worksMargin;

//Atualizar variáveis quando a janela é redimensionada
$(window).resize(function () {
    changeName();

    marginBody = parseFloat($('main').css("marginRight").replace("px", ""))

    worksMargin = parseFloat($('#anathema').css("marginRight").replace("px", ""));

    nrClick = 0;

    anathema = 0;

    skytales = anathema - 2 * $("#anathema").width() - 2 * worksMargin;

    uparte = skytales - 2 * $("#anathema").width() - 2 * worksMargin;

    desenhameumpoema = uparte - 2 * $("#anathema").width() - 2 * worksMargin

    mintinsight = uparte + $("#anathema").width() + worksMargin;

    $("#works").offset({
        left: marginBody
    });

});

$("#next").mouseenter(function () {
    if (checking == true) {
        $(this).attr("src", "img/next_clicked.png");
    }
})

$("#next").mouseleave(function () {
    if (checking == true) {
        $(this).attr("src", "img/next.png");
    }
})

$("#previous").mouseenter(function () {

    if (checking == true) {
        $(this).attr("src", "img/Previous_Clicked.png");
    }
})

$("#previous").mouseleave(function () {
    if (checking == true) {
        $(this).attr("src", "img/Previous.png");
    }
});

//Revelar Seta
function ShowArrow(myArrow) {

    $(myArrow).css("pointer-events", "all").animate({
        "opacity": "1"
    }, 300);
};

//Esconder Seta
function HideArrow(myArrow) {

    $(myArrow).css("pointer-events", "none").animate({
        "opacity": "0"
    }, 300);
}

//Click na seta 
$("#next").click(function () {
    checking = false;
    $("#next").css("pointer-events", "none");

    nrClick = nrClick + 1;
    worksPos();

    //Mudar cor da seta
    $(this).attr("src", "img/next_clicked.png");

    setTimeout(function () {

        if (nrClick === 3) {
            HideArrow("#next");

            setTimeout(function () {
                $("#next").attr("src", "img/next.png");

            }, 300);

        } else if (nrClick === 2 && $("#UI").hasClass("menuClicked")) {
            HideArrow("#next");

            setTimeout(function () {
                $("#next").attr("src", "img/next.png");

            }, 300);
        } else {
            $("#next").attr("src", "img/next.png");
            $("#next").css("pointer-events", "all");

        }
        checking = true;
    }, 800)

    $("#works").offset({
        left: worksOffset
    });

    ShowArrow("#previous");
});

$("#previous").click(function () {
    checking = false;
    $("#previous").css("pointer-events", "none");
    nrClick = nrClick - 1;
    worksPos();

    //Mudar cor da seta
    $(this).attr("src", "img/Previous_Clicked.png");

    setTimeout(function () {

        if (nrClick === 0) {
            HideArrow("#previous");

            setTimeout(function () {
                $("#previous").attr("src", "img/Previous.png");
            }, 300);

        } else {
            $("#previous").attr("src", "img/Previous.png");
            $("#previous").css("pointer-events", "all");
        }
        checking = true;
    }, 800)


    ShowArrow("#next");

});

function worksPos() {

    if (nrClick === 0) {
        worksOffset = anathema;

    } else if (nrClick === 1) {
        worksOffset = skytales

    } else if (nrClick === 2) {
        worksOffset = uparte;

    } else if (nrClick === 3) {
        worksOffset = desenhameumpoema;
    } else if (nrClick === 4) {
        worksOffset = desenhameumpoema;
        nrClick = 3;
    }

    $("#works").animate({
        left: worksOffset
    }, 800);
}
$(document).on('touchstart mousedown', "#works", scroll);


//Função dar scroll nos diferentes trabalhos
function scroll(e) {

    if ($(window).width() > 1024) {
        //Objeto com valores do draging
        window.my_dragging = {};

        my_dragging.pageX0 = e.pageX;

        my_dragging.elem = this;

        my_dragging.offset0 = $(this).offset();

        //Função quando existe dragging
        function handle_dragging(e) {

            //Variável com a posição consoante o dragging
            left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);


            //Valor mínimo em que é possível arrastar
            if (left > marginBody) {
                left = marginBody;

                //Valor máximo em que é possível arrastar    
            } else if (left < desenhameumpoema + marginBody) {

                left = desenhameumpoema + marginBody;
            }

            if ($("#UI").hasClass("menuClicked")) {
                if (left < uparte + marginBody) {

                    left = uparte + marginBody;
                }
            }


            //Calcular NrClick
            if (left > skytales) {
                nrClick = 1;

            } else if (left < skytales && left > uparte) {
                nrClick = 2;

            } else if (left < uparte && left > desenhameumpoema) {
                nrClick = 3;
            }

            //Arrastar elemento consoante o valor
            $(my_dragging.elem).offset({
                left: left
            });


        }

        //Função quando o rato é levantado
        function handle_mouseup(e) {

            left = my_dragging.offset0.left + (e.pageX - my_dragging.pageX0);

            if (left >= anathema) {
                HideArrow("#previous");

            } else if (left < uparte - marginBody) {
                HideArrow("#next");

            } else {
                ShowArrow("#previous");
                ShowArrow("#next");

            }

            if ($("#UI").hasClass("menuClicked")) {
                if (left <= uparte + marginBody) {
                    HideArrow("#next");
                }
            }

            //Se não houve arrastamento, redirecionar para a página do trabalho clicado
            if (e.pageX - my_dragging.pageX0 === 0) {

                $("#anathema").click(function () {
                    AnimationsClose();

                    setTimeout(function () {
                        location.href = "/anathema.html";
                    }, 1500);
                });

                $("#afeicoate").click(function () {
                    AnimationsClose();

                    setTimeout(function () {
                        location.href = "/afeicoate.html";
                    }, 1500);
                });

                $("#skytales").click(function () {
                    AnimationsClose();

                    setTimeout(function () {
                        location.href = "/skytales.html";
                    }, 1500);
                });

                $("#mintinsight").click(function () {

                    AnimationsClose();

                    setTimeout(function () {
                        location.href = "/mintinsight.html";
                    }, 1500);
                });

                $("#uparte").click(function () {

                    AnimationsClose();

                    setTimeout(function () {
                        location.href = "/uparte.html";
                    }, 1500);
                });

                $("#ggwp").click(function () {
                    AnimationsClose();

                    setTimeout(function () {
                        location.href = "/ggwp.html";
                    }, 1500);
                });

                $("#desenhameumpoema").click(function () {
                    AnimationsClose();

                    setTimeout(function () {
                        location.href = "/desenhameumpoema.html";
                    }, 1500);
                });

            }

            //Desligar as funções de scroll e de arrastamento
            $(document)
                .off('mousemove', handle_dragging)
                .off('mouseup', scroll)
                .off('touchmove', handle_dragging)
                .off('touchend', scroll)
        }

        ///Chamar função handle_mouseup quando o rato é levantado
        //Chamar função handle_dragging quando o rato está em movimento
        $(document)
            .one('mouseup', handle_mouseup)
            .on('mousemove', handle_dragging)
            .one('touchend', handle_mouseup)
            .on('touchmove', handle_dragging);
    } else {
        $("#anathema").click(function () {
            AnimationsClose();

            setTimeout(function () {
                location.href = "/anathema.html";
            }, 1500);
        });

        $("#afeicoate").click(function () {
            AnimationsClose();

            setTimeout(function () {
                location.href = "/afeicoate.html";
            }, 1500);
        });

        $("#skytales").click(function () {
            AnimationsClose();

            setTimeout(function () {
                location.href = "/skytales.html";
            }, 1500);
        });

        $("#mintinsight").click(function () {

            AnimationsClose();

            setTimeout(function () {
                location.href = "/mintinsight.html";
            }, 1500);
        });

        $("#uparte").click(function () {

            AnimationsClose();

            setTimeout(function () {
                location.href = "/uparte.html";
            }, 1500);
        });

        $("#ggwp").click(function () {
            AnimationsClose();

            setTimeout(function () {
                location.href = "/ggwp.html";
            }, 1500);
        });

        $("#desenhameumpoema").click(function () {
            AnimationsClose();

            setTimeout(function () {
                location.href = "/desenhameumpoema.html";
            }, 1500);
        });
    }
}


//Menu Filtros

$("#UI").click(function () {
    nrClick = 0;

    if ($("#GD").hasClass("menuClicked")) {
        if ($(window).width() > 1024) {
            $("#works").offset({
                left: mintinsight + marginBody
            });

        }
    }

    ShowArrow("#next");
    $('#works').mousedown(scroll);

    $("#UI").addClass("menuClicked").removeClass("menuUnclicked");

    $("#GD, #all").removeClass("menuClicked").addClass("menuUnclicked").css("pointer-events", "none");



    $(this).animate({
        backgroundColor: "#185B12",
        color: "#FFFAF2"
    }, 600)

    $("#all, #GD").animate({
        backgroundColor: "#FFFAF2",
        color: "#185B12"
    }, 600)

    $(".GD").animate({
        opacity: "0"
    }, 800);

    $(".UI").show().animate({
        opacity: "1"
    }, 800);

    if ($(window).width() > 1024) {
        $("#works").animate({
            left: anathema
        }, 800);
    }

    setTimeout(function () {
        $(".GD").hide();
        $("#GD, #all").css("pointer-events", "all")
    }, 805)

});

$("#GD").click(function () {

    HideArrow("#previous");
    HideArrow("#next");

    $('#works').off("mousedown");

    $("#GD").addClass("menuClicked").removeClass("menuUnclicked");

    $("#all, #UI").removeClass("menuClicked").addClass("menuUnclicked").css("pointer-events", "none");

    $(this).animate({
        backgroundColor: "#185B12",
        color: "#FFFAF2"
    }, 600)

    $("#all, #UI").animate({
        backgroundColor: "#FFFAF2",
        color: "#185B12"
    }, 600)

    $(".UI").animate({
        opacity: "0"
    }, 800);

    $(".GD").show().animate({
        opacity: "1"
    }, 800);
    if ($(window).width() > 1024) {
        $("#works").animate({
            left: mintinsight
        }, 800);
    }
    setTimeout(function () {
        $(".UI").hide();
        if ($(window).width() > 1024) {
            $("#works").offset({
                left: marginBody
            });
        }

        $("#UI, #all").css("pointer-events", "all")

    }, 805)

});

$("#all").on("click", function () {

    if ($("#GD").hasClass("menuClicked")) {

        if ($(window).width() > 1024) {
            $("#works").offset({
                left: mintinsight + marginBody
            });

        }
    }


    nrClick = 0;
    ShowArrow("#next");

    $('#works').mousedown(scroll);

    $("#all").addClass("menuClicked").removeClass("menuUnclicked");

    $("#GD, #UI").removeClass("menuClicked").addClass("menuUnclicked").css("pointer-events", "none");

    $(this).animate({
        backgroundColor: "#185B12",
        color: "#FFFAF2"
    }, 600)

    $("#GD, #UI").animate({
        backgroundColor: "#FFFAF2",
        color: "#185B12"
    }, 600)


    $(".GD, .UI").show().animate({
        opacity: "1"
    }, 800);

    if ($(window).width() > 1024) {
        $("#works").animate({
            left: anathema
        }, 800);
    }

    setTimeout(function () {
        $("#GD, #UI").css("pointer-events", "all")
    }, 805)
});

function changeName() {
    if ($(window).width() <= 1024) {
        $("h1").html("Matilde F.")
    } else {
        $("h1").html("Matilde Ferreira")
    }
};

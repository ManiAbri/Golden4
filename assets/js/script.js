$(document).ready(function () {
    $("#header .btn.btn-menu").on("click", function () {
        $("#header .nav-list").slideToggle()
    })

    function checkWidth() {
        if ($(window).width() > 992) {
            $("#header .nav-list").css("display", "flex")
        } else {
            $("#header .nav-list").css("display", "none")
        }
    }

    checkWidth()

    $(window).resize(function () {
        checkWidth()
    })
})
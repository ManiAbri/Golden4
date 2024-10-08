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


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('preloader').style.animation = 'flyIn 1s forwards';
        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000); // زمان انیمیشن flyIn
    }, 3000); // زمان نمایش preloader
});



document.addEventListener('DOMContentLoaded', function() {
    const flyInSection = document.querySelector('.fly-in-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                flyInSection.classList.add('visible');
            }
        });
    });

    observer.observe(flyInSection);
});


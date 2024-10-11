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
            // document.getElementById('preloader').style.display = 'none';
            // document.getElementById('content').style.display = 'block';
        }, 1000); // زمان انیمیشن flyIn
    }, 4000); // زمان نمایش preloader
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



document.addEventListener('scroll', function() {
    const section = document.getElementById('animatedSection');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        if (!localStorage.getItem('animationPlayed')) {
            section.classList.add('visible');
            localStorage.setItem('animationPlayed', 'true');
        }
    }
});

window.addEventListener('load', function() {
    localStorage.removeItem('animationPlayed');
});



let currentIndex = 0;
        const images = document.querySelectorAll('.gallery-image');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        
        function showImage(index) {
          images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
          });
        }
        
        prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
          showImage(currentIndex);
        });
        
        nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
          showImage(currentIndex);
        });


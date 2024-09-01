$(document).ready(function(){
    $('.client-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

/*testimonial*/
$('.carousel').carousel({
    interval: 3000

});

document.querySelector('.dropbtn').addEventListener('click', function() {
    let dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});





    var typed = new Typed('.typing', {
        strings: [
            'Web Designer',
            'Web Developer',
            'Graphic Designer'
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });
    
    var typed = new Typed('.typing2', {
        strings: [
            'Web Designer',
            'Web Developer',
            'Graphic Designer'
        ],
        typeSpeed: 90,
        backSpeed: 90,
        loop: true
    });
    // =============================================== 


    let navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(){
        navbar.classList.toggle('sticky', window.scrollY > 0)
    })

    // $(window).bind('scroll', function () {
    //     if ($(window).scrollTop() > 0) {
    //         $('.navbar').addClass('fixed');
    //     } else {
    //         $('.navbar').removeClass('fixed');
    //     }
    // });


    
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

sr.reveal('.hero_left,.skills__text, .about_right,.services, .skill_left, .skill_right',{}); 

sr.reveal('.hero_right, .about__text, .about_left, .skill_left',{delay: 300}); 

sr.reveal('.contentt',{ interval: 300}); 

sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// ========================================================================================





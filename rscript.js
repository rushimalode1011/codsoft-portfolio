/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                links.classlist.remove('active');
                document.querySelector('heade nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/

    let header = document.querySelector('header')
    header.classlist.toggle('sticky',window.scrollY >100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scrool reveal ====================*/
ScrollReveal({ 
    
    // reset: true,
    distance:'80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ' ,{ origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .aboutimg ', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

let container = document.querySelector(".card_container");
let card = document.querySelector(".card");

let title = document.querySelector('.title');
let desc = document.querySelector('.desc');
let profile = document.querySelector('.profile');
let skills = document.querySelector('.skills');
let hire = document.querySelector('.hire');

container.addEventListener("mousemove", (e) => {
    let coordinateX = ( (window.innerWidth / 2 - e.pageX) / 12);
    let coordinateY = ( (window.innerHeight / 2 - e.pageY) / 12 );
    card.style.transform = `rotateY(${coordinateX}deg) rotateX(${coordinateY}deg)`;
    card.style.transition = `all 0s ease`;
});

container.addEventListener("mouseenter", () => {
    title.style.transform=`translateZ(90px)`;
    desc.style.transform=`translateZ(90px)`;
    profile.style.transform=`translateZ(90px)`;
    skills.style.transform=`translateZ(90px)`;
    hire.style.transform=`translateZ(90px)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg)`;
    card.style.transition = `all 1s ease`;

    title.style.transform=`translateZ(0px)`;
    desc.style.transform=`translateZ(0px)`;
    profile.style.transform=`translateZ(0px)`;
    skills.style.transform=`translateZ(0px)`;
    hire.style.transform=`translateZ(0px)`;
});


$(document).ready(function() {

    new WOW().init();

    // Navbar Sticky top
    navbarSticky();

    // Navbar Sticky top
    $(window).on('scroll', function () {
        navbarSticky();
    });

    // Navbar Sticky top
    function navbarSticky() {

        if ($(window).scrollTop() > 200) {
            $('#header').addClass('scrolledDown');
        }
    
        if ($(window).scrollTop() < 5) {
            $('#header').removeClass('scrolledDown');
        }
    }


    $(".sass").click( () => {
        $(".html").removeClass("active");
        $(".jquery").removeClass("active");
        $(".vue").removeClass("active");
        $(".sass").addClass("active");
    })

    $(".html").click( () => {
        $(".html").addClass("active");
        $(".jquery").removeClass("active");
        $(".vue").removeClass("active");
        $(".sass").removeClass("active");
    })

    $(".jquery").click( () => {
        $(".html").removeClass("active");
        $(".jquery").addClass("active");
        $(".vue").removeClass("active");
        $(".sass").removeClass("active");
    })

    $(".vue").click( () => {
        $(".html").removeClass("active");
        $(".jquery").removeClass("active");
        $(".vue").addClass("active");
        $(".sass").removeClass("active");
    })


    $('.humberger').click(function(){
        $(this).toggleClass('humberger-change');
        $(".menu").toggleClass("left-0");
    });
    

    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1250:{
                items:4
            }
        }
    })

});


const tl = gsap.timeline({ defaults: { ease:'power1.out' } });

tl.to('.text-of-intro', { y:'0', duration: 1.5, stagger: 0.25 } );
tl.to('#slider', { y:'-100%', duration:1.5 });
tl.to('#intro', { y:'-100%',duration:1 }, '=-1');
tl.fromTo('.logo', {opacity:'0', x:'20%'}, {opacity:'1', x:'0%' , duration:1} );
tl.fromTo('.navbar', {opacity:'0'}, {opacity:'1', duration:1}, '=-1' );
tl.fromTo('.humberger', {opacity:'0'}, {opacity:'1', duration:1}, '=-1' );


const texts = ['amir doosti', 'frontend developer', 'css fan', 'freelancer'];
let count = 0;
let index = 0;

let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length ) {
        count++;
        index = 0;
    }

    setTimeout(type, 400);

}());
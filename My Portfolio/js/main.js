let container = document.querySelector(".card_container");
let card = document.querySelector(".card");

let title = document.querySelector('.title');
let desc = document.querySelector('.desc');
let profile = document.querySelector('.profile');
let size = document.querySelector('.size');
let buy = document.querySelector('.buy');

container.addEventListener("mousemove", (e) => {
    let coordinateX = ( (window.innerWidth / 2 - e.pageX) / 12);
    let coordinateY = ( (window.innerHeight / 2 - e.pageY) / 12 );
    card.style.transform = `rotateY(${coordinateX}deg) rotateX(${coordinateY}deg)`;
    card.style.transition = `all 0s ease`;
});

container.addEventListener("mouseenter", () => {
    title.style.transform = `translateZ(90px)`;
    desc.style.transform = `translateZ(90px)`;
    profile.style.transform = `translateZ(90px)`;
    size.style.transform = `translateZ(90px)`;
    buy.style.transform = `translateZ(90px)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transform = `rotateY(0deg)`;
    card.style.transition = `all 1s ease`;
    title.style.transform = `translateZ(0px) translateX(0%)`;
    desc.style.transform = `translateZ(0px)`;
    profile.style.transform = `translateZ(0px)`;
    size.style.transform = `translateZ(0px)`;
    buy.style.transform = `translateZ(0px)`;
});


$(document).ready(function() {

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

    function hello() {
       window.alert("hello");
    }

    

});
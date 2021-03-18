$(document).ready(function () {

    $('.humberger').click( ()=> {
        $('.humberger').toggleClass('humberger-change');
        $('.menu').toggleClass('right-100');
    });

        // Navbar Sticky top
        navbarSticky();

        // Navbar Sticky top
        $(window).on('scroll', function () {
            navbarSticky();
        });
    
        // Navbar Sticky top
        function navbarSticky() {
    
            if ($(window).scrollTop() > 100) {
                $('#header').addClass('scrolledDown');
            }
        
            if ($(window).scrollTop() < 90) {
                $('#header').removeClass('scrolledDown');
            }
        }
    

});


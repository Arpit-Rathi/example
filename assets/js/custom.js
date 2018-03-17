jQuery(document).ready(function() {


    var windowWidth=$(window).width();
$("body").css("width","windowWidth");
$("html").css("width","windowWidth");
$("body").css("overflow-x","hidden");
$("html").css("overflow-x","hidden");

var height;
var width;
$(window).on("load resize",function(){   width=this.innerWidth;
height=this.innerHeight;

         });


    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();

<!-- Preloader -->
jQuery(window).load(function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(700).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(700).css({
        'overflow': 'visible'
    });
})
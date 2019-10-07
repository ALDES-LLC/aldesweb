$(document).ready(function() {

    if ($(window).scrollTop() >= 120) {
        $('#header').addClass('header-solid-mod');
        $('#header').removeClass('header-light-mod');
    } else {
        $('#header').addClass('header-light-mod');
        $('#header').removeClass('header-solid-mod');
    }
       
   $(window).scroll(function() {
       if ($(window).scrollTop() >= 120) {
           $('#header').addClass('header-solid-mod');
           $('#header').removeClass('header-light-mod');
       } else {
            $('#header').addClass('header-light-mod');
           $('#header').removeClass('header-solid-mod');
       }
   });
});
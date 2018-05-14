

$(document).ready(function () {
$('#categories a').click(function () {
       $('#categories .active').removeClass('active');
       $(this).closest("li").addClass('active');
       return false;
    });
    $('.scroll-me a').bind('click', function (event) { //just pass scroll-me in design and start scrolling
    var $anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top
    }, 1200, 'easeInOutExpo');
    event.preventDefault();
    });
});

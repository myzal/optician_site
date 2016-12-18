/**
 * Created by Mateusz on 29.08.2016.
 */
$(document).ready(function() {
    $('.arrow').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        console.log($target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top-150
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
$(window).scroll(function()
{
    if ($(this).scrollTop() > 100) {
        $('.arrow').fadeIn();
    } else {
        $('.arrow').fadeOut();
    }
});
});
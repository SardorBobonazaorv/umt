$(document).scroll(function() {
    checkOffset();
});
function checkOffset() {
    if($('.toTop').offset().top + $('.toTop').height() >= $('footer').offset().top - 100)
        $('.toTop').css('position', 'absolute');
        $('.toTop').css('bottom', '100px');
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top)
        $('.toTop').css('position', 'fixed');
        $('.toTop').css('bottom', '50px');

    if($('.more').offset().top + $('.more').height() >= $('footer').offset().top - 100){
        $('.more').css('position', 'absolute');
        $('.more').css('bottom', '-200px');
    }
    if($(document).scrollTop() + window.innerHeight < $('footer').offset().top){
        $('.more').css('position', 'fixed');
        $('.more').css('top', 'calc(100vh - 300px)');
    }
}
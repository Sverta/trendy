jQuery(window).scroll(function(){

    var $sections = $('section');
    $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){

            $('a.active').removeClass('active');
            $('a[href*="#'+id+'"]').addClass('active');

        }
    });
});

$('.header__scroll-down').click(function(event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top-90;
    $('body,html').animate({scrollTop: top}, 1500);
});



$("#menu").on("click",'a[href^="#"]', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top-90;
    $('body,html').animate({scrollTop: top}, 1500);

});
$("#menu2").on("click",'a[href^="index-dark.html#"]', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href').replace("index-dark.html#","#"),
        top = $(id).offset().top-90;
    $('body,html').animate({scrollTop: top}, 1500);

});

$(document).on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


/*Счетчик*/


$(document).ready(function(){
     var show = true;
     var countbox = "#counts";
     $(window).on("scroll load resize", function(){

         if(!show) return false;

         var w_top = $(window).scrollTop();
         var e_top = $(countbox).offset().top;
         var w_height = $(window).height();
         var d_height = $(document).height();

         var e_height = $(countbox).outerHeight();

         if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
             $(".cool-number").spincrement({
                 from: 0,                // Стартовое число
                 to: false,              // Итоговое число
                 decimalPlaces: 0,       // Сколько знаков оставлять после запятой
                 decimalPoint: ".",      // Разделитель десятичной части числа
                 thousandSeparator: ",", // Разделитель тыcячных
                 duration: 1000
             });
             $(".cool-number-coffee").spincrement({
                 from: 0,
                 to: false,
                 decimalPlaces: 1,
                 decimalPoint: ".",
                 thousandSeparator: ",",
                 duration: 1000
             });

             show = false;
        }
    });
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'));
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
});

/*!swiper!*/
$(function() {
    var swiper = new Swiper('.works__carousel', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 3,
        slidesPerGroup: 3,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 640px
            640: {
                slidesPerView: 1,
                spaceBetweenSlides: 30,
                slidesPerGroup: 1
            }
        }
    });
    var swiper1 = new Swiper('.swiper_testimonials', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
});


$(document).on('hidden.bs.modal', function (event) {
    if ($('.modal:visible').length) {
        $('body').addClass('modal-open');
    }
});






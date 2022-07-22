$('#video').click(function (){
    $('.play-video').addClass('no-play');
    $('.popup-modal').removeClass('noactivo');
    $('.navbar').addClass('no-navbar');
});
$('#btn-cerrar').click(function() {
    $('.play-video').removeClass('no-play')
    $('.popup-modal').addClass('noactivo');
    $('.navbar').removeClass('no-navbar');
});

$('#btn-masterplan-PB').click(function (){
    $('.navbar').addClass('no-navbar');
    $('.PB').removeClass('noactivo')
});
$('#btn-masterplan-PN').click(function (){
    $('.navbar').addClass('no-navbar');
    $('.popup-masterplan.PN').removeClass('noactivo')
});
$('#btn-masterplan-SN').click(function (){
    $('.navbar').addClass('no-navbar');
    $('.popup-masterplan.SN').removeClass('noactivo')
});
$('#btn-masterplan-PG').click(function (){
    $('.navbar').addClass('no-navbar');
    $('.popup-masterplan.PG').removeClass('noactivo')
});
$('.cerrar-masterplan').click(function() {
    $('.popup-masterplan').addClass('noactivo');
    $('.navbar').removeClass('no-navbar');
});

const aparecerNavbar = () => {
    $('.navbar-brand').addClass('activo');
}
const desaparecerNavbar = () => {
    $('.navbar-brand').removeClass('activo');
}
$(window).scroll(function() {
        if (  $('#menu').offset().top > 56 ) {
           aparecerNavbar();
        } else {
            desaparecerNavbar();
        }
});

if (window.matchMedia("(max-width: 900px)").matches) {
    $('.carousel').addClass('carousel-dark')
  } else {
    $('.carousel').removeClass('carousel-dark')
  }
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
});


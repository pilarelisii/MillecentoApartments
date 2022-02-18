const aparecerNavbar = () => {
//    $('#menu').addClass('navbar-color');
    $('.navbar-brand').addClass('activo');
}
const desaparecerNavbar = () => {
//    $('#menu').removeClass('navbar-color');
    $('.navbar-brand').removeClass('activo');
}
$(window).scroll(function() {
        if (  $('#menu').offset().top > 56 ) {
           aparecerNavbar();
        } else {
            desaparecerNavbar();
        }
});

$('#video').click(function (){
    $('.popup-modal').removeClass('noactivo');
    $('.navbar').addClass('no-navbar');
});
$('#btn-cerrar').click(function() {
    $('.popup-modal').addClass('noactivo');
    $('.navbar').removeClass('no-navbar');
});







var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
return new bootstrap.Popover(popoverTriggerEl)
});
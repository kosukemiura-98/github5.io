$(function() {
  $('.header__hamburger').click(function() {
    $(this).toggleClass('is-open');
    $('.drawer').toggleClass('is-open');
  });
});

$(function () {
  $('.contact__header').click(function () {
    $(this).next().slideToggle();
  });
});

$(function () {
  new WOW().init();
});
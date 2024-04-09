$(function() {
  $('.header__hamburger').click(function() {
    $(this).toggleClass('is-open');
    $('.drawer').toggleClass('is-open');
    $('body').toggleClass('is-open');    
  });
});

$(function() {
  $('.header__item--link').click(function() {
    $('.header__hamburger').removeClass('is-open');
    $('.drawer').removeClass('is-open');
    $('body').removeClass('is-open');   
  });
});

$(function() {
  $('.drawer__item--link').click(function() {
    $('.header__hamburger').removeClass('is-open');
    $('.drawer').removeClass('is-open');
    $('body').removeClass('is-open');   
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

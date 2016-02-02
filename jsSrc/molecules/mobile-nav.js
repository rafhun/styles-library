// open mobile menu
$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});

// close menu on item click
$('.mobile-header-nav li').click(function() {
  $('.mobile-header-nav').slideToggle();
  $('.js-toggle-menu').removeClass('open');
})

$('.multilevel-nav .menu-item-has-children > a').click(function(e) {
  e.preventDefault();
});

var header        = document.querySelector('.fixed-header'),
main_nav          = document.querySelector('.main-nav'), // class of nav element
sub_nav           = document.querySelector('.sub-nav'), // class of nav element
search           = document.querySelector('.search-form'), // class of search form (optional)
header_height     = getComputedStyle(header).height.split('px')[0],
main_nav_height   = getComputedStyle(main_nav).height.split('px')[0],
sub_nav_height    = getComputedStyle(sub_nav).height.split('px')[0],
search_form_height    = getComputedStyle(search).height.split('px')[0],
fix_class         = 'scroll';

var stickyScroll = function(e) {

  if( window.pageYOffset > (header_height - sub_nav_height - main_nav_height - search_form_height  ) / 2 ) {
    header.classList.add(fix_class);
  }

  if( window.pageYOffset < (header_height - sub_nav_height - main_nav_height - search_form_height ) / 2 ) {
    header.classList.remove(fix_class);
  }
}


var debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
    args = arguments;
    var later = function() {
      timeout = null;
      if ( !immediate ) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait || 200);
    if ( callNow ) {
      func.apply(context, args);
    }
  };
};

// Scroll handler to toggle classes.
window.addEventListener('scroll', debounce(stickyScroll, 100), false);

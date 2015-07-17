// script for the off-canvas toggle
jQuery(document).ready(function($) {
  // set up some variables for commonly used selectors
  var transformer = $('.transformer'),
    menuToggle = $('[data-js="off-canvas-toggle"]'),
    linkItem = $('[data-js="off-canvas-link"]'),
    content = $('.content-container'),
    subMenu = $('.off-canvas-list-item .menu');

  // open the off canvas navigation when the menu toggle is clicked
  menuToggle.on('click', function(e) {
    e.preventDefault();

    transformer.toggleClass('in');
  }); // end menuToggle.on click


  // whenever we click in the content area with an open off canvas navigation we want it to close
  content.click(function() {
    if (transformer.hasClass('in')) {
      transformer.removeClass('in');
    }
  }); // end content.click

  // add the back link to all submenus since contrexx is too stupid to do it automatically
  subMenu.prepend('<li class="off-canvas-list-item"><a href="#" class="js-oc-up off-canvas-link icon-back">Zurück</a></li>');
  subMenu.on('click', '.js-oc-up', function(e) {
    var $this = $(this);
    e.preventDefault();
    // remove the in class from the submenu which makes it slide away
    $this.parent().parent().removeClass('in');
  }); // end upLink.on click

  linkItem.on('click', function(e) {
    var $this = $(this);

    // if there is a submenu for this navigation item we cancel the default action (opening the link) and instead assign the class in to the submenu which makes it appear, else we return true and with that follow the link.
    if ($this.siblings('.menu').length) {
      e.preventDefault();
      $this.siblings('.menu').toggleClass('in');

      // make sure we scroll back to top when a submenu is entered
      $('html,body,.body-container').animate({
        scrollTop: 0
      }, 500);
    } else {
      return true;
    }
  }); // end linkItem.on click
}); // end ready

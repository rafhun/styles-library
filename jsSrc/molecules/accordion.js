// defines the accordion functionality. Rudimentary it just toggles
// the class .in on an element on click

jQuery(document).ready(function($) {
  var accordionToggle = $('[data-js="accordion-toggle"]');
    // here we get the computed style of the before element of the first accordionToggle that is found on the page which is defined to just print out the currently configured $is-open class. This makes our JS easily adaptable to a user's preferences.
    // However we can only look for the value if there actually is at least one accordion toggle on the page, therefore we check for its existence.
  if (accordionToggle.length) {
    var isOpenContent = window.getComputedStyle(accordionToggle[0], ':before').content,
    // as the above returns the concrete value (i. e.: '.is-open') we need to remove the quotes as well as the dot to get a good value for toggleClass. We can do this by using the substring method, starting at 2 and running for length-1. This removes the first two characters as well as the very last one and will work if the mixin is configured correctly
    isOpen = isOpenContent.substring(2, isOpenContent.length-1);
  }

  function toggleAccordion() {
    var $this = $(this),
    accordionContainer = $this.next('.accordion-container');

    $this.toggleClass(isOpen);

    if ($this.attr('aria-expanded') === 'true') {
      $this.attr('aria-expanded', 'false');
      accordionContainer.attr('aria-hidden', 'true');
    } else {
      $this.attr('aria-expanded', 'true');
      accordionContainer.attr('aria-hidden', 'false');
    }

    // we return false just in case somebody decides to wrap the accordion title in an anchor tag
    return false;
  }

  // if the accordionToggle is clicked we toggle the isOpen class
  accordionToggle.click(toggleAccordion);

  accordionToggle.keydown(function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 13 || e.keyCode === 32) {
      $(this).click();
      return false;
    } else {
      return true;
    }
  }); // end keydown
}); // end ready

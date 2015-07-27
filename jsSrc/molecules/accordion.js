// defines the accordion functionality. Rudimentary it just toggles
// the class .in on an element on click

jQuery(document).ready(function($) {
  var accordionToggle = $('[data-js="accordion-toggle"]'),
    // here we get the computed style of the before element of the first accordionToggle that is found on the page which is defined to just print out the currently configured $is-open class. This makes our JS easily adaptable to a user's preferences.
    isOpenContent = window.getComputedStyle(accordionToggle[0], ':before').content,
    // as the above returns the concrete value (i. e.: '.is-open') we need to remove the quotes as well as the dot to get a good value for toggleClass. We can do this by using the substring method, starting at 2 and running for length-1. This removes the first two characters as well as the very last one and will work if the mixin is configured correctly
    isOpen = isOpenContent.substring(2, isOpenContent.length-1);

  // if the accordionToggle is clicked we toggle the isOpen class
  accordionToggle.click(function() {
    $(this).toggleClass(isOpen);

    // we return false just in case somebody decides to wrap the accordion title in an anchor tag
    return false;
  }); // end click
}); // end ready
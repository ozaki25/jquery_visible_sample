$(function() {
  // variables
  var $toggleTitleButton = $('.toggle-title-button');
  var $sections = $('.section');

  // listeners
  $toggleTitleButton.on('change', onChange);

  // functions
  function onChange(e) {
    e.preventDefault();
    var $radio = $(e.target);

    if ($radio.val() === '0') {
      $radio
        .parents('.section')
        .children('.title')
        .show();
    }

    if ($radio.val() === '1') {
      $radio
        .parents('.section')
        .children('.title')
        .hide();
    }
  }
});

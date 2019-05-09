$(function() {
  // variables
  var $title = $('.title');
  var $toggleTitleButton = $('.toggle-title-button');

  // listeners
  $toggleTitleButton.on('change', onChange);

  // functions
  function onChange(e) {
    e.preventDefault();
    var $radio = $(e.target);
    if ($radio.val() === '0') $title.show();
    if ($radio.val() === '1') $title.hide();
  }
});

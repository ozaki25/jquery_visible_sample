$(function() {
  // variables
  var $toggleTitleButton = $('.toggle-title-button');
  var $nextButton = $('.next-button');
  var $sections = $('.section');
  var position = 0;

  // listeners
  $toggleTitleButton.on('change', onChange);
  $nextButton.on('click', onClickNext);

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

  function onClickNext(e) {
    e.preventDefault();
    position += 1;
    render();
  }

  function render() {
    $sections.hide();
    $('.section-' + (position % 3)).show();
  }

  // executes
  render();
});
